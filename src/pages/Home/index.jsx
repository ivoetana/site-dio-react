import { Link } from "react-router-dom";
import Button from './../../components/Button/index';
import Header from "../../components/Header";

const Home = () => {
  return (
    <>
    <Header/>
      <h1>Home</h1>
      <Link to="/login">Ir para login</Link>
      <div style={{marginTop: "20px"}}>
        <Button variant="contour" title="Entrar" />
        &nbsp;&nbsp;&nbsp;
        <Button title="Criar conta" />
        &nbsp;&nbsp;&nbsp;
        <Button title="Começar agora" />
      </div>
    </>
  );
};

export default Home;
