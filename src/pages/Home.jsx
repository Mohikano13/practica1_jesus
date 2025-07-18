import { useEffect, useState } from 'react'
import MovieCard from '../components/MovieCard'

function Home() {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch('/movies.json')
      .then(res => res.json())
      .then(data => setMovies(data))
  }, [])

  return (
    <div>
      <h1>Películas</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  )
}

export default Home