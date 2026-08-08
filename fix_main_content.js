const fs = require('fs');
let content = fs.readFileSync('c:/Users/Asus/Desktop/shen/harsh-portfolio/components/MainContent.jsx', 'utf8');

// The file is currently broken. Let's pull the clean version from git and then apply the specific fix.
require('child_process').execSync('git checkout -- components/MainContent.jsx', { cwd: 'c:/Users/Asus/Desktop/shen/harsh-portfolio' });

content = fs.readFileSync('c:/Users/Asus/Desktop/shen/harsh-portfolio/components/MainContent.jsx', 'utf8');

// Apply the fix to the works title
content = content.replace(
    '<section className="portfolio-three-area py-120 position-relative z-1">',
    '<section className="portfolio-three-area py-120 position-relative z-1 overflow-hidden">'
);

content = content.replace(
    '<div className="portfolio-three-shape position-absolute top-0 z-n1">',
    '<div className="portfolio-three-shape position-absolute top-0 z-n1" style={{ left: "50%", transform: "translateX(-50%)" }}>'
);

content = content.replace(
    '<h3 className="portfolio-three-shape-title">works</h3>',
    '<h3 className="portfolio-three-shape-title text-uppercase" style={{ whiteSpace: "nowrap", color: "transparent", WebkitTextStroke: "2px rgba(0,0,0,0.05)", opacity: 0.5 }}>works</h3>'
);

fs.writeFileSync('c:/Users/Asus/Desktop/shen/harsh-portfolio/components/MainContent.jsx', content);
console.log("Fixed MainContent.jsx");
