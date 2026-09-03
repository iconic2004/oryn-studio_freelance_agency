export const services = [
  { number: "01", label: "DIGITAL", title: "Websites & digital experiences engineered to perform.", tone: "lavender" },
  { number: "02", label: "VISUAL", title: "Brand identities, graphics & visual systems that get remembered.", tone: "lime" },
  { number: "03", label: "CONTENT", title: "Video, reels & creative content built for attention.", tone: "coral" },
  { number: "04", label: "SOCIAL", title: "Strategy, content & management that keeps your brand moving.", tone: "sky" },
  { number: "05", label: "GROWTH", title: "Marketing systems designed to turn visibility into growth.", tone: "yellow" },
];

export const projects = [
  { number: "01", title: "KnownStrangers", categories: "Branding / E-Commerce / Web Design", description: "A sharper identity and digital home for a considered retail world.", tone: "violet" },
  { number: "02", title: "Project Nova", categories: "Brand Identity / Content / Social", description: "A placeholder case study for a future brand with somewhere to go.", tone: "orange" },
  { number: "03", title: "Project Arc", categories: "Web Development / Creative / Marketing", description: "A placeholder case study for a digital experience in progress.", tone: "green" },
];

export const process = [
  ["01", "DISCOVER", "We understand your brand, audience and goals."],
  ["02", "DEFINE", "We define the direction, strategy and creative approach."],
  ["03", "DESIGN", "We turn the strategy into a strong visual experience."],
  ["04", "BUILD", "We bring the experience to life using modern technology."],
  ["05", "LAUNCH", "We launch, measure and improve."],
] as const;
