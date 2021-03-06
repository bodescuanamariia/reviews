import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const [name, job, image, text] = people[index];
  console.log(people);

  return (
    <article className="review">
      <div className="image-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote"></span>
      </div>
    </article>
  );
};

export default Review;
