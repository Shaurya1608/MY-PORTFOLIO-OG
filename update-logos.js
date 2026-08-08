const fs = require('fs');
const path = require('path');

const headerPath = path.join(__dirname, 'components', 'Header.jsx');
let headerContent = fs.readFileSync(headerPath, 'utf8');
headerContent = headerContent.replace(
  /<img\s+src="assets\/images\/logo\/logo-secendary\.png"\s+alt="Harsh Logo"\s+className="max-w-200-px"\s+\/>/g,
  '<h2 style={{ fontSize: "28px", fontWeight: "800", margin: 0, letterSpacing: "1px", color: "#000" }}>HARSH</h2>'
);
fs.writeFileSync(headerPath, headerContent);

const offcanvasPath = path.join(__dirname, 'components', 'Offcanvas.jsx');
let offcanvasContent = fs.readFileSync(offcanvasPath, 'utf8');
offcanvasContent = offcanvasContent.replace(
  /<img src="assets\/images\/logo\/logo\.png" alt="Harsh Logo"\s*\/>/g,
  '<h2 style={{ fontSize: "28px", fontWeight: "800", margin: 0, letterSpacing: "1px", color: "#fff" }}>HARSH</h2>'
);
fs.writeFileSync(offcanvasPath, offcanvasContent);

console.log('Logos replaced with text!');
