import React, { useState } from "react";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

const Ratings = () => {
  const [rating, setRating] = useState(0); // Initial value
  return (
    <Rating style={{ maxWidth: 150 }} value={rating} onChange={setRating} />
  );
};

export default Ratings;
