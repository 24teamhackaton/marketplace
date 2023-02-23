import React from 'react'
import "./BestSellersSection.css";
import SoundBox from "../SoundBox/SoundBox";
import ButtonShow from "../ButtonShow/ButtonShow";

const BestSellersSection = () => {
  return (
    <>
      <section className="bestSellersSection">
          <div className="bestSellersSection-wrapper">
              <SoundBox id="1" />
              <SoundBox id="2" />
              <SoundBox id="3"/>
              <SoundBox id="4"/>
              <SoundBox id="5"/>
              <SoundBox id="6"/>
              <SoundBox id="7"/>
              <SoundBox id="8"/>
              <SoundBox id="9"/>
          </div>
              <ButtonShow text={"Show more"} />
      </section>
    </>
  )
}

export default BestSellersSection