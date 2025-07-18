import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

function MovieDetail() {
  const { id } = useParams()
  const [movie, setMovie] = useState(null)

  useEffect(() => {
    fetch('/movies.json')
      .then(res => res.json())
      .then(data => {
        const found = data.find(m => m.id.toString() === id)
        setMovie(found)
      })
  }, [id])

  if (!movie) return <p>Cargando...</p>

  return (
    <div>
      <h1>{movie.title}</h1>
    </div>
  )
}

export default MovieDetail