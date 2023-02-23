import Vector from './Img-Vector/Vector.png'
import './ButtonUp.css'
import { Link } from "react-scroll";

function ButtonUp (){
return(
    <Link
                activeClass="active"
                to="NavBar"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
    <div className='ButtonUp'>
        <button className='ButtonUp-button'><img src={Vector} alt="Icon to go up to the beginning"></img></button>
    </div></Link>
)

}

export default ButtonUp