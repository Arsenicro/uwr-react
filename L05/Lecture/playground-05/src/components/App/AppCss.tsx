import { useState } from 'react'
import { profile, skills } from '../../profileData'
import type { ThemeMode } from '../../types'
import AboutSection from '../AboutSection/AboutSection'
import ContactInfo from '../ContactInfo/ContactInfo'
import ProfileHeader from '../ProfileHeader/ProfileHeader'
import SkillTags from '../SkillTags/SkillTags'
import s from './App.module.css'
import './global.css'

function AppCss() {
  const [theme, setTheme] = useState<ThemeMode>('dark')

  const toggleTheme = () =>
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))

  return (
    <div className={`${s.app} theme-${theme}`}>
      <div className={s.card}>
        <button className={s.themeBtn} onClick={toggleTheme}>
          {theme === 'light' ? '🌙' : '☀️'}
        </button>

        <ProfileHeader
          name={profile.name}
          title={profile.title}
          company={profile.company}
        />

        <hr className={s.divider} />

        <ContactInfo
          phone={profile.phone}
          email={profile.email}
          website={profile.website}
        />

        <hr className={s.divider} />

        <AboutSection text={profile.about} />
        <SkillTags skills={skills} />
      </div>
    </div>
  )
}

export default AppCss
