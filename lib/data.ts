import ksCoverImg from "@/app/assets/ks-cover-img.png";
import designerMonkCoverImg from "@/app/assets/the-desM-cover-img.png";
import visualImageOne from "@/app/assets/visual/Screenshot 2026-09-04 224630.png";
import visualImageTwo from "@/app/assets/visual/Screenshot 2026-09-04 224707.png";
import visualImageThree from "@/app/assets/visual/Screenshot 2026-09-04 224731.png";
import visualImageFour from "@/app/assets/visual/Screenshot 2026-09-04 224803.png";
import visualCampaignPoster from "@/app/assets/visual/campaign poster.jpg";
import visualCampaignPosterTwo from "@/app/assets/visual/campaign poster2.jpg";
import visualStory from "@/app/assets/visual/story.png";

export const services = [
  { number: "01", label: "DIGITAL", slug: "digital", title: "Websites & digital experiences engineered to perform.", tone: "lavender" },
  { number: "02", label: "VISUAL", slug: "visual", title: "Brand identities, graphics & visual systems that get remembered.", tone: "lime" },
  { number: "03", label: "CONTENT", slug: "content", title: "Video, reels & creative content built for attention.", tone: "coral" },
  { number: "04", label: "SOCIAL", slug: "social", title: "Strategy, content & management that keeps your brand moving.", tone: "sky" },
  { number: "05", label: "GROWTH", slug: "growth", title: "Marketing systems designed to turn visibility into growth.", tone: "yellow" },
];

export type PortfolioProject = {
  title: string;
  description: string;
  categories: string;
  image?: string;
  images?: string[];
  video?: string;
  url?: string;
  year?: string;
  client?: string;
  type?: string;
};

export type PortfolioCategory = {
  number: string;
  label: string;
  title: string;
  description: string;
  tone: string;
  projects: PortfolioProject[];
};

export const portfolioCategories: Record<string, PortfolioCategory> = {
  digital: {
    number: "01",
    label: "DIGITAL",
    title: "Digital / Web And App Development",
    description: "Websites, applications and digital experiences built to make the next move matter.",
    tone: "lavender",
    projects: [
      {
        title: "KnownStrangers",
        description: "A sharper identity and digital home for a considered retail world.",
        categories: "Branding / E-Commerce / Web Design",
        image: ksCoverImg.src,
        url: "https://knownstrangers.in/",
        type: "E-commerce website",
      },
      {
        title: "The Designer Monk",
        description: "A digital experience for a creative practice in progress.",
        categories: "Web Development / Creative / Marketing",
        image: designerMonkCoverImg.src,
        url: "https://thedesignermonk.in/",
        type: "Website",
      },
    ],
  },
  visual: {
    number: "02",
    label: "VISUAL",
    title: "Visual / Graphic Design",
    description: "Identity systems, graphics and visual work shaped for people to remember.",
    tone: "lime",
    projects: [
      {
        title: "Graphic Designing",
        description: "Brand identity, content and social design work.",
        categories: "Brand Identity / Content / Social",
        images: [
          visualImageOne.src,
          visualImageTwo.src,
          visualImageThree.src,
          visualImageFour.src,
          visualCampaignPoster.src,
          visualCampaignPosterTwo.src,
          visualStory.src,
        ],
        type: "Visual design",
      },
    ],
  },
  content: {
    number: "03",
    label: "CONTENT",
    title: "Content / Production",
    description: "Edited video, reels and motion-led content made for attention and action.",
    tone: "coral",
    projects: [],
  },
  social: {
    number: "04",
    label: "SOCIAL",
    title: "Social / Management",
    description: "Social strategy, content systems and account management that keep brands moving.",
    tone: "sky",
    projects: [],
  },
  growth: {
    number: "05",
    label: "GROWTH",
    title: "Growth / Marketing",
    description: "Campaigns and marketing systems designed to turn visibility into growth.",
    tone: "yellow",
    projects: [],
  },
};

export const projects = [
  { number: "01", title: "KnownStrangers", categories: "Branding / E-Commerce / Web Design", description: "A sharper identity and digital home for a considered retail world.", tone: "violet" },
  { number: "02", title: "Graphic Designing", categories: "Brand Identity / Content / Social", description: "A placeholder case study for a future brand with somewhere to go.", tone: "orange" },
  { number: "03", title: "The Designer Monk", categories: "Web Development / Creative / Marketing", description: "A placeholder case study for a digital experience in progress.", tone: "green" },
];

export const process = [
  ["01", "DISCOVER", "We understand your brand, audience and goals."],
  ["02", "DEFINE", "We define the direction, strategy and creative approach."],
  ["03", "DESIGN", "We turn the strategy into a strong visual experience."],
  ["04", "BUILD", "We bring the experience to life using modern technology."],
  ["05", "LAUNCH", "We launch, measure and improve."],
] as const;
