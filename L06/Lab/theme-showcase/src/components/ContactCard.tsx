function ContactCard({ email, github, linkedin }: {
  email: string
  github: string
  linkedin: string
}) {
  return (
    <div className="card">
      <h3 className="card-heading">Contact</h3>
      <div className="contact-list">
        <p className="contact-item">
          <span className="contact-label">Email</span>{email}
        </p>
        <p className="contact-item">
          <span className="contact-label">GitHub</span>{github}
        </p>
        <p className="contact-item">
          <span className="contact-label">LinkedIn</span>{linkedin}
        </p>
      </div>
    </div>
  )
}

export default ContactCard
