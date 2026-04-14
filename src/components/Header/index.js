import { HeaderContainer, MenuContainer, Wrapper } from "./styles";
import logo from "../../assets/logo_dio.png";
const Header = () => {
  return (
    <HeaderContainer>
      <Wrapper>
          <img src={logo} alt="Logo DIO" height={45} />
        <MenuContainer>
          <ul>
            <li>Carreiras</li>
            <li>Bootcamps</li>
            <li>Projetos</li>
            <li>Comunidade</li>
            <li>Planos</li>
            <li>Para Empresas</li>
          </ul>
        </MenuContainer>
      </Wrapper>
    </HeaderContainer>
  );
};

export default Header;
