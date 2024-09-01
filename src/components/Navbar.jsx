import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export const Navbar = () => {

  const navigate = useNavigate()
  const [input, setInput] = useState('')

  const handleSubmit =(e)=>{
    e.preventDefault();
    navigate(`/search/${input}`);
  }

  return (
    <div className="nav">
      <div className="left">
        <Link to='/' className='link'>
        <h1>Recipe-App</h1>
        </Link>
      </div>


      <div className="search">
        <form onSubmit={handleSubmit} className='form'>
            <input type="text" placeholder="Search..." onChange={(e)=>setInput(e.target.value)}/>
        </form>
      </div>


      <div className="right">
        <Link to="/categories/indian" >
          <div>Indian</div>
        </Link>
        <Link to="/categories/american" >
          <div>American</div>
        </Link>
        <Link to="/categories/british" >
          <div>British</div>
        </Link>
        <Link to="/categories/chinese" >
          <div>Chinese</div>
        </Link>
        <Link to="/categories/thai" >
          <div>Thai</div>
        </Link>
      </div>


    </div>
  );
};
