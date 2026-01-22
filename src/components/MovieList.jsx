import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({ movies, onDeleteMovie, onEditMovie, onSelectMovie, onFavoriteMovie, onWatchedMovie}) => {


  return (
    <div className='flex flex-col gap-5 p-12'>
      <h1 className='text-3xl font-semibold mb-5'>Filmler</h1>
      <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8'>
        {
          movies.length == 0 ? "Filmler boş!" :
          movies?.map((movie) => (
            <MovieCard key={movie.id} onWatch={() => onWatchedMovie(movie.id)} onFavorite={() => onFavoriteMovie(movie.id)} movie={movie}  onSelect={() => onSelectMovie(movie.id)} onDelete={() => onDeleteMovie(movie.id)} onEdit={() => onEditMovie(movie.id)}/>
          ))
        }
      </div>

    </div>
  )
}

export default MovieList
