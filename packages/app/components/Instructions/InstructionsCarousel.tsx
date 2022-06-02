import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { DATA } from "./config";
import ListItem from "./ListItem";

const SLICK_SETTINGS = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 1.5,
  slidesToScroll: 1,
};

export const InstructionsCarousel = () => (
  <Slider {...SLICK_SETTINGS}>
    {DATA.map((item, index) => (
      <ListItem
        key={index}
        title={item.title}
        image={item.image}
        text={item.text}
        index={index}
      />
    ))}
  </Slider>
);
