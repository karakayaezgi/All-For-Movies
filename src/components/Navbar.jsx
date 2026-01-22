import React from 'react'
import { GoSearch } from "react-icons/go";
import { TiDocumentText } from "react-icons/ti";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";
const Navbar = ({onShowAll, onShowFavorites, onShowWatched, filterMode, onInputText, inputText, onSearchMovie}) => {
  return (
    <div className='shadow-md gap-2 flex justify-evenly p-4 sticky top-0 z-50 items-center bg-white'>
      <div className={`cursor-pointer ${filterMode === "all" ? `bg-gray-300 p-2 rounded-3xl` : ``}`} onClick={onShowAll}><IoHomeOutline className="size-7" /></div>
      <div className='flex items-center bg-indigo-50 p-2 rounded-2xl cursor-pointer '>
        <input value={inputText} onChange={onInputText} placeholder='Film veya kategori arayınız...' className='outline-0 md:w-100' type="text" />
        <div onClick={onSearchMovie} className='bg-fuchsia-700 rounded-full p-2'><GoSearch className='font-extrabold text-white' /></div>
      </div>
      <div className='flex gap-3 items-center cursor-pointer'>
        <div onClick={onShowWatched} className={`flex gap-1 items-center transition-transform duration-300 hover:scale-110 ${filterMode == "watched" ? `bg-gray-300 p-2 rounded-3xl` : ``}`}>
          <TiDocumentText className='size-7' />
          <p className='hidden sm:inline'>İzlediklerim</p>
        </div>
        <div onClick={onShowFavorites} className={`flex gap-1 items-center transition-transform duration-300 hover:scale-110 ${filterMode == "favorites" ? `bg-gray-300 p-2 rounded-3xl` : ``}`}>
          <IoMdHeartEmpty className='size-7' />
          <p className='hidden sm:inline'>Favorilerim</p>
        </div>

      </div>
    </div>
  )
}

export default Navbar
