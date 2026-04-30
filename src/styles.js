/**
 * ARQUIVO COM AS ESTILIZAÇÕES QUE SE REPETEM AO LONGO DO SITE
 * EX: Container, Section, Main, etc.. (tamanhos e disposições)
 */
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

export const Main = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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

export const Section = styled.section`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h1`
  width: 735px;
  margin-bottom: 34px;
  font-weight: 700;
  font-size: 45px;
  line-height: 52px;
  text-align: justify;
`;

export const SubTitle = styled.h2`
  width: 640px;
  margin-bottom: 35px;
  font-weight: 700;
  font-size: 45px;
  line-height: 52px;
  text-align: center;
`;

export const TextHighLight = styled.span`
  color: #7f28b5;
  font-weight: inherit;
`;

export const TextContentHero = styled.p`
  width: 735px;
  font-weight: 400;
  font-size: 18px;
  margin-bottom: 42px;
  line-height: 28px;
`;

export const TextContent = styled.p`
  width: 640px;
  font-weight: 400;
  font-size: 18px;
  /* margin-bottom: 42px; */
  line-height: 28px;
  text-align: center;
`;
