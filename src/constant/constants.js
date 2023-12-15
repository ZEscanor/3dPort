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
    siteExtract,
    Flexibble,
    graphql,
    nextjs,
    firebase,
    cpp,
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
      name: "GraphQL",
      icon: graphql,
    },
    {
      name: "Next JS",
      icon: nextjs,
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
      name: "Firebase",
      icon: firebase,
    },
    {
      name: "SQL",
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
      name: "C++",
      icon: cpp,
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
        " Lifestyle is a full stack web application that allows users to create and store their memories in one place. It allows users to easily customize posts, comment/like on other posts, send private messages, and view all of their memories in one organized place. ",
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
      name: "Flexi Projects Organizer and Viewer",
      description:
        " Users can organize and view great projects by developers, while providing a platform for showcasing their work and collaborating. ",
      tags: [
        {
          name: "NextJS",
          color: "blue-text-gradient",
        },
        {
          name: "TypeScript",
          color: "green-text-gradient",
        },
        {
          name: "GraphQL",
          color: "text-rose-400",
        },
        {
          name: "Grafbase",
          color: "pink-text-gradient",
        },
        {
          name: "Google Auth",
          color: "text-indigo-400"

        },{
        name: "Cloudinary",
        color: "orange-text-gradient"
      },
      {
        name: "Tailwind CSS",
        color: "text-emerald-400"
      }

      ],
      image: Flexibble,
      source_code_link: "https://github.com/ZEscanor/dribbc",
      live_project_link: "https://flexi-flax.vercel.app/"
    },
  
    // {
    //   name: "Website and Text Summarizer",
    //   description:
    //     "A website that allows users to summarize text and websites using Open AI",
    //   tags: [
    //     {
    //       name: "React",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "Vite",
    //       color: "green-text-gradient",
    //     },
    //     {
    //       name: "Chakra UI",
    //       color: "pink-text-gradient",
    //     },
    //     {
    //       name: "Open AI",
    //       color: "text-indigo-400"

    //     },
    //   ],
    //   image: siteExtract,
    //   source_code_link: "https://github.com/ZEscanor/SiteExtractor",
    //   live_project_link: "https://site-extractor.vercel.app/"
    // },
    


    

    
  ];
  
  export { services, technologies, experiences, projects };