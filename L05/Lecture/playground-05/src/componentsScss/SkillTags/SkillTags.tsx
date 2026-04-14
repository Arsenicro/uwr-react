import type { Skill, SkillCategory } from '../../types'
import s from './SkillTags.module.css'

const categoryClass: Record<SkillCategory, string> = {
  technical: s.technical,
  frontend: s.frontend,
  soft: s.soft,
}

function SkillTags({ skills }: { skills: Skill[] }) {
  return (
    <div>
      <h2 className={s.title}>Skills</h2>
      <div className={s.chips}>
        {skills.map((skill) => (
          <span
            key={skill.name}
            className={`${s.chip} ${categoryClass[skill.category]}`}
          >
            {skill.name}
          </span>
        ))}
      </div>
    </div>
  )
}

export default SkillTags
