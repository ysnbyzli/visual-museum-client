import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SlickSlider from "react-slick";

const settings = {
  infinite: true,
  speed: 2000,
  slidesToShow: 5,
  slidesToScroll: 5,
  initialSlide: 0,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 5000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Slider = () => {
  const persons = useSelector((state) => state.persons.data);

  return (
    <div className="container mx-auto mt-5">
      <SlickSlider {...settings}>
        {persons.map(({ photo, _id, fullName }) => (
          <div key={_id} className="px-3 rounded-lg ">
            <Link to={`/zaman-cizelgesi/${_id}`}>
              <img
                src={photo}
                alt={fullName}
                className="object-cover w-full rounded-md h-80"
              />
            </Link>
            <h3 className="p-1 text-base font-bold">{fullName}</h3>
          </div>
        ))}
      </SlickSlider>
    </div>
  );
};

export default Slider;
