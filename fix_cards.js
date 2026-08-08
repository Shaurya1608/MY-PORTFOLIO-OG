const fs = require('fs');
const file = 'c:/Users/Asus/Desktop/shen/harsh-portfolio/components/MainContent.jsx';
let text = fs.readFileSync(file, 'utf8');

const regex = /<div\s+className="about-three-wrap-shape[\s\S]*?In Client revenue growth\s*<\/p>\s*<\/div>/;

const fixedPart = `<div
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
                </div>`;

text = text.replace(regex, fixedPart);
fs.writeFileSync(file, text);
console.log('Fixed cards');
