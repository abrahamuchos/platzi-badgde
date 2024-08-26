import React from "react";
import { Link } from "react-router-dom";

import imgNotFound from "../images/404.svg";
import "./styles/404.css";

function notFound() {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 text-center">
          <img src={imgNotFound} alt="Erro 404" id="notFound-img" />
        </div>
      </div>
    </div>
  );
}

export default notFound;
