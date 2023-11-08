export interface Tab {
  label: string;
}

export const allTabs = [
  { label: 'Bio' },
  { label: 'Skills' },
  { label: 'Experience' },
];

const [bio, skills, experience] = allTabs;
export const initialTabs = [bio, skills, experience];

export function getNextTab(tab: Tab[]): Tab | undefined {
  const existing = new Set(tab);
  return allTabs.find((tab) => !existing.has(tab));
}
