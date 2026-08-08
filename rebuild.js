const fs = require('fs');
const path = require('path');

const htmlPath = path.join(__dirname, 'old-html', 'index.html');
const htmlContent = fs.readFileSync(htmlPath, 'utf8');

function htmlToJsx(html) {
    let jsx = html;
    jsx = jsx.replace(/class=/g, 'className=');
    jsx = jsx.replace(/for=/g, 'htmlFor=');
    
    const voidElements = ['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'param', 'source', 'track', 'wbr', 'path', 'rect', 'circle', 'polygon', 'line', 'ellipse'];
    
    // First, make sure we don't double-close. Let's just remove all closing tags for void elements.
    for (const tag of voidElements) {
        const closeTagRegex = new RegExp(`</${tag}>`, 'gi');
        jsx = jsx.replace(closeTagRegex, '');
    }

    // Now, ensure every void element is self-closing
    for (const tag of voidElements) {
        // match <tag ... > but not <tag ... />
        const regex = new RegExp(`<${tag}([^>]*?)(?<!/)>`, 'gi');
        jsx = jsx.replace(regex, `<${tag}$1 />`);
    }
    
    // Fix specific SVG attributes and others
    jsx = jsx.replace(/stroke-width/g, 'strokeWidth');
    jsx = jsx.replace(/stroke-linecap/g, 'strokeLinecap');
    jsx = jsx.replace(/stroke-linejoin/g, 'strokeLinejoin');
    jsx = jsx.replace(/fill-rule/g, 'fillRule');
    jsx = jsx.replace(/clip-rule/g, 'clipRule');
    jsx = jsx.replace(/preserveAspectRatio/g, 'preserveAspectRatio');
    jsx = jsx.replace(/viewBox/g, 'viewBox');
    
    // Replace HTML comments
    jsx = jsx.replace(/<!--([\s\S]*?)-->/g, '{/* $1 */}'); 
    
    return jsx;
}

const extractSection = (startComment, endComment) => {
    const startIndex = htmlContent.indexOf(startComment);
    if (startIndex === -1) return null;
    const endIndex = endComment ? htmlContent.indexOf(endComment, startIndex) : htmlContent.length;
    if (endIndex === -1) return null;
    
    const sectionHtml = htmlContent.substring(startIndex + startComment.length, endIndex);
    return htmlToJsx(sectionHtml);
};

const sections = {
    Header: { start: '<!-- ==================== Header Start Here ==================== -->', end: '<!-- ==================== Header End Here ==================== -->' },
    Preloader: { start: '<!--==================== Preloader Start ====================-->', end: '<!--==================== Preloader End ====================-->' },
    Offcanvas: { start: '<!-- ==================== Offcanvus Mobile Menu Start Here ==================== -->', end: '<!-- ==================== Offcanvus Mobile Menu End Here ==================== -->' }
};

if (!fs.existsSync('./components')) {
    fs.mkdirSync('./components');
}

for (const [name, bounds] of Object.entries(sections)) {
    let content = extractSection(bounds.start, bounds.end);
    if (content) {
        const jsxCode = `export default function ${name}() {
  return (
    <>
      ${content}
    </>
  );
}`;
        fs.writeFileSync(`./components/${name}.jsx`, jsxCode);
    }
}

// Extract MainContent
const startMarker = '<!-- ==================== Header End Here ==================== -->';
const endMarker = '<!-- Jquery js -->';
const startIndex = htmlContent.indexOf(startMarker);
const endIndex = htmlContent.indexOf(endMarker);

if (startIndex !== -1 && endIndex !== -1) {
    const sectionHtml = htmlContent.substring(startIndex + startMarker.length, endIndex);
    const jsxContent = htmlToJsx(sectionHtml);
    
    const jsxCode = `export default function MainContent() {
  return (
    <>
      ${jsxContent}
    </>
  );
}`;
    fs.writeFileSync('./components/MainContent.jsx', jsxCode);
}

console.log('Rebuild complete!');
