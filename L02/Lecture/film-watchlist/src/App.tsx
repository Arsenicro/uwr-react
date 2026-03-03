import { useState } from 'react'
import Card from './components/Card/Card'
import { Header } from './components/Header'

import beauty from './img/beauty.jpeg'
import hercules from './img/hercules.jpg'
import lion from './img/lion.jpg'
import mermaid from './img/mermaid.jpg'
import mulan from './img/mulan.jpg'

interface Movie {
  id: string
  title: string
  productionYear?: number
  backgroundImage: string
  done?: boolean
}


const initialMovies: Movie[] = [
  { id: crypto.randomUUID(), title: 'Beauty and the Beast', productionYear: 1991, backgroundImage: beauty, done: true },
  { id: crypto.randomUUID(), title: 'The Little Mermaid', productionYear: 1989, backgroundImage: mermaid, done: false },
  { id: crypto.randomUUID(), title: 'The Lion King', backgroundImage: lion, done: false },
  { id: crypto.randomUUID(), title: 'Hercules', productionYear: 1997, backgroundImage: hercules, done: false },
  { id: crypto.randomUUID(), title: 'Mulan', productionYear: 1998, backgroundImage: mulan, done: true },
]

function App() {
  const [movies, setMovies] = useState<Movie[]>(initialMovies)
  const [showOnlyWatched, setShowOnlyWatched] = useState(false)
  const [filter, setFilter] = useState('The')

  function toggleMovieDone(id: string) {
    setMovies(movies.map(movie => movie.id === id ? { ...movie, done: !movie.done } : movie))
  }

  return (
    <>
      <Header>Disney Watchlist!</Header>
      <div className="filter-wrapper">
        <input className="filter-input" placeholder="Search movies..." value={filter} onChange={(e) => setFilter(e.target.value)} />{/* Podejście kontrolowane, controlled input, cotrolled component */}
        <button className="filter-button" onClick={() => setShowOnlyWatched(prev => !prev)}>
          Show only watched
        </button>
      </div>
      <main>
        {movies
          .filter(movie => !showOnlyWatched || movie.done)
          .filter(movie => movie.title.toLowerCase().includes(filter.toLowerCase()))
          .map(({ id, ...movie }) =>
          (
            <Card
              key={id}
              {...movie}
              toggleDone={() => toggleMovieDone(id)}
            />
            /*             <Card
                          key={movie.id}
                          title={movie.title}
                          productionYear={movie.productionYear}
                          backgroundImage={movie.backgroundImage}
                          done={movie.done}
                          toggleDone={() => toggleMovieDone(movie.id)}
                        /> */
          )
          )}
        {/*  {
          [
            <Card title="Beauty and the Beast" productionYear={1991} backgroundImage={beauty} done={true} />,
            <Card title="The Little Mermaid" productionYear={1989} backgroundImage={mermaid} done={false} />,
            <Card title="The Lion King" backgroundImage={lion} done={false} />,
            <Card title="Hercules" productionYear={1997} backgroundImage={hercules} done={false} />,
            <Card title="Mulan" productionYear={1998} backgroundImage={mulan} done={false} />
          ]
        } */}
      </main>
    </>
  )
}

export default App