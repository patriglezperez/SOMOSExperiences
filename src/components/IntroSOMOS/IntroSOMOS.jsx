import React from "react";
import BottomArrow from "../BottomArrow/BottomArrow";

function IntroSOMOS() {
  return (
    <div
      className="Intro--SOMOS--background"
      onClick={() => {
        console.log("Funciona!!");
      }}
    >
      <p className="IntroSOMOS--sentence">
        Somos todo lo que está a punto de suceder
      </p>
      <BottomArrow />
    </div>
  );
}
export default IntroSOMOS;
