import { Link, animateScroll as scroll } from "react-scroll";
import './Voice.css';

function Voice(){
    return(
        <div className='voice'>
            <div className='voice-phrase'>
            <h2>Take</h2>
            <h2>their voices,</h2>
            <h2>change</h2>
            <h2>your life</h2>
                <div className='voice-buttons'>
                <button className='voice-buttons-moreInfo'><Link
                activeClass="active"
                to="faqs"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >More info</Link></button>
                <button className='voice-buttons-voices'><Link
                activeClass="active"
                to="soundBox"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >Voices</Link></button>
            </div>    
            </div>
        </div>
      
    
  );
}

export default Voice;
