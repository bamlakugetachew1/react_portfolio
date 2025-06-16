const info = {
  // ============ MAIN DETAILS ============
  main: {
    name: "Bamlaku Getachew",
    description: `
    I'm a backend-focused fullstack developer with solid experience in building scalable systems and integrating real-world APIs. 
    I specialize in Node.js and Spring Boot, with hands-on expertise in building and securing REST and SOAP services. 
    My work includes payment integrations (PayPal, Stripe, Chapa), cloud storage (Cloudinary, MinIO, AWS S3), email systems (SendGrid, Nodemailer), and deploying applications with Docker and Kubernetes. 
    I’ve built and deployed backend systems for ride-hailing, marketplaces, and music streaming platforms with over 25,000 users combined.

    I'm also diving deep into enterprise-grade practices: WS-Security, ISO 8583 messaging, JMS with ActiveMQ, and microservice integration using WSO2 Micro Integrator. 
    Whether it’s MongoDB, MySQL, GraphQL, or full CI/CD pipelines, I value clean code, real-world use cases, and security best practices. 
    Let’s build something real and robust!
  `,
    role: "Backend-Heavy Fullstack Developer",
    photo: "../photo.webp",
    email: "abuget@gmail.com",
  },
  // ============ SOCIAL LINKS ============
  socials: {
    github: "https://github.com/bamlakugetachew1",
    linkedin: "https://www.linkedin.com/in/bamlaku-getachew/",
  },

  // ============ PROJECTS ============
  projects: [
    {
      title: "The Alibo Market App",
      description: `
    The Alibo Market App is a full-featured e-commerce platform connecting buyers, sellers, and influencers. 
    Buyers can search for products using GPS-based filters, subscribe monthly or annually (10 ETB/month or 100 ETB/year), and pay via Chapa. 
    Sellers list products by purchasing "boxes" (same pricing model). 
    Influencers earn 50% commission on referrals and can withdraw earnings via Chapa. 
    Admins manage users, products, and withdrawals through a secure backend.

    Key features include two-factor authentication (2FA), real-time notifications, GPS-based search, and Chapa payment gateway integration. 
    Available as a mobile app (iOS/Android) and web app.
  `,
      technologies:
        "Node.js, Express.js, MongoDB, Chapa API, React Native, React.js, JWT, Docker, Firebase (Notifications), GPS, 2FA",
      // github: "https://github.com/bamlakugetachew1/alibo-market",
      link: "https://alibomarket.com/", // Replace with your actual deployed link or keep as placeholder
    },
    {
      title: "Africkiko Music Streaming App",
      description: `
    I contributed to the backend development of Africkiko, a music streaming platform built for performance, security, and scale. 
    The system features secure user authentication with 2FA, efficient music file storage and streaming using MinIO and AWS S3, and smooth media delivery. 
    It includes robust subscription plan management and secure payment integration via Flutterwave, allowing users to seamlessly subscribe and manage their plans.

    Built with Node.js and MongoDB, the backend ensures reliable access to content, secure transactions, and an engaging user experience.
  `,
      technologies:
        "Node.js, Express.js, MongoDB, MinIO, AWS S3, JWT, 2FA, Flutterwave API",
      // github: "https://github.com/bamlakugetachew1/africkiko-backend", // Update if needed
      link: "https://africkiko.com/", // Replace with your actual deployed/demo link
    },

    {
      title: "MoodRide – Ride Hailing App",
      description: `
    I am actively contributing to the backend development of MoodRide, a microservices-based ride-hailing application designed for scalability and real-time performance. 
    The platform is built with Node.js and MongoDB, with Firebase integration for real-time location tracking and updates. 
    It features full ride-hailing capabilities including trip requests, driver-passenger matching, fare calculation, and ride history.

    The backend also supports NFC-based driver/passenger identity verification, profile management, and secure media handling using MinIO and AWS. 
    Each service is containerized and designed for high availability and maintainability.
  `,
      technologies:
        "Node.js, Express.js, MongoDB, Microservices, Docker, Firebase (Realtime DB), MinIO, AWS S3, JWT, NFC",
      // github: "https://github.com/bamlakugetachew1/moodride-backend", // Update as needed
      link: "https://play.google.com/store/apps/details?id=com.qemertech.moodrideuser", // Replace with actual link or leave as placeholder
    },

    {
      title: "Crowdfund",
      description:
        "This project is a RESTful API for a crowdfunding application, designed for horizontal scalability and high performance. Built with Node.js and based on Express, MongoDB, Redis, JWT, and BullMQ, it supports clustering and is fully containerized using Docker. The project also includes a CI/CD pipeline for seamless deployment and maintenance.",
      technologies:
        "Node.js, Express.js, MongoDB, Redis, Docker, Jest, Swagger, GitHub Actions",
      github: "https://github.com/bamlakugetachew1/kickstarterprod",
      link: "https://crowdprod.onrender.com/api-docs",
    },
    // {
    //   title: "Airbnb",
    //   description:
    //     "The project is a decentralized web3.0 version of the Airbnb renting website, built on top of Node.js, Express.js, MongoDB, and React. It allows users to rent out their properties, houses, and apartments and earn money. The project uses Google OAuth and PassportJS for signing in and Node.js and Express for the backend. MongoDB is used for data persistence.",
    //   technologies:
    //     "React, Node.js, MongoDB, Express.js, Material UI, Tailwind CSS",
    //   github: "https://github.com/bamlakugetachew1/airbnbbackend",
    //   link: "https://airbnbfrontend-omega.vercel.app/",
    // },
    // {
    //   title: "Blogethiopia",
    //   description:
    //     "This project is built using the MERN (MongoDB, Express, React, Node.js) stack, a popular combination of technologies for full-stack web development. It includes a range of features similar to Medium, allowing users to like, share, and save content, and even listen to articles in audio format.",
    //   technologies:
    //     "React, Node.js, MongoDB, Express.js, Material UI, Tailwind CSS",
    //   github: "https://github.com/bamlakugetachew1/Blogs",
    //   link: "https://blogethiopia.netlify.app/",
    // },
    // {
    //   title: "LetsChatWithFreedom",
    //   description:
    //     "This project is a simple and efficient chat application that enables users to create groups and initiate conversations. Built using a powerful technology stack including Node.js, Express.js, MongoDB, and Vue.js, it provides a seamless and reliable user experience.",
    //   technologies:
    //     "Vue.js, WebSocket, Node.js, MongoDB, Express.js, Tailwind CSS",
    //   github: "https://github.com/bamlakugetachew1/chat",
    //   link: "https://letschatwithfreedom.netlify.app/",
    // },
  ],

  // ============ EDUCATION ============
  education: [
    {
      school: "Bahir Dar University",
      degree: "Bachelor of Science in  Software Engineering",
      duration: "2029 - 2024",
      image: "bdu.jpg",
    },
    {
      school: "Coursera",
      degree: "Meta Front-End Developer Professional Certificate",
      duration: "Apr 2023 - Jun 2023",
      image: "coursera.png",
    },
  ],

  // ============ EXPERIENCE ============
  experience: [
    {
      position: "Full-Stack Developer Intern",
      company: "Hahu jobs.",
      duration: "Mar 2022 - Jun 2022 (3 Months)",
      image: "hahu.png",
      descriptions: [
        "Completed an extensive training program in full-stack web development.",
        "Actively contributed to the ongoing development of a recipe web application.",
        "Mentored by senior developers on best practices and code optimization.",
        "worked on a variety of projects involving front-end and back-end technologies such as Vue.js, Hasura, PostgreSQL, Node, and Tailwind CSS.",
      ],
    },
    {
      position: "Backend Nodejs Developer",
      company: "Upwork",
      duration: "Sep 2023 - Feb 2023 (4 Month)",
      image: "upwork.png",
      descriptions: [
        "developed strong communication skills and the ability to work effectively under tight timelines and budgets",
        "Developed a Node js script to scrap websites reguraly.",
      ],
    },
    {
      position: "Full-Stack Developer Intern",
      company: "Boost software ",
      duration: "Mar 2023 - Jun 2023 (3 Month)",
      image: "boost.png",
      descriptions: [
        "used modern development tools and techniques and scaling mern stack to handle larger students requests",
        "developers an automated campus leaving web app using MERN stack.",
      ],
    },
    {
      position: "Junior Backend  Developer",
      company: "Qemer Software Technology",
      duration: "Nov 2024 - Apr 2025 (6 Months)",
      image: "Qemer.jpeg",
      descriptions: [
        "Developed APIs using Node.js & MongoDB: Implemented user management systems, article handling, and real-time messaging features using Mongoose for schema design and database operations",
        "Integrated Email Notifications: Designed and implemented email systems to notify users about subscription expiry, with retry mechanisms and duplication prevention",
        "Implemented Job Status Tracking: Created job status tracking to prevent redundant cron job executions and ensure tasks run within a set time frame",
        "Implemented Object Storage with MinIO and AWS Fallback: Designed a reliable object storage system using MinIO for primary storage and AWS S3 as a fallback for high availability and redundancy",
        "Integrated Robust Authorization: Implemented robust role-based access control (RBAC) using CASL.js to enforce fine-grained permissions for users across various application features",
        "Built a robust, cloud-native music streaming platform using Node.js, Express, and AWS, designed to handle high concurrency",
      ],
    },
    {
      position: "Junior Backend  Developer",
      company: "Lion International Bank",
      duration: "Apr 2025 - Present",
      image: "imageslion.jpeg",
      descriptions: [
        "Maintaining and working on a Telegram bot for banking apps built with Spring Boot, Redis, RabbitMQ, and PostgreSQL involves ensuring real-time communication, security, fault tolerance, and maintainability",
      ],
    },
  ],

  // ============ CERTIFICATES ============
  certificates: [
    {
      title: "Meta Front-End Developer Professional Certificate",
      description: "Provided by Coursera & Meta",
      link: "https://www.coursera.org/account/accomplishments/professional-cert/KEB3V3ND4HRK",
    },
    {
      title: "Full-Stack Developer Professional Certificate",
      description: "Provided by Hahu Jobs",
      link: "https://drive.google.com/file/d/1ng2PnPbDXHk11q1UxOjrLw6i_-im2cBV/view?usp=drive_link",
    },
  ],

  // ============ CONTACT ============
  contact: {
    title: "Let's Get in Touch: Ways to Connect with Me",
    description:
      "Thank you for your interest in getting in touch with me. I welcome your feedback, questions, and suggestions. If you have a specific question or comment, please feel free to email me directly at abuget@gmail.com",
  },

  // ============ FOOTER ============
  footer: "© 2024 Bamlaku Getachew All Rights Reserved",
};

export default info;
