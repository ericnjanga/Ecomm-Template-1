import React from 'react';
import img404 from './../img/ks-img7.jpg';
import { NavLink } from "react-router-dom";

const Page404 = () => {
  return (
    <div className="page404">
      <h1>Cette page n'existe pas!</h1>
      <img
        className="img404"
        src={img404}
        alt="Cette page n'existe pas!"
      />
      <p>
        La page que vous recherchez a peut être été changée ou est temporairement hors d'usage.
      </p>
      <div>
        <NavLink
          to="/"
          className="btn btn-primary text-uppercase"
        >
        Retour à la page d'acceuil
        </NavLink>
      </div>
    </div>
  );
};

export default Page404;
