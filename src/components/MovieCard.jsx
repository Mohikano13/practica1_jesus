import { Link } from 'react-router-dom'

function MovieCard({ movie }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', width: '200px' }}>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        width="150"
      />
      <h3>{movie.title}</h3>
      <Link to={`/movie/${movie.id}`}>
        <button>+Info</button>
      </Link>
    </div>
  )
}

export default MovieCard