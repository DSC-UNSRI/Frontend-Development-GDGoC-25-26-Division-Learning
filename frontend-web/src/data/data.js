import ello from "@/assets/ello.jpeg";
import akprisma from "@/assets/akprisma.jpg";
import awan_cloud from "@/assets/awan_cloud.jpg";
import deza from "@/assets/deza.jpg";
import enjel from "@/assets/enjel.jpeg";
import parel from "@/assets/parel.jpg";
import atala from "@/assets/atala.jpg";
import aulia from "@/assets/aulia.jpg";
import rillah from "@/assets/rillah.jpg";
import akbar from "@/assets/akbar.jpg";
import faiz from "@/assets/faiz.jpg";
import github from "@/assets/github.png";
import tailwind from "@/assets/tailwind.png";
import react from "@/assets/react.png";
import props from "@/assets/props.png";
import {
  Code2,
  Palette,
  Smartphone,
  Zap,
  Github,
  Instagram,
  Linkedin,
  Layers,
} from "lucide-react";

const features = [
  {
    icon: Code2,
    title: "Modern Technologies",
    description:
      "Learn React, Tailwind, Firebase, and other  modern web development technologies.",
    color: "google-blue",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Create beautiful and intuitive user interfaces with design principles.",
    color: "google-red",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description:
      "Build applications that work seamlessly across all devices and screen sizes.",
    color: "google-yellow",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Optimize web applications for speed and user experience.",
    color: "google-green",
  },
];

const coreTeam = {
  name: "M. Rabyndra Janitra Binello",
  university: "Universitas Sriwijaya",
  major: "Teknik Informatika",
  batch: "23",
  instagram: "instagram.com/ellorabyndra/",
  linkedin: "linkedin.com/in/ello-rabyndra",
  github: "github.com/ElloRabyndra",
  image: ello,
  quote: "Just do your best, and prepare for the worst.",
  isLead: true,
};

const members = [
  {
    name: "Ahmad Kurnia Prisma",
    major: "Teknik Informatika",
    batch: "24",
    instagram: "instagram.com/akprisma",
    linkedin: "https://www.linkedin.com/in/ahmad-kurnia-prisma-1b639a313/",
    github: "https://github.com/ak7prisma",
    image: akprisma,
    quote: "It’s not a bug, it’s a feature.",
  },

  {
    name: "Nuredy Rahma Gunawan",
    major: "Sistem Informasi",
    batch: "24",
    instagram: "https://www.instagram.com/nuredyrama__",
    linkedin: "https://www.linkedin.com/in/nuredy-rahma-gunawan-46bb29302/",
    github: "https://github.com/awann-cloud",
    image: awan_cloud,
    quote: "tidak hanya 1 + 1 untuk menghasilkan 2",
  },
  {
    name: "Achmad Faiz Yudha Ramadhan",
    major: "Sistem Informasi",
    batch: "24",
    instagram: "instagram.com/afaizyr",
    linkedin: "linkedin.com/in/afaizyr/ ",
    github: "github.com/FaizZzhue",
    image: faiz,
    quote: "as always, late to the party",
  },
  {
    name: "Akbar Kurniawan",
    major: "Fisika",
    batch: "23",
    instagram: "instagram.com/akbar_krnwn27",
    linkedin: "linkedin.com/in/akbarkurnia1/",
    github: "github.com/akbar-kurnia1",
    image: akbar,
    quote: "Every challenge is an opportunity to become better",
  },
  {
    name: "Duhairillah",
    major: "Teknik Informatika",
    batch: "25",
    instagram: "instagram.com/_rillah",
    linkedin: "https://www.linkedin.com/in/duhairillah-690679281/",
    github: "github.com/SerenaaaaRN",
    image: rillah,
    quote:
      "No one heard about the tree growing. But when it fell, everyone started talking about it.",
  },
  {
    name: "Deza Arlian",
    major: "Teknik Informatika",
    batch: "24",
    instagram: "instagram.com/dezaarl__/",
    linkedin: "linkedin.com/in/dezaarlian/",
    github: "github.com/dezaarlian",
    image: deza,
    quote: "kalo udah IZIN gapapa, atur se-Brengsek mungkin",
  },
  {
    name: "Aulia Mutiara Sari",
    major: "Kesehatan Masyarakat",
    batch: "25",
    instagram: "instagram.com/auliaamtiara",
    linkedin: "https://www.linkedin.com/in/aulia-mutiara-sari-513a7439a/",
    github: "https://github.com/auliamutiaraa",
    image: aulia,
    quote: "A pretty mindset makes a pretty life.",
  },
  {
    name: "Anjelia Hidayat",
    major: "Sistem Komputer",
    batch: "24",
    instagram: "instagram.com/enjelyaaa_/",
    linkedin: "linkedin.com/in/anjelia-hidayat/",
    github: "https://github.com/enjeliaa",
    image: enjel,
    quote: "stay alive ya",
  },
  {
    name: "Farrel Athaillah Wijaya",
    major: "Teknik Informatika",
    batch: "23",
    instagram: "instagram.com/kokoparel/",
    linkedin: "linkedin.com/in/farrelaw/",
    github: "http://github.com/kokoparel",
    image: parel,
    quote: "adalah pokoknya",
  },
  {
    name: "M Atala Daffa Alfaris",
    major: "Teknik Informatika",
    batch: "25",
    instagram: "instagram.com/atalaa_df/",
    linkedin: "https://www.linkedin.com/in/mataladaffaalfaris/",
    github: "https://github.com/AtalaaDf",
    image: atala,
    quote: "after all this time? always",
  },
];

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com/DSC-UNSRI/Frontend-Development-GDGoC-25-26-Division-Learning",
    color: "hover:bg-foreground hover:text-background",
  },
  {
    name: "Instagram",
    icon: Instagram,
    url: "https://www.instagram.com/gdgunsri/",
    color: "hover:bg-google-red hover:text-primary-foreground",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://www.linkedin.com/company/gdgunsri",
    color: "hover:bg-google-blue hover:text-primary-foreground",
  },
];

const learnings = [
  {
    icon: Code2,
    title: "Git & Github Fundamentals",
    description:
      "The Git & GitHub learning materials cover basic commands, branching, collaborative workflows, and Conventional Commit Messages.",
    color: "google-blue",
    files:
      "https://drive.google.com/file/d/1dTOAEeTLWx87g3ph61OAKIp2PxZ9Dx7r/view?usp=sharing",
    image: github,
    github:
      "https://github.com/DSC-UNSRI/Frontend-Development-GDGoC-25-26-Division-Learning/tree/main/1-version-control-system",
  },
  {
    icon: Palette,
    title: "Tailwind CSS & Javascript ES6",
    description:
      "learning materials cover Tailwind CSS and Javascript ES6 features like let/const and Promise, with portfolio refactor challenges..",
    color: "google-red",
    files:
      "https://drive.google.com/file/d/1URd0PRfXQjRAM7plmel_T8oWd194Lt1w/view?usp=sharing",
    image: tailwind,
    github:
      "https://github.com/DSC-UNSRI/Frontend-Development-GDGoC-25-26-Division-Learning/tree/main/2-fundamentals",
  },
  {
    icon: Smartphone,
    title: "Introduction to React",
    description:
      "The introductory React JS material covers the concepts of SPAs, JSX, and project structure, with component implementation challenges.",
    color: "google-yellow",
    files:
      "https://drive.google.com/file/d/1lgGtqTQH_dJokXzoVO_JMimwGPVfvsis/view?usp=sharing",
    image: react,
    github:
      "https://github.com/DSC-UNSRI/Frontend-Development-GDGoC-25-26-Division-Learning/tree/main/3-react-intro",
  },
  {
    icon: Layers,
    title: "React Components & Props",
    description:
      "Learning materials cover functional components, props for data communication, and dynamic list rendering using the map() method.",
    color: "google-green",
    files:
      "https://drive.google.com/file/d/1Kr02DWphkazli1440uKqApUBhxDabFnU/view?usp=sharing",
    image: props,
    github:
      "https://github.com/DSC-UNSRI/Frontend-Development-GDGoC-25-26-Division-Learning/tree/main/4-react-components-props",
  },
];

export { features, coreTeam, members, socialLinks, learnings };
