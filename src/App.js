import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import Header from "./components/Header/index";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Carreiras from "./pages/carreiras";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" Component={Home}></Route>
          <Route path="/login" Component={Login}></Route>
          <Route path="/carreiras" Component={Carreiras}></Route>
        </Routes>
      </Router>

    </>
  );
};

export default App;
