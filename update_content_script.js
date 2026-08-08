const fs = require('fs');

function updateMainContent() {
    let mainContent = fs.readFileSync('c:/Users/Asus/Desktop/shen/harsh-portfolio/components/MainContent.jsx', 'utf8');

    // 1. Update About text
    const aboutTopTitleRegex = /<h2 className="about-three-title text-heading tw-text-15 tw-itm-title tw-itm-anim">([\s\S]*?)<\/h2>/;
    mainContent = mainContent.replace(aboutTopTitleRegex, 
        '<h2 className="about-three-title text-heading tw-text-15 tw-itm-title tw-itm-anim">\n' +
        'Results-driven Full Stack Engineer, Cloud Developer, and Startup Founder with hands-on expertise in production-grade backend systems, real-time infrastructure, cloud-native deployment, and secure authentication architecture.\n' +
        '</h2>'
    );

    const aboutParagraphsRegex = /<p className="tw-text-xl tw-mb-10 text-black opacity-75">([\s\S]*?)<\/p>\s*<p className="tw-text-xl tw-mb-10 text-black opacity-75">([\s\S]*?)<\/p>\s*<p className="tw-text-xl tw-mb-10 text-black opacity-75">([\s\S]*?)<\/p>/;
    mainContent = mainContent.replace(aboutParagraphsRegex, 
        '<p className="tw-text-xl tw-mb-10 text-black opacity-75">\n' +
        'Co-Founder & CTO of GamerThred — a next-generation gaming infrastructure platform. Skilled in end-to-end product delivery: from system design and API architecture to responsive frontend engineering and automated cloud deployment.\n' +
        '</p>\n' +
        '<p className="tw-text-xl tw-mb-10 text-black opacity-75">\n' +
        'Passionate about distributed systems, low-latency real-time applications, and AI-integrated development workflows. My technical stack includes Node.js, React, MongoDB, Redis, Socket.io, and AWS.\n' +
        '</p>\n' +
        '<p className="tw-text-xl tw-mb-10 text-black opacity-75">\n' +
        'Good engineering isn\'t just about writing code—it’s about understanding the problem, designing the right system, building for scale, and creating something people actually need.\n' +
        '</p>'
    );

    // 2. Update Experience (feature-three-area)
    // We will replace the entire feature-three-wrapper inner content
    const featureWrapperRegex = /<div className="feature-three-wrapper hover__widget">([\s\S]*?)<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<ProcessSection \/>/;
    
    const newExperience = `
                  <div className="feature-three-single current hover__reveal-item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                    <div className="feature-three-item d-flex flex-column flex-lg-row justify-content-between align-items-center gap-4 text-center text-lg-start">
                      <div className="feature-three-left d-flex flex-column flex-sm-row align-items-center text-center text-sm-start gap-3">
                        <div><span className="feature-three-text tw-text-605 fw-medium text-white tw-transition-3 d-inline-block tw-w-20">01</span></div>
                        <div><span className="feature-three-text tw-text-605 fw-medium text-white tw-transition-3 d-inline-block tw-w-160-px">GamerThred</span></div>
                        <div><span className="feature-three-text tw-text-605 fw-medium text-white tw-transition-3 d-inline-block">Co-Founder & CTO</span></div>
                      </div>
                      <div><span className="feature-three-text tw-text-605 fw-medium text-white tw-transition-3 d-inline-block">2025 - Present</span></div>
                    </div>
                    <div className="hover__reveal-bg bg-img" data-background-image="assets/images/thumbs/feature-three-thumb1.jpg"></div>
                  </div>
                  
                  <div className="feature-three-single hover__reveal-item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                    <div className="feature-three-item d-flex flex-column flex-lg-row justify-content-between align-items-center gap-4 text-center text-lg-start">
                      <div className="feature-three-left d-flex flex-column flex-sm-row align-items-center text-center text-sm-start gap-3">
                        <div><span className="feature-three-text tw-text-605 fw-medium text-white tw-transition-3 d-inline-block tw-w-20">02</span></div>
                        <div><span className="feature-three-text tw-text-605 fw-medium text-white tw-transition-3 d-inline-block tw-w-160-px">Freelance</span></div>
                        <div><span className="feature-three-text tw-text-605 fw-medium text-white tw-transition-3 d-inline-block">Full Stack Developer</span></div>
                      </div>
                      <div><span className="feature-three-text tw-text-605 fw-medium text-white tw-transition-3 d-inline-block">2024 - Present</span></div>
                    </div>
                    <div className="hover__reveal-bg bg-img" data-background-image="assets/images/thumbs/portfolio-two-thumb1.jpg"></div>
                  </div>

                  <div className="feature-three-single hover__reveal-item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                    <div className="feature-three-item d-flex flex-column flex-lg-row justify-content-between align-items-center gap-4 text-center text-lg-start">
                      <div className="feature-three-left d-flex flex-column flex-sm-row align-items-center text-center text-sm-start gap-3">
                        <div><span className="feature-three-text tw-text-605 fw-medium text-white tw-transition-3 d-inline-block tw-w-20">03</span></div>
                        <div><span className="feature-three-text tw-text-605 fw-medium text-white tw-transition-3 d-inline-block tw-w-160-px">InkHub Technologies</span></div>
                        <div><span className="feature-three-text tw-text-605 fw-medium text-white tw-transition-3 d-inline-block">Software Developer</span></div>
                      </div>
                      <div><span className="feature-three-text tw-text-605 fw-medium text-white tw-transition-3 d-inline-block">Prior Exp</span></div>
                    </div>
                    <div className="hover__reveal-bg bg-img" data-background-image="assets/images/thumbs/portfolio-two-thumb2.jpg"></div>
                  </div>

                  <div className="feature-three-single hover__reveal-item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                    <div className="feature-three-item d-flex flex-column flex-lg-row justify-content-between align-items-center gap-4 text-center text-lg-start">
                      <div className="feature-three-left d-flex flex-column flex-sm-row align-items-center text-center text-sm-start gap-3">
                        <div><span className="feature-three-text tw-text-605 fw-medium text-white tw-transition-3 d-inline-block tw-w-20">04</span></div>
                        <div><span className="feature-three-text tw-text-605 fw-medium text-white tw-transition-3 d-inline-block tw-w-160-px">Codezeal Technology</span></div>
                        <div><span className="feature-three-text tw-text-605 fw-medium text-white tw-transition-3 d-inline-block">Software Dev Intern</span></div>
                      </div>
                      <div><span className="feature-three-text tw-text-605 fw-medium text-white tw-transition-3 d-inline-block">Prior Exp</span></div>
                    </div>
                    <div className="hover__reveal-bg bg-img" data-background-image="assets/images/thumbs/portfolio-two-thumb3.jpg"></div>
                  </div>
`;
    
    mainContent = mainContent.replace(featureWrapperRegex, 
        '<div className="feature-three-wrapper hover__widget">\n' +
        newExperience +
        '\n</div>\n</div>\n</div>\n</div>\n</div>\n<ProcessSection />'
    );

    fs.writeFileSync('c:/Users/Asus/Desktop/shen/harsh-portfolio/components/MainContent.jsx', mainContent);
    console.log("Updated MainContent.jsx");
}

function updateProjects() {
    let pageContent = fs.readFileSync('c:/Users/Asus/Desktop/shen/harsh-portfolio/app/projects/page.js', 'utf8');

    const newProjectsArray = `  const projects = [
    {
      id: 1,
      title: "GamerThred Platform",
      role: "Co-Founder & CTO",
      desc: "Real-time gaming infrastructure supporting multi-user auth and session workflows.",
      tags: ["NODE.JS", "REDIS", "SOCKET.IO", "AWS"],
      image: "projects/image.png",
      link: "#"
    },
    {
      id: 2,
      title: "Chatify",
      role: "Full-Stack Developer",
      desc: "Private real-time messaging with Socket.io, secure session handling, and fully responsive chat UI.",
      tags: ["REACT.JS", "NODE.JS", "MONGODB", "SOCKET.IO"],
      image: "projects/image copy 2.png",
      link: "#"
    },
    {
      id: 3,
      title: "Instagram Clone",
      role: "Full-Stack Engineer",
      desc: "MERN Social Platform with Clerk-based auth, AWS S3 media storage, and real-time social feed.",
      tags: ["REACT.JS", "CLERK", "AWS S3", "STREAM.IO"],
      image: "projects/simetra.png",
      link: "#"
    },
    {
      id: 4,
      title: "Psoriasis Skin Disease Detection",
      role: "AI/ML Developer",
      desc: "AI-powered disease detection pipeline with image preprocessing and ML classification.",
      tags: ["PYTHON", "OPENCV", "SCIKIT-LEARN"],
      image: "projects/smart-dent-ai.png",
      link: "#"
    },
    {
      id: 5,
      title: "Bank Finance System",
      role: "Backend Engineer",
      desc: "FinTech application with secure financial transaction API, dashboard analytics, and user authentication.",
      tags: ["NODE.JS", "EXPRESS.JS", "MONGODB"],
      image: "projects/image.png",
      link: "#"
    }
  ];`;

    const projectsRegex = /const projects = \[\s*\{[\s\S]*?\}\s*\];/;
    pageContent = pageContent.replace(projectsRegex, newProjectsArray);

    fs.writeFileSync('c:/Users/Asus/Desktop/shen/harsh-portfolio/app/projects/page.js', pageContent);
    console.log("Updated app/projects/page.js");
}

updateMainContent();
updateProjects();
