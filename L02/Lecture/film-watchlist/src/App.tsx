import Card from './components/Card/Card'
import { Header } from './components/Header'

import beauty from './img/beauty.jpeg'
import hercules from './img/hercules.jpg'
import lion from './img/lion.jpg'
import mermaid from './img/mermaid.jpg'
import mulan from './img/mulan.jpg'



function App() {
  return (
    <>
      <Header><h1>Disney Watchlist!</h1></Header>
      <div className="filter-wrapper">
        <input className="filter-input" placeholder="Search movies..." />
        <button className="filter-button">
          Show only watched
        </button>
      </div>
      <main>
        <Card title="Beauty and the Beast" productionYear={1991} backgroundImage={beauty} />
        <Card title="The Little Mermaid" productionYear={1989} backgroundImage={mermaid} />
        <Card title="The Lion King" productionYear={1994} backgroundImage={lion} />
        <Card title="Hercules" productionYear={1997} backgroundImage={hercules} />
        <Card title="Mulan" productionYear={1998} backgroundImage={mulan} />
      </main>
    </>
  )
}

export default App