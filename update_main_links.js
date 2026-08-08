const fs = require('fs');

function updateLinks() {
    let mainContent = fs.readFileSync('c:/Users/Asus/Desktop/shen/harsh-portfolio/components/MainContent.jsx', 'utf8');

    // GamerThred
    mainContent = mainContent.replace(
        /href="\/projects"\s*>GamerThred Platform<\/a/g,
        'href="https://gamer-thred-website-main.vercel.app/" target="_blank" rel="noopener noreferrer">GamerThred Platform</a'
    );
    
    // Nexora OS
    mainContent = mainContent.replace(
        /href="\/projects"\s*>Nexora OS<\/a/g,
        'href="https://lumen-team-manangement.vercel.app/" target="_blank" rel="noopener noreferrer">Nexora OS</a'
    );

    // Simetra AR/VR 3D
    mainContent = mainContent.replace(
        /href="\/projects"\s*>Simetra AR\/VR 3D<\/a/g,
        'href="https://simetratech.com/" target="_blank" rel="noopener noreferrer">Simetra AR/VR 3D</a'
    );

    // Smart Dent AI
    mainContent = mainContent.replace(
        /href="\/projects"\s*>Smart Dent AI<\/a/g,
        'href="https://smart-dent-ai-app.vercel.app/" target="_blank" rel="noopener noreferrer">Smart Dent AI</a'
    );

    fs.writeFileSync('c:/Users/Asus/Desktop/shen/harsh-portfolio/components/MainContent.jsx', mainContent);
    console.log('MainContent links updated successfully!');
}

updateLinks();
