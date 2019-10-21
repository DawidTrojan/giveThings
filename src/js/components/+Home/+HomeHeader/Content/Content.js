import React from "react";
import { Link } from "react-router-dom";

const Content = ({ auth }) => (
  <div className="content_container">
    <div className="content_title">
      <h2>Zacznij pomagać!</h2>
      <h2>Oddaj niechciane rzeczy w zaufane ręce</h2>
    </div>
    <div className="content_decoration__box">
      <div className="content_decoration"></div>
    </div>
    <div className="content_buttons">
      <Link
        to={auth.isEmpty ? "/logowanie" : "/oddaj-rzeczy"}
        className="content_link__button"
      >
        Oddaj rzeczy
      </Link>
      <Link
        to={auth.isEmpty ? "/logowanie" : "/oddaj-rzeczy"}
        className="content_link__button"
      >
        Zorganizuj zbiórkę
      </Link>
    </div>
  </div>
);

export default Content;
