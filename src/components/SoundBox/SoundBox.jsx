import { useRef } from "react";
import "./Soundbox.css";
import { useState } from "react";
import wavesImg from '../../assets/waves.gif'
import playButton from "../../assets/buttonPlay.png";
import {imageUrls} from '../../data/imageUrls'
import oneStarImg from "../../assets/1star.png";
import twoStarImg from "../../assets/2stars.png";
import threeStarImg from "../../assets/3stars.png";
import fourStarImg from "../../assets/4stars.png";
import fiveStarImg from "../../assets/5stars.png";
import data from "../../data/dataVoices.json";

function SoundBox() {

  //Random bg image
  const randomIndex = Math.floor(Math.random() * imageUrls.length);
  const backgroundImage = `url(${imageUrls[randomIndex]})`;

  const [bgImage, setBgImage] = useState(backgroundImage)

  //Data import
  const randomIndexData = Math.floor(Math.random() * data.length); 
  const [dataSelected, setdataSelected] = useState(data[randomIndexData])
  //Audio controller

   const [state, setState] = useState(false);

  const audioRef = useRef();
  const audioPlay = ()=>{
      audioRef.current.play();
  }
  const handlPlayClick =(event)=>{
    event.stopPropagation()
    setState(!state);
    if (state) {
      audioPlay()
    }
  }

  //Stars
  const starsImgArray = [oneStarImg, twoStarImg, threeStarImg, fourStarImg, fiveStarImg]

return (
  <article className="soundBox-article">
    <div className="box" onClick={handlPlayClick} style={{backgroundImage: bgImage}}>
      {state ?
        <>
          
          <audio ref={audioRef} autoPlay src="/audios/prueba.wav" onEnded={handlPlayClick}></audio>
          <img className="waveImg" src={wavesImg} alt="waves" />
        </>
        : <button className="playButton" ><img src={playButton} alt="play"/></button>  
      }
    </div>
    <div className="soundBox-firstLine">
      <p className="soundBox-title">{dataSelected ? dataSelected.title : null}</p>
      <img className="soundBox-stars" src={starsImgArray[dataSelected.score-1]} alt="star review" />
    </div>
    <p className="soundBox-subtitle">{dataSelected ? dataSelected.description : null}</p>
  </article>
);


}

export default SoundBox