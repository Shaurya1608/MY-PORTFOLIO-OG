const fs = require('fs');
const path = require('path');

const htmlPath = path.join(__dirname, 'old-html', 'index.html');
const htmlContent = fs.readFileSync(htmlPath, 'utf8');

function htmlToJsx(html) {
    let jsx = html;
    jsx = jsx.replace(/class=/g, 'className=');
    jsx = jsx.replace(/for=/g, 'htmlFor=');
    
    const voidElements = ['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'param', 'source', 'track', 'wbr', 'path', 'rect', 'circle', 'polygon', 'line', 'ellipse'];
    
    for (const tag of voidElements) {
        const regex = new RegExp(`<${tag}([^>]*?)(?<!/)>`, 'g');
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
    jsx = jsx.replace(/<!--(.*?)-->/g, '{/* $1 */}'); // convert HTML comments to JSX comments
    
    return jsx;
}

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
} else {
    console.log("Could not find markers for main content.");
}

// Re-write page.js to include MainContent
const pageCode = `import Header from '@/components/Header';
import Preloader from '@/components/Preloader';
import Offcanvas from '@/components/Offcanvas';
import MainContent from '@/components/MainContent';

export default function Home() {
  return (
    <>
      <Preloader />
      <Offcanvas />
      <Header />
      <MainContent />
    </>
  );
}`;

fs.writeFileSync('./app/page.js', pageCode);
console.log('MainContent extraction complete!');
