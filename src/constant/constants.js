import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    python,
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
    ecom,
    mern,
    metube,
    openai,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
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
      title: "Frontend Developer",
      icon: web,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Mathematician",
      icon: creator,
    },
    {
      title: "Data Scientist",
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
      name: "docker",
      icon: docker,
    },
    {
      name: 'python',
      icon: python,
    },

    
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Starbucks",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "React Native Developer",
      company_name: "Tesla",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Shopify",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  
  
  
  const projects = [
   
   

    {
      name: "LifeStyle App",
      description:
        "A comprehensive social media website, that allows users to post, comment and send each other messages real time",
      tags: [
        {
          name: "MongoDB",
          color: "blue-text-gradient",
        },
        {
          name: "Express",
          color: "green-text-gradient",
        },
        {
          name: "React",
          color: "pink-text-gradient",
        },
        {
          name: "Redux",
          color: "text-indigo-400"
        },
        {
          name: "Node",
          color: "orange-text-gradient"
        }
      ],
      image: mern,
      source_code_link: "https://github.com/ZEscanor/mernProj",
      live_project_link: "https://memoriesmern.vercel.app/posts"
    },

    
    
    {
      name: "Headphone Mart",
      description:
        "An ecommerce shop that specializes in Headphones, which features headphone product listings and a full checkout and payment page",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Stripe",
          color: "green-text-gradient",
        },
        {
          name: "Redux",
          color: "pink-text-gradient",
        },
        {
          name: "Sanity",
          color: "text-indigo-400"
        },
        {
          name: "NextJS",
          color: "orange-text-gradient"
        }
      ],
      image: ecom,
      source_code_link: "https://github.com/ZEscanor/e-commerce-web",
      live_project_link: "https://e-commerce-web2.vercel.app"
    },

    {
      name: "MeTube",
      description:
        "A platform that allows users to search and watch videos from their favorite content creators.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Axios",
          color: "green-text-gradient",
        },
        {
          name: "Material UI",
          color: "pink-text-gradient",
        },
      
      ],
      image: metube,
      source_code_link: "https://github.com/ZEscanor/metube",
      live_project_link: "https://metube-three.vercel.app/"
    },
   


    {
      name: "AI Image Creator",
      description:
        "A website that allows users to create and share completely unique pictures with the help of AI",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Vite",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind",
          color: "pink-text-gradient",
        },
        {
          name: "Cloudinary",
          color: "text-indigo-400",
        },
        {
          name: "MongoDB",
          color: "orange-text-gradient",
        },
        {
          name: "Node",
          color:"text-yellow-400",
        },
        {
          name: "DALLE-AI",
          color: "text-white-400",
        },
      
      ],
      image: openai,
      source_code_link: "https://github.com/ZEscanor/OpenAI",
      live_project_link: "https://ai-image-generator-pink.vercel.app"
    },
    


    

    
  ];
  
  export { services, technologies, experiences, projects };