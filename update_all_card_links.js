const fs = require('fs');

function fixAllCardLinks() {
    let content = fs.readFileSync('c:/Users/Asus/Desktop/shen/harsh-portfolio/components/MainContent.jsx', 'utf8');

    // Split by cards
    const parts = content.split('className="portfolio-three-item');
    
    for (let i = 1; i < parts.length; i++) {
        // Find the URL inside the title link
        // Looks like: href="https://gamer-thred-website-main.vercel.app/" target="_blank"
        const urlMatch = parts[i].match(/href="(https:\/\/[^"]+)"/);
        
        if (urlMatch) {
            const url = urlMatch[1];
            
            // Replace the arrow button link
            // Looks like: className="portfolio-three-btn... \n href="/projects"
            parts[i] = parts[i].replace(
                /className="portfolio-three-btn([^"]*)"\s*href="[^"]+"/g,
                `className="portfolio-three-btn$1"\n                            href="${url}" target="_blank" rel="noopener noreferrer"`
            );
            
            // Replace the image link
            // Looks like: className="d-block cursor-hide tw-rounded-lg"\n href="/projects"
            parts[i] = parts[i].replace(
                /className="d-block cursor-hide tw-rounded-lg"\s*href="[^"]+"/g,
                `className="d-block cursor-hide tw-rounded-lg"\n                        href="${url}" target="_blank" rel="noopener noreferrer"`
            );
        }
    }

    const newContent = parts.join('className="portfolio-three-item');
    fs.writeFileSync('c:/Users/Asus/Desktop/shen/harsh-portfolio/components/MainContent.jsx', newContent);
    console.log("Card buttons and image links updated successfully.");
}

fixAllCardLinks();
