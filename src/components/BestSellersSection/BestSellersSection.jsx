import React from 'react'
import "./BestSellersSection.css";
import SoundBox from "../SoundBox/SoundBox";
import ButtonShow from "../ButtonShow/ButtonShow";

const BestSellersSection = () => {
  return (
    <>
      <section className="bestSellersSection">
          <div className="bestSellersSection-wrapper">
              <SoundBox />
              <SoundBox />
              <SoundBox />
              <SoundBox />
              <SoundBox />
              <SoundBox />
              <SoundBox />
              <SoundBox />
          </div>
              <ButtonShow text={"Show more"} />
      </section>
    </>
  )
}

export default BestSellersSection