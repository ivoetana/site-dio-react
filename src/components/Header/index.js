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
import { Link } from "react-router-dom";

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
              <a href="/">Carreiras</a>
            </ItemMenu>
            <ItemMenu>
              <a href="/">Bootcamps</a>
            </ItemMenu>
            <ItemMenu>
              <a href="/">Projetos</a>
            </ItemMenu>
            <ItemMenu>
              <a href="/">Comunidade</a>
            </ItemMenu>
            <ItemMenu>
              <a href="/">Planos</a>
            </ItemMenu>
            <ItemMenu>
              <a href="/">Para Empresas</a>
            </ItemMenu>
          </Menu>

          <ButtonsContainer>
            <Link to="/login">
              <Button variant="contourn" title="Entrar" />
            </Link>

            <Link to="/cadastrar">
              <Button title="Criar conta" />
            </Link>
          </ButtonsContainer>
        </MenuContainer>
      </Wrapper>
    </HeaderContainer>
  );
};

export default Header;
