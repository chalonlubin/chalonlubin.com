
/** Holds various data that is used throughout the application, which remains static. */


export const projects = [
  {
    title: "Friender",
    tech: "Node.js | Express | SQL | React | Bootstrap",
    image: "images/friender-demo.gif",
    link: "https://friender-ccl.surge.sh/",
    github: "https://github.com/chalonlubin/friender-frontend",
    description: "Full-stack friend matching app",
  },
  {
    title: "Warbler",
    tech: "Python | Flask | Postgres | SQLAlchemy | JavaScript | Bootstrap",
    image: "images/warbler-demo.gif",
    link: "https://warbler.up.railway.app/",
    github: "https://github.com/chalonlubin/warbler",
    description: "Full-stack social media app",
    details: "",
  },
  {
    title: "Jobly",
    tech: "Node.js | Express | React | Bootstrap",
    image: "images/jobly-demo.gif",
    link: "https://jobly-cl.netlify.app/",
    github: "https://github.com/chalonlubin/jobly-frontend",
    description: "Full-stack job searching app",
    details: "",
  },
  {
    title: "Personal Website",
    tech: "React | Tailwind | Scss | DaisyUI",
    image: "images/website.png",
    github: "https://github.com/chalonlubin/portfolio",
    description: "Wire-frame to Figma to what you see here!",
    details: "",
  },
];

export const smallerProjects = [
  {
    title: "Midnight Match",
    tech: "JavaScript, JQuerey",
    description: "Practice w/ OOP and API calls",
    github: "https://github.com/chalonlubin/midnight-match",
    link: "https://chalonlubin.github.io/midnight-match/",
  },
  {
    title: "Rick and Morty Meme Generator...hic!",
    tech: "JavaScript",
    description: "Practice w/ DOM manipulation",
    github: "https://github.com/chalonlubin/meme-generator",
    link: "https://chalonlubin.github.io/meme-generator/",
  },
  {
    title: "Conceptual Refreshment",
    tech: "JavaScript",
    description:
      "Practice w/ DSA, reviewing topics like 'this', and conceptual questions.",
    github: "https://github.com/chalonlubin/advanced-topics",
    link: "",
  },
];

export const skills = {
  frontend: [
    "javaScript",
    "typescript",
    "react",
    "reactnative",
    "jquery",
    "html",
    "css",
    "figma",
    "webflow",
    "tailwind",
    "bootstrap",
    "sass",
  ],
  backend: ["nodejs", "express", "python", "flask"],
  database: ["postgresql", "sql"],
  tools: ["terminal", "jasmine", "jest", "insomnia"],
  /* Probably won't use. More for a "soft skills in plain english" resume format. */
  soft: ["Easygoing, positive and approachable",
  "I try to find solutions instead of focusing on the negatives of a problem",
  "I take initiative and am willing to do the “dirty work” that is less appealing",
  "Leadership (I’ve been promoted to management positions in every job I’ve held over a year.)",  "Empathetic. Due to my background I find it easy to approach problems while wearing someone else's shoes.",
  "Communication is huge, and I understand that not everyone has the same communication preferences, so I try to find what is ideal and communicate in that style with everyone I meet",
]
};
