import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  ButtonsContainer,
  CategoriasContainer,
  CategoriaItem,
  HeaderContainer,
  ItemMenu,
  Menu,
  MenuContainer,
  SubMenuContainer,
  SubMenuContent,
  Wrapper,
  CursosContainer,
  CursoItem,
  VerMais,
} from "./styles";

import logo from "../../assets/logo_dio.png";
import Button from "../Button";
import { Link } from "react-router-dom";
import { faAngleDown, faAngleRight } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const menuData = [
    {
      id: "backend",
      label: "Back-end Developer",
      href: 'carreira/backend',
      courses: [
        { name: "Curso Java Developer", href: "/curso-java" },
        { name: "Curso .NET Developer", href: "/curs-dotnet" },
        { name: "Curso Python Fundamentals", href: "/curso-python" },
        { name: "Curso TypeScript Fullstack Developer", href: "/curso-typescript"},
        { name: "Curso PHP Experience", href: "/curso-php" },
        { name: "Curso Golang Developer", href: "/curso-go" },
        { name: "Curso Kotlin Developer", href: "/curso-kotlin" },
      ],
    },
    {
      id: "frontend",
      label: "Front-end Developer",
      href: 'carreira/backend',
      courses: [
        { name: "Curso Java Developer", href: "/curso-java" },
        { name: "Curso .NET Developer", href: "/curs-dotnet" },
        { name: "Curso Python Fundamentals", href: "/curso-python" },
        { name: "Curso TypeScript Fullstack Developer", href: "/curso-typescript"},
        { name: "Curso PHP Experience", href: "/curso-php" },
        { name: "Curso Golang Developer", href: "/curso-go" },
        { name: "Curso Kotlin Developer", href: "/curso-kotlin" },
      ],
    },
  ];

  return (
    <HeaderContainer>
      <Wrapper>
        <a href="/">
          <img src={logo} alt="Logo DIO" height={45} />
        </a>
        <MenuContainer>
          <Menu>
            <ItemMenu>
              <span>
                Carreiras <FontAwesomeIcon icon={faAngleDown} />
              </span>
              <SubMenuContainer className="submenu">
                <SubMenuContent>
                  <CategoriasContainer>
                    <CategoriaItem href="/">
                      Back-end Devoloper
                      <FontAwesomeIcon icon={faAngleRight} />
                    </CategoriaItem>
                    <CategoriaItem href="/">
                      Front-end Devoloper
                      <FontAwesomeIcon icon={faAngleRight} />
                    </CategoriaItem>
                    <CategoriaItem href="/">
                      Mobile Devoloper
                      <FontAwesomeIcon icon={faAngleRight} />
                    </CategoriaItem>
                    <CategoriaItem href="/">
                      DevOps Engineer
                      <FontAwesomeIcon icon={faAngleRight} />
                    </CategoriaItem>
                    <CategoriaItem href="/">
                      Data Engineer
                      <FontAwesomeIcon icon={faAngleRight} />
                    </CategoriaItem>
                    <CategoriaItem href="/">
                      Game Devoloper
                      <FontAwesomeIcon icon={faAngleRight} />
                    </CategoriaItem>
                    <CategoriaItem href="/">
                      Blockchain Devoloper
                      <FontAwesomeIcon icon={faAngleRight} />
                    </CategoriaItem>
                    <VerMais href="/">Ver mais</VerMais>
                  </CategoriasContainer>
                  <CursosContainer>
                    <CursoItem>Curso Java Devoloper</CursoItem>
                    <CursoItem>Curso .NET Devoloper</CursoItem>
                    <CursoItem>Curso Python Devoloper</CursoItem>
                  </CursosContainer>
                </SubMenuContent>
              </SubMenuContainer>
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
