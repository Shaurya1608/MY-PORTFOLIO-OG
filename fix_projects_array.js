const fs = require('fs');

function updateProjects() {
    let projectsPage = fs.readFileSync('c:/Users/Asus/Desktop/shen/harsh-portfolio/app/projects/page.js', 'utf8');

    const newProjectsArray = `const projects = [
    {
      id: 1,
      title: "GamerThred Platform",
      role: "Co-Founder & CTO",
      desc: "Real-time gaming infrastructure supporting multi-user auth and session workflows.",
      tags: ["NODE.JS", "REDIS", "SOCKET.IO", "AWS"],
      image: "projects/image.png",
      link: "https://gamer-thred-website-main.vercel.app/"
    },
    {
      id: 2,
      title: "Talentella",
      role: "Full-Stack Engineer",
      desc: "Empowering creators with a modern talent discovery and management platform.",
      tags: ["NEXT.JS", "TAILWIND", "SUPABASE"],
      image: "projects/image copy 2.png",
      link: "https://www.talentella.in/"
    },
    {
      id: 3,
      title: "Simetra AR/VR 3D",
      role: "Frontend Engineer",
      desc: "Sleek and performant web platform built with cutting-edge frontend technologies.",
      tags: ["VUE.JS", "CSS MODULES"],
      image: "projects/simetra.png",
      link: "https://simetratech.com/"
    },
    {
      id: 4,
      title: "Smart Dent AI",
      role: "Lead Full-Stack Developer",
      desc: "Revolutionizing dental care with AI-driven diagnostics and full-stack solutions.",
      tags: ["REACT", "PYTHON", "AI"],
      image: "projects/smart-dent-ai.png",
      link: "https://smart-dent-ai-app.vercel.app/"
    },
    {
      id: 5,
      title: "Nexora OS",
      role: "Core Systems Engineer",
      desc: "Unified business operating system focusing on high performance and scalability.",
      tags: ["REACT", "NODE.JS", "POSTGRES"],
      image: "projects/image copy.png",
      link: "https://lumen-team-manangement.vercel.app/"
    }
  ];`;

    projectsPage = projectsPage.replace(/const projects = \[[\s\S]*?\];/, newProjectsArray);

    fs.writeFileSync('c:/Users/Asus/Desktop/shen/harsh-portfolio/app/projects/page.js', projectsPage);
    console.log("Updated projects array correctly.");
}

updateProjects();
