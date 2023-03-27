// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/utils/cryptography/MerkleProof.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";

contract DayDreamerz is ERC721URIStorage, Ownable {
    constructor() ERC721("DayDreamerz", "MTK") {}

    using SafeMath for uint256;
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    string private baseURI;

    string public baseExtension = ".json";
    bytes32 public merkleRoot;
    uint256 public presaleEnded;
    uint256 public publicPrice = 0.06 ether;
    uint256 public presalePrice = 0.06 ether;
    uint256 public whitelistPrice = 0.05 ether;

    mapping(address => uint256) public ownWallet;

    /* ****************** */
    /* INTERNAL FUNCTIONS */
    /* ****************** */
    function _baseURI() internal view virtual override returns (string memory) {
        return baseURI;
    }

    /* **************** */
    /* PUBLIC FUNCTIONS */
    /* **************** */
    function totalSupply() public view returns (uint256) {
        return _tokenIds.current();
    }

    function tokenURI(uint256 tokenId)
        public
        view
        virtual
        override
        returns (string memory)
    {
        require(
            _exists(tokenId),
            "ERC721Metadata: URI query for nonexistent token"
        );

        string memory currentBaseURI = _baseURI();

        return
            bytes(currentBaseURI).length > 0
                ? string(
                    abi.encodePacked(
                        currentBaseURI,
                        Strings.toString(tokenId),
                        baseExtension
                    )
                )
                : "";
    }

    function whitelistMint(
        address _to,
        uint256 _count,
        bytes32[] memory _merkleProof
    ) public payable {
        bytes32 leaf = keccak256(abi.encodePacked(msg.sender));
        require(
            MerkleProof.verify(_merkleProof, merkleRoot, leaf),
            "Invalid proof"
        );
        require(totalSupply() + _count <= 10000, "Can't mint anymore");
        require(presaleEnded > 0, "Can't mint the nft");
        require(msg.value >= _count * whitelistPrice, "Not match balance");

        for (uint256 i = 0; i < _count; i++) {
            _tokenIds.increment();
            ownWallet[_to]++;
            _safeMint(_to, _tokenIds.current());
        }
    }

    function mintItem(address _to, uint256 _count) public payable {
        require(totalSupply() + _count <= 10000, "Can't mint anymore");
        require(msg.value >= _count * publicPrice, "Not match balance");
        if (block.timestamp < presaleEnded) {
            require(msg.value >= _count * presalePrice, "Not match balance");
        } else {
            require(msg.value >= _count * publicPrice, "Not match balance");
        }
        for (uint256 i = 0; i < _count; i++) {
            _tokenIds.increment();
            ownWallet[_to]++;
            _safeMint(_to, _tokenIds.current());
        }
    }

    function status() public view returns (bool) {
        return block.timestamp < presaleEnded;
    }

    /* *************** */
    /* OWNER FUNCTIONS */
    /* *************** */
    function setBaseURI(string memory _newBaseURI) public onlyOwner {
        baseURI = _newBaseURI;
    }

    function setBaseExtension(string memory _newBaseExtension)
        public
        onlyOwner
    {
        baseExtension = _newBaseExtension;
    }

    function setMerkleRoot(bytes32 _merkleRoot) external onlyOwner {
        merkleRoot = _merkleRoot;
    }

    function startPresale() public onlyOwner {
        presaleEnded = block.timestamp + 1 days;
    }

    function setPublicPrice(uint256 _newPublicPrice) public onlyOwner {
        publicPrice = _newPublicPrice;
    }

    function setWhitelistPrice(uint256 _newWhitelistPrice) public onlyOwner {
        whitelistPrice = _newWhitelistPrice;
    }

    function isPresale() public view returns (bool) {
        return block.timestamp < presaleEnded;
    }

    function isWhitelist(bytes32[] memory _merkleProof)
        public
        view
        returns (bool)
    {
        bytes32 leaf = keccak256(abi.encodePacked(msg.sender));
        return MerkleProof.verify(_merkleProof, merkleRoot, leaf);
    }

    function withdraw() external onlyOwner {
        address _owner = owner();
        address _developer = 0x8f7860492825B322B3478EEF1FC8F91868aF45Fd;
        payable(_owner).transfer((address(this).balance / 5) * 4);
        payable(_developer).transfer((address(this).balance / 5) * 1);
    }
}
