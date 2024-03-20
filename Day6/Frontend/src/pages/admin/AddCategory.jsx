// AddCategory.js
import React, { useState } from 'react';
import '../../assets/css/Admin.css'
import Sidebarr from './adminComponents/Sidebarr';

function AddCategory({ addCategory }) {
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (category.trim() !== '') {
      addCategory(category); // Call the addCategory function passed from App
      console.log(category);
      setCategory('');
    }
  };

  return (
    <>
    <Sidebarr/>
    <div className='add-category-container'>
      <h2>Add Category</h2>
      <form onSubmit={handleSubmit} className='category-form'>
        <input
          type="text"
          placeholder="Category Name"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <button type="submit" className='category-submit'>Add Category</button>
      </form>
    </div>
    </>
  );
}
export default AddCategory;