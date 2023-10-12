import React from 'react';
import './SearchBar.css';
import { UilSearch } from '@iconscout/react-unicons'

const SearchBar = () => {
  return (
    <div className='search-group'>
      <input className='search-input' type="text" placeholder="Search Location"/>
      <button className='search-button'>
        <UilSearch size={18} />
      </button>
    </div>
  )
}

export default SearchBar