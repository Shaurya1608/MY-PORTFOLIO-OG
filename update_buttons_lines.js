const fs = require('fs');

function replaceButtons() {
    let content = fs.readFileSync('c:/Users/Asus/Desktop/shen/harsh-portfolio/components/MainContent.jsx', 'utf8');
    let lines = content.split('\n');
    let newLines = [];
    let i = 0;
    let count = 0;

    while (i < lines.length) {
        if (lines[i].includes('className="portfolio-three-button"')) {
            // Find href in the next 5 lines
            let hrefMatch = null;
            for (let j = 1; j <= 5; j++) {
                if (i + j < lines.length) {
                    let match = lines[i+j].match(/href="([^"]+)"/);
                    if (match) {
                        hrefMatch = match[1];
                        break;
                    }
                }
            }
            
            if (hrefMatch) {
                // Replace the whole block
                // Skip the next lines until </div>
                let indent = lines[i].match(/^\s*/)[0];
                newLines.push(indent + '<div className="portfolio-three-button tw-mt-4">');
                newLines.push(indent + '  <a');
                newLines.push(indent + '    className="tw-inline-flex tw-items-center tw-gap-2 tw-px-6 tw-py-3 tw-rounded-full tw-bg-black tw-text-white hover-bg-main-two-600 tw-transition-all tw-duration-300 tw-text-sm fw-bold"');
                newLines.push(indent + '    href="' + hrefMatch + '" target="_blank" rel="noopener noreferrer"');
                newLines.push(indent + '  >');
                newLines.push(indent + '    Visit Website <i className="ph ph-arrow-up-right tw-text-lg"></i>');
                newLines.push(indent + '  </a>');
                newLines.push(indent + '</div>');
                
                // Skip original lines
                while (!lines[i].includes('</div>')) {
                    i++;
                }
                count++;
            } else {
                newLines.push(lines[i]);
            }
        } else {
            newLines.push(lines[i]);
        }
        i++;
    }
    
    fs.writeFileSync('c:/Users/Asus/Desktop/shen/harsh-portfolio/components/MainContent.jsx', newLines.join('\n'));
    console.log("Replaced " + count + " buttons.");
}

replaceButtons();
