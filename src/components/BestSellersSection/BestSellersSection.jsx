import { useState, useEffect } from "react";
import "./BestSellersSection.css";
import SoundBox from "../SoundBox/SoundBox";
import ButtonShow from "../ButtonShow/ButtonShow";
import InputText from "../InputText/InputText";
import db from "../../data/dataVoices.json";

const BestSellersSection = () => {
  const [originalData, setOriginalData] = useState([]);

  const [data, setData] = useState(db);

  useEffect(() => {
    setOriginalData(db);
    setData(db);
  }, []);

  function filterData(searchValue) {
    const filteredData = originalData.filter((item) =>
      item.title.toLowerCase().includes(searchValue.toLowerCase())
    );
    setData(filteredData);
  }

  return (
    <>
      <section className="bestSellersSection">
        <InputText onFilter={filterData} placeholderText="Search" />
        <div className="bestSellersSection-wrapper">
          {data.map((item) => (
            <SoundBox key={item.id} id={item.id} />
          ))}
        </div>
        <ButtonShow text={"Show more"} />
      </section>
    </>
  );
};

export default BestSellersSection;
