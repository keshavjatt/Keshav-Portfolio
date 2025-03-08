import GithubIcon from "./../public/assets/icons/github.svg";
import LinkedInIcon from "./../public/assets/icons/linkedin.svg";
import XIcon from "./../public/assets/icons/x.svg";
import InstagramIcon from "./../public/assets/icons/instagram.svg";
import FrontendIcon from "./../public/assets/icons/frontend.svg";
import LeaderShipIcon from "./../public/assets/icons/leadership.svg";
import ProblemSolvingIcon from "./../public/assets/icons/problem-solving.svg";
import FreelancerIcon from "./../public/assets/icons/freelance.svg";
import BackendIcon from "./../public/assets/icons/backend.svg";
import FullStackIcon from "./../public/assets/icons/full-stack.svg";
import bigcrmImg from "./../public/assets/projects/bigcrm-image.png"
import cratorsFlameImg from "./../public/assets/projects/creatorsflame-image.png"
import ecomImg from "./../public/assets/projects/e-commerce.png"
import sgtuImg from "../public/assets/projects/SGTU-APK - Copy.png"

const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: <FullStackIcon />,
  },
  {
    title: "Application Developer",
    icon: <FrontendIcon />,
  },
  // {
  //   title: "Backend Developer",
  //   icon: <BackendIcon />,
  // },
  {
    title: "Problem Solving",
    icon: <ProblemSolvingIcon />,
  },
  {
    title: "Freelancer",
    icon: <FreelancerIcon />,
  },
  // {
  //   title: "Leadership",
  //   icon: <LeaderShipIcon />,
  // },
];

const technologies = {
  languages: [
    {
      name: "HTML5",
      icon: "/assets/tech/html5.svg",
      link: "https://html.spec.whatwg.org/multipage/",
    },
    {
      name: "CSS3",
      icon: "/assets/tech/css3.svg",
      link: "https://www.w3.org/Style/CSS/Overview.en.html",
    },
    {
      name: "JavaScript",
      icon: "/assets/tech/javascript.svg",
      link: "https://262.ecma-international.org/",
    },
    // {
    //   name: "TypeScript",
    //   icon: "/assets/tech/typescript.svg",
    //   link: "https://www.typescriptlang.org/",
    // },
    {
      name: "C#",
      icon: "/assets/tech/csharp-new.png",
      link: "https://learn.microsoft.com/en-us/dotnet/csharp/",
    },
    // {
    //   name: "Python",
    //   icon: "/assets/tech/python.svg",
    //   link: "https://www.python.org/",
    // },
  ],
  frameworks: [
    {
      name: "Next.js",
      icon: "/assets/tech/nextjs.svg",
      link: "https://nextjs.org/",
    },
    {
      name: "TailwindCSS",
      icon: "/assets/tech/tailwindcss.svg",
      link: "https://tailwindcss.com/",
    },
    {
      name: "Express.js",
      icon: "/assets/tech/expressjs.png",
      link: "https://expressjs.com/",
    },
    {
      name: "Expo",
      icon: "/assets/tech/expo.png",
      link: "https://expo.dev/",
    },
    {
      name: "ASP.NET",
      icon: "/assets/tech/asp.net.png",
      link: "https://learn.microsoft.com/en-us/aspnet/web-forms/",
    },
  ],
  libraries: [
    {
      name: "React",
      icon: "/assets/tech/react.svg",
      link: "https://react.dev/",
    },
    // {
    //   name: "Three.js",
    //   icon: "/assets/tech/threejs.svg",
    //   link: "https://threejs.org/",
    // },
    {
      name: "Styled-Components",
      icon: "/assets/tech/styled-components.png",
      link: "https://styled-components.com/",
    },
    // {
    //   name: "Framer-motion",
    //   icon: "/assets/tech/framer.svg",
    //   link: "https://www.framer.com/motion/",
    // },
    {
      name: "Zustand",
      icon: "https://user-images.githubusercontent.com/958486/218346783-72be5ae3-b953-4dd7-b239-788a882fdad6.svg",
      link: "https://zustand-demo.pmnd.rs",
    },
    // {
    //   name: "Redux/Redux-toolkit",
    //   icon: "https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png",
    //   link: "https://redux.js.org",
    // },
    {
      name: "NextAuth.js",
      icon: "/assets/tech/nextauthjs.png",
      link: "https://next-auth.js.org/",
    },
    // {
    //   name: "Prisma",
    //   icon: "/assets/tech/prisma.svg",
    //   link: "https://www.prisma.io/",
    // },
  ],
  tools: [
    {
      name: "Git",
      icon: "/assets/tech/git.svg",
      link: "https://git-scm.com/",
    },
    {
      name: "Github",
      icon: "/assets/icons/github.svg",
      link: "https://github.com/",
    },
    {
      name: "Postman",
      icon: "/assets/tech/postman.svg",
      link: "https://www.postman.com/",
    },
    // {
    //   name: "Figma",
    //   icon: "/assets/tech/figma.svg",
    //   link: "https://www.figma.com/",
    // },
    {
      name: "Docker",
      icon: "/assets/tech/docker.svg",
      link: "https://www.docker.com/",
    },
  ],
  environments: [
    {
      name: "Node.js",
      icon: "/assets/tech/nodejs.svg",
      link: "https://nodejs.org/en",
    },
    {
      name: "IIS",
      icon: "/assets/tech/iss-new.png",
      link: "https://learn.microsoft.com/en-us/iis/get-started/introduction-to-iis/iis-web-server-overview",
    },
  ],
  databases: [
    {
      name: "MySQL",
      icon: "/assets/tech/my-sql.png",
      link: "https://www.mysql.com/",
    },
    {
      name: "PostgreSQL",
      icon: "/assets/tech/postgresql.png",
      link: "https://www.postgresql.org",
    },
    {
      name: "MongoDB",
      icon: "/assets/tech/mongodb.svg",
      link: "https://www.mongodb.com/",
    },
    {
      name: "Firebase",
      icon: "/assets/tech/firebase.svg",
      link: "https://firebase.google.com/",
    },
  ],
};

const experiences = [
  // {
  //   title: "Full Stack Developer",
  //   company_name: "Tech Lead at GDSC MVJCE",
  //   icon: "/assets/company/gdsc-logo.svg",
  //   iconBg: "#E6DEDD",
  //   date: "July 2023 - Present",
  //   points: [
  //     "Currently serving as the Tech Lead of GDSC, responsible for guiding technical aspects, fostering collaboration, and contributing to strategic decisions.",
  //     "Led induction programs, ensured new member alignment with GDSC's mission, and provided technical mentorship.",
  //     "Developed GDSC MVJCE website, enhancing the organization's online visibility.",
  //     "Spearheaded promotional campaigns, actively engaged with the GDSC community, and played a key role in planning and executing events.",
  //   ],
  // },
  {
    title: "Web Developer",
    company_name: "Indira Gandhi Computer Saksharta Mission",
    icon: "/assets/company/igcsm.png",
    iconBg: "#E6DEDD",
    date: "August 2024 - Present",
    points: [
      "Developed Websites for ITI and Polytechnic Institutions, ensuring user-friendly design and responsive interfaces.",
      "Used MongoDB for efficient data storage and retrieval.",
      "Built REST APIs using Node.js for seamless functionality.",
    ],
  },
  {
    title: "ASP.NET & Node.js Developer",
    company_name: "XSOL DATA SYSTEM PVT LTD",
    icon: "/assets/company/xsol.png",
    iconBg: "#E6DEDD",
    date: "May 2023 - August 2024",
    points: [
      "Developed Web Applications using ASP.NET Web Forms, implementing dynamic features and ensuring seamless integration with Node.js-based programs for advanced functionality like ping monitoring.",
      "Integrated Node.js Ping Programs into ASP.NET applications for real-time network performance tracking, enhancing the application's monitoring capabilities.",
    ],
  },
  {
    title: "ASP.NET Developer",
    company_name: "Infotech Software Solution",
    icon: "/assets/company/infotech.png",
    iconBg: "#E6DEDD",
    date: "August 2022 - May 2023",
    points: [
      "Developed school websites using ASP.NET Web Forms technology. Utilized MSSQL for database management and operations.",
      "Created both static and dynamic websites, ensuring user friendly interfaces and robust functionality. Collaborated with team members to design and implement new features.",
    ],
  },
  {
    title: "Web Designer Internship",
    company_name: "Excev IN",
    icon: "/assets/company/excev.png",
    iconBg: "#E6DEDD",
    date: "February 2022 - August 2022",
    points: [
      "Developed and designed a user-friendly website for health related products, showcasing a strong command of HTML5, CSS3, Bootstrap5, and basic JavaScript.",
      "Implemented Bootstrap framework to streamline the website's layout and optimize its responsiveness, providing seamless navigation and accessibility for users.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "BIGCRM - Network Monitoring CRM",
    description:
      "Designed and developed a CRM Software that automates network monitoring and issue tracking using Ping Program Integration. Sends email notifications to the concerned user when an IP becomes unreachable.",
    tags: [
      {
        name: "ASP.NET",
        color: "blue-text-gradient",
      },
      {
        name: "MSSQL",
        color: "green-text-gradient",
      },
      {
        name: "Node.js",
        color: "pink-text-gradient",
      },
      {
        name: "Chart.js",
        color: "orange-text-gradient",
      },
      {
        name: "Windows Web Server (IIS)",
        color: "yellow-text-gradient",
      },
    ],
    // image: "https://res.cloudinary.com/dqiqi75hm/image/upload/v1734187202/quickedit/dp6y8s8dstqfpq7svmj5.png",
    image: bigcrmImg,
    source_code_link: "https://github.com/keshavjatt/BIGCRM-API",
    deployed_link: "https://tfs.bigcrm.in/",
  },
  {
    name: "Student Application - SGTU",
    description:
      "Designed and developed the SGTU Mobile App for students, enabling Aadhaar-based login for secure authentication. The app allows students to view their results and mark sheets seamlessly. Implemented Sandbox API for Aadhaar verification.",
    tags: [
      {
        name: "Expo",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "orange-text-gradient",
      },
      {
        name: "Cloudinary",
        color: "yellow-text-gradient",
      },
    ],
    image: sgtuImg,
    source_code_link: "https://github.com/keshavjatt/StudentApplication-SGTU",
    deployed_link: "https://play.google.com/store/apps/details?id=com.dev_karan.sikkimglobaltechnicaluniversity&hl=en",
  },
  {
    name: " Creators Flame - Landing Page Website",
    description:
      "Designed and developed a landing page website for Creators Flame using HTML, CSS, Bootstrap, and JavaScript. Implemented a yellow-themed UI as per the client's branding requirements. Integrated smooth video scrolling effects.",
    tags: [
      {
        name: "HTML 5",
        color: "blue-text-gradient",
      },
      {
        name: "CSS 3",
        color: "green-text-gradient",
      },
      {
        name: "BootStarp 5",
        color: "pink-text-gradient",
      },
      {
        name: "JavaScript",
        color: "orange-text-gradient",
      },
      {
        name: "Canva",
        color: "yellow-text-gradient",
      },
    ],
    image: cratorsFlameImg,
    source_code_link: "https://github.com/keshavjatt/creatorsFlame",
    deployed_link: "https://www.creatorsflame.com/",
  },
  // {
  //   name: "E Commerce",
  //   description:
  //     "This web application is developed using the MERN stack, which includes MongoDB for database management, Express.js for building the backend, React.js for creating an interactive user interface, and Node.js for handling server-side operations. It seamlessly integrates Stripe as a secure payment gateway, ensuring safe and efficient transactions. Additionally, Cloudinary is used for optimized image storage and management, allowing for fast and reliable media uploads.",
  //   tags: [
  //     {
  //       name: "React.js",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "Node.js",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "MongoDB",
  //       color: "pink-text-gradient",
  //     },
  //     {
  //       name: "Tailwind CSS",
  //       color: "orange-text-gradient",
  //     },
  //     {
  //       name: "Cloudinary",
  //       color: "yellow-text-gradient",
  //     },
  //   ],
  //   image: ecomImg,
  //   source_code_link: "https://github.com/keshavjatt/E-Commerce",
  //   deployed_link: "https://mern-ecommercewebsite.vercel.app/",
  // },
];

const socials = [
  {
    id: "github",
    icon: <GithubIcon />,
    link: "https://github.com/keshavjatt",
  },
  {
    id: "linkedin",
    icon: <LinkedInIcon />,
    link: "https://www.linkedin.com/in/keshav-bajwa-534620258/",
  },
  {
    id: "x",
    icon: <XIcon />,
    link: "https://twitter.com/keshavjatt777",
  },
  {
    id: "instagram",
    icon: <InstagramIcon />,
    link: "https://www.instagram.com/keshhav.jatt__",
  },
];

const heroTexts = [
  "React/Next.js developer",
  500,
  "Freelancer",
  500,
  "Full-Stack developer",
  500,
  "Frontend developer",
  500,
  "Backend developer",
  500,
  "Problem solver",
  500,
];

export {
  navLinks,
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  socials,
  heroTexts,
};
