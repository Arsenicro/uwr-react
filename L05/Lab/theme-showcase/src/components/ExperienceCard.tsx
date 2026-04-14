import type { Experience } from '../model'

function ExperienceCard({ experience }: { experience: Experience[] }) {
  return (
    <div className="card">
      <h3 className="card-heading">Experience</h3>
      <div className="experience-list">
        {experience.map((exp) => (
          <div key={exp.company} className="experience-item">
            <div>
              <p className="experience-role">{exp.role}</p>
              <p className="experience-company">{exp.company}</p>
            </div>
            <span className="experience-period">{exp.period}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ExperienceCard
