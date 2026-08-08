const fs = require('fs');

function addProjects() {
    let projectsPage = fs.readFileSync('c:/Users/Asus/Desktop/shen/harsh-portfolio/app/projects/page.js', 'utf8');

    const correctData = `const projects = [
    {
      id: 1,
      title: "GamerThred Platform",
      role: "Co-Founder & CTO",
      desc: "Architecting a scalable real-time gaming ecosystem with Node.js and Redis.",
      tags: ["NODE.JS", "REAL-TIME"],
      image: "projects/image.png",
      link: "https://gamer-thred-website-main.vercel.app/"
    },
    {
      id: 2,
      title: "Nexora OS",
      role: "Core Systems Engineer",
      desc: "Designed and engineered the core system architecture for Nexora OS, focusing on high performance and scalability.",
      tags: ["SYSTEM DESIGN", "ARCHITECTURE"],
      image: "projects/image copy.png",
      link: "https://lumen-team-manangement.vercel.app/"
    },
    {
      id: 3,
      title: "Simetra AR/VR 3D",
      role: "Frontend Engineer",
      desc: "Developed an immersive AR/VR 3D website experience for Simetra using WebGL and advanced frontend technologies.",
      tags: ["AR/VR", "3D WEBGL"],
      image: "projects/simetra.png",
      link: "https://simetratech.com/"
    },
    {
      id: 4,
      title: "Smart Dent AI",
      role: "Lead Full-Stack Developer",
      desc: "An AI-powered dental application designed to streamline workflows and enhance patient care through intelligent analysis.",
      tags: ["AI INTEGRATION", "HEALTHCARE"],
      image: "projects/smart-dent-ai.png",
      link: "https://smart-dent-ai-app.vercel.app/"
    },
    {
      id: 5,
      title: "Talentella",
      role: "Full-Stack Engineer",
      desc: "Empowering creators with a modern talent discovery and management platform.",
      tags: ["NEXT.JS", "TAILWIND", "SUPABASE"],
      image: "projects/image copy 3.png",
      link: "https://www.talentella.in/"
    },
    {
      id: 6,
      title: "Real Estate 3D Platform",
      role: "Full-Stack Developer",
      desc: "An immersive 3D real estate platform built to explore properties virtually with high performance.",
      tags: ["THREE.JS", "REACT", "3D"],
      image: "projects/image copy 2.png",
      link: "#"
    },
    {
      id: 7,
      title: "Trenvity",
      role: "Web Developer",
      desc: "A sleek marketing agency website focused on conversion, speed, and modern aesthetics.",
      tags: ["NEXT.JS", "MARKETING", "SEO"],
      image: "projects/image copy 4.png",
      link: "#"
    }
  ];`;

    // Replace the array
    projectsPage = projectsPage.replace(/const projects = \[[\s\S]*?\];/, correctData);

    fs.writeFileSync('c:/Users/Asus/Desktop/shen/harsh-portfolio/app/projects/page.js', projectsPage);
    console.log("Projects added and images fixed.");
}

addProjects();
