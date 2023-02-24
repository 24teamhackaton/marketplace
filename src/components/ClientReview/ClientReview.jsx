import React from "react";
import './ClientReview.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
// import oneStarImg from "../../assets/1star.png";
 import twoStarImg from "../../assets/2stars.png";
// import threeStarImg from "../../assets/3stars.png";
 import fourStarImg from "../../assets/4stars.png";
 import fiveStarImg from "../../assets/5stars.png";

const ClientReview = () => {
    return (
        <section id="Review" className="containerCard">
            <div className="cardBase">
                <div className="cardContent">
                    <div className="contentPhoto">
                        <FontAwesomeIcon icon={ faCircleUser }/>
                    </div>
                    <div className="contentText">
                        <p id="textName">Angelina</p>
                        <p id="textReview">
                        I always felt that the evil inside me didn't connect with 
                        my high-pitched, nasal voice. It was impossible to be respected 
                        and feared with a voice like that. But since I acquired my new 
                        voice in Real Dream Voices, the plans always go well, 
                        the interrogations are really productive and none of my henchmen 
                        dares to challenge me. I am very happy with the result, 
                        I recommend the experience 100%.
                        </p>
                        <img src={fiveStarImg}></img>
                    </div>
                </div>
            </div>

            <div className="cardBase">
            <div className="cardContent">
                <div className="contentPhoto">
                    <FontAwesomeIcon icon={ faCircleUser }/>
                </div>
                <div className="contentText">
                    <p id="textName">Bob</p>
                    <p id="textReview">
                    Since I was fifteen years old I have been going to the gym and
                    working to earn money so that I can replace and modify all the parts 
                    of my body that I did not like... well, my whole body. I had a perfect 
                    body but girls ran away from me as soon as I said something. A year ago 
                    I bought my new voice at RDV and now I'm waiting for my fiancée to walk 
                    down the aisle. She's an hour late, but I don't think it's related to 
                    my mom showing her pictures from when I was a kid.
                    </p>
                    <img src={twoStarImg}></img>
                </div>
            </div>
            </div>

            <div className="cardBase">
            <div className="cardContent">
                <div className="contentPhoto">
                    <FontAwesomeIcon icon={ faCircleUser }/>
                </div>
                <div className="contentText">
                    <p id="textName">Meowlody</p>
                    <p id="textReview">
                    In my case Real Dream Voice has saved my life. No one can understand how 
                    difficult it has been for me to live battling with that disgusting human 
                    voice that did not allow me to express my meows as I really wanted. 
                    Now my friends understand me, accept me and have finally stopped 
                    calling me Karen.
                    </p>
                    <img src={fourStarImg}></img>
                </div>
            </div>
            </div>
        </section>
    )
};

export default ClientReview;