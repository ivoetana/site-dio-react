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
import { useState } from "react";

const Header = () => {
  const menuData = [
    {
      id: "backend",
      label: "Back-end Developer",
      href: "carreira/back-end",
      courses: [
        { name: "Curso Java Developer", href: "/curso-java" },
        { name: "Curso .NET Developer", href: "/curso-dotnet" },
        { name: "Curso Python Fundamentals", href: "/curso-python" },
        {
          name: "Curso TypeScript Fullstack Developer",
          href: "/curso-typescript",
        },
        { name: "Curso PHP Experience", href: "/curso-php" },
        { name: "Curso Golang Developer", href: "/curso-go" },
      ],
    },
    {
      id: "frontend",
      label: "Front-end Developer",
      href: "carreira/front-end",
      courses: [
        { name: "Curso HTML Developer", href: "/curso-html" },
        { name: "Curso CSS Developer", href: "/curso-css" },
        { name: "Curso JavaScript Fundamentals", href: "/curso-javascript" },
        { name: "Curso Angular", href: "/curso-angular" },
        { name: "Curso React Developer", href: "/curso-react" },
        {
          name: "Curso TypeScript Fullstack Developer",
          href: "/curso-typescript",
        },
      ],
    },
    {
      id: "mobile",
      label: "Mobile Developer",
      href: "carreira/mobile",
      courses: [
        { name: "Curso Android Developer", href: "/curso-android" },
        { name: "Curso Flutter Specialist", href: "/curso-flutter" },
        { name: "Curso Swift & iOS Developer", href: "/curso-swift-ios" },
        { name: "Curso iOS Developer", href: "/curso-ios" },
        { name: "Curso React Native Developer", href: "/curso-react" },
      ],
    },
    {
      id: "devops",
      label: "DevOps Engineer",
      href: "carreira/devops",
      courses: [
        { name: "Curso DevOps Fundamentals", href: "/curso-devops" },
        { name: "Curso Linux", href: "/curso-linux" },
        { name: "Curso Docker Fundamentals", href: "/curso-docker" },
        { name: "Curso Kubernetes Fundamentals", href: "/curso-kubernetes" },
        { name: "Curso Git CI/CD", href: "/curso-git-ci-cd" },
        {
          name: "Curso Google Cloud Platform Specialist",
          href: "/curso-google-cloud",
        },
      ],
    },
    {
      id: "dataengineer",
      label: "Data Engineer",
      href: "carreira/data-engineer",
      courses: [
        { name: "Curso Machine Learning", href: "/curso-machine-learning" },
        { name: "Curso SQL Specialist", href: "/curso-sql" },
        { name: "Curso Python Developer", href: "/curso-python-developer" },
        { name: "Curso Power BI", href: "/curso-power-bi" },
        { name: "Curso IoT Specialist", href: "/curso-iot" },
        { name: "Curso Inteligência Artificial", href: "/curso-ia" },
      ],
    },
    {
      id: "game",
      label: "Game Developer",
      href: "carreira/game-developer",
      courses: [
        { name: "Curso Pragramação Roblox", href: "/curso-roblox" },
        { name: "Curso Unity 3D Game Developer", href: "/curso-unity" },
        { name: "Curso Lua Developer", href: "/curso-lua" },
      ],
    },
    {
      id: "blockchain",
      label: "Blockchain Developer",
      href: "carreira/blockchain-developer",
      courses: [
        { name: "Curso Blockchain Specialist", href: "/curso-blockchain" },
        { name: "Curso WEB3 Fundamentals", href: "/curso-web3" },
      ],
    },
  ];

  const [categoriaAtiva, setCategoriaAtiva] = useState(menuData[0]);

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
                    {menuData.map((item) => (
                      // console.log(item)
                      <CategoriaItem
                        key={item.id}
                        href={item.href}
                        $isActive={categoriaAtiva?.id === item.id}
                        onMouseEnter={() => setCategoriaAtiva(item)}
                      >
                        {item.label}
                        <FontAwesomeIcon icon={faAngleRight} />
                      </CategoriaItem>
                    ))}
                    <VerMais href="/">Ver mais</VerMais>
                  </CategoriasContainer>
                  <CursosContainer>
                    {categoriaAtiva?.courses.map((curso, index) => (
                      <CursoItem key={index} href={curso.href}>
                        {curso.name}
                      </CursoItem>
                    ))}
                    {categoriaAtiva?.courses?.length >= 6 && (
                      <VerMais href="/">Ver mais</VerMais>
                    )}
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
