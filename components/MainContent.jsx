import Link from 'next/link';

const SkillCard = ({ skill, delay }) => (
  <div className="col-xl-2 col-lg-6 col-md-6">
    <div
      className="brand-item brand-three-item position-relative z-1 tw-mb-1 d-flex justify-content-center align-items-center w-100 h-100"
      style={{ minHeight: "140px" }}
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay={delay}
    >
      <span className="brand-active-media d-flex justify-content-center align-items-center w-100 h-100 p-3 text-center tw-transition-opacity">
        <h4 className="tw-text-xl fw-bold text-black m-0 lh-base">{skill}</h4>
      </span>
      <span className="brand-hover-media d-flex justify-content-center align-items-center w-100 h-100 p-3 text-center tw-transition-opacity">
        <h4 className="tw-text-xl fw-bold text-black m-0 lh-base" style={{ transform: "scale(1.1)", transition: "transform 0.3s ease" }}>{skill}</h4>
      </span>
    </div>
  </div>
);



const ProcessSection = () => {
  return (
    <section className="feature-three-area py-120 position-relative bg-white" id="process" style={{ zIndex: 1, overflow: 'hidden' }}>
      <div 
        className="position-absolute top-0 start-0 w-100 h-100" 
        style={{ 
          backgroundImage: "url('/assets/images/shapes/footer-three-bg-shape.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "invert(1) opacity(0.2)",
          pointerEvents: "none",
          zIndex: -1 
        }}
      ></div>
      <div className="container tw-container-1800-px position-relative" style={{ zIndex: 2 }}>
        <div className="row justify-content-center tw-mb-15">
          <div className="col-xl-8">
            <div className="text-center">
              <h2 className="testimonial-three-title text-black tw-text-15 tw-itm-title tw-itm-anim">
                My Engineering Process
              </h2>
              <p className="tw-mt-6 tw-text-xl text-black opacity-75">
                A methodical approach to building scalable, high-performance systems from concept to production.
              </p>
            </div>
          </div>
        </div>
        
        <div className="row g-4">
          {/* Step 1 */}
          <div className="col-xl-3 col-lg-6 col-md-6">
            <div className="tw-p-10 bg-white tw-rounded-2xl tw-transition-3 tw-h-full position-relative z-1" style={{ boxShadow: "0 10px 40px rgba(0,0,0,0.05)", border: "1px solid rgba(0,0,0,0.03)" }}>
              <div className="bg-main-two-600 text-white rounded-circle d-flex align-items-center justify-content-center tw-text-2xl fw-bold tw-mb-8" style={{ width: "70px", height: "70px", boxShadow: "0 10px 20px rgba(255, 107, 0, 0.2)" }}>
                01
              </div>
              <h3 className="tw-text-3xl fw-bold text-black tw-mb-4">System Design</h3>
              <p className="tw-text-lg text-black opacity-75 lh-base">
                Architecting scalable foundations. I start with database schemas, API contracts, and infrastructure planning to ensure long-term stability.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="col-xl-3 col-lg-6 col-md-6">
            <div className="tw-p-10 bg-white tw-rounded-2xl tw-transition-3 tw-h-full position-relative z-1" style={{ boxShadow: "0 10px 40px rgba(0,0,0,0.05)", border: "1px solid rgba(0,0,0,0.03)" }}>
              <div className="bg-main-two-600 text-white rounded-circle d-flex align-items-center justify-content-center tw-text-2xl fw-bold tw-mb-8" style={{ width: "70px", height: "70px", boxShadow: "0 10px 20px rgba(255, 107, 0, 0.2)" }}>
                02
              </div>
              <h3 className="tw-text-3xl fw-bold text-black tw-mb-4">Development</h3>
              <p className="tw-text-lg text-black opacity-75 lh-base">
                Writing clean, type-safe code. Building full-stack features with React/Next.js and Node.js while maintaining rigorous testing standards.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="col-xl-3 col-lg-6 col-md-6">
            <div className="tw-p-10 bg-white tw-rounded-2xl tw-transition-3 tw-h-full position-relative z-1" style={{ boxShadow: "0 10px 40px rgba(0,0,0,0.05)", border: "1px solid rgba(0,0,0,0.03)" }}>
              <div className="bg-main-two-600 text-white rounded-circle d-flex align-items-center justify-content-center tw-text-2xl fw-bold tw-mb-8" style={{ width: "70px", height: "70px", boxShadow: "0 10px 20px rgba(255, 107, 0, 0.2)" }}>
                03
              </div>
              <h3 className="tw-text-3xl fw-bold text-black tw-mb-4">Integration</h3>
              <p className="tw-text-lg text-black opacity-75 lh-base">
                Connecting the dots. Integrating third-party APIs (Stripe, Cloudinary, OpenAI) and setting up real-time bidirectional communication.
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="col-xl-3 col-lg-6 col-md-6">
            <div className="tw-p-10 bg-white tw-rounded-2xl tw-transition-3 tw-h-full position-relative z-1" style={{ boxShadow: "0 10px 40px rgba(0,0,0,0.05)", border: "1px solid rgba(0,0,0,0.03)" }}>
              <div className="bg-main-two-600 text-white rounded-circle d-flex align-items-center justify-content-center tw-text-2xl fw-bold tw-mb-8" style={{ width: "70px", height: "70px", boxShadow: "0 10px 20px rgba(255, 107, 0, 0.2)" }}>
                04
              </div>
              <h3 className="tw-text-3xl fw-bold text-black tw-mb-4">Deployment</h3>
              <p className="tw-text-lg text-black opacity-75 lh-base">
                Shipping to production. Containerizing with Docker, setting up CI/CD pipelines, and monitoring infrastructure health and performance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function MainContent() {
  return (
    <>
      
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <section className="banner-three-area">
          <div className="container tw-container-1800-px">
            <div className="row">
              <div className="col-xl-12">
                <div className="banner-three-wrapper position-relative z-1">
                  
                  <h1 className="banner-three-title text-black tw-mb-30">
                    developer
                  </h1>
                  <div
                    className="banner-three-wrap d-flex flex-column flex-xl-row justify-content-between align-items-center align-items-xl-end gap-5 position-relative z-1">
                    <div className="banner-three-left tw-rounded-lg" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                      <h2 className="banner-three-left-title tw-text-3xl tw-mb-6">
                        Hello! I'm Shaurya Kumar <br />
                        Technical Founder & Full-Stack Engineer
                      </h2>
                      <div className="banner-three-list">
                        <ul>
                          <li className="tw-text-lg fw-medium d-inline-flex align-items-center tw-gap-2 tw-mb-4">
                            <span><img loading="lazy" decoding="async" src="assets/images/icons/banner-three-pluse.svg" alt="pluse" /></span>
                            System Design
                          </li>
                          <li className="tw-text-lg fw-medium d-inline-flex align-items-center tw-gap-2 tw-mb-4">
                            <span><img loading="lazy" decoding="async" src="assets/images/icons/banner-three-pluse.svg" alt="pluse" /></span>
                            Scalable Architecture
                          </li>
                          <li className="tw-text-lg fw-medium d-inline-flex align-items-center tw-gap-2 tw-mb-4">
                            <span><img loading="lazy" decoding="async" src="assets/images/icons/banner-three-pluse.svg" alt="pluse" /></span>
                            Real-Time Infrastructure
                          </li>
                          <li className="tw-text-lg fw-medium d-inline-flex align-items-center tw-gap-2 tw-mb-4">
                            <span><img loading="lazy" decoding="async" src="assets/images/icons/banner-three-pluse.svg" alt="pluse" /></span>
                            SaaS Development
                          </li>
                          <li className="tw-text-lg fw-medium d-inline-flex align-items-center tw-gap-2 tw-mb-4">
                            <span><img loading="lazy" decoding="async" src="assets/images/icons/banner-three-pluse.svg" alt="pluse" /></span>
                            Node.js & React
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="banner-three-center text-center" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                      <h3 className="banner-three-center-title tw-text-120">
                        Building products that scale.
                      </h3>
                      <div className="banner-three-button">
                        <a className="tw-hover-btn bg-black text-white fw-bold tw-py-4 tw-px-10 d-inline-block hover-text-white text-uppercase tw-rounded-lg" href="#portfolio">
                          view projects
                          <span className="tw-hover-btn-circle-dot bg-main-two-600"></span>
                        </a>
                      </div>
                    </div>

                    <div className="banner-three-right tw-rounded-lg" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
                      <div className="banner-three-counter-item tw-rounded-md tw-mb-4 position-relative">
                        <h4 className="banner-three-counter-title tw-text-101 fw-semibold font-heading text-heading tw-mb-2 lh-1">
                          <span className="purecounter font-heading" data-purecounter-duration="2" data-purecounter-end="98"></span>%
                        </h4>
                        <p className="banner-three-counter-paragraph tw-text-lg fw-medium text-heading">
                          Client Satisfaction Rate
                        </p>
                      </div>
                      <div className="banner-three-counter-item tw-rounded-md tw-mb-4 ms-auto bg-black">
                        <h4 className="banner-three-counter-title tw-text-101 fw-semibold font-heading text-white tw-mb-2 lh-1">
                          <span className="purecounter font-heading" data-purecounter-duration="4" data-purecounter-end="20"></span>+
                        </h4>
                        <p className="banner-three-counter-paragraph tw-text-lg fw-medium text-white">
                          Projects Launched
                        </p>
                      </div>
                    </div>

                    <div className="banner-three-line-shape position-absolute start-50 translate-middle-x z-n1">
                      <img loading="lazy" decoding="async" src="assets/images/shapes/banner-three-shape.png" alt="shape" />
                      <div className="banner-three-carcel-shape">
                        <div><span></span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="about-three-area py-120 position-relative z-1" id="about">
          <div className="container tw-container-1800-px">
            <div className="about-three-top position-relative z-1">
              <div className="row justify-content-center tw-mb-21">
                <div className="col-xl-9">
                  <div className="text-center">
                    <h2 className="about-three-title text-heading tw-text-15 tw-itm-title tw-itm-anim">
                      I build scalable digital products, SaaS platforms, and high-performance backend systems. 
                      My work sits at the intersection of technology, product development, and business strategy.
                    </h2>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xl-6">
                  <div className="about-three-thumb w-100 tw-rounded-lg" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                    <img loading="lazy" decoding="async" className="w-100 tw-rounded-lg" src="/my-image/IMG_0026.jpg" alt="thumb" style={{ maxHeight: "800px", objectFit: "cover", objectPosition: "center" }} />
                  </div>
                </div>
                <div className="col-xl-6">
                  <div className="about-three-right" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
                    <div>
                      <p className="tw-text-xl tw-mb-10 text-black opacity-75">
                        I am a Technical Founder and Full-Stack Engineer focused on building scalable digital products. 
                        Currently, I am Co-Founder at TalentElla—a creative tech agency helping businesses grow—and CTO & Co-Founder at GamerThred, leading backend architecture and real-time infrastructure.
                      </p>
                      <p className="tw-text-xl tw-mb-10 text-black opacity-75">
                        My expertise includes System Design, Distributed Systems, Node.js, React, MongoDB, and Redis. 
                        I enjoy taking an idea from initial architecture and database design all the way to a production-ready product, focusing on performance, low latency, and security.
                      </p>
                      <p className="tw-text-xl tw-mb-10 text-black opacity-75">
                        I am also building Nexora, a unified business operating system. 
                        Good engineering isn't just about writing code—it’s about understanding the problem, designing the right system, building for scale, and creating something people actually need.
                      </p>
                    </div>
                    <div className="about-three-counter d-inline-block">
                      <div className="tw-hover-btn-wrapper d-inline-block">
                        <a className="tw-btn-circle tw-hover-btn-item tw-hover-btn tw-w-160-px tw-h-160-px lh-1 d-inline-flex justify-content-center align-items-center rounded-circle position-relative overflow-hidden border border-1 border-neutral-200" href="#about">
                          <span className="d-flex flex-column justify-content-center">
                            <span
                              className="tw-btn-circle-icon text-heading tw-text-8 tw-transition-3 font-heading fw-medium"
                              >4+</span
                            >
                            <span
                              className="text-heading fw-bold text-center tw-transition-3 tw-text-2xl fw-medium"
                              >Years of Experience</span
                            >
                          </span>
                          <i className="tw-btn-circle-dot bg-main-two-600"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="about-three-wrap-shape d-flex flex-column flex-sm-row gap-3 justify-content-between"
              >
                <div
                  className="banner-three-counter-item tw-rounded-md position-relative"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                >
                  <h2
                    className="banner-three-counter-title tw-text-101 fw-semibold font-heading text-heading tw-mb-2 lh-1"
                  >
                    <span
                      className="purecounter font-heading"
                      data-purecounter-duration="4"
                      data-purecounter-end="4"
                    ></span
                    >.9/5
                  </h2>
                  <p
                    className="banner-three-counter-paragraph tw-text-lg fw-medium text-heading"
                  >
                    Client Satisfaction Rate
                  </p>
                </div>
                <div
                  className="banner-three-counter-item tw-rounded-md position-relative"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="300"
                >
                  <h2
                    className="banner-three-counter-title tw-text-101 fw-semibold font-heading text-heading tw-mb-2 lh-1"
                  >
                    <span
                      className="purecounter font-heading"
                      data-purecounter-duration="2"
                      data-purecounter-end="2"
                    ></span
                    >+
                  </h2>
                  <p
                    className="banner-three-counter-paragraph tw-text-lg fw-medium text-heading"
                  >
                    Years Freelance Experience
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img loading="lazy" decoding="async"
              className="about-three-shape position-absolute start-0 w-100"
              src="assets/images/shapes/about-three-shape.png"
              alt="shape"
            />
          </div>
        </section>
        {/*  ======================== Marquee section start ===========================  */}
        <div className="marquee tw-pt-17 bg-black">
          <div
            className="marquee_left d-flex align-items-center justify-content-between tw-gap-16 overflow-hidden"
          >
            <div>
              <h2
                className="marquee-two-title marquee-three-title text-uppercase text-white"
              >
                Services <span className="text-white">-</span>
              </h2>
            </div>
            <div>
              <h2
                className="marquee-two-title marquee-three-title text-uppercase text-stroke"
              >
                Services <span className="text-white">-</span>
              </h2>
            </div>
            <div>
              <h2
                className="marquee-two-title marquee-three-title text-uppercase text-white"
              >
                Services <span className="text-white">-</span>
              </h2>
            </div>
            <div>
              <h2
                className="marquee-two-title marquee-three-title text-uppercase text-stroke"
              >
                Services <span className="text-white">-</span>
              </h2>
            </div>
            <div>
              <h2
                className="marquee-two-title marquee-three-title text-uppercase text-white"
              >
                Services <span className="text-white">-</span>
              </h2>
            </div>
          </div>
        </div>
        {/*  ======================== Marquee section end ===========================  */}
        <section className="service-three-area bg-black pt-120 tw-pb-15">
          <div className="container tw-container-1800-px">
            <div className="row">
              <div className="col-12">
                <div className="service-three-wrapper">
                  <div
                    className="service-three-single"
                    data-aos="fade-right"
                    data-aos-duration="2000"
                    data-aos-delay="200"
                  >
                    <div
                      className="service-three-item d-flex flex-column flex-lg-row justify-content-between align-items-center gap-4 text-center text-lg-start"
                    >
                      <div className="service-three-content d-flex flex-column flex-md-row align-items-center align-items-md-start tw-gap-14">
                        <div>
                          <span
                            className="service-three-number text-white tw-text-xl d-inline-flex align-items-center tw-gap-3 lh-1 tw-mt-5 tw-transition-3"
                            >01
                            <img loading="lazy" decoding="async"
                              className="tw-transition-3"
                              src="assets/images/icons/service-three-arrow.svg"
                              alt="arrow"
                          /></span>
                        </div>
                        <div>
                          <div>
                            <h2
                              className="service-three-title tw-text-15 text-white tw-mb-4"
                            >
                              <a href="#"
                                >Backend Engineering</a
                              >
                            </h2>
                          </div>
                          <div className="portfolio-list portfolio-two-list">
                            <ul className="d-flex tw-gap-205 flex-wrap">
                              <li>
                                <a
                                  className="text-uppercase text-white tw-text-sm fw-medium position-relative z-1 hover-bg-main-two-600 hover-border-main-two-600 hover-text-heading tw-transition-3"
                                  href="#"
                                  >Node.js</a
                                >
                              </li>
                              <li>
                                <a
                                  className="text-uppercase text-white tw-text-sm fw-medium position-relative z-1 hover-bg-main-two-600 hover-border-main-two-600 hover-text-heading tw-transition-3"
                                  href="#"
                                  >MongoDB</a
                                >
                              </li>
                              <li>
                                <a
                                  className="text-uppercase text-white tw-text-sm fw-medium position-relative z-1 hover-bg-main-two-600 hover-border-main-two-600 hover-text-heading tw-transition-3"
                                  href="#"
                                  >Redis</a
                                >
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="service-three-thumb">
                        <a href="#"
                          ><img loading="lazy" decoding="async"
                            src="assets/images/thumbs/service-three-thumb1.png"
                            alt="thumb1"
                        /></a>
                      </div>
                    </div>
                  </div>
                  <div
                    className="service-three-single ms-auto"
                    data-aos="fade-left"
                    data-aos-duration="2000"
                    data-aos-delay="300"
                  >
                    <div
                      className="service-three-item d-flex flex-column flex-lg-row justify-content-between align-items-center gap-4 text-center text-lg-start"
                    >
                      <div className="service-three-content d-flex flex-column flex-md-row align-items-center align-items-md-start tw-gap-14">
                        <div>
                          <span
                            className="service-three-number text-white tw-text-xl d-inline-flex align-items-center tw-gap-3 lh-1 tw-mt-5 tw-transition-3"
                            >02
                            <img loading="lazy" decoding="async"
                              className="tw-transition-3"
                              src="assets/images/icons/service-three-arrow.svg"
                              alt="arrow"
                          /></span>
                        </div>
                        <div>
                          <div>
                            <h2
                              className="service-three-title tw-text-15 text-white tw-mb-4"
                            >
                              <a href="#"
                                >Full-Stack Development</a
                              >
                            </h2>
                          </div>
                          <div className="portfolio-list portfolio-two-list">
                            <ul className="d-flex tw-gap-205 flex-wrap">
                              <li>
                                <a
                                  className="text-uppercase text-white tw-text-sm fw-medium position-relative z-1 hover-bg-main-two-600 hover-border-main-two-600 hover-text-heading tw-transition-3"
                                  href="#"
                                  >React.js</a
                                >
                              </li>
                              <li>
                                <a
                                  className="text-uppercase text-white tw-text-sm fw-medium position-relative z-1 hover-bg-main-two-600 hover-border-main-two-600 hover-text-heading tw-transition-3"
                                  href="#"
                                  >Next.js</a
                                >
                              </li>
                              <li>
                                <a
                                  className="text-uppercase text-white tw-text-sm fw-medium position-relative z-1 hover-bg-main-two-600 hover-border-main-two-600 hover-text-heading tw-transition-3"
                                  href="#"
                                  >Tailwind CSS</a
                                >
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="service-three-thumb">
                        <a href="#"
                          ><img loading="lazy" decoding="async"
                            src="assets/images/thumbs/service-three-thumb2.png"
                            alt="thumb1"
                        /></a>
                      </div>
                    </div>
                  </div>
                  <div
                    className="service-three-single"
                    data-aos="fade-right"
                    data-aos-duration="2000"
                    data-aos-delay="400"
                  >
                    <div
                      className="service-three-item d-flex flex-column flex-lg-row justify-content-between align-items-center gap-4 text-center text-lg-start"
                    >
                      <div className="service-three-content d-flex flex-column flex-md-row align-items-center align-items-md-start tw-gap-14">
                        <div>
                          <span
                            className="service-three-number text-white tw-text-xl d-inline-flex align-items-center tw-gap-3 lh-1 tw-mt-5 tw-transition-3"
                            >03
                            <img loading="lazy" decoding="async"
                              className="tw-transition-3"
                              src="assets/images/icons/service-three-arrow.svg"
                              alt="arrow"
                          /></span>
                        </div>
                        <div>
                          <div>
                            <h2
                              className="service-three-title tw-text-15 text-white tw-mb-4"
                            >
                              <a href="#">System Architecture</a>
                            </h2>
                          </div>
                          <div className="portfolio-list portfolio-two-list">
                            <ul className="d-flex tw-gap-205 flex-wrap">
                              <li>
                                <a
                                  className="text-uppercase text-white tw-text-sm fw-medium position-relative z-1 hover-bg-main-two-600 hover-border-main-two-600 hover-text-heading tw-transition-3"
                                  href="#"
                                  >Scalability</a
                                >
                              </li>
                              <li>
                                <a
                                  className="text-uppercase text-white tw-text-sm fw-medium position-relative z-1 hover-bg-main-two-600 hover-border-main-two-600 hover-text-heading tw-transition-3"
                                  href="#"
                                  >Microservices</a
                                >
                              </li>
                              <li>
                                <a
                                  className="text-uppercase text-white tw-text-sm fw-medium position-relative z-1 hover-bg-main-two-600 hover-border-main-two-600 hover-text-heading tw-transition-3"
                                  href="#"
                                  >Cloud Infrastructure</a
                                >
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="service-three-thumb">
                        <a href="#"
                          ><img loading="lazy" decoding="async"
                            src="assets/images/thumbs/service-three-thumb3.png"
                            alt="thumb1"
                        /></a>
                      </div>
                    </div>
                  </div>
                  <div
                    className="service-three-single ms-auto"
                    data-aos="fade-left"
                    data-aos-duration="2000"
                    data-aos-delay="500"
                  >
                    <div
                      className="service-three-item d-flex flex-column flex-lg-row justify-content-between align-items-center gap-4 text-center text-lg-start"
                    >
                      <div className="service-three-content d-flex flex-column flex-md-row align-items-center align-items-md-start tw-gap-14">
                        <div>
                          <span
                            className="service-three-number text-white tw-text-xl d-inline-flex align-items-center tw-gap-3 lh-1 tw-mt-5 tw-transition-3"
                            >04
                            <img loading="lazy" decoding="async"
                              className="tw-transition-3"
                              src="assets/images/icons/service-three-arrow.svg"
                              alt="arrow"
                          /></span>
                        </div>
                        <div>
                          <div>
                            <h2
                              className="service-three-title tw-text-15 text-white tw-mb-4"
                            >
                              <a href="#"
                                >SaaS & Product Strategy</a
                              >
                            </h2>
                          </div>
                          <div className="portfolio-list portfolio-two-list">
                            <ul className="d-flex tw-gap-205 flex-wrap">
                              <li>
                                <a
                                  className="text-uppercase text-white tw-text-sm fw-medium position-relative z-1 hover-bg-main-two-600 hover-border-main-two-600 hover-text-heading tw-transition-3"
                                  href="#"
                                  >Product Architecture</a
                                >
                              </li>
                              <li>
                                <a
                                  className="text-uppercase text-white tw-text-sm fw-medium position-relative z-1 hover-bg-main-two-600 hover-border-main-two-600 hover-text-heading tw-transition-3"
                                  href="#"
                                  >MVP Development</a
                                >
                              </li>
                              <li>
                                <a
                                  className="text-uppercase text-white tw-text-sm fw-medium position-relative z-1 hover-bg-main-two-600 hover-border-main-two-600 hover-text-heading tw-transition-3"
                                  href="#"
                                  >Payment Integration</a
                                >
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="service-three-thumb">
                        <a href="#"
                          ><img loading="lazy" decoding="async"
                            src="assets/images/thumbs/service-three-thumb4.png"
                            alt="thumb1"
                        /></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="portfolio-three-area py-120 position-relative z-1">
          <div className="portfolio-three-shape position-absolute top-0 z-n1">
            <h3 className="portfolio-three-shape-title">works</h3>
          </div>
          <div className="container tw-container-1800-px">
            <div className="row">
              <div className="col-xl-12">
                <div
                  className="portfolio-three-wrapper d-flex flex-column flex-lg-row justify-content-between flex-wrap align-items-center align-items-lg-start position-relative z-1 gap-4"
                >
                  <div
                    className="portfolio-three-item tw-rounded-lg tw-mb-705 portfolio-wrapper"
                  >
                    <div
                      className="portfolio-three-wrap d-flex flex-column flex-md-row justify-content-between align-items-center align-items-md-start text-center text-md-start flex-wrap row-gap-2"
                    >
                      <div className="tw-mb-6">
                        <div>
                          <h2 className="tw-text-605 fw-medium tw-mb-4">
                            <a
                              className="hover-text-main-two-600"
                              href="https://gamer-thred-website-main.vercel.app/" target="_blank" rel="noopener noreferrer">GamerThred Platform</a
                            >
                          </h2>
                        </div>
                        <div className="portfolio-three-list portfolio-list">
                          <ul className="d-flex tw-gap-205 flex-wrap">
                            <li>
                              <a
                                className="text-uppercase text-heading fw-medium position-relative z-1 hover-bg-main-two-600 hover-border-main-two-600 hover-text-white tw-transition-3"
                                href="#"
                                >NODE.JS</a
                              >
                            </li>
                            <li>
                              <a
                                className="text-uppercase text-heading fw-medium position-relative z-1 hover-bg-main-two-600 hover-border-main-two-600 hover-text-white tw-transition-3"
                                href="#"
                                >REAL-TIME</a
                              >
                            </li>
                          </ul>
                        </div>
                        <p className="tw-mt-4 text-heading opacity-75 tw-text-lg">
                          Co-Founder & CTO architecting a scalable real-time gaming ecosystem with Node.js and Redis.
                        </p>
                      </div>
                      <div>
                        <div className="portfolio-three-button">
                          <a
                            className="portfolio-three-btn tw-w-8 tw-h-8 lh-1 d-inline-flex justify-content-center align-items-center text-heading rounded-circle hover-bg-main-two-600 hover-text-white"
                            href="https://gamer-thred-website-main.vercel.app/" target="_blank" rel="noopener noreferrer"
                            ><i className="ph ph-arrow-up-right"></i
                          ></a>
                        </div>
                      </div>
                    </div>
                    <div
                      className="portfolio-thumb not-hide-cursor fw-bold mb-0 tw-rounded-lg"
                      data-cursor="View"
                    >
                      <a
                        className="d-block cursor-hide tw-rounded-lg"
                        href="https://gamer-thred-website-main.vercel.app/" target="_blank" rel="noopener noreferrer"
                        ><img loading="lazy" decoding="async"
                          className="w-100 tw-rounded-lg"
                          src="projects/image.png"
                          alt="thumb"
                      /></a>
                    </div>
                  </div>
                  <div
                    className="portfolio-three-item tw-rounded-lg tw-mb-705 portfolio-wrapper"
                  >
                    <div
                      className="portfolio-three-wrap d-flex flex-column flex-md-row justify-content-between align-items-center align-items-md-start text-center text-md-start flex-wrap row-gap-2"
                    >
                      <div className="tw-mb-6">
                        <div>
                          <h2 className="tw-text-605 fw-medium tw-mb-4">
                            <a
                              className="hover-text-main-two-600"
                              href="https://lumen-team-manangement.vercel.app/" target="_blank" rel="noopener noreferrer">Nexora OS</a
                            >
                          </h2>
                        </div>
                        <div className="portfolio-three-list portfolio-list">
                          <ul className="d-flex tw-gap-205 flex-wrap">
                            <li>
                              <a
                                className="text-uppercase text-heading fw-medium position-relative z-1 hover-bg-main-two-600 hover-border-main-two-600 hover-text-white tw-transition-3"
                                href="#"
                                >SYSTEM DESIGN</a
                              >
                            </li>
                            <li>
                              <a
                                className="text-uppercase text-heading fw-medium position-relative z-1 hover-bg-main-two-600 hover-border-main-two-600 hover-text-white tw-transition-3"
                                href="#"
                                >ARCHITECTURE</a
                              >
                            </li>
                          </ul>
                        </div>
                        <p className="tw-mt-4 text-heading opacity-75 tw-text-lg">
                          Designed and engineered the core system architecture for Nexora OS, focusing on high performance and scalability.
                        </p>
                      </div>
                      <div className="portfolio-three-button">
                        <a
                          className="portfolio-three-btn tw-w-8 tw-h-8 lh-1 d-inline-flex justify-content-center align-items-center text-heading rounded-circle hover-bg-main-two-600 hover-text-white"
                            href="https://lumen-team-manangement.vercel.app/" target="_blank" rel="noopener noreferrer"
                          ><i className="ph ph-arrow-up-right"></i
                        ></a>
                      </div>
                    </div>
                    <div
                      className="portfolio-thumb not-hide-cursor fw-bold mb-0 tw-rounded-lg"
                      data-cursor="View"
                    >
                      <a
                        className="d-block cursor-hide tw-rounded-lg"
                        href="https://lumen-team-manangement.vercel.app/" target="_blank" rel="noopener noreferrer"
                        ><img loading="lazy" decoding="async"
                          className="w-100 tw-rounded-lg"
                          src="projects/image%20copy.png"
                          alt="thumb"
                      /></a>
                    </div>
                  </div>
                  <div
                    className="portfolio-three-item tw-rounded-lg tw-mb-705 portfolio-wrapper"
                  >
                    <div
                      className="portfolio-three-wrap d-flex flex-column flex-md-row justify-content-between align-items-center align-items-md-start text-center text-md-start flex-wrap row-gap-2"
                    >
                      <div className="tw-mb-6">
                        <div>
                          <h2 className="tw-text-605 fw-medium tw-mb-4">
                            <a
                              className="hover-text-main-two-600"
                              href="https://simetratech.com/" target="_blank" rel="noopener noreferrer">Simetra AR/VR 3D</a
                            >
                          </h2>
                        </div>
                        <div className="portfolio-three-list portfolio-list">
                          <ul className="d-flex tw-gap-205 flex-wrap">
                            <li>
                              <a
                                className="text-uppercase text-heading fw-medium position-relative z-1 hover-bg-main-two-600 hover-border-main-two-600 hover-text-white tw-transition-3"
                                href="#"
                                >AR/VR</a
                              >
                            </li>
                            <li>
                              <a
                                className="text-uppercase text-heading fw-medium position-relative z-1 hover-bg-main-two-600 hover-border-main-two-600 hover-text-white tw-transition-3"
                                href="#"
                                >3D WEBGL</a
                              >
                            </li>
                          </ul>
                        </div>
                        <p className="tw-mt-4 text-heading opacity-75 tw-text-lg">
                          Developed an immersive AR/VR 3D website experience for Simetra using WebGL and advanced frontend technologies.
                        </p>
                      </div>
                      <div className="portfolio-three-button">
                        <a
                          className="portfolio-three-btn tw-w-8 tw-h-8 lh-1 d-inline-flex justify-content-center align-items-center text-heading rounded-circle hover-bg-main-two-600 hover-text-white"
                            href="https://simetratech.com/" target="_blank" rel="noopener noreferrer"
                          ><i className="ph ph-arrow-up-right"></i
                        ></a>
                      </div>
                    </div>
                    <div
                      className="portfolio-thumb not-hide-cursor fw-bold mb-0 tw-rounded-lg"
                      data-cursor="View"
                    >
                      <a
                        className="d-block cursor-hide tw-rounded-lg"
                        href="https://simetratech.com/" target="_blank" rel="noopener noreferrer"
                        ><img loading="lazy" decoding="async"
                          className="w-100 tw-rounded-lg"
                          src="projects/simetra.png"
                          alt="thumb"
                      /></a>
                    </div>
                  </div>
                  <div
                    className="portfolio-three-item tw-rounded-lg tw-mb-705 portfolio-wrapper"
                  >
                    <div
                      className="portfolio-three-wrap d-flex flex-column flex-md-row justify-content-between align-items-center align-items-md-start text-center text-md-start flex-wrap row-gap-2"
                    >
                      <div className="tw-mb-6">
                        <div>
                          <h2 className="tw-text-605 fw-medium tw-mb-4">
                            <a
                              className="hover-text-main-two-600"
                              href="https://smart-dent-ai-app.vercel.app/" target="_blank" rel="noopener noreferrer">Smart Dent AI</a
                            >
                          </h2>
                        </div>
                        <div className="portfolio-three-list portfolio-list">
                          <ul className="d-flex tw-gap-205 flex-wrap">
                            <li>
                              <a
                                className="text-uppercase text-heading fw-medium position-relative z-1 hover-bg-main-two-600 hover-border-main-two-600 hover-text-white tw-transition-3"
                                href="#"
                                >AI INTEGRATION</a
                              >
                            </li>
                            <li>
                              <a
                                className="text-uppercase text-heading fw-medium position-relative z-1 hover-bg-main-two-600 hover-border-main-two-600 hover-text-white tw-transition-3"
                                href="#"
                                >HEALTHCARE</a
                              >
                            </li>
                          </ul>
                        </div>
                        <p className="tw-mt-4 text-heading opacity-75 tw-text-lg">
                          An AI-powered dental application designed to streamline workflows and enhance patient care through intelligent analysis.
                        </p>
                      </div>
                      <div className="portfolio-three-button">
                        <a
                          className="portfolio-three-btn tw-w-8 tw-h-8 lh-1 d-inline-flex justify-content-center align-items-center text-heading rounded-circle hover-bg-main-two-600 hover-text-white"
                            href="https://smart-dent-ai-app.vercel.app/" target="_blank" rel="noopener noreferrer"
                          ><i className="ph ph-arrow-up-right"></i
                        ></a>
                      </div>
                    </div>
                    <div
                      className="portfolio-thumb not-hide-cursor fw-bold mb-0 tw-rounded-lg"
                      data-cursor="View"
                    >
                      <a
                        className="d-block cursor-hide tw-rounded-lg"
                        href="https://smart-dent-ai-app.vercel.app/" target="_blank" rel="noopener noreferrer"
                        ><img loading="lazy" decoding="async"
                          className="w-100 tw-rounded-lg"
                          src="projects/smart-dent-ai.png"
                          alt="thumb"
                      /></a>
                    </div>
                  </div>
                  <div
                    className="about-three-counter portfolio-three-counter d-inline-block position-absolute bottom-0 end-0"
                  >
                    <div className="tw-hover-btn-wrapper d-inline-block">
                      <a
                        className="tw-btn-circle tw-hover-btn-item tw-hover-btn tw-w-160-px tw-h-160-px lh-1 d-inline-flex justify-content-center align-items-center rounded-circle position-relative overflow-hidden"
                        href="/projects"
                      >
                        <span className="d-flex flex-column justify-content-center">
                          <span
                            className="text-heading fw-bold tw-transition-3 tw-text-2xl fw-semibold"
                            >Discover <br />
                            Our Projects <i className="ph ph-arrow-up-right"></i
                          ></span>
                        </span>
                        <i className="tw-btn-circle-dot bg-main-two-600"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="feature-three-area py-120 position-relative z-1">
          <div className="container tw-container-1800-px">
            <div className="row">
              <div className="col-xl-12">
                <div className="feature-three-wrapper hover__widget">
                  <div
                    className="feature-three-single current hover__reveal-item"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="200"
                  >
                    <div
                      className="feature-three-item d-flex flex-column flex-lg-row justify-content-between align-items-center gap-4 text-center text-lg-start"
                    >
                      <div className="feature-three-left d-flex flex-column flex-sm-row align-items-center text-center text-sm-start gap-3">
                        <div>
                          <span
                            className="feature-three-text tw-text-605 fw-medium text-white tw-transition-3 d-inline-block tw-w-20"
                            >01</span
                          >
                        </div>
                        <div>
                          <span
                            className="feature-three-text tw-text-605 fw-medium text-white tw-transition-3 d-inline-block tw-w-160-px"
                            >TalentElla</span
                          >
                        </div>
                        <div>
                          <span
                            className="feature-three-text tw-text-605 fw-medium text-white tw-transition-3 d-inline-block"
                            >Co-Founder & Full-Stack Engineer</span
                          >
                        </div>
                      </div>
                      <div>
                        <span
                          className="feature-three-text tw-text-605 fw-medium text-white tw-transition-3 d-inline-block"
                          >2024</span
                        >
                      </div>
                    </div>
                    <div
                      className="hover__reveal-bg bg-img"
                      data-background-image="assets/images/thumbs/feature-three-thumb1.jpg"
                    ></div>
                  </div>
                  <div
                    className="feature-three-single hover__reveal-item"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="200"
                  >
                    <div
                      className="feature-three-item d-flex flex-column flex-lg-row justify-content-between align-items-center gap-4 text-center text-lg-start"
                    >
                      <div className="feature-three-left d-flex flex-column flex-sm-row align-items-center text-center text-sm-start gap-3">
                        <div>
                          <span
                            className="feature-three-text tw-text-605 fw-medium text-white tw-transition-3 d-inline-block tw-w-20"
                            >02</span
                          >
                        </div>
                        <div>
                          <span
                            className="feature-three-text tw-text-605 fw-medium text-white tw-transition-3 d-inline-block tw-w-160-px"
                            >GamerThred</span
                          >
                        </div>
                        <div>
                          <span
                            className="feature-three-text tw-text-605 fw-medium text-white tw-transition-3 d-inline-block"
                            >Co-Founder & CTO</span
                          >
                        </div>
                      </div>
                      <div>
                        <span
                          className="feature-three-text tw-text-605 fw-medium text-white tw-transition-3 d-inline-block"
                          >2023</span
                        >
                      </div>
                    </div>
                    <div
                      className="hover__reveal-bg bg-img"
                      data-background-image="assets/images/thumbs/portfolio-two-thumb1.jpg"
                    ></div>
                  </div>
                  <div
                    className="feature-three-single hover__reveal-item"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="200"
                  >
                    <div
                      className="feature-three-item d-flex flex-column flex-lg-row justify-content-between align-items-center gap-4 text-center text-lg-start"
                    >
                      <div className="feature-three-left d-flex flex-column flex-sm-row align-items-center text-center text-sm-start gap-3">
                        <div>
                          <span
                            className="feature-three-text tw-text-605 fw-medium text-white tw-transition-3 d-inline-block tw-w-20"
                            >03</span
                          >
                        </div>
                        <div>
                          <span
                            className="feature-three-text tw-text-605 fw-medium text-white tw-transition-3 d-inline-block tw-w-160-px"
                            >Nexora OS</span
                          >
                        </div>
                        <div>
                          <span
                            className="feature-three-text tw-text-605 fw-medium text-white tw-transition-3 d-inline-block"
                            >Unified Business Operating System</span
                          >
                        </div>
                      </div>
                      <div>
                        <span
                          className="feature-three-text tw-text-605 fw-medium text-white tw-transition-3 d-inline-block"
                          >2023</span
                        >
                      </div>
                    </div>
                    <div
                      className="hover__reveal-bg bg-img"
                      data-background-image="assets/images/thumbs/portfolio-two-thumb2.jpg"
                    ></div>
                  </div>
                  <div
                    className="feature-three-single hover__reveal-item"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="200"
                  >
                    <div
                      className="feature-three-item d-flex flex-column flex-lg-row justify-content-between align-items-center gap-4 text-center text-lg-start"
                    >
                      <div className="feature-three-left d-flex flex-column flex-sm-row align-items-center text-center text-sm-start gap-3">
                        <div>
                          <span
                            className="feature-three-text tw-text-605 fw-medium text-white tw-transition-3 d-inline-block tw-w-20"
                            >04</span
                          >
                        </div>
                        <div>
                          <span
                            className="feature-three-text tw-text-605 fw-medium text-white tw-transition-3 d-inline-block tw-w-160-px"
                            >Full Stack</span
                          >
                        </div>
                        <div>
                          <span
                            className="feature-three-text tw-text-605 fw-medium text-white tw-transition-3 d-inline-block"
                            >MERN, Redis, System Design & AI</span
                          >
                        </div>
                      </div>
                      <div>
                        <span
                          className="feature-three-text tw-text-605 fw-medium text-white tw-transition-3 d-inline-block"
                          >2022</span
                        >
                      </div>
                    </div>
                    <div
                      className="hover__reveal-bg bg-img"
                      data-background-image="assets/images/thumbs/portfolio-two-thumb3.jpg"
                    ></div>
                  </div>
                  <div
                    className="feature-three-single hover__reveal-item"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="200"
                  >
                    <div
                      className="feature-three-item d-flex flex-column flex-lg-row justify-content-between align-items-center gap-4 text-center text-lg-start"
                    >
                      <div className="feature-three-left d-flex flex-column flex-sm-row align-items-center text-center text-sm-start gap-3">
                        <div>
                          <span
                            className="feature-three-text tw-text-605 fw-medium text-white tw-transition-3 d-inline-block tw-w-20"
                            >05</span
                          >
                        </div>
                        <div>
                          <span
                            className="feature-three-text tw-text-605 fw-medium text-white tw-transition-3 d-inline-block tw-w-160-px"
                            >Backend</span
                          >
                        </div>
                        <div>
                          <span
                            className="feature-three-text tw-text-605 fw-medium text-white tw-transition-3 d-inline-block"
                            >Node.js, MongoDB, Scalability</span
                          >
                        </div>
                      </div>
                      <div>
                        <span
                          className="feature-three-text tw-text-605 fw-medium text-white tw-transition-3 d-inline-block"
                          >2021</span
                        >
                      </div>
                    </div>
                    <div
                      className="hover__reveal-bg bg-img"
                      data-background-image="assets/images/thumbs/portfolio-two-thumb4.jpg"
                    ></div>
                  </div>
                  <div
                    className="feature-three-single hover__reveal-item"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="200"
                  >
                    <div
                      className="feature-three-item d-flex flex-column flex-lg-row justify-content-between align-items-center gap-4 text-center text-lg-start"
                    >
                      <div className="feature-three-left d-flex flex-column flex-sm-row align-items-center text-center text-sm-start gap-3">
                        <div>
                          <span
                            className="feature-three-text tw-text-605 fw-medium text-white tw-transition-3 d-inline-block tw-w-20"
                            >06</span
                          >
                        </div>
                        <div>
                          <span
                            className="feature-three-text tw-text-605 fw-medium text-white tw-transition-3 d-inline-block tw-w-160-px"
                            >Real-Time</span
                          >
                        </div>
                        <div>
                          <span
                            className="feature-three-text tw-text-605 fw-medium text-white tw-transition-3 d-inline-block"
                            >Presence Tracking & Session Authority</span
                          >
                        </div>
                      </div>
                      <div>
                        <span
                          className="feature-three-text tw-text-605 fw-medium text-white tw-transition-3 d-inline-block"
                          >2020</span
                        >
                      </div>
                    </div>
                    <div
                      className="hover__reveal-bg bg-img"
                      data-background-image="assets/images/thumbs/portfolio-thumb1.jpg"
                    ></div>
                  </div>
                  <div
                    className="feature-three-single hover__reveal-item"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="200"
                  >
                    <div
                      className="feature-three-item d-flex flex-column flex-lg-row justify-content-between align-items-center gap-4 text-center text-lg-start"
                    >
                      <div className="feature-three-left d-flex flex-column flex-sm-row align-items-center text-center text-sm-start gap-3">
                        <div>
                          <span
                            className="feature-three-text tw-text-605 fw-medium text-white tw-transition-3 d-inline-block tw-w-20"
                            >07</span
                          >
                        </div>
                        <div>
                          <span
                            className="feature-three-text tw-text-605 fw-medium text-white tw-transition-3 d-inline-block tw-w-160-px"
                            >Freelance</span
                          >
                        </div>
                        <div>
                          <span
                            className="feature-three-text tw-text-605 fw-medium text-white tw-transition-3 d-inline-block"
                            >Full-Stack Developer & Designer</span
                          >
                        </div>
                      </div>
                      <div>
                        <span
                          className="feature-three-text tw-text-605 fw-medium text-white tw-transition-3 d-inline-block"
                          >2022 - 2024</span
                        >
                      </div>
                    </div>
                    <div
                      className="hover__reveal-bg bg-img"
                      data-background-image="assets/images/thumbs/portfolio-thumb1.jpg"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ProcessSection />
        <section
          className="footer-three-area pt-120 tw-pb-10 position-relative z-1"
        >
          <div className="container tw-container-1800-px">
            <div className="row justify-content-between pb-120">
              <div className="col-xl-5 col-lg-6">
                <div
                  className="footer-three-top-left tw-me-25"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                >
                  <div className="tw-mb-9">
                    <h2 className="tw-text-15 text-white tw-char-animation">
                      Let’s create something meaningful
                    </h2>
                  </div>
                  <div
                    className="d-inline-flex align-items-center tw-gap-6 tw-mb-10 flex-wrap"
                  >
                    <a
                      className="tw-text-2xl fw-medium text-main-600 hover-underline hover-text-white"
                      href="mailto:shaurya098n@gmail.com"
                      >shaurya098n@gmail.com</a
                    >
                    <span className="tw-text-2xl fw-medium text-main-600">//</span>
                    <a
                      className="tw-text-2xl fw-medium text-main-600 hover-underline hover-text-white"
                      href="tel:+916200713833"
                      >+91 6200 713 833</a
                    >
                  </div>
                  <div
                    className="footer-three-top-info tw-p-705 tw-rounded-lg d-flex tw-gap-6"
                  >
                    <div className="footer-three-top-thumb tw-w-160-px">
                      <img loading="lazy" decoding="async"
                        className="tw-rounded-lg w-100"
                        src="/my-image/IMG_0026.jpg"
                        alt="thumb"
                        style={{ objectFit: "cover", objectPosition: "center", height: "160px" }}
                      />
                    </div>
                    <div
                      className="footer-three-top-content d-flex justify-content-between flex-column"
                    >
                      <div>
                        <h3 className="tw-text-xl text-white tw-mb-2">
                          Shaurya
                        </h3>
                        <p className="text-white">Digital Designer & Developer</p>
                      </div>
                      <div className="footer-three-social">
                        <ul className="d-flex align-items-center tw-gap-1">
                          <li>
                            <a className="tw-w-11 tw-h-11 lh-1 d-inline-flex align-items-center justify-content-center tw-rounded-lg tw-text-xl text-black hover-bg-main-600 hover-text-white" href="https://www.talentella.in/" target="_blank" rel="noopener noreferrer" aria-label="Visit Talentella"><i className="ph ph-globe"></i></a>
                          </li>
                          <li>
                            <a
                              className="tw-w-11 tw-h-11 lh-1 d-inline-flex align-items-center justify-content-center tw-rounded-lg tw-text-xl text-black hover-bg-main-600 hover-text-white"
                              href="#"
                              ><i className="ph ph-x-logo"></i
                            ></a>
                          </li>
                          <li>
                            <a className="tw-w-11 tw-h-11 lh-1 d-inline-flex align-items-center justify-content-center tw-rounded-lg tw-text-xl text-black hover-bg-main-600 hover-text-white" href="https://www.instagram.com/talentella.in/" target="_blank" rel="noopener noreferrer" aria-label="Visit Instagram"><i className="ph ph-instagram-logo"></i></a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div
                  className="footer-three-form"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="300"
                >
                  <form action="#">
                    <div className="row">
                      <div className="col-xl-12">
                        <div className="position-relative tw-mb-7">
                          <input
                            type="text"
                            className="form-control bg-transparent shadow-none tw-rounded-lg text-white tw-ps-7 tw-pe-13 tw-placeholder-text-neutral-100 focus-border-main-600 tw-h-18 focus-tw-placeholder-text-hidden tw-placeholder-transition-2"
                            placeholder="First Name"
                          />
                        </div>
                      </div>
                      <div className="col-xl-12">
                        <div className="position-relative tw-mb-7">
                          <input
                            type="email"
                            className="form-control bg-transparent shadow-none tw-rounded-lg text-white tw-ps-7 tw-pe-13 tw-placeholder-text-neutral-100 focus-border-main-600 tw-h-18 focus-tw-placeholder-text-hidden tw-placeholder-transition-2"
                            placeholder="Email Address"
                          />
                        </div>
                      </div>
                      <div className="col-xl-12">
                        <div className="position-relative tw-mb-7">
                          <textarea
                            className="form-control bg-transparent shadow-none tw-h-196-px tw-rounded-lg text-white tw-ps-7 tw-pe-13 tw-placeholder-text-neutral-100 focus-border-main-600 focus-tw-placeholder-text-hidden tw-placeholder-transition-2"
                            placeholder="Message"
                          ></textarea>
                        </div>
                      </div>
                      <div className="col-xl-12">
                        <div className="contact-button">
                          <button
                            className="tw-hover-btn bg-main-600 text-heading tw-text-xl fw-bold tw-py-4 tw-px-10 d-inline-flex justify-content-center w-100 hover-text-heading hover-bg-white tw-transition-3 tw-rounded-lg"
                          >
                            submit message
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-three-border tw-px-18 tw-mb-10">
            <div className="container-fluid gx-0">
              <div className="row">
                <div className="col-xl-12">
                  <div
                    className="footer-three-middile d-flex flex-column flex-md-row align-items-center justify-content-between gap-4"
                  >
                    <div
                      data-aos="fade-up"
                      data-aos-duration="1000"
                      data-aos-delay="200"
                    >
                      <h4 className="tw-text-2xl text-white tw-mb-2">
                        Quick Links
                      </h4>
                      <ul className="d-flex tw-gap-2 flex-wrap">
                        <li>
                          <a className="tw-text-lg text-white" href="/"
                            >Home,</a
                          >
                        </li>
                        <li>
                          <a className="tw-text-lg text-white" href="/"
                            >About Me,
                          </a>
                        </li>
                        <li>
                          <a className="tw-text-lg text-white" href="/"
                            >Portfolio,
                          </a>
                        </li>
                        <li>
                          <a className="tw-text-lg text-white" href="/"
                            >Service,
                          </a>
                        </li>
                        <li>
                          <a className="tw-text-lg text-white" href="/"
                            >Contact
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div
                      data-aos="fade-up"
                      data-aos-duration="1000"
                      data-aos-delay="300"
                    >
                      <a
                        className="footer-three-back-to-top tw-w-170 tw-h-170 lh-1 d-inline-flex justify-content-center align-items-center bg-main-two-600 text-white tw-text-3xl rounded-circle"
                        href="#"
                        ><i className="ph ph-arrow-up"></i
                      ></a>
                    </div>
                    <div
                      className="text-lg-end"
                      data-aos="fade-up"
                      data-aos-duration="1000"
                      data-aos-delay="400"
                    >
                      <h4 className="tw-text-2xl text-white tw-mb-2">
                        Shaurya Portfolio
                      </h4>
                      <p className="tw-text-lg text-white">
                        © 2026 Shaurya. All rights reserved
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="container tw-container-1800-px">
              <div className="row">
                <div className="col-xl-12">
                  <div className="footer-three-bottom text-center">
                    <h5 className="footer-three-bottom-title text-white text-center">
                      Shaurya
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img loading="lazy" decoding="async"
              className="position-absolute top-0 start-0 z-n1"
              src="assets/images/shapes/footer-three-bg-shape.png"
              alt="shape"
            />
          </div>
        </section>
      </div>
    </div>
    
    </>
  );
}