import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";



export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Front-End Web Developer",
    icon: web,
  },
  {
    title: "Mechanical Engineer",
    icon: mobile,
  },
  {
    title: "Drones Developer",
    icon: backend,
  },
  {
    title: "Leader at Sea Cadet Corps",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Front End Developer",
    company_name: "Gift Shoppe",
    icon: starbucks,
    iconBg: "#383E56",
    date: "January 2023 - April 2023",
    points: [
      "Developing and maintaining web applications using HTML and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Drone Developer",
    company_name: "Drones For Life",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2023 - present",
    points: [
      "Maintenance of large boilers or Silos through drones.",
      "The use of drones for maintenance of large boilers or silos can offer several advantages over traditional methods,such as reducing the need for human workers to acess hazardous or hard-to-reach areasCollaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "This improves inspection accuracy and speed, and reduces downtime for maintenance.",
      "Participating in hardware expos and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Js Developer",
    company_name: "Portfolio",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "April 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },

  {
    title: "Full stack Developer",
    company_name: "Weather Vizianagaram",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "April 2023 - May 2023",
    points: [
      "Developing and maintaining web applications using HTML and other related technologies.",
      "Participated in SITAM hackathon.",
      "Implementing responsive design.",
      "Participating in code reviews and taking constructive feedback from other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Pravi proved me wrong.",
    name: "Naveena",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Praveen does.",
    name: "Kamala Sri",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Praveen optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Venkatesh",
    designation: "CEO",
    company: "Gift-Shoppe",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Gift-Shoppe",
    description:
      "Web-based platform that allows users to search and buy gifts from various varieties, providing a convenient and efficient solution for Gifting needs.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Weather Vizianagaram",
    description:
      "Web application that enables users to search for Weater related information, view estimated rain fall forecast, and locate available fishes for fishermen based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
