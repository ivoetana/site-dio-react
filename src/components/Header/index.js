import {
  ButtonsContainer,
  HeaderContainer,
  ItemMenu,
  Menu,
  MenuContainer,
  Wrapper,
} from "./styles";

import logo from "../../assets/logo_dio.png";
import Button from "../Button";

const Header = () => {
  return (
    <HeaderContainer>
      <Wrapper>
        <a href="/">
          <img src={logo} alt="Logo DIO" height={45} />
        </a>
        <MenuContainer>
          <Menu>
            <ItemMenu>
              <a href="/carreiras">Carreiras</a>
            </ItemMenu>
            <ItemMenu>
              <a href="/Bootcamps">Bootcamps</a>
            </ItemMenu>
            <ItemMenu>
              <a href="/Projetos">Projetos</a>
            </ItemMenu>
            <ItemMenu>
              <a href="/Comunidade">Comunidade</a>
            </ItemMenu>
            <ItemMenu>
              <a href="/Planos">Planos</a>
            </ItemMenu>
            <ItemMenu>
              <a href="/Para Empresas">Para Empresas</a>
            </ItemMenu>
          </Menu>
          <ButtonsContainer>
            <Button variant="contourn" title="Entrar" onClick="/login"/>
            <Button title="Criar conta" />
          </ButtonsContainer>
        </MenuContainer>
      </Wrapper>
    </HeaderContainer>
  );
};

export default Header;
