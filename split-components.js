const fs = require('fs');
const path = require('path');

const htmlPath = path.join(__dirname, 'old-html', 'index.html');
const htmlContent = fs.readFileSync(htmlPath, 'utf8');

function htmlToJsx(html) {
    let jsx = html;
    // Replace class= with className=
    jsx = jsx.replace(/class=/g, 'className=');
    // Replace for= with htmlFor=
    jsx = jsx.replace(/for=/g, 'htmlFor=');
    // Replace inline styles (very naive, usually need object)
    // jsx = jsx.replace(/style="([^"]*)"/g, (match, p1) => `style={{}}`);
    // Self-close tags
    const voidElements = ['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'param', 'source', 'track', 'wbr', 'path', 'rect', 'circle', 'polygon', 'line'];
    
    for (const tag of voidElements) {
        const regex = new RegExp(`<${tag}([^>]*?)(?<!/)>`, 'g');
        jsx = jsx.replace(regex, `<${tag}$1 />`);
    }
    
    // Fix specific SVG attributes
    jsx = jsx.replace(/stroke-width/g, 'strokeWidth');
    jsx = jsx.replace(/stroke-linecap/g, 'strokeLinecap');
    jsx = jsx.replace(/stroke-linejoin/g, 'strokeLinejoin');
    jsx = jsx.replace(/fill-rule/g, 'fillRule');
    jsx = jsx.replace(/clip-rule/g, 'clipRule');
    jsx = jsx.replace(/preserveAspectRatio/g, 'preserveAspectRatio');
    jsx = jsx.replace(/viewBox/g, 'viewBox');
    
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
    Hero: { start: '<!--==================== Hero Section Start ====================-->', end: '<!--==================== Hero Section End ====================-->' },
    About: { start: '<!--==================== About Section Start ====================-->', end: '<!--==================== About Section End ====================-->' },
    Portfolio: { start: '<!--==================== Portfolio Section Start ====================-->', end: '<!--==================== Portfolio Section End ====================-->' },
    Services: { start: '<!--==================== Service Section Start ====================-->', end: '<!--==================== Service Section End ====================-->' },
    Testimonials: { start: '<!--==================== Testimonial Section Start ====================-->', end: '<!--==================== Testimonial Section End ====================-->' },
    Blog: { start: '<!--==================== Blog Section Start ====================-->', end: '<!--==================== Blog Section End ====================-->' },
    Contact: { start: '<!--==================== Contact Section Start ====================-->', end: '<!--==================== Contact Section End ====================-->' },
    Footer: { start: '<!--==================== Footer three Start ====================-->', end: '<!--==================== Footer three End ====================-->' },
    Preloader: { start: '<!--==================== Preloader Start ====================-->', end: '<!--==================== Preloader End ====================-->' },
    Offcanvas: { start: '<!-- ==================== Offcanvus Mobile Menu Start Here ==================== -->', end: '<!-- ==================== Offcanvus Mobile Menu End Here ==================== -->' }
};

if (!fs.existsSync('./components')) {
    fs.mkdirSync('./components');
}

let pageImports = [];
let pageComponents = [];

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
        pageImports.push(`import ${name} from '@/components/${name}';`);
        pageComponents.push(`      <${name} />`);
    }
}

const pageCode = `${pageImports.join('\n')}

export default function Home() {
  return (
    <main>
${pageComponents.join('\n')}
    </main>
  );
}`;

fs.writeFileSync('./app/page.js', pageCode);

console.log('Conversion complete!');
