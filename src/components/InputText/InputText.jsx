import "./InputText.css"
import searchIcon from "../../assets/searchIcon.png";
import filterIcon from "../../assets/filterIcon.png";

const InputText = ({placeholderText}) => {
  return (
    <div className="inputTextStandard-wrapper">
        <div className="gradient-box">
            <img className="searchIcon" src={searchIcon} alt="search icon" />
            <input className="inputTextStandard" type="text" placeholder={placeholderText} />
            <img className="filterIcon" src={filterIcon} alt="filter icon" />
        </div>
        
    </div>
  )
}

export default InputText