import s from './ContactInfo.module.css'

function ContactInfo({ phone, email, website }: {
  phone: string
  email: string
  website: string
}) {
  return (
    <div className={s.root}>
      <p className={s.item}>{phone}</p>
      <p className={s.item}>{email}</p>
      <p className={s.item}>{website}</p>
    </div>
  )
}

export default ContactInfo
