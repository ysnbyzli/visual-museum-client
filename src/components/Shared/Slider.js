import React from "react";
import { useSelector } from "react-redux";
import SlickSlider from "react-slick";

const settings = {
  infinite: true,
  speed: 2000,
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 0,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 5000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
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
    <div className="mt-5">
      <SlickSlider {...settings}>
        {persons.map(({ photo, _id, fullName }) => (
          <div key={_id} className="h-96 w-30 rounded-lg px-1">
            <img
              src={photo}
              alt={fullName}
              className="h-96 w-64 object-cover rounded-md"
            />
            <h3 className="font-bold text-base p-1">{fullName}</h3>
          </div>
        ))}
      </SlickSlider>
    </div>
  );
};

export default Slider;
