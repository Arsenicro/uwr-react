interface Props {
  productionYear: number
}

function CardProductionYear({ productionYear }: Props) {
  return (
    <div className="production_year">
      {productionYear}
    </div>
  )
}

export default CardProductionYear