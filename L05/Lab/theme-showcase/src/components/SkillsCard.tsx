import { skillCategories, type Skill, type SkillCategory } from '../model'

const categoryLabels: Record<SkillCategory, string> = {
  language: 'Languages',
  framework: 'Frameworks',
  tool: 'Tools',
  soft: 'Soft Skills',
}

function SkillsCard({ skills }: { skills: Skill[] }) {
  const grouped = skillCategories.map((cat) => ({
    category: cat,
    label: categoryLabels[cat],
    items: skills.filter((s) => s.category === cat),
  })).filter((g) => g.items.length > 0)

  return (
    <div className="card">
      <h3 className="card-heading">Skills</h3>
      {grouped.map((group) => (
        <div key={group.category} className="skill-group">
          <p className="skill-group-label">{group.label}</p>
          <div className="skill-chips">
            {group.items.map((s) => (
              <span key={s.name} className={`chip chip-${s.category}`}>
                {s.name}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default SkillsCard
