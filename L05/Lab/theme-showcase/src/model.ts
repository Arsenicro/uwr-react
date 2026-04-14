export const themes = ["light", "dark", "midnight"] as const;

export type ThemeMode = (typeof themes)[number];

export const skillCategories = [
  "language",
  "framework",
  "tool",
  "soft",
] as const;

export type SkillCategory = (typeof skillCategories)[number];

export type Skill = {
  name: string;
  category: SkillCategory;
};

export type Experience = {
  role: string;
  company: string;
  period: string;
};
