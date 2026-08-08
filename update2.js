const fs = require('fs');

const filePath = 'components/MainContent.jsx';
let content = fs.readFileSync(filePath, 'utf8');

// 1. SERVICES SECTION
content = content.replace(/Illustration Design/g, "Backend Engineering");
content = content.replace(/Business Branding/g, "Full-Stack Development");
content = content.replace(/Web Development<\/a>/g, "System Architecture</a>");
content = content.replace(/Application Design/g, "SaaS & Product Strategy");

// 2. PORTFOLIO SECTION
content = content.replace(/Epic Strategy App/g, "GamerThred Platform");
content = content.replace(/Branding Identity/g, "Nexora OS");
content = content.replace(/PixelCraft Mobile UI/g, "Full-Stack E-Commerce");
content = content.replace(/Creative Studio/g, "TalentElla Digital Systems");

// 3. EXPERIENCE SECTION (Replacing Awwwards / CSSDA)
content = content.replace(/Awwwards<\/span>[\s\S]*?Site Of The Day - Luxe Beauty/m, `TalentElla</span></div><div><span className="feature-three-text tw-text-605 fw-medium text-white tw-transition-3 d-inline-block">Co-Founder`);
content = content.replace(/2023<\/span>/g, "2026 - Present</span>");

content = content.replace(/FWA<\/span>[\s\S]*?Motion Design and Animation/m, `GamerThred</span></div><div><span className="feature-three-text tw-text-605 fw-medium text-white tw-transition-3 d-inline-block">CTO & Co-Founder`);
content = content.replace(/2022<\/span>/g, "2025 - Present</span>");

content = content.replace(/CSSDA<\/span>[\s\S]*?Motion Design and Animation/m, `INKHUB Tattoos</span></div><div><span className="feature-three-text tw-text-605 fw-medium text-white tw-transition-3 d-inline-block">Software Developer`);
content = content.replace(/2021<\/span>/g, "2025</span>");

content = content.replace(/CSSDA<\/span>[\s\S]*?Motion Design and Animation/m, `Codezeal Technology</span></div><div><span className="feature-three-text tw-text-605 fw-medium text-white tw-transition-3 d-inline-block">Frontend Web Developer Intern`);
content = content.replace(/2020<\/span>/g, "2024 - 2025</span>");

// Remaining items to Education
content = content.replace(/Awwwards<\/span>[\s\S]*?Motion Design and Animation/m, `Chandigarh University</span></div><div><span className="feature-three-text tw-text-605 fw-medium text-white tw-transition-3 d-inline-block">MCA, Information Technology`);
content = content.replace(/2019<\/span>/g, "2025 - 2027</span>");

content = content.replace(/Awwwards<\/span>[\s\S]*?Motion Design and Animation/m, `Usha Martin University</span></div><div><span className="feature-three-text tw-text-605 fw-medium text-white tw-transition-3 d-inline-block">BCA, Coding`);
content = content.replace(/2018<\/span>/g, "2023 - 2025</span>");

// 4. FOOTER SECTION
content = content.replace(/Harsh@gmail.com/g, "shaurya@example.com"); // Placeholder

fs.writeFileSync(filePath, content, 'utf8');
console.log('Update2 complete.');
