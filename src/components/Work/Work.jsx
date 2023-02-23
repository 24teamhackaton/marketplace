import React from "react";
import "./Work.css";
import image from "./img-work.png";

function Work() {
  return (
    <>
      <div className="container-work">
         <div className="horizontal-card-work">
          <img src={image} width="50%" alt="voice" />
          <div className="card-text-work">
            <h2 className="title-work">Sell your voice</h2>
            <h3 className="subtitle-work">Subtitle</h3>
            <p className="description-work">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>
            <div className="moreinfo">
              <button className="button-work">More info</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Work;