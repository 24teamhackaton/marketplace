import "./Detail.css";
import ButtonShow from "../../components/ButtonShow/ButtonShow";
import ContactForm from "../../components/ContactForm/ContactForm";
import { useState } from "react";
import ButtonFav from "../../components/ButtonFav/ButtonFav";

const Detail = () => {
  const [isContact, setIsContact] = useState(false);

  let product = JSON.parse(localStorage.getItem("id"));

  const handleClick = (e) => {
    console.log("hola");
    e.preventDefault();
    setIsContact(!isContact);
  };

  return (
    <section className="detail-section">
      <div className="detail-wrapper">
        <div
          className="detail-img"
          style={{ backgroundImage: `url(${product.author_bg})` }}
        ></div>
        {isContact ? (
          <ContactForm />
        ) : (
          <div className="detail-card-wrapper">
            <h1>{product.title}</h1>

            <h2>{product.author}</h2>
            <p>{product.description}</p>
          <div className="detail-card-wrapper-buttons">
            <div onClick={handleClick}>
              <ButtonShow text={"Contact"} />
            </div>
            <div>
              <ButtonFav/>
            </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Detail;
