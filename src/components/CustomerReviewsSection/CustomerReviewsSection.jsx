import React from "react";
import ReviewCard from "../ReviewCards/ReviewCard";
import "./CustomerReviewSection.css";
import AmaiaProfieAvatar from "./avatars/AmaiaProfileAvatar.png";

const CustomerReviewsSection = () => {
  return (
    <section className="customerReviewSection">
      <div className="customerReviewSection-wrapper">
        <div className="customerReviewSection-reviewCard-wrapper">
          <ReviewCard
            name="test"
            image={AmaiaProfieAvatar}
            description="I always felt that the evil inside me didn't connect with my high-pitched, nasal voice. Such a nice tool."
            score={5}
          />
        </div>
        <div className="customerReviewSection-reviewCard-wrapper">
          <ReviewCard
            name="test name"
            image={AmaiaProfieAvatar}
            description="Since I was fifteen years old I have been going to the gym and working to earn money so that I can replace and modify all the parts of my body that I did not like... well, my whole body."
            score={3}
          />
        </div>
        <div className="customerReviewSection-reviewCard-wrapper">
          <ReviewCard
            name="hola"
            image={AmaiaProfieAvatar}
            description="In my case Real Dream Voice has saved my life. No one can understand how difficult it has been for me to live battling with that disgusting human voice."
            score={1}
          />
        </div>
      </div>
    </section>
  );
};

export default CustomerReviewsSection;
