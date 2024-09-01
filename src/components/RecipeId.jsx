import { useEffect, useState } from 'react';
import { Navbar } from './Navbar';
import { TrendingSlider } from './TrendingSlider';
import { useParams } from 'react-router-dom';

export const RecipeId = () => {
  const { idMeal } = useParams(); // Correcting the useParams destructuring
  const [data, setData] = useState(null); // Initializing with null to handle empty state

  const [active, setActive] = useState('ingredient');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const api = await fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
        );
        const result = await api.json();
        console.log(result.meals);
        setData(result.meals[0]);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [idMeal]); // Adding idMeal as a dependency

  // Return loading state if data is not yet available
  if (!data) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Navbar />

      <div className='main-recipe'
        style={{
          width: '90%',
          margin: 'auto',
          textAlign: 'center',
        }}
      >
        <h1 className='recipe-h1'
          style={{
            fontSize: '45px',
            fontWeight: '700',
            fontFamily: 'Time-square',
          }}
        >
          {data.strMeal}
        </h1>
        <div className="flex">

          <div className="Single-img">
            <img
              src={data.strMealThumb}
              alt={data.strMeal}
              style={{ width: '20rem', borderRadius: '10%' }}
            />
          </div>

          <div className="contain">
            <button
              type="button"
              className="btn btn-success"
              onClick={() => setActive('ingredient')}
            >
              Ingredient
            </button>
            &nbsp;
            <button
              type="button"
              className="btn btn-success"
              onClick={() => setActive('instruction')}
            >
              Instruction
            </button>

            {active === 'ingredient' ? (
              <div className="ingredient">
                <div>{data.strIngredient1} = {data.strMeasure1}</div>
                <div>{data.strIngredient2} = {data.strMeasure2}</div>
                <div>{data.strIngredient3} = {data.strMeasure3}</div>
                <div>{data.strIngredient4} = {data.strMeasure4}</div>
                <div>{data.strIngredient5} = {data.strMeasure5}</div>
                <div>{data.strIngredient6} = {data.strMeasure6}</div>
                <div>{data.strIngredient7} = {data.strMeasure7}</div>
                <div>{data.strIngredient8} = {data.strMeasure8}</div>
                <div>{data.strIngredient9} = {data.strMeasure9}</div>
                <div>{data.strIngredient10} = {data.strMeasure10}</div>
                <div>{data.strIngredient11} = {data.strMeasure11}</div>
                <div>{data.strIngredient12} = {data.strMeasure12}</div>
                <div>{data.strIngredient13} = {data.strMeasure13}</div>
                <div>{data.strIngredient14} = {data.strMeasure14}</div>
              </div>
            ) : (
              <p className="instruction">{data.strInstructions}</p>
            )}
          </div>
        </div>
        <br /><br /><br /><br /><br /><br />
        <TrendingSlider />
      </div>
    </>
  );
};
