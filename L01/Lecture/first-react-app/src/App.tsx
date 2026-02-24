import Card from './Card'
import { Header } from './Header'

import beauty from './img/beauty.jpeg'
import hercules from './img/hercules.jpg'
import lion from './img/lion.jpg'
import mermaid from './img/mermaid.jpg'
import mulan from './img/mulan.jpg'



function App() {
  return (<>
    <Header><h1>My Favorite Disney!</h1></Header>
    <main>
      <Card title="Beauty and the Beast" productionYear={1991} backgroundImage={beauty} />
      <Card title="The Little Mermaid" productionYear={1989} backgroundImage={mermaid} />
      <Card title="The Lion King" productionYear={1994} backgroundImage={lion} />
      <Card title="Hercules" productionYear={1997} backgroundImage={hercules} />
      <Card title="Mulan" productionYear={1998} backgroundImage={mulan} />
    </main>
  </>)
}

export default App


/* function ex() {
  return (
    <Section>
      <SmallBoxes />
    </Section>
  )
}

functon ex2() {
  return (
    <Section>
      <BigBoxes /> 
    </Section>
}


function Section({ children }: { children: ReactNode }) {
  return <div className="section"><h1>Header</h1>{children}</div>
} */