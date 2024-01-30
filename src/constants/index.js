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
    cpp,
    linux,
    mysql,
    python,
    morganstanley,
    sfu,
    aicommentary,
    herobg,
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
      title: "Full Stack Developer",
      icon: web,
    },
    {
      title: "ML Engineer",
      icon: mobile,
    },
    {
      title: "Backend Engineer",
      icon: backend,
    },
    {
      title: "Systems Engineer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "C++",
      icon: cpp,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "mySQL",
      icon: mysql,
    },
    {
      name: "Linux",
      icon: linux,
    },
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
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
  ];
  
  const experiences = [
    {
      title: "Software Engineer",
      company_name: "Morgan Stanley",
      icon: morganstanley,
      iconBg: "#383E56",
      date: "November 2021 - May 2023",
      points: [
        "Collaborated with a global team to develop, maintain, and deploy the company’s foreign exchange order manager (FXOM) using CI/CD pipelines.",
        "Utilized C++ to develop and deploy trading features for the FXOM system, emphasizing Object-Oriented Programming (OOP) concepts and SOLID design principles.",
        "Facilitated the migration of specific client account information from application configuration to database tables, using Sybase, Runway, and SQL.",
        "Created Python automation scripts that prevented over $400,000 in losses by employing data analytics to identify trading algorithm breaks and notifying response teams of detected incidents.",
      ],
    },
    {
      title: "Research Assistant",
      company_name: "Simon Fraser University",
      icon: sfu,
      iconBg: "#FFFFFF",
      date: "September 2020 - May 2021",
      points: [
        "Researched and developed advanced algorithms for color demosaicing through scientific analysis, significantly reducing color error compared to traditional methods like bilinear, median, and Kimmel demosaicing techniques.",
        "Explored and devised techniques to enhance the detection of weak hot pixels in camera sensors, aiming to improve hot pixel defect detection compared to existing implementations.",
        "Documented and detailed research findings in research papers for the respective research projects."
      ],
    }
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
      name: "AI Video Commentary",
      description:
        "AI based commentary application that generates audio speech output from user supplied streams of video/images.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "OpenAI-API",
          color: "green-text-gradient",
        },
        {
          name: "StreamLit",
          color: "pink-text-gradient",
        },
      ],
      image: aicommentary,
      source_code_link: "https://github.com/Ai-riku/GPT-Live-Commentator",
    },
    {
      name: "Pest Deterence Engineering Project",
      description:
        "Autonomous water turret that automatically detects and target pests in lawns and gardens using a combination of motion sensors and computer vision ",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "TensorFlow",
          color: "green-text-gradient",
        },
      ],
      image: herobg,
      source_code_link: "https://github.com/",
    },
    {
      name: "Robotic Arm Programming",
      description:
        "A program in C++ that performs forward and inverse kinematics for a given robotic arm and instructs the arm to move to a desired configuration",
      tags: [
        {
          name: "C++",
          color: "blue-text-gradient",
        }
      ],
      image: herobg,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };