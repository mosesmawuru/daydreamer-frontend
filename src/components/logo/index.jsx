import styled from "styled-components";
import { useNavigate } from "react-router-dom"

import logoImg from "assets/images/DD.png";

const Logo = styled.div`
  background: url(${logoImg}) no-repeat;
  background-size: cover;
  width: 50px;
  height: 50px;
  position: fixed;
  top: 25px;
  left: 35px;
  z-index: 999;

  @media screen and (max-width: 320px) {
    left: 20px;
  }
`

const LogoFunc = () => {

  const navigate = useNavigate();

  return (
    <Logo onClick={() => navigate("/")} />
  )
}

export default LogoFunc;