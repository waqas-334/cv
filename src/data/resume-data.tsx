import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "WAQAS YOUNIS",
  initials: "WY",
  location: "St. John's, NL, CA",
  locationLink: "https://www.google.com/maps/place/St.+John's,+NL",
  about:
    "Software Engineer focused on building products with extra attention to detail",
  summary:
    "I am an accomplished Software Engineer with a track record of successfully launching multiple products from concept to execution. I excel in leading teams, fostering an environment where individuals can thrive and deliver their best work. My expertise lies primarily in Android, Flutter, and Python, and I have over 5 years of experience as a mobile app developer.",
  avatarUrl: "https://avatars.githubusercontent.com/u/86519858?v=4",
  personalWebsiteUrl: "https://waqasyounis.com",
  contact: {
    email: "waqasyounis334@gmail.com",
    tel: "",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/waqas-334",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/waqas-younis-3587a9119/",
        icon: LinkedInIcon,
      },
      // {
        // name: "X",
        // url: "https://x.com/BartoszJarocki",
        // icon: XIcon,
      // },
    ],
  },
  education: [
    {
      school: "Memorial University of Newfoundland",
      degree: "Master's in Software Engineering",
      start: "Sep 2022",
      end: "Dec 2023",
    },
    {
      school: "International Islamic University Islamabad",
      degree: "Bachelor of Science in Computer Science",
      start: "Sep 2016",
      end: "Oct 2021",
    },
  ],
  work: [
    {
      company: "CoinCircle Inc",
      link: "https://coincircle.com",
      badges: ["Remote"],
      title: "Mobile App Developer",
      logo: ParabolLogo,
      start: "April 2023",
      end: "Present",
      description:
        "Successfully exited my startup venture by negotiating a high six-figure acquisition deal with CoinCircle, and transitioned into a key role within the organization.",
    },
    {
      company: "Self-employeed",
      link: "https://waqasyounis.com",
      badges: ["Indie"],
      title: "Android App Developer",
      logo: ClevertechLogo,
      start: "2017",
      end: "2023",
      description:
        "Designed, developed, and published a Web Browser for the Android platform, accumulating over 2 million downloads. Attained a top search position by leveraging user feedback and strategically implementing sought-after features."
    },
  ],
  skills: [
    "Java",
    "Kotlin",
    "Python",
    "JavaScript",
    "Dart",
    "Node.js",
    "Firebase",
    "Android",
    "Flutter",
    "Git",
    "Docker",
    "CI/CD",
  ],
  projects: [
    {
      title: "Incognito Browser",
      techStack: [
        "Android",
        "Kotlin",
        "Java",
        "WebView",
      ],
      description: "A privacy-focused, lightweight internet browser for Android",
      logo: ConsultlyLogo,
      link: {
        label: "incognitobrowser.app",
        href: "https://incognitobrowser.io/",
      },
    },
    {
      title: "MemeBox",
      techStack: ["Side Project", "Android", "Firebase", "Kotlin", "Java"],
      description:
        "A meme generation app for interactive humor and social engagement.",
      logo: MonitoLogo,
      link: {
        label: "github",
        href: "https://github.com/waqas-334/MemeMakerReborn",
      },
    },

    {
      title: "Vokab",
      techStack: ["Side Project", "Flutter", "Dart"],
      description:
        "A tiny app to help build better vocabulary by using proven strategies like Spaced Repetition.",
      logo: JarockiMeLogo,
      link: {
        label: "website",
        href: "https://vokab.pro",
      },
    },




    {
      title: "Avatarist",
      techStack: ["Side Project", "Flutter", "Dart"],
      description:
        "A fun project to create avatars by combining different body parts",
      logo: JarockiMeLogo,
      link: {
        label: "googleplay",
        href: "https://play.google.com/store/apps/details?id=com.businessapps.avatarmakerapp&hl=en_ZA&gl=US",
      },
    },
    {
      title: "Patient Management",
      techStack: ["Semester Project", "Java",],
      description:
        "A Patient management system that efficiently handles patient records, physician information, and disease profiles, serving as a valuable tool for healthcare institutions.",
      logo: Minimal,
      link: {
        label: "github.com",
        href: "https://github.com/waqas-334/Patient-management-System",
      },
    },
    {
      title: "MUNHouse -Web App",
      techStack: ["Academic Project", "TypeScript", "Next.js", "Node.js", "CI/CD", "MongoDB"],
      description: "Led the development of a property rental platform with a team of 5 students as a final semester project.",
      logo: YearProgressLogo,
      // link: {
        // label: "getyearprogress.com",
        // href: "https://getyearprogress.com/",
      // },
    },
    {
      title: "TownMesh",
      techStack: [
        "Freelance Project",
        "Flutter",
        "Firebase",
      ],
      description:
        "A geo-based social media app to connect and discover new friends and culture.",
      logo: ParabolLogo,
      link: {
        label: "townmesh",
        href: "https://townmesh.com",
      },
    },
    {
      title: "TODOit",
      techStack: [
        "Open Source Project",

        "Android",
        "Java",
        "Kotlin",
      ],
      description:
        "A small shopping list app built using Android Studio and Kotlin, uses MVVM, ROOM and HILT",
      logo: EvercastLogo,
      link: {
        label: "github.com",
        href: "https://github.com/waqas-334/MVVM-TODO-Android-app",
      },
    },
    {
      title: "Calculator Vault",
      techStack: [
        "Indie Project",

        "Android",
        "Java",
        "Kotlin",
      ],
      description:
        "A Vault disguised as calculator to hide your \"private\" photos",
      logo: EvercastLogo,
      link: {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=com.androidbull.calculator.photo.vault",
      },
    },
    {
      title: "IndieCircle",
      techStack: [
        "Indie Project",

        "Java Spring",
        "React",
        "GCP",
      ],
      description:
        "An online community to connect indie devs to share their projects and gain followers and potential collaborators",
      logo: EvercastLogo,
      link: {
        label: "IndieCircle",
        href: "https://indiecircle.io",
      },
    },
  ],
} as const;
