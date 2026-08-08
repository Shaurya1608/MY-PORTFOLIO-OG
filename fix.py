import re

filepath = 'components/MainContent.jsx'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

pattern = re.compile(
    r'className="banner-three-wrap d-flex justify-content-between align-items-end position-relative z-1"\s*>\s*href="about.html"\s*>\s*<span\s*className="d-flex flex-column justify-content-center"\s*>',
    re.MULTILINE
)

replacement = """className="banner-three-wrap d-flex justify-content-between align-items-end position-relative z-1">
                    <div className="banner-three-left tw-rounded-lg" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                      <h2 className="banner-three-left-title tw-text-3xl tw-mb-6">
                        Hello! I'm Shaurya Kumar <br />
                        Technical Founder & Full-Stack Engineer
                      </h2>
                      <div className="banner-three-list">
                        <ul>
                          <li className="tw-text-lg fw-medium d-inline-flex align-items-center tw-gap-2 tw-mb-4">
                            <span><img src="assets/images/icons/banner-three-pluse.svg" alt="pluse" /></span>
                            System Design
                          </li>
                          <li className="tw-text-lg fw-medium d-inline-flex align-items-center tw-gap-2 tw-mb-4">
                            <span><img src="assets/images/icons/banner-three-pluse.svg" alt="pluse" /></span>
                            Scalable Architecture
                          </li>
                          <li className="tw-text-lg fw-medium d-inline-flex align-items-center tw-gap-2 tw-mb-4">
                            <span><img src="assets/images/icons/banner-three-pluse.svg" alt="pluse" /></span>
                            Real-Time Infrastructure
                          </li>
                          <li className="tw-text-lg fw-medium d-inline-flex align-items-center tw-gap-2 tw-mb-4">
                            <span><img src="assets/images/icons/banner-three-pluse.svg" alt="pluse" /></span>
                            SaaS Development
                          </li>
                          <li className="tw-text-lg fw-medium d-inline-flex align-items-center tw-gap-2 tw-mb-4">
                            <span><img src="assets/images/icons/banner-three-pluse.svg" alt="pluse" /></span>
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
                      <img src="assets/images/shapes/banner-three-shape.png" alt="shape" />
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
                  <div className="about-three-thumb w-100 tw-clip-anim tw-rounded-lg" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                    <img className="tw-anim-img w-100 tw-rounded-lg" data-animate="true" src="assets/images/thumbs/about-three-thumb.png" alt="thumb" />
                  </div>
                </div>
                <div className="col-xl-6">
                  <div className="about-three-right" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
                    <div>
                      <p className="tw-text-xl tw-mb-10">
                        I am a Technical Founder and Full-Stack Engineer focused on building scalable digital products. 
                        Currently, I am Co-Founder at TalentElla—a creative tech agency helping businesses grow—and CTO & Co-Founder at GamerThred, leading backend architecture and real-time infrastructure.
                      </p>
                      <p className="tw-text-xl tw-mb-10">
                        My expertise includes System Design, Distributed Systems, Node.js, React, MongoDB, and Redis. 
                        I enjoy taking an idea from initial architecture and database design all the way to a production-ready product, focusing on performance, low latency, and security.
                      </p>
                      <p className="tw-text-xl tw-mb-10">
                        I am also building Nexora, a unified business operating system. 
                        Good engineering isn't just about writing code—it’s about understanding the problem, designing the right system, building for scale, and creating something people actually need.
                      </p>
                    </div>
                    <div className="about-three-counter d-inline-block">
                      <div className="tw-hover-btn-wrapper d-inline-block">
                        <a className="tw-btn-circle tw-hover-btn-item tw-hover-btn tw-w-160-px tw-h-160-px lh-1 d-inline-flex justify-content-center align-items-center rounded-circle position-relative overflow-hidden border border-1 border-neutral-200" href="#about">
                          <span className="d-flex flex-column justify-content-center">"""

new_content, count = pattern.subn(replacement, content)
if count > 0:
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print("Fixed corrupted section!")
else:
    print("Failed to find the pattern.")
