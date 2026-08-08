const fs = require('fs');

function updateLinks() {
    let mainContent = fs.readFileSync('c:/Users/Asus/Desktop/shen/harsh-portfolio/components/MainContent.jsx', 'utf8');

    // GamerThred
    mainContent = mainContent.replace(
        /href="\/projects"\s*>GamerThred Platform<\/a>/g,
        'href="https://gamer-thred-website-main.vercel.app/" target="_blank" rel="noopener noreferrer">GamerThred Platform</a>'
    );
    
    // Nexora OS
    mainContent = mainContent.replace(
        /href="\/projects"\s*>Nexora OS<\/a>/g,
        'href="https://lumen-team-manangement.vercel.app/" target="_blank" rel="noopener noreferrer">Nexora OS</a>'
    );

    // Simetra AR/VR 3D
    mainContent = mainContent.replace(
        /href="\/projects"\s*>Simetra AR\/VR 3D<\/a>/g,
        'href="https://simetratech.com/" target="_blank" rel="noopener noreferrer">Simetra AR/VR 3D</a>'
    );

    // Smart Dent AI
    mainContent = mainContent.replace(
        /href="\/projects"\s*>Smart Dent AI<\/a>/g,
        'href="https://smart-dent-ai-app.vercel.app/" target="_blank" rel="noopener noreferrer">Smart Dent AI</a>'
    );

    fs.writeFileSync('c:/Users/Asus/Desktop/shen/harsh-portfolio/components/MainContent.jsx', mainContent);


    let projectsPage = fs.readFileSync('c:/Users/Asus/Desktop/shen/harsh-portfolio/app/projects/page.js', 'utf8');

    // Update projects array in app/projects/page.js
    projectsPage = projectsPage.replace(
        /title: "GamerThred Platform",[\s\S]*?link: "[^"]*"/g,
        'title: "GamerThred Platform",\n      role: "Co-Founder & CTO",\n      desc: "Real-time gaming infrastructure supporting multi-user auth and session workflows.",\n      tags: ["NODE.JS", "REDIS", "SOCKET.IO", "AWS"],\n      image: "projects/image.png",\n      link: "https://gamer-thred-website-main.vercel.app/"'
    );

    projectsPage = projectsPage.replace(
        /title: "Talentella",[\s\S]*?link: "[^"]*"/g,
        'title: "Talentella",\n      role: "Full-Stack Engineer",\n      desc: "Empowering creators with a modern talent discovery and management platform.",\n      tags: ["NEXT.JS", "TAILWIND", "SUPABASE"],\n      image: "projects/image copy 2.png",\n      link: "https://www.talentella.in/"'
    );

    projectsPage = projectsPage.replace(
        /title: "Simetra",[\s\S]*?link: "[^"]*"/g,
        'title: "Simetra",\n      role: "Frontend Engineer",\n      desc: "Sleek and performant web platform built with cutting-edge frontend technologies.",\n      tags: ["VUE.JS", "CSS MODULES"],\n      image: "projects/simetra.png",\n      link: "https://simetratech.com/"'
    );

    projectsPage = projectsPage.replace(
        /title: "Smart Dent AI",[\s\S]*?link: "[^"]*"/g,
        'title: "Smart Dent AI",\n      role: "Lead Full-Stack Developer",\n      desc: "Revolutionizing dental care with AI-driven diagnostics and full-stack solutions.",\n      tags: ["REACT", "PYTHON", "AI"],\n      image: "projects/smart-dent-ai.png",\n      link: "https://smart-dent-ai-app.vercel.app/"'
    );

    // Replace the 5th dummy project or just add Nexora
    // If Nexora doesn't exist, we will replace Chatify or whatever is id 5
    projectsPage = projectsPage.replace(
        /title: "Bank Finance System",[\s\S]*?link: "[^"]*"/g,
        'title: "Nexora OS",\n      role: "Core Systems Engineer",\n      desc: "Unified business operating system focusing on high performance and scalability.",\n      tags: ["REACT", "NODE.JS", "POSTGRES"],\n      image: "projects/image copy.png",\n      link: "https://lumen-team-manangement.vercel.app/"'
    );

    fs.writeFileSync('c:/Users/Asus/Desktop/shen/harsh-portfolio/app/projects/page.js', projectsPage);

    console.log('Links updated successfully!');
}

updateLinks();
