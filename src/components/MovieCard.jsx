import React from 'react'
import { FaStar } from "react-icons/fa6";
import { VscHeart, VscHeartFilled } from "react-icons/vsc";
import { GoCheckCircle, GoCheckCircleFill } from "react-icons/go";
import { HiOutlineMinusCircle } from "react-icons/hi2";
import { HiOutlinePencilAlt } from "react-icons/hi";

const MovieCard = ({ movie, onSelect, onDelete, onEdit, onFavorite, onWatch }) => {

  return (
    <div className='flex flex-col gap-3 relative transition-transform duration-300 hover:scale-105'>
      <div className='relative aspect-[3/4] rounded-2xl overflow-hidden'>
        <img
          className='w-full h-full object-cover'
          src={movie.dikeyURL}
          alt={movie.filmName}
        />
        <div className='bg-gray-100 rounded-full p-1 absolute top-2 right-2 cursor-pointer transition-transform duration-300 hover:scale-110'>
          {
            movie.isFavorite ? <VscHeartFilled onClick={onFavorite} className='text-red-600 text-xl' />  : <VscHeart onClick={onFavorite} className='text-red-600 text-xl' />
          }
        </div>
        <div
          onClick={onEdit}
          className='bg-gray-100 rounded-full p-1 absolute top-2 left-2 cursor-pointer transition-transform duration-300 hover:scale-110'
        >
          <HiOutlinePencilAlt className='text-lg text-orange-600' />
        </div>
        <div
          onClick={onDelete}
          className='bg-gray-100 rounded-full p-1 absolute bottom-2 left-2 cursor-pointer transition-transform duration-300 hover:scale-110'
        >
          <HiOutlineMinusCircle className='text-lg text-red-600' />
        </div>
        <div className='bg-gray-100 rounded-full p-1 absolute bottom-2 right-2 cursor-pointer transition-transform duration-300 hover:scale-110'>
          {
            movie.isWatched ? <GoCheckCircleFill onClick={onWatch} className='text-xl text-green-900' /> : <GoCheckCircle onClick={onWatch} className='text-xl text-green-900' />
          }
          
        </div>
      </div>
      <div className='flex flex-col gap-1'>
        <p onClick={onSelect} className='font-semibold cursor-pointer'>
          {movie.filmName}
        </p>
        <p className='flex items-center gap-1'>
          <FaStar className='text-yellow-400' />
          {movie.imdb} / 10
        </p>
      </div>

    </div>
  )
}

export default MovieCard
