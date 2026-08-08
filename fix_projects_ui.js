const fs = require('fs');
const file = 'c:/Users/Asus/Desktop/shen/harsh-portfolio/app/projects/page.js';

let text = `import Header from '@/components/Header';
import Preloader from '@/components/Preloader';
import Offcanvas from '@/components/Offcanvas';
import Link from 'next/link';

export const metadata = {
  title: 'Projects | Shaurya Kumar',
  description: 'Explore my selected works and projects.',
};

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "GamerThred Platform",
      role: "Co-Founder & CTO",
      desc: "Architecting a scalable real-time gaming ecosystem with Node.js and Redis.",
      tags: ["NODE.JS", "REAL-TIME"],
      image: "projects/image.png",
      link: "#"
    },
    {
      id: 2,
      title: "Smart Dent AI",
      role: "Lead Full-Stack Developer",
      desc: "Revolutionizing dental care with AI-driven diagnostics and full-stack solutions.",
      tags: ["REACT", "PYTHON", "AI"],
      image: "projects/smart-dent-ai.png",
      link: "#"
    },
    {
      id: 3,
      title: "Talentella",
      role: "Full-Stack Engineer",
      desc: "Empowering creators with a modern talent discovery and management platform.",
      tags: ["NEXT.JS", "TAILWIND", "SUPABASE"],
      image: "projects/image copy 2.png",
      link: "https://www.talentella.in/"
    },
    {
      id: 4,
      title: "Simetra",
      role: "Frontend Engineer",
      desc: "Sleek and performant web platform built with cutting-edge frontend technologies.",
      tags: ["VUE.JS", "CSS MODULES"],
      image: "projects/simetra.png",
      link: "#"
    }
  ];

  return (
    <>
      <Preloader />
      <Offcanvas />
      <Header />
      
      <main className="main-content">
        <section className="portfolio-three-area pt-120 pb-120 position-relative z-1 bg-white" style={{ minHeight: '100vh', paddingTop: '180px' }}>
          <div className="container tw-container-1800-px">
            
            <div className="row tw-mb-15">
              <div className="col-12">
                <h1 className="tw-text-6xl text-heading fw-bold tw-mb-4 text-center">Selected Works</h1>
                <p className="tw-text-xl text-heading opacity-75 text-center">A collection of my recent projects and experiments.</p>
              </div>
            </div>

            <div className="row">
              <div className="col-xl-12">
                <div className="portfolio-three-wrapper d-flex flex-column flex-lg-row justify-content-between flex-wrap align-items-center align-items-lg-start position-relative z-1 gap-4">
                  {projects.map((project) => (
                    <div
                      key={project.id}
                      className="portfolio-three-item tw-rounded-lg tw-mb-705 portfolio-wrapper w-100"
                    >
                      <div className="portfolio-three-wrap d-flex flex-column flex-md-row justify-content-between align-items-center align-items-md-start text-center text-md-start flex-wrap row-gap-2">
                        <div className="tw-mb-6">
                          <div>
                            <h2 className="tw-text-605 fw-medium tw-mb-4">
                              <Link className="hover-text-main-two-600" href={project.link}>
                                {project.title}
                              </Link>
                            </h2>
                          </div>
                          <div className="portfolio-three-list portfolio-list">
                            <ul className="d-flex tw-gap-205 flex-wrap justify-content-center justify-content-md-start">
                              {project.tags.map((tag, idx) => (
                                <li key={idx}>
                                  <a
                                    className="text-uppercase text-heading fw-medium position-relative z-1 hover-bg-main-two-600 hover-border-main-two-600 hover-text-white tw-transition-3"
                                    href={project.link}
                                  >
                                    {tag}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <p className="tw-mt-4 text-heading opacity-75 tw-text-lg">
                            {project.role} | {project.desc}
                          </p>
                        </div>
                        <div>
                          <div className="portfolio-three-button">
                            <Link
                              className="portfolio-three-btn tw-w-8 tw-h-8 lh-1 d-inline-flex justify-content-center align-items-center text-heading rounded-circle hover-bg-main-two-600 hover-text-white"
                              href={project.link}
                            >
                              <i className="ph ph-arrow-up-right"></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                      
                      <div
                        className="portfolio-thumb not-hide-cursor fw-bold mb-0 tw-rounded-lg"
                        data-cursor="View"
                      >
                        <Link className="d-block cursor-hide tw-rounded-lg" href={project.link}>
                          <img
                            className="w-100 tw-rounded-lg object-fit-cover"
                            src={"/" + project.image}
                            alt={project.title}
                            style={{ maxHeight: '800px', objectPosition: 'center' }}
                          />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
\`;

fs.writeFileSync(file, text);
console.log('Fixed projects layout');
