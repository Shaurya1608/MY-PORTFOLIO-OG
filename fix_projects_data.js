const fs = require('fs');

function fixProjectsData() {
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
      image: "projects/image copy 2.png",
      link: "https://www.talentella.in/"
    }
  ];`;

    // Replace the array
    projectsPage = projectsPage.replace(/const projects = \[[\s\S]*?\];/, correctData);

    // Replace <Link> with <a> for the external links
    // First, the title link
    projectsPage = projectsPage.replace(
        /<Link className="hover-text-main-two-600 tw-transition-3" href=\{project\.link\}>/g,
        '<a className="hover-text-main-two-600 tw-transition-3" href={project.link} target="_blank" rel="noopener noreferrer">'
    );
    projectsPage = projectsPage.replace(
        /<\/Link>\s*<\/h2>/g,
        '</a>\n                            </h2>'
    );

    // Second, the arrow button link
    projectsPage = projectsPage.replace(
        /<Link\s*className="tw-w-16 tw-h-16 lh-1 d-inline-flex justify-content-center align-items-center text-white rounded-circle tw-bg-neutral-800 hover-bg-main-two-600 tw-transition-3 tw-text-3xl"\s*href=\{project\.link\}\s*>/g,
        '<a\n                              className="tw-w-16 tw-h-16 lh-1 d-inline-flex justify-content-center align-items-center text-white rounded-circle tw-bg-neutral-800 hover-bg-main-two-600 tw-transition-3 tw-text-3xl"\n                              href={project.link}\n                              target="_blank" rel="noopener noreferrer"\n                            >'
    );
    projectsPage = projectsPage.replace(
        /<\/i>\s*<\/Link>/g,
        '</i>\n                            </a>'
    );

    // Third, the image link
    projectsPage = projectsPage.replace(
        /<Link className="d-block w-100 h-100" href=\{project\.link\}>/g,
        '<a className="d-block w-100 h-100" href={project.link} target="_blank" rel="noopener noreferrer">'
    );
    projectsPage = projectsPage.replace(
        /<\/Link>\s*<\/div>/g,
        '</a>\n                      </div>'
    );

    fs.writeFileSync('c:/Users/Asus/Desktop/shen/harsh-portfolio/app/projects/page.js', projectsPage);
    console.log("Projects data and links fixed.");
}

fixProjectsData();
