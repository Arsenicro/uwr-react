import s from './AboutSection.module.scss'

function AboutSection({ text }: { text: string }) {
  return (
    <div>
      <h2 className={s.title}>About Me</h2>
      <p className={s.text}>{text}</p>
    </div>
  )
}

export default AboutSection
