import React from 'react';
import { UilSearch } from '@iconscout/react-unicons'

const SearchBar = () => {
  return (
    <div className='flex items-center px-6 py-3 w-full h-full bg-[#2499CB] rounded-lg border-none outline-none'>
      <input className='flex-grow border-none outline-none bg-[#2499CB] text-sm text-white font-normal break-words placeholder:placeholder-[#C4C4C4]' type="text" placeholder="Search Location" />
      <button className='bg-transparent border-none rounded-none text-white cursor-pointer'>
        <UilSearch size={18} />
      </button>
    </div>
  )
}

export default SearchBar