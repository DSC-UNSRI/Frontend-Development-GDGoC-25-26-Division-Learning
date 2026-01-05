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
import {
  Code2,
  Palette,
  Smartphone,
  Zap,
  Github,
  Instagram,
  Linkedin,
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
    github: "github.com/ak7prisma",
    image: akprisma,
  },

  {
    name: "Nuredy Rahma Gunawan",
    major: "Sistem Informasi",
    batch: "24",
    instagram: "https://www.instagram.com/nuredyrama__",
    linkedin: "https://www.linkedin.com/in/nuredy-rahma-gunawan-46bb29302/",
    github: "https://github.com/awann-cloud",
    image: awan_cloud,
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
    quote: "ckptw",
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

export { features, coreTeam, members, socialLinks };
