import React from 'react'
import ReviewCard from '../ReviewCards/ReviewCard'
import './CustomerReviewSection.css'
import AmaiaProfieAvatar from './avatars/AmaiaProfileAvatar.png'

const CustomerReviewsSection = () => {
  return (
    <section className="customerReviewSection">
        <div className="customerReviewSection-wrapper">
            <ReviewCard name="hola" 
                image = {AmaiaProfieAvatar}
                description="description review bla bla bla blabldasdasdasdas asdsdda" 
                score={3}/>
            <ReviewCard name="example" 
                image = {AmaiaProfieAvatar}
                description="description review bla bla bla blabldasdasdasdas asdsdda" 
                score={5}/>
            <ReviewCard name="other example" 
                image = {AmaiaProfieAvatar}
                description="description review bla bla bla blabldasdasdasdas asdsdda" 
                score={2}/>
        </div>

    </section>
  )
}

export default CustomerReviewsSection