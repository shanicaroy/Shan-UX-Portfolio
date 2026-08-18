// ---------------------------------------------------------------------------
// EXPERIENCE
// PLACEHOLDER DATA. Only the EY entry is real (taken from the existing Webflow
// site); every "Company Name" row is a placeholder to be replaced. Years are
// illustrative — nothing here should be treated as a verified employment record.
// ---------------------------------------------------------------------------

export type ExperienceEntry = {
  year: string;
  company: string;
  role: string;
};

export const experience: ExperienceEntry[] = [
  { year: "Present", company: "EY", role: "Product Designer, Salesforce" },
  { year: "2025", company: "Company Name", role: "Product Designer" }, // PLACEHOLDER
  { year: "2024", company: "Company Name", role: "Senior UX Designer" }, // PLACEHOLDER
  { year: "2021", company: "Profisea Labs", role: "UX Designer" },
];
