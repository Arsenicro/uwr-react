interface Props {
  title: string
}

function CardTitle({ title }: Props) {
  return (
    <div className="title">
      <h2 className="title--text">
        {title}
      </h2>
    </div>
  )
}

export default CardTitle