import React from "react";

const Card = ({ image, title }) => {
  return (
    <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300 bg-white">
      <img src={image} alt={title} className="w-full h-64 object-cover" />
      <div className="p-3 text-center font-semibold">{title}</div>
    </div>
  );
};

export default Card;
