import CardProductionYear from "./CardProductionYear"
import CardTitle from "./CardTitle"

interface Props {
  title: string
  productionYear?: number
  backgroundImage: string
  done?: boolean
  toggleDone: () => void
}


function Card({ title, productionYear, backgroundImage, done = false, toggleDone }: Props) {
  /*   const [movie, setMovie] = useState({
      title,
      productionYear,
      backgroundImage,
      done
    }) */

  /*

  const [person, setPerson] = useState({
    name: "Alice",
    surname: "Young",
    address: {
      city: {
        name: "New York",
        postcode: '123-123'
      },
      country: 'USA'
    }

  })

  person.address.city.postcode = '123-456' // W immerze zadziała 

  setPerson({...person, address: {...person.address, city: {...person.address.city, postcode: '123-456' }}})

  */


  const containerClassName = `card-wrapper ${done ? 'card--watched' : ''}`


  const handleClick = () => {
    //setMovie({ ...movie, done: !movie.done }); // Przekazanie nowego obiektu!
    toggleDone()
  }

  return (
    <div className={containerClassName}>
      <div
        className="card"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <CardTitle title={title} />
        {productionYear && <CardProductionYear productionYear={productionYear} />}
      </div>
      <button className="card__button" onClick={handleClick}>
        {done ? 'Mark as unwatched' : 'Mark as watched'}
      </button>
    </div>
  )
}

export default Card