import React from "react";
import IntroSOMOS from "./components/IntroSOMOS/IntroSOMOS";
import HeaderMenu from "./components/HeaderMenu/HeaderMenu";
import Home from "./components/Home/Home";
import ElegantEvent from "./components/Events/ElegantEvents";
import SpectacularEvents from "./components/Events/SpectacularEvents";
import CorporateEvent from "./components/Events/CorporateEvents";
import Projects from "./components/Events/Projects/Projects";
import BottomArrow from "./components/BottomArrow/BottomArrow";
import InnovationSolutions from "./components/InnovationSolutions/InnovationSolutions";
import "./styles.scss";
import { useEffect, useRef } from "react";
// window.onscroll = function () {
//   myFunction();
// };

// let distance_home, distance_spectacularEvents;

// let home = document.getElementById("home");
// let spectacularEvents = document.getElementById("spectacular");

// function myFunction() {
//   distance_home = window.innerHeight - home.getBoundingClientRect().top;
//   if (distance_home >= 200) {
//     spectacularEvents.classList.add("up");

//   }

//   distance_spectacularEvents =
//     window.innerHeight - spectacularEvents.getBoundingClientRect().top;
//   if (distance_spectacularEvents >= 200) {
//     spectacularEvents.classList.add("efect-spectacular");
//   }
// }

function App() {
  const section1 = useRef();
  const section2 = useRef();
  const section3 = useRef();
  const section4 = useRef();
  const section5 = useRef();
  const section6 = useRef();

  function scrollTo(section) {
    section.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <main className="general--container">
      {/* <Header>
      <HeaderMenu />
      </Header> */}

      <div ref={section1}>
        <IntroSOMOS scrollTo={scrollTo} goToSectionRef={section2} />
      </div>
      <div ref={section2}>
        <Home scrollTo={scrollTo} goToSectionRef={section3} />
      </div>
      <div ref={section3}>
        <SpectacularEvents scrollTo={scrollTo} goToSectionRef={section4} />
      </div>

      <div ref={section4}>
        <CorporateEvent scrollTo={scrollTo} goToSectionRef={section5} />
      </div>

      <div ref={section5}>
        <ElegantEvent scrollTo={scrollTo} goToSectionRef={section6} />
      </div>

      <div ref={section6}>
        <InnovationSolutions scrollTo={scrollTo} />
      </div>
    </main>
  );
}
export default App;
