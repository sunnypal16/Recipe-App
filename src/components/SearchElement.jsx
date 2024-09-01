import React, { useEffect, useState } from 'react';
import { Navbar } from './Navbar';
import { TrendingSlider } from './TrendingSlider';
import { useParams, Link } from 'react-router-dom';

export const SearchElement = () => {
  const { SearchTerm } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const api = await fetch(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${SearchTerm}`
        );
        const result = await api.json();
        console.log(result); // Check the structure of the fetched data
        setData(result.meals || []); // Correctly set data or an empty array if no meals found
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [SearchTerm]);

  // Check if data is empty
  if (!data.length) {
    return <p>No results found for (due to API is not Working.........)"{SearchTerm}"</p>;
  }

  return (
    <>
      <Navbar />
      <br />
      <div className='recipe-id'
        style={{
          width: '100%',
          margin: 'auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '20px',
          marginBottom: '10px',
        }}
      >
        {data.map((d) => (
          <Link to={`/${d.idMeal}`} key={d.idMeal} className="link">
            <div className="main-img">
              <div className="img">
                <img
                  src={d.strMealThumb}
                  alt={d.strMeal}
                  style={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: '8px',
                  }}
                />
              </div>
              <br />
              <h1 style={{ fontSize: '1.5rem' }}>{d.strMeal}</h1>
            </div>
          </Link>
        ))}
      </div>
      <TrendingSlider />
    </>
  );
};
