export type ThemeMode = "light" | "dark";

export const categories = ["technical", "frontend", "soft", "backend"] as const;

export type SkillCategory = (typeof categories)[number];

export type Skill = {
  name: string;
  category: SkillCategory;
};
