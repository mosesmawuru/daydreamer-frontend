import styled from 'styled-components'

export const SwitchContainer = styled.div`
  border-radius: 40px ;
  width: 80px ;
  height: 40px ;
  background-color:  ${({ theme }) => theme.switchContainerBG};
  display: flex;
  align-items: center ;
  box-shadow: 0 3px 3px 0 rgb(0 0 0 / 37%), 0 1px 11px 0 rgb(0 0 0 / 74%);
`;

export const SwitchRound = styled.div`
  border-radius: 50% ;
  width: 50%;
  height: 90%;
  background-color:${({ theme }) => theme.link_bg} ;
  display: flex;
  justify-content:center ;
  align-items: center ;
  margin-left: ${({ theme }) => theme.switchRoundMargin} ;

  svg:nth-child(1) {
    display:${({ theme }) => theme.sunVisible};
  }
  svg:nth-child(2) {
    display:${({ theme }) => theme.moonVisible};
  }
`;