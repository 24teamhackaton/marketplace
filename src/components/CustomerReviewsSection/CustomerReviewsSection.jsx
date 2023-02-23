import React from 'react'
import ReviewCard from '../ReviewCards/ReviewCard'
import './CustomerReviewSection.css'
import AmaiaProfieAvatar from './avatars/AmaiaProfileAvatar.png'

const CustomerReviewsSection = () => {
  return (
    <section className="customerReviewSection">
      <div className="customerReviewSection-wrapper">
        <div className='customerReviewSection-reviewCard-wrapper'>
          <ReviewCard name="test"
            image={AmaiaProfieAvatar}
            description="description review bla bla bla blabldasdasdasdas asdsdda"
            score={5} />
        </div>
        <div className='customerReviewSection-reviewCard-wrapper'>
          <ReviewCard name="test name"
            image={AmaiaProfieAvatar}
            description="description review bla bla bla blabldasdasdasdas asdsdda"
            score={3} />
        </div>
        <div className='customerReviewSection-reviewCard-wrapper'>
          <ReviewCard name="hola"
            image={AmaiaProfieAvatar}
            description="description review bla bla bla blabldasdasdasdas asdsdda"
            score={1} />
        </div>
      </div>

    </section>
  )
}

export default CustomerReviewsSection