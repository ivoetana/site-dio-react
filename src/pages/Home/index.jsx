import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";
import Button from "../../components/Button";
import Header from "../../components/Header";
import {
  Main,
  Wrapper,
  TextContentHero,
  TextContent,
  TextHighLight,
  Title,
  SubTitle,
} from "../../styles";

import {
  SectionHero,
  SectionAzul,
  SectionBranca,
  CardContainer,
  CardBox,
  ItemCard,
  LinkTitleCard,
  LinkItemCard,
  SlideControlLeft,
  SlideControlRigth,
} from "./styles";

import { trilhasConhecimento } from "../../services/vetores";
import { useRef } from "react";

const Home = () => {
  const carousel = useRef(null);

  const handleLeftClick = (e) => {
    e.preventDefault();
    // carousel.current.offsetWidth pega a largura visível do container
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };

  const handleRightClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };

  return (
    <>
      <Header />
      <Main>
        <SectionHero>
          <Wrapper>
            <div>
              <Title>
                Domine as <TextHighLight>tecnologias</TextHighLight> utilizadas
                pelas empresas mais inovadoras do mundo
              </Title>
              <TextContentHero>
                +1.750 cursos, bootcamps, projetos e formações nas carreiras de
                back-end, front-end, mobile, games, data, inteligência
                artificial & cloud para elevar o seu nível profissional e
                conquistar oportunidades nas empresas mais desejadas do mundo
              </TextContentHero>
              <Link to="/cadastrar">
                <Button title="Começar Agora" />
              </Link>
            </div>
          </Wrapper>
        </SectionHero>
        <SectionAzul>
          <Wrapper>
            <SubTitle>
              Explore nossas <TextHighLight>carreiras</TextHighLight>
            </SubTitle>
            <TextContent>
              Desbloqueie o seu próximo nível de conhecimento e seja contratado
              pelas maiores empresas de tecnologia do país
            </TextContent>
          </Wrapper>
          <CardBox>
            <CardContainer ref={carousel}>
              {trilhasConhecimento.map((item) => (
                <ItemCard key={item.id}>
                  <LinkTitleCard href={item.href}>{item.label}</LinkTitleCard>
                  {item.courses.map((curso, key) => (
                    <LinkItemCard key={key} href={curso.href}>
                      <FontAwesomeIcon icon={faCircle} />
                      {curso.label}
                    </LinkItemCard>
                  ))}
                </ItemCard>
              ))}
            </CardContainer>
            <SlideControlLeft onClick={handleLeftClick}>
              <FontAwesomeIcon icon={faAngleLeft} />
            </SlideControlLeft>
            <SlideControlRigth onClick={handleRightClick}>
              <FontAwesomeIcon icon={faAngleRight} />
            </SlideControlRigth>
          </CardBox>
        </SectionAzul>
        <SectionBranca $bg="#fff">teste</SectionBranca>
      </Main>
    </>
  );
};

export default Home;
