import { useState } from "react"
import CardProductionYear from "./CardProductionYear"
import CardTitle from "./CardTitle"

interface Props {
  title: string
  productionYear?: number
  backgroundImage: string
  done?: boolean
}

/*

function useState(initialValue: any) {
  let state = initialValue

  function setState(newValue: any) {
    state = newValue
    render()
  }

  return [state, setState]
}

*/

let numberOfRenders = 0

function Card({ title, productionYear, backgroundImage, done = false }: Props) {
  const [state, setState] = useState(false);

  console.log(numberOfRenders++)

  /*   if (done) {
      return (
        <div className="card-wrapper card--watched">
          <div
            className="card"
            style={{
              backgroundImage: `url(${backgroundImage})`,
            }}
          >
            <CardTitle title={title} />
            <CardProductionYear productionYear={productionYear} />
          </div>
          <button className="card__button">
            Mark as watched
          </button>
        </div>
      )
    } */

  //onst containerClassName = done ? 'card-wrapper card--watched' : 'card-wrapper'
  const containerClassName = `card-wrapper ${state ? 'card--watched' : ''}`
  //const containerClassName = `card-wrapper ${done && 'card--watched'}`  -- Może prowadzić do błędów

  const [number, setNumber] = useState(0)

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log('click', e.target)
    console.log(state)
    setState(!state)
    setState(!state) // setState(prev => !prev)  -- Polecane podejście, jeśli nowy stan zależy od poprzedniego stanu
    console.log(number)
    setNumber(prev => prev + 1)
    setNumber(prev => prev + 1)
    setNumber(prev => prev + 5)
    setNumber(prev => prev + 1) // Polecane podejście, jeśli nowy stan zależy od poprzedniego stanu
    /*     setTimeout(() => {
          alert(number)
        }, 1000) */
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
        {/* {productionYear ? <CardProductionYear productionYear={productionYear} /> : null} */}
        {productionYear && <CardProductionYear productionYear={productionYear} />}
      </div>
      <button className="card__button" onClick={handleClick}>
        {state ? 'Mark as unwatched' : 'Mark as watched'}
      </button>
      {false}
      {null}
      {undefined}
      {/* {0}  wyświetli 0 w DOM*/}
    </div>
  )
}

export default Card