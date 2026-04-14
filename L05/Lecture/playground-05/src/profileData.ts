import type { Skill } from "./types";

export const profile = {
  name: "Alice Young",
  title: "Senior Software Engineer",
  company: "Acme Innovations Inc.",
  phone: "+48 123 456 789",
  email: "alice.young@example.com",
  website: "www.aliceyoung.dev",
  about:
    "Passionate engineer with over 8 years of experience in building scalable web applications. I specialize in React ecosystems and performance optimization, always focusing on delivering clean, maintainable code and exceptional user experiences.",
};

export const skills: Skill[] = [
  { name: "React.js", category: "technical" },
  { name: "TypeScript", category: "technical" },
  { name: "Frontend Development", category: "frontend" },
  { name: "UI/UX Design", category: "frontend" },
  { name: "Project Management", category: "soft" },
  { name: "Agile", category: "soft" },
];
