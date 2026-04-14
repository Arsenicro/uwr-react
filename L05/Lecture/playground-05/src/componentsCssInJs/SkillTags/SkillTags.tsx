import styled from '@emotion/styled'
import type { Skill, SkillCategory } from '../../types'

const Header = styled.h2`
  margin: 0 0 8px;
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;

  color: ${({ theme }) => theme.heading};
`

/* const Header = styled.h2({
  margin: '0 0 8px',
  fontSize: '0.8rem',
  fontWeight: 700,
  textTransform: 'uppercase',
  letterSpacing: '0.08em',
}) */

const Chips = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`

const Chip = styled.span<{ category: SkillCategory }>`
  padding: 4px 12px;
  border-radius: 999px;
  font-size: 0.8rem;
  font-weight: 500;
  border: 1px solid;

  background: ${({ theme, category }) => theme.chip[category].bg};
  color: ${({ theme, category }) => theme.chip[category].text};
  border-color: ${({ theme, category }) => theme.chip[category].border};
`

function SkillTags({ skills }: { skills: Skill[] }) {
  return (
    <div>
      <Header>Skills</Header>
      <Chips>
        {skills.map((skill) => (
          <Chip key={skill.name} category={skill.category}>
            {skill.name}
          </Chip>
        ))}
      </Chips>
    </div>
  )
}

export default SkillTags
