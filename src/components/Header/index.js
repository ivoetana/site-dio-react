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

import { menuData } from "../../services/vetores";

const Header = () => {

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
