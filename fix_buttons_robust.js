const fs = require('fs');

function fixButtons() {
    let mainContent = fs.readFileSync('c:/Users/Asus/Desktop/shen/harsh-portfolio/components/MainContent.jsx', 'utf8');

    // Pattern to match exactly the <a> tag structure inside the button div
    const regex = /<div className="portfolio-three-button">\s*<a\s*className="portfolio-three-btn[^"]*"\s*href="([^"]*)"[^>]*>\s*<i className="ph ph-arrow-up-right"><\/i\s*>\s*<\/a>\s*<\/div>/g;
    
    // We will do a generic regex replace that handles the newline properly
    // Let's use a simpler match that just looks for the whole block and extracts the href
    const regex2 = /<div className="portfolio-three-button">[\s\S]*?href="([^"]+)"[\s\S]*?<\/div>/g;
    
    mainContent = mainContent.replace(regex2, (match, href) => {
        return `<div className="portfolio-three-button tw-mt-4">
                        <a
                          className="tw-inline-flex tw-items-center tw-gap-2 tw-px-6 tw-py-3 tw-rounded-full tw-bg-black tw-text-white hover-bg-main-two-600 tw-transition-all tw-duration-300 tw-text-sm fw-bold"
                          href="${href}" target="_blank" rel="noopener noreferrer"
                        >
                          Visit Website <i className="ph ph-arrow-up-right tw-text-lg"></i>
                        </a>
                      </div>`;
    });

    fs.writeFileSync('c:/Users/Asus/Desktop/shen/harsh-portfolio/components/MainContent.jsx', mainContent);
    console.log("Replaced buttons!");
}

fixButtons();
