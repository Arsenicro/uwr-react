function ProfileCard({ name, title, location, avatar }: {
  name: string
  title: string
  location: string
  avatar: string
}) {
  return (
    <div className="card profile-card">
      <div className="profile-avatar">{avatar}</div>
      <div>
        <h2 className="profile-name">{name}</h2>
        <p className="profile-title">{title}</p>
        <p className="profile-location">{location}</p>
      </div>
    </div>
  )
}

export default ProfileCard
