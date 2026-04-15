import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
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

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 40px auto;
  padding: 32px;
`;

export const Title = styled.h2`
  width: 735px;
  margin-bottom: 34px;
  font-weight: 700;
  font-size: 45px;
  line-height: 52px;
  text-align: justify;
`;

export const TextHighLight = styled.span`
  color: #7f28b5;
  font-weight: inherit;
`;

export const TextContent = styled.p`
  width: 735px;
  font-weight: 400;
  font-size: 18px;
  margin-bottom: 42px;
  line-height: 28px;
`;
