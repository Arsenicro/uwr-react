import { useState } from 'react'
import type { ThemeMode } from '../model'
import { experience, profile, skills } from '../profileData'
import AboutCard from './AboutCard'
import ContactCard from './ContactCard'
import ExperienceCard from './ExperienceCard'
import ProfileCard from './ProfileCard'
import SkillsCard from './SkillsCard'
import './styles.css'
import TopBar from './TopBar'

function AppCss() {
  const [theme, setTheme] = useState<ThemeMode>('light')

  return (
    <div className={`app theme-${theme}`}>
      <div className="container">
        <TopBar theme={theme} onThemeChange={setTheme} />
        <ProfileCard
          name={profile.name}
          title={profile.title}
          location={profile.location}
          avatar={profile.avatar}
        />
        <AboutCard text={profile.bio} />
        <SkillsCard skills={skills} />
        <ExperienceCard experience={experience} />
        <ContactCard
          email={profile.email}
          github={profile.github}
          linkedin={profile.linkedin}
        />
      </div>
    </div>
  )
}

export default AppCss
