import s from './ProfileHeader.module.scss'

function ProfileHeader({ name, title, company }: {
  name: string
  title: string
  company: string
}) {
  const initials = name.split(' ').map((w) => w[0]).join('')

  return (
    <div className={s.root}>
      <div className={s.avatar}>{initials}</div>
      <h1 className={s.name}>{name}</h1>
      <p className={s.title}>{title}</p>
      <p className={s.company}>{company}</p>
    </div>
  )
}

export default ProfileHeader
