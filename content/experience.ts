// ---------------------------------------------------------------------------
// EXPERIENCE
// Taken from Shanica's resume. Each row is the year a role began; EY appears
// twice because of the June 2025 promotion from Senior UX Designer to UX Lead.
// ---------------------------------------------------------------------------

export type ExperienceEntry = {
  year: string;
  company: string;
  role: string;
};

export const experience: ExperienceEntry[] = [
  { year: "2025", company: "EY", role: "UX Lead" },
  { year: "2023", company: "EY", role: "Senior UX Designer" },
  { year: "2021", company: "Bhanzu", role: "UX Designer" },
  { year: "2021", company: "VirtuBox Infotech", role: "UI/UX Designer" },
  { year: "2019", company: "Unschool", role: "Senior Design Instructor" },
];
