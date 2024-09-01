import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const PopularSlider = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const api = await fetch(
        "https://www.themealdb.com/api/json/v1/1/search.php?s"
      );
      const data = await api.json();
      setData(data.meals);
      
    };

    fetchData();
  }, []);

  var settings = {
    // dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 1500,
    cssEase: "linear",
  };
  return (
    <>
        <div className="slider">
        <Slider {...settings}>
          
          {data.map((m, id) => {
            return (
                <div key={id} className="slider">
                  <img src={m.strMealThumb} alt="Images" className="slider-image"  />
                  <div className="overflow">
                    <h4>{m.strMeal}</h4>
                  </div>
                </div>
            );
          })}
      </Slider>
        </div>
    </>
  );
};
