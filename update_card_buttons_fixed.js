const fs = require('fs');

function updateCardButtons() {
    let mainContent = fs.readFileSync('c:/Users/Asus/Desktop/shen/harsh-portfolio/components/MainContent.jsx', 'utf8');

    mainContent = mainContent.replace(
        /<div className="portfolio-three-button">\s*<a\s*className="portfolio-three-btn[^"]*"\s*href="([^"]*)"[^>]*>\s*<i className="ph ph-arrow-up-right"><\/i\s*>\s*<\/a>\s*<\/div>/g,
        `<div className="portfolio-three-button tw-mt-4">
                          <a
                            className="tw-inline-flex tw-items-center tw-gap-2 tw-px-6 tw-py-3 tw-rounded-full tw-bg-black tw-text-white hover-bg-main-two-600 tw-transition-all tw-duration-300 tw-text-sm fw-bold"
                            href="$1" target="_blank" rel="noopener noreferrer"
                          >
                            Visit Website <i className="ph ph-arrow-up-right tw-text-lg"></i>
                          </a>
                        </div>`
    );

    fs.writeFileSync('c:/Users/Asus/Desktop/shen/harsh-portfolio/components/MainContent.jsx', mainContent);
    console.log("Card buttons updated to 'Visit Website'");
}

updateCardButtons();
