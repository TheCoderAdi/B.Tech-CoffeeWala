import React from "react";
import Box from "./Box";
import quote from "../Assests/quote-img.png";
import person_one from "../Assests/pic-1.png";
import person_two from "../Assests/pic-2.png";
import person_three from "../Assests/pic-3.png";

const Review = () => {
  return (
    <>
      <h1 className="reviewHeading">
        CUSTOMER'S <span>REVIEW</span>
      </h1>
      <section className="heroReview" id="review">
        <div className="box-container">
          <Box
            imgQoute={quote}
            imgPerson={person_one}
            message="I really like the atmosphere, good coffee, and nice interior. This is a good place to study or chill with friends. The drinks and foods were all tasty and worthwhile. If you’re up for a fresh place with beautiful architecture then this is a must to visit."
            userComment="Aditya"
            delay="0.2"
          />
          <Box
            imgQoute={quote}
            imgPerson={person_two}
            message=" Will go again.I only popped in to get take-away cappuccinos, but I was struck by how friendly the service was. The cappuccinos were wonderful too! And very well priced."
            userComment="Rasmi"
            delay="0.4"
          />
          <Box
            imgQoute={quote}
            imgPerson={person_three}
            message=" I would probably say that this coffee shop is a must for coffee lovers! The service was good, and the variety of coffee served in the ambiance was very satisfying. If you like your coffee shops, then this is a must-visit! We will be back again!"
            userComment="Rakesh"
            delay="0.6"
          />
        </div>
      </section>
    </>
  );
};

export default Review;
