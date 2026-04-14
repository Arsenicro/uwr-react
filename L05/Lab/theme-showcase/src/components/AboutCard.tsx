function AboutCard({ text }: { text: string }) {
  return (
    <div className="card">
      <h3 className="card-heading">About</h3>
      <p className="about-text">{text}</p>
    </div>
  )
}

export default AboutCard
