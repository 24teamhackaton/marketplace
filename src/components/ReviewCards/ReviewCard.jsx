import React, { Component } from 'react'
import "./ReviewCard.css"
import oneStarImg from "../../assets/1star.png";
import twoStarImg from "../../assets/2stars.png";
import threeStarImg from "../../assets/3stars.png";
import fourStarImg from "../../assets/4stars.png";
import fiveStarImg from "../../assets/5stars.png";


export default class ReviewCard extends Component {
  render() {

    const {name, description, image, score} = this.props;

    const starsImgArray = [oneStarImg, twoStarImg, threeStarImg, fourStarImg, fiveStarImg];

    return (
        <div className='reviewCard-container'>
            <div className='avatar-stars-containter'>
                <img className='reviewCard-avatarImage' src={image} alt="profile avatar" />
                <img className='reviewCard-starsScore' src={starsImgArray[score-1]} alt="score review" />
            </div>
            <h3 className='reviewCard-userName'>{name}</h3>
            <div className='description-container'>
                <p className='reviewCard-description-paragraph'>{description}</p>
            </div>
        </div>
    )
  }
}

