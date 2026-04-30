import styled from "styled-components";
import { Section } from "../../styles";

export const SectionHero = styled(Section)`
  background:
    linear-gradient(
      90deg,
      rgba(0, 0, 0, 1) 0%,
      rgba(0, 0, 0, 1) 55%,
      rgba(237, 221, 83, 0) 100%
    ),
    url("https://assets.dio.me/hIcFo_nvb9KczxKQRbZ8-CunoAnkyRHBCN0WfDTJ0M8/f:webp/q:80/L3B1YmxpYy9jb21wb25lbnRzL3BhZ2VzL2hvbWUvaGVhZGVyL2Jhbm5lci1wbGF5LnBuZw");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const SectionAzul = styled(Section)`
  background-color: #1e192c;
  color: #fff;

  & div {
    flex-direction: column;
  }
`;

export const SectionBranca = styled(Section)`
  background-color: #fff;
  color: #1e192c;

  & div {
    flex-direction: column;
  }
`;

export const CardBox = styled.div`
  width: 100%;
  max-width: 1300px;
  display: flex;
  margin-bottom: 34px;
  position: relative;
`;

export const CardContainer = styled.ul`
  display: flex;
  list-style: none;
  gap: 20px;
  overflow-x: auto;
  scroll-behavior: smooth;

  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
  
`;

export const ItemCard = styled.li`
  width: 100%;
  min-width: 370px;
  display: flex;
  flex-direction: column;
  background-color: #161220;
  border-radius: 10px;
  padding: 20px;
  gap: 12px;

  & svg {
    font-size: 0.25rem;
  }
`;

export const LinkTitleCard = styled.a`
  color: #fff;
  font-size: 3rem;
  cursor: pointer;
  line-height: 3rem;
  margin-bottom: 10px;

  &:hover {
    color: #fff;
    text-decoration: underline;
  }
`;

export const LinkItemCard = styled.a`
  display: flex;
  align-items: center;
  gap: 5px;
  color: #9e9e9e;
  cursor: pointer;
`;

export const SlideControl = styled.button`
  position: absolute;
  top: 50%;
  border-width: medium;
  border-style: none;
  border-color: currentcolor;
  border-image: initial;
  background-color: transparent;
  padding: 0px;
  color: #fff;
  font-size: 3rem;
  cursor: pointer;
  z-index: 10;
  user-select: none; /* Evita selecionar o ícone ao clicar rápido */
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.7;
    color: #e4105d; /* Cor destaque para o hover */
  }
`;

export const SlideControlLeft = styled(SlideControl)`
    left: 0;
    transform: translate(-100%, -50%);
`

export const SlideControlRigth = styled(SlideControl)`
    right: 0;
    transform: translate(100%, -50%);
`
