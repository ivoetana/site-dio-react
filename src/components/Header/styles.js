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

export const ItemMenu = styled.li``;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;

  & button {
    padding: 6px 16px;
  }
`;
