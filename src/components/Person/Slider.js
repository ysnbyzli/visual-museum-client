import React from "react";
import { useSelector } from "react-redux";

import SlickSlider from "react-slick";
import Card from "./Card";

const settings = {
  infinite: false,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 4,
  initialSlide: 0,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 5000,
  responsive: [
    {
      breakpoint: 1600,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 3,
        infinite: true,
      },
    },
    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 3,
        infinite: true,
      },
    },
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
        infinite: true,
      },
    },
    {
      breakpoint: 400,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      },
    },
  ],
};

const Slider = () => {
  const persons = useSelector((state) => state.persons.data);
  console.log("🚀 ~ file: Slider.js ~ line 60 ~ Slider ~ persons", persons);

  return (
    <div className="container py-6 mx-auto">
      <SlickSlider {...settings}>
        {persons.map(({ fullName, photo, _id, category: { title } }) => (
          <div key={_id}>
            <Card
              image={photo}
              _id={_id}
              fullName={fullName}
              category={title}
            />
          </div>
        ))}
      </SlickSlider>
    </div>
  );
};

export default Slider;
