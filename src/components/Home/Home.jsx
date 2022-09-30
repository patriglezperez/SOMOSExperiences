import React from "react";
import BottomArrow from "../BottomArrow/BottomArrow";
import HeaderMenu from "../HeaderMenu/HeaderMenu";

function Home(scrollTo, goToSectionRef) {
  return (
    <>
      <HeaderMenu />
      <section className="Home--container">
        <div alt="background" id="background-photo"></div>

        <p className="Home--sentence">
          Haz <b>scroll</b> para vivir la experiencia o descubre nuestros
          <b> proyectos</b> en el menú.
        </p>

        <BottomArrow onClick={() => scrollTo(goToSectionRef)} />
      </section>
    </>
  );
}
export default Home;
