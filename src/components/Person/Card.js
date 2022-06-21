import React from "react";
import { Link } from "react-router-dom";

const Card = ({ image, _id, fullName, category }) => {
  return (
    <div className="mx-4 rounded-lg h-96">
      <Link to={`/kisiler/${_id}`}>
        <picture>
          <img
            src={image}
            alt="movie"
            className="object-cover w-full h-5/6 rounded-xl"
          />
        </picture>
      </Link>
      <h3 className="px-3 pt-3 text-sm font-bold text-gray-700">
        {fullName} <span className="text-[8px] font-light">({category})</span>
      </h3>
    </div>
  );
};

export default Card;
