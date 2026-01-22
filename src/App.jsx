import React, { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import LandingSection from './components/LandingSection'
import MovieList from './components/MovieList'
import Modal from './components/Modal'

function App() {
  const [isOpenModal, setIsOpenModal] = useState(false)

  const [selectedMovieId, setSelectedMovieId] = useState(null)

  const [editingMovie, setEditingMovie] = useState(null)

  const [filterMode, setFilterMode] = useState("all")

  const [inputText, setInputText] = useState("")

  const [movies, setMovies] = useState(() => {
    try {
      const stored = localStorage.getItem("movies")
      return stored ? JSON.parse(stored) : []
    } catch (err) {
      console.error("LocalStorage bozuk:", err)
      return []
    }
  })



  const deleteMovie = (id) => {
    return setMovies((prev) => prev.filter((movie) => movie.id !== id))
  }

  const editMovie = (id) => {
    setEditingMovie(movies.find((movie) => movie.id == id))
    setIsOpenModal(true)
  }

  const updateMovie = (newMovie) => {
    setMovies((prevMovies) =>
      prevMovies.map((movie) =>
        movie.id == newMovie.id ? newMovie : movie
      )
    )
    setEditingMovie(null)
  }

  const visibleMovies = (() => {
    switch (filterMode) {
      case "search":
        return movies.filter((m) => m.filmName.toLowerCase().includes(inputText.toLowerCase()) || m.category.toLowerCase().includes(inputText.toLowerCase()))
      case "favorites":
        return movies.filter((m) => m.isFavorite)
      case "watched":
        return movies.filter((m) => m.isWatched)
      case "all":
      default:
        return movies
    }

  })()

  const selectedMovie = movies.find((movie) =>
    movie.id == selectedMovieId
  )
  const favoriteMovie = (id) => {
    setMovies((prevMovies) =>
      prevMovies.map((movie) =>
        movie.id == id ? { ...movie, isFavorite: !movie.isFavorite } : movie
      )
    )
  }
  const watchMovie = (id) => {
    setMovies((prevMovies) => 
      prevMovies.map((movie) => 
        movie.id == id ? {...movie, isWatched: !movie.isWatched} : movie
      )
    )
  }
    
  useEffect(() => {
    localStorage.setItem("movies", JSON.stringify(movies))

  }, [movies]);

  return (
    <div className='flex flex-col h-screen'>
      <Navbar onSearchMovie={() => setFilterMode("search")} inputText={inputText} onInputText={(e) => setInputText(e.target.value.trim())} filterMode={filterMode} onShowAll={() => setFilterMode("all")} onShowFavorites={() => setFilterMode("favorites")} onShowWatched={() => setFilterMode("watched")} />
      <LandingSection movie={selectedMovie} onOpenModal={() => setIsOpenModal(true)} />
      <MovieList movies={visibleMovies} onWatchedMovie={watchMovie} onFavoriteMovie={favoriteMovie} onDeleteMovie={deleteMovie} onEditMovie={editMovie} onSelectMovie={(id) => setSelectedMovieId(id)} />
      {
        isOpenModal && (
          <Modal onUpdateMovie={updateMovie} editingMovie={editingMovie} onClose={() => setIsOpenModal(false)} onSubmitMovie={(movie) => {
            return setMovies((prev) => [...prev, movie])
          }} />
        )
      }
    </div>
  )
}

export default App
