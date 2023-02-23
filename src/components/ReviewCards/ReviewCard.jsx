import React, { Component } from 'react'
import "./ReviewCard.css"

export default class ReviewCard extends Component {
  render() {

    const {name, description, image} = this.props;

    return (
        <div className='reviewCard-container'>
            <div className='avatar-stars-containter'>
                <img src={image} alt="" />
            </div>
            <h3>{name}</h3>
            <div className='paragraph-container'>
                <p>{description}</p>
            </div>
        </div>
    )
  }
}

