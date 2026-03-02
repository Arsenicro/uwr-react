import CardProductionYear from "./CardProductionYear"
import CardTitle from "./CardTitle"

interface Props {
  title: string
  productionYear: number
  backgroundImage: string
}

function Card({ title, productionYear, backgroundImage }: Props) {
  return (
    <div className="card-wrapper">
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
}

export default Card