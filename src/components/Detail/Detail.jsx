import "./Detail.css";
import ButtonShow from "../ButtonShow/ButtonShow";
import voiceAvatarImg from "../../assets/voice-avatar.png";
import ContactForm from "../ContactForm/ContactForm";
import { useState } from "react";

const Detail = ({selectedVoice}) => {

  const [isContact, setIsContact] = useState(false)
  
  let params = (new URL(document.location)).searchParams;
  let productId = params.get('id')

   
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
          <h1>Title</h1>
          
          <h2>Author</h2>
          <p>Description</p>
          <div onClick={handleClick}>
            <ButtonShow  text={"Contact"} />
          </div>
        </div>)}
        
        
      </div>

    </section>
  )
}

export default Detail