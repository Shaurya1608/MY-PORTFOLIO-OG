import Header from '@/components/Header';
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
  ];

  return (
    <>
      <Preloader />
      <Offcanvas />
      <Header />
      
      <main className="main-content" style={{ backgroundColor: '#0f0f11' }}>
        <section className="portfolio-three-area position-relative z-1" style={{ minHeight: '100vh', paddingTop: '150px', paddingBottom: '120px' }}>
          
          <div className="container tw-container-1800-px">
            
            <div className="row tw-mb-20">
              <div className="col-12 text-center">
                <h1 className="tw-text-7xl text-white fw-bold tw-mb-6 text-uppercase" style={{ letterSpacing: '-1px' }}>Selected Works</h1>
                <p className="tw-text-2xl text-white opacity-75">A collection of my recent projects and experiments.</p>
              </div>
            </div>

            <div className="row justify-content-center">
              <div className="col-xl-10">
                <div className="d-flex flex-column gap-5">
                  {projects.map((project, index) => (
                    <div
                      key={project.id}
                      className="tw-mb-10 w-100 tw-rounded-2xl tw-p-8 tw-bg-neutral-900 tw-bg-opacity-50 tw-border tw-border-neutral-800 hover-border-main-two-600 tw-transition-all duration-500"
                      style={{ backdropFilter: 'blur(10px)' }}
                    >
                      <div className="d-flex flex-column flex-md-row justify-content-between align-items-center align-items-md-start text-center text-md-start flex-wrap row-gap-4">
                        <div className="tw-mb-6 w-100 d-flex justify-content-between align-items-center">
                          <div>
                            <h2 className="tw-text-5xl fw-bold tw-mb-4 text-white">
                              <Link className="hover-text-main-two-600 tw-transition-3" href={project.link}>
                                {project.title}
                              </Link>
                            </h2>
                            <div className="tw-mb-4">
                                <ul className="d-flex tw-gap-4 flex-wrap justify-content-center justify-content-md-start list-unstyled m-0 p-0">
                                {project.tags.map((tag, idx) => (
                                    <li key={idx}>
                                    <span className="text-uppercase text-white tw-text-sm fw-medium tw-px-4 tw-py-2 tw-rounded-full tw-bg-neutral-800 tw-border tw-border-neutral-700">
                                        {tag}
                                    </span>
                                    </li>
                                ))}
                                </ul>
                            </div>
                            <p className="tw-mt-4 text-white opacity-75 tw-text-xl max-w-2xl">
                                <span className="fw-bold text-main-two-600">{project.role}</span> &mdash; {project.desc}
                            </p>
                          </div>
                          <div className="d-none d-md-block">
                            <Link
                              className="tw-w-16 tw-h-16 lh-1 d-inline-flex justify-content-center align-items-center text-white rounded-circle tw-bg-neutral-800 hover-bg-main-two-600 tw-transition-3 tw-text-3xl"
                              href={project.link}
                            >
                              <i className="ph ph-arrow-up-right"></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                      
                      <div className="tw-mt-8 tw-rounded-xl overflow-hidden tw-relative group">
                        <Link className="d-block w-100 h-100" href={project.link}>
                          <img
                            className="w-100 tw-rounded-xl object-fit-cover tw-transition-transform duration-700 hover-scale-105"
                            src={"/" + project.image}
                            alt={project.title}
                            style={{ maxHeight: '700px', objectPosition: 'center' }}
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
