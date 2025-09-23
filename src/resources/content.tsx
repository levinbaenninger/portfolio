import { Line, Row, Text } from "@once-ui-system/core";
import type { About, Blog, Home, Person, Social, Work } from "@/types";

const person: Person = {
  firstName: "Levin",
  lastName: "Bänninger",
  name: "Levin Bänninger",
  role: "Software Engineer Apprentice",
  avatar: "/images/avatar.webp",
  email: "me@levinbaenninger.dev",
  location: "Europe/Zurich",
  languages: ["English", "German", "French"],
};

const social: Social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/levinbaenninger",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/levinbaenninger",
  },
  {
    name: "X",
    icon: "twitter",
    link: "https://x.com/levinbaenninger",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home: Home = {
  path: "/",
  image: "/api/og/generate",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Turning to dos into ta-da</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Meetique</strong>{" "}
        <Line background="brand-alpha-strong" height="20" vert />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/meetique",
  },
  subline: (
    <>
      I'm Levin, a Software Engineer Apprenctice at Bühler, keeping our
      component library tidy so teams move fast. Off-hours, I build my own
      stuff.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `Who is ${person.name}?`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com/levinbaenninger",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I'm Levin, a software engineer apprentice at Bühler. By day I wrangle
        our component library so teams ship faster without breaking UX; by night
        I tinker on side projects for fun. I like clean APIs, tidy repos, and
        code that explains itself. Coffee-powered, test-approved, always
        learning.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "Bühler AG",
        timeframe: "2023 - Present",
        role: "Software Engineer Apprentice",
        achievements: [
          "Built solid computer science foundations: web engineering, algorithms, databases, and the “why” behind the “what”.",
          "Engineered custom Azure Container Jobs to optimize Azure DevOps pipelines – reduced build times, increased scalability, and lowered infrastructure overhead, accelerating delivery cycles.",
          "Developed our internal component library used across products – consistent UI, reusable components, faster shipping.",
        ],
        images: [],
      },
    ],
  },
  achievements: {
    display: true,
    title: "Achievements",
    achievements: [
      {
        title: "SwissSkills 2025 – Web Technologies (Skill 17), Bern",
        description:
          "I participated in the SwissSkills 2025 Web Technologies competition (Skill 17) in Bern. The challenge included solving tasks across the full web stack: structuring and styling interfaces with HTML and CSS, building interactive features using vanilla JavaScript, and implementing backend functionality with Express.js. Through this experience, I strengthened my ability to work under time pressure, apply problem-solving strategies, and integrate both frontend and backend technologies into complete web solutions.",
      },
    ],
  },
  studies: {
    display: true,
    title: "Studies",
    institutions: [
      {
        name: "Gewerbliches Berufs- und Weiterbildungszentrum St. Gallen",
        description:
          "I'm attending vocational school at GBS St. Gallen, learning the fundamentals of computer science. From algorithms and data structures to databases and networks – solid basics over buzzwords.",
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical skills",
    skills: [
      {
        title: "Web Engineering",
        description: (
          <>
            Building modern web apps with Next.js, TypeScript, Tailwind, tRPC,
            TanStack Query, and Postgres – plus Angular during work.
          </>
        ),
        tags: [
          {
            name: "Next.js",
            icon: "nextjs",
          },
          {
            name: "Typescript",
            icon: "typescript",
          },
          {
            name: "Tailwind CSS",
            icon: "tailwind",
          },
          {
            name: "tRPC",
            icon: "trpc",
          },
          {
            name: "Tanstack Query",
            icon: "query",
          },
          {
            name: "PostgreSQL",
            icon: "postgres",
          },
          {
            name: "Angular",
            icon: "angular",
          },
        ],
        images: [],
      },
      {
        title: "Designing",
        description: (
          <>
            From rough wireframes to polished flows in Figma – components,
            auto-layout, tokens, and prototypes that translate cleanly to code.
          </>
        ),
        tags: [
          {
            name: "Figma",
            icon: "figma",
          },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about nerdy stuff...",
  description: `Read what ${person.name} has been up to recently`,
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: "My Lab and Launchpad",
  description:
    "Where ideas compile into projects. Some in prod, some in progress, all with lessons learned.",
};

export { about, blog, home, person, social, work };
