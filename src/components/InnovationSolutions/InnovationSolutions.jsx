// import { useNavigate } from "react-router-dom";
import Phone from "../../assets/img/Solution1_fulI.png";
import Bank from "../../assets/img/Solution2.png";
import React, { useState } from "react";
import BottomArrow from "../BottomArrow/BottomArrow";

function InnovationSolutions() {
  const [blueColor, setBlueColor] = useState(true);
  const [visibility, setVisibility] = useState(true);
  const [scaleApp, setScaleApp] = useState(true);

  //Change the information in the texts
  let steps = 0;
  const info = ["Web", "Apps", " instalaciones interactivas"];

  function changeInfo() {
    while (steps <= info.length - 1) {
      document.getElementById("solutions").innerHTML = info[steps];

      if (steps === 1) {
        setScaleApp(false);
        document.getElementById("img_phone").classList.add("rotate");
        document.getElementById("img_phone").classList.add("hiddenON");
        // document.getElementById("phone--figure").classList.add("resize");
      }
      break;
    }
    steps++;
  }

  //Change the color of the words and start animation
  function changeColor() {
    setBlueColor(false);
    setVisibility(false);
    changeInfo();
  }

  // const navigate = useNavigate();

  return (
    <div onClick={changeColor} className="InnovationSolutions--container">
      <section>
        <div>
          <section>
            <h2 className="InnovationSolutions--mainSentence up">
              Te buscamos las <br /> soluciones
              <br /> más innovadoras <br />
              en
              <span
                className={
                  blueColor === true ? "blueTemporal" : "whiteTemporal"
                }
              >
                {" "}
                físico
              </span>{" "}
              y en
              <span
                className={
                  blueColor === true ? "blueTemporal" : "whiteTemporal"
                }
              >
                {" "}
                digital
              </span>
              .
            </h2>

            {steps < 3 ? (
              <h2
                className={
                  visibility === true
                    ? "InnovationSolutions--opacity"
                    : "InnovationSolutions--mainSentence--right"
                }
              >
                En{" "}
                <span id="solutions" className="blue">
                  Web
                </span>
              </h2>
            ) : null}
          </section>
        </div>
      </section>

      <section>
        <div className="Innovations--container--phone">
          <figure id="phone--figure" className="innovation--phone--figure">
            <img
              src={Phone}
              id="img_phone"
              alt="phone"
              className={
                visibility === true
                  ? "Innovations--phone--image"
                  : "Innovations--phone--image--effect"
              }
            />
            <img
              src={Bank}
              id="img_bank"
              alt="bank app"
              className={
                scaleApp === true
                  ? "Innovations--bank--image hiddenON"
                  : "Innovations--bank--image--effect"
              }
            />
          </figure>
        </div>
      </section>
    </div>
  );
}
export default InnovationSolutions;
