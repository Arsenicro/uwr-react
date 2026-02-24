interface Props {
  title: string
  productionYear: number
  backgroundImage: string
}

function CardTitle({ title }: { title: string }) {
  return <h2 className="title--text">{title}</h2>
}

function CardProductionYear({ productionYear }: { productionYear: number }) {
  return <div className="production_year">{productionYear}</div>
}

function Card({ title, productionYear, backgroundImage }: Props) {
  const backgroundImageStyle = {
    backgroundImage: `url(${backgroundImage})`
  }



  //const titleHeader = <h2 className="title--text">{title}</h2> // Nie polecane, lepiej bezpośrednio w return 

  return (
    <div
      className="card"
      style={backgroundImageStyle}
    >
      <div className="title">
        <CardTitle title={title} />
      </div>
      <CardProductionYear productionYear={productionYear} />
    </div>
  )
}

export default Card