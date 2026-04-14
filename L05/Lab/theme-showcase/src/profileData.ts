import type { Experience, Skill } from "./model";

export const profile = {
  name: "Alice Young",
  title: "Senior Software Engineer",
  location: "Wrocław, Poland",
  avatar: "AY",
  bio: "Passionate engineer with over 8 years of experience in building scalable web applications. I specialize in React ecosystems and performance optimization, always focusing on delivering clean, maintainable code and exceptional user experiences.",
  email: "alice.young@example.com",
  github: "github.com/aliceyoung",
  linkedin: "linkedin.com/in/aliceyoung",
};

export const skills: Skill[] = [
  { name: "TypeScript", category: "language" },
  { name: "Python", category: "language" },
  { name: "SQL", category: "language" },
  { name: "React", category: "framework" },
  { name: "Node.js", category: "framework" },
  { name: "Next.js", category: "framework" },
  { name: "Docker", category: "tool" },
  { name: "Git", category: "tool" },
  { name: "Figma", category: "tool" },
  { name: "Communication", category: "soft" },
  { name: "Mentoring", category: "soft" },
];

export const experience: Experience[] = [
  {
    role: "Senior Developer",
    company: "Lunar Logic",
    period: "2023 – present",
  },
  {
    role: "Frontend Engineer",
    company: "Netguru",
    period: "2020 – 2023",
  },
  {
    role: "Junior Developer",
    company: "STX Next",
    period: "2018 – 2020",
  },
];
