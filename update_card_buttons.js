const fs = require('fs');

function updateCardButtons() {
    let mainContent = fs.readFileSync('c:/Users/Asus/Desktop/shen/harsh-portfolio/components/MainContent.jsx', 'utf8');

    // We will use a regex to replace the small arrow button with a larger "Visit Website" button
    // The current pattern is:
    /*
                      <div className="portfolio-three-button">
                        <a
                          className="portfolio-three-btn tw-w-8 tw-h-8 lh-1 d-inline-flex justify-content-center align-items-center text-heading rounded-circle hover-bg-main-two-600 hover-text-white"
                            href="..." target="_blank" rel="noopener noreferrer"
                          ><i className="ph ph-arrow-up-right"></i
                        ></a>
                      </div>
    */
    
    // We can replace the <a> tag inside .portfolio-three-button
    mainContent = mainContent.replace(
        /<div className="portfolio-three-button">[\s\S]*?<a[\s\S]*?className="portfolio-three-btn[^"]*"[\s\S]*?href="([^"]*)"[^>]*>[\s\S]*?<i className="ph ph-arrow-up-right"><\/i>[\s\S]*?<\/a>[\s\S]*?<\/div>/g,
        `<div className="portfolio-three-button tw-mt-2">
                        <a
                          className="tw-inline-flex tw-items-center tw-gap-2 tw-px-6 tw-py-3 tw-rounded-full tw-bg-black tw-text-white hover-bg-main-two-600 tw-transition-all tw-duration-300 tw-text-sm fw-medium"
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
