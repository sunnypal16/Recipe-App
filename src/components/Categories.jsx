import React from "react";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Navbar } from "./Navbar";
import { TrendingSlider } from "./TrendingSlider";


export const Categories = () => {
  const { name } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const api = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?a=${name}`
      );
      const data = await api.json();
      setData(data.meals);
      console.log(data);
    };

    fetchData();
  }, [name]);

  return (
    <>
      <Navbar />
      <br />
      <div className="card-items"
        style={{
          width: "100%",
          margin: "auto",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
          marginBottom: "10px",

        }}
      >
        {data.map((d) => (
          <Link to={`/${d.idMeal}`} key={d.idMeal} className="link">
            <div
              className="main-img"
            >
              <div className="img">
                <img
                  src={d.strMealThumb}
                  alt={d.strMeal}
                  style={{
                    width: "100%",
                    borderRadius: "8px", // Optional: Add border radius to images
                  }}
                />
              </div>
              <br />
              <h5 className="meal-name" style={{ fontSize: "0.9rem" }}>{d.strMeal}</h5>
            </div>
          </Link>
        ))}
      </div>
      
    </>
  );
};
