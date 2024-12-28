import React from "react";
import { Link } from "react-router-dom";

import "./styles/Home.css";
import confLogo from "../images/platziconf-logo.svg";

function Home() {
  return (
    <div className="hero container-fluid">
      <div className="row h-100 justify-content-center align-items-center">
        <div className="col-12 col-md-6 text-center">
          <img className="img-fluid" src={confLogo} alt="Logo conferencia" />
        </div>
        <div className="col-12 col-md-6 text-center">
          <h1 className="hero-text m-0">Bienvenido a PlatziConf</h1>
          <p className="hero-text m-0">
            Ingresa y registrate en la mejor conferencia tecnologica del momento
          </p>
          <Link to="/badges" className="btn btn-primary mt-3 text-uppercase">
            Ingresa
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
