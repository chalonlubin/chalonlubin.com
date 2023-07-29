/** Holds various data that is used throughout the application, which remains static. */

export const projects = [
  {
    title: "Jobly",
    tech: "#Node.js #Express #React #TypeScript #Bootstrap",
    image: "images/jobly-demo.png",
    link: "https://jobly-cl.netlify.app/",
    github: "https://github.com/chalonlubin/jobly-frontend",
    description: "Full-stack job searching app",
    details: "",
  },
  {
    title: "Friender",
    tech: "#Node.js #Express #SQL #React #Bootstrap",
    image: "images/friender-demo.png",
    link: "https://friender-cl.netlify.app/",
    github: "https://github.com/chalonlubin/friender-frontend",
    description: "Full-stack friend matching app",
  },
  {
    title: "Warbler",
    tech: "#Python #Flask #Postgres #SQLAlchemy #JavaScript #Bootstrap",
    image: "images/warbler-demo.gif",
    link: "https://warbler.up.railway.app/",
    github: "https://github.com/chalonlubin/warbler",
    description: "Full-stack social media app",
    details: "",
  },

  {
    title: "Personal Website",
    tech: "#React #Tailwind #Sass ",
    image: "images/website.png",
    github: "https://github.com/chalonlubin/portfolio",
    description: "This! No templates or components used",
    details: "",
  },
];

export const smallerProjects = [
  {
    title: "Midnight Match",
    tech: "#JavaScript, #jQuery, #Axios",
    description: "Practice w/ object oriented programming and api calls",
    github: "https://github.com/chalonlubin/midnight-match",
    link: "https://chalonlubin.github.io/midnight-match/",
  },
  {
    title: "Meme Generator",
    tech: "#JavaScript",
    description: "Practice with DOM manipulation and vanilla JS",
    github: "https://github.com/chalonlubin/meme-generator",
    link: "https://chalonlubin.github.io/meme-generator/",
  },
  {
    title: "Conceptual Refreshers",
    tech: "#JavaScript",
    description:
      "Data structures and algorithms, computer science concepts, and React.js review",
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
    "sass",
  ],
  backend: ["nodejs", "express", "python", "flask"],
  database: ["postgresql", "sql", "mongoDB"],
  tools: [
    "terminal",
    "jasmine",
    "jest",
    "insomnia",
    "stripe",
    "figma",
    "webflow",
    "tailwind",
    "bootstrap",
  ],
};
