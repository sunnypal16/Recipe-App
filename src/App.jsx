import { Home } from './components/Home';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { RecipeId } from './components/RecipeId';
import { Categories } from './components/Categories';
import { SearchElement } from './components/SearchElement';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:idMeal" element={<RecipeId />} />
          <Route path="/categories/:name" element={<Categories />} /> {/* Correct dynamic route */}
          <Route path= "/search/:searchTerm" element={<SearchElement/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
