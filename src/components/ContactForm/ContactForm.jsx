import './ContactForm.css';
import ButtonShow from "../ButtonShow/ButtonShow";

const ContactForm = () => {

    const handleClick = e => {
        e.preventDefault();
    }

  return (
    <div className="contactForm-wrapper">
        <form className='contactForm-form' action="">
            <label htmlFor="name">Name</label>
            <input name="name" type="text" placeholder="Write your name" />
            <label htmlFor="email">Email</label>
            <input name="email" type="email" placeholder="your@email.com" />
            <div onClick={handleClick}><ButtonShow  text={"Get it!"} /></div>  
                    
        </form>
    </div>
  )
}

export default ContactForm