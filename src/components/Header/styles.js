import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 75px;
  background-color: #151515;
`;

export const Wrapper = styled.div`
  max-width: 1200px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`;
export const MenuContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const Menu = styled.ul`
  display: flex;
  list-style: none;
  gap: 20px;
  margin-right: 20px;
`;

export const SubMenuContainer = styled.div`
  display: none;
  width: 568px;
  position: absolute;
  top: 100%;
  left: 0;
  padding-top: 28px;
`;

export const ItemMenu = styled.li`
  &:first-of-type {
    position: relative;

    &:hover ${SubMenuContainer} {
      display: flex;
    }
  }

  & span {
    display: flex;
    align-items: center;
    transition: color 0.2s ease-out;
    cursor: pointer;

    & svg {
      margin-left: 0.25rem;
    }

    &:hover {
      color: #7f28b5;
    }
  }
`;

export const SubMenuContent = styled.div`
  background: #13111f;
  border: 2px solid #272235;
  border-radius: 8px;
  display: grid;
  grid-template-columns: 1fr 280px;
  -webkit-box-pack: start;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
`;

export const CategoriasContainer = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-box-pack: start;
  justify-content: flex-start;
  align-items: flex-start;
  align-self: stretch;
  background-color: #181628;
`;

export const CategoriaItem = styled.a`
  width: 100%;
  padding: 12px 1rem;
  display: flex;
  justify-content: space-between;
  transition: background-color 0.2s ease;
  cursor: pointer;
  text-decoration: none;
  color: #fff;
  background-color: ${(props) => (props.$isActive ? "#2e2a4c" : "transparent")};

  & svg {
    color: #7f28b5;
  }

  &:hover {
    background-color: #2e2a4c;
  }
`;

export const VerMais = styled.a`
  width: 100%;
  padding: 12px 1rem;
  color: #7f28b5;

  &:hover {
    text-decoration: underline;
  }
`;

export const CursosContainer = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-box-pack: start;
  justify-content: flex-start;
  align-items: flex-start;
  align-self: stretch;
  width: 100%;
`;

export const CursoItem = styled.a`
  width: 100%;
  padding: 12px;

  &:hover {
    background-color: #2e2a4c;
    cursor: pointer;
    color: #fff;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;

  & button {
    padding: 6px 16px;
  }
`;
