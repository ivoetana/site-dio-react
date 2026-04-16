import { Link } from "react-router-dom";
import Button from "../../components/Button";
import Header from "../../components/Header";
import {
  Main,
  Section,
  TextContent,
  TextHighLight,
  Title,
  Wrapper,
} from "./styles";

const Home = () => {
  return (
    <>
      <Header />
      <Main>
        <Wrapper>
          <div>
            <Title>
              Domine as <TextHighLight>tecnologias</TextHighLight> utilizadas
              pelas empresas mais inovadoras do mundo
            </Title>
            <TextContent>
              +1.750 cursos, bootcamps, projetos e formações nas carreiras de
              back-end, front-end, mobile, games, data, inteligência artificial
              & cloud para elevar o seu nível profissional e conquistar
              oportunidades nas empresas mais desejadas do mundo
            </TextContent>
            <Link to="/cadastrar">
              <Button title="Começar Agora" />
            </Link>
          </div>
        </Wrapper>
      </Main>
      <Section>teste</Section>
      <Section $bg="#fff">teste</Section>
    </>
  );
};

export default Home;
