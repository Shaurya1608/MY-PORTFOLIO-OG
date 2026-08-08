const fs = require('fs');

function optimizeImages() {
    let content = fs.readFileSync('c:/Users/Asus/Desktop/shen/harsh-portfolio/components/MainContent.jsx', 'utf8');
    
    // Simple regex to find <img> tags and add loading="lazy" decoding="async" if not present
    content = content.replace(/<img([^>]+)>/g, (match, p1) => {
        let newImg = match;
        if (!newImg.includes('loading="lazy"')) {
            newImg = newImg.replace('<img', '<img loading="lazy" decoding="async"');
        }
        return newImg;
    });

    fs.writeFileSync('c:/Users/Asus/Desktop/shen/harsh-portfolio/components/MainContent.jsx', content);
    console.log("MainContent.jsx images optimized.");
}

optimizeImages();
