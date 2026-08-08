const fs = require('fs');
const file = 'c:/Users/Asus/Desktop/shen/harsh-portfolio/components/MainContent.jsx';
let text = fs.readFileSync(file, 'utf8');

const regex = /<div>\s*<span\s*<section className="testimonial-three-area pt-120 tw-pb-22">/;

const fixedPart = `<div>
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
        <section className="testimonial-three-area pt-120 tw-pb-22">`;

if (regex.test(text)) {
    text = text.replace(regex, fixedPart);
    fs.writeFileSync(file, text);
    console.log('Fixed broken component and added freelance section');
} else {
    console.log('Could not find the exact broken part to replace. Check the file manually.');
}
