const fs = require('fs');

function fixAllCardLinks() {
    let content = fs.readFileSync('c:/Users/Asus/Desktop/shen/harsh-portfolio/components/MainContent.jsx', 'utf8');

    // We will split the content by "portfolio-three-item" to process each card
    const parts = content.split('className="portfolio-three-item');
    
    for (let i = 1; i < parts.length; i++) {
        // Find the URL inside the title link
        const urlMatch = parts[i].match(/href="([^"]+)"[^>]*>([^<]+)<\/a>\s*<\/h2>/);
        if (urlMatch) {
            const url = urlMatch[1];
            // If the URL is a real link (http...), we apply it to the other buttons
            if (url.startsWith('http')) {
                // Find and replace the arrow button link
                parts[i] = parts[i].replace(
                    /className="portfolio-three-btn([^"]+)"\s*href="[^"]+"/g,
                    `className="portfolio-three-btn$1"\n                            href="${url}" target="_blank" rel="noopener noreferrer"`
                );
                
                // Find and replace the image link
                parts[i] = parts[i].replace(
                    /className="d-block cursor-hide tw-rounded-lg"\s*href="[^"]+"/g,
                    `className="d-block cursor-hide tw-rounded-lg"\n                        href="${url}" target="_blank" rel="noopener noreferrer"`
                );
            }
        }
    }

    const newContent = parts.join('className="portfolio-three-item');
    fs.writeFileSync('c:/Users/Asus/Desktop/shen/harsh-portfolio/components/MainContent.jsx', newContent);
    console.log("Card buttons and image links updated successfully.");
}

fixAllCardLinks();
