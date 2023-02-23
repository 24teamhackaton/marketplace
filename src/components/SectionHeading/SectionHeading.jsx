import "./SectionHeading.css";
import spanImg from "../../assets/spanimage.png";

const SectionHeading = ({title}) => {
  return (
    <div className="sectionHeading-wrapper">
        <img className="sectionHeading-img" src={spanImg} alt="waves" />
        <h1>{title}</h1>
    </div>
  )
}

export default SectionHeading