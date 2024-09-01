import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";


export const TrendingSlider = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const api = await fetch(
        "https:www.themealdb.com/api/json/v1/1/filter.php?a=indian"
      );
      const data = await api.json();

      setData(data.meals);
    };

    fetchData();
  }, []);

  const settings = {
    // dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 100,
    cssEase: "linear"
  };
  return (
    <>
        <div className="slider2"> 
        <Slider {...settings}>
          
          {data.map((m, id) => {
            return (
             <Link to={`/${m.idMeal}`} key={id  }>
              <div key={id} className="slider2">
                <img src={m.strMealThumb} alt="Images" className="slider-image" />
                <div className="overflow2" key={id}>
                  <h4>{m.strMeal}</h4>
                </div>
              </div>
             </Link>
            );
          })}
        
      </Slider>
        </div>
     
    </>
  );
};
