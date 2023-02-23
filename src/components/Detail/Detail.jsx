import "./Detail.css";
import ButtonShow from "../ButtonShow/ButtonShow";
import voiceAvatarImg from "../../assets/voice-avatar.png";
import ContactForm from "../ContactForm/ContactForm";
import { useState } from "react";
import data from "../../data/dataVoices.json";

const Detail = () => {

  const [isContact, setIsContact] = useState(false)
  
  
  let productId = localStorage.getItem("id")
  let selectedProduct = data.filter(item => item.id == productId)
  let newVoice = selectedProduct[0]
  
   
  const handleClick = (e) => {
    console.log("hola");
    e.preventDefault();
    setIsContact(!isContact)
  }

  return (
    <section className="detail-section">

      <div className="detail-wrapper">
        <div className="detail-img" style={{ backgroundImage: `url(${voiceAvatarImg})` }}></div>
        {isContact ? (<ContactForm />):(<div className="detail-card-wrapper">
          <h1>{newVoice.title}</h1>
          
          <h2>{newVoice.author}</h2>
          <p>{newVoice.description}</p>
          <div onClick={handleClick}>
            <ButtonShow  text={"Contact"} />
          </div>
        </div>)}
        
        
      </div>

    </section>
  )
}

export default Detail