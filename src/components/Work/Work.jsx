import React from "react";
import "./Work.css";
import Image from "./img-work.png";
import ButtonShow from "../ButtonShow/ButtonShow"

function Work() {
  return (
    <>
      <div id="workWithUs" className="container-work">
         <div className="horizontal-card-work">
          <img className="img-work" src={Image} width="50%" alt="voice" />
          <div className="card-text-work">
            <h2 className="title-work">Sell your voice</h2>
            <h3 className="subtitle-work"> Have you ever dreamed of giving voice to others?</h3>
            <p className="description-work">
            Contact us to start selling your voice with us. We inform you without obligation. 
            </p>
            <div className="moreinfo">
              <ButtonShow text="More info"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Work;
