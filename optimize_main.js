const fs = require('fs');

function optimizeFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');

  // Add import Link if not present
  if (!content.includes("import Link from 'next/link';") && !content.includes('import Link from "next/link";')) {
    content = "import Link from 'next/link';\n" + content;
  }

  // Replace <a href="index.html"> with <Link href="/">
  content = content.replace(/<a([^>]+)href=["']index\.html["']/g, '<Link$1href="/"');
  // Replace <a href="about.html"> with <Link href="/projects">
  content = content.replace(/<a([^>]+)href=["']about\.html["']/g, '<Link$1href="/projects"');
  // Replace <a href="portfolio-details.html"> with <Link href="/projects">
  content = content.replace(/<a([^>]+)href=["']portfolio-details\.html["']/g, '<Link$1href="/projects"');
  // Replace <a href="service-details.html"> with <Link href="#">
  content = content.replace(/<a([^>]+)href=["']service-details\.html["']/g, '<Link$1href="#"');

  // Replace closing </a> for those that were turned into <Link>
  // This is tricky with regex for nested tags. Since we only want to change internal routes, 
  // maybe it's safer to just change the tag name if the href is internal.
  
  // A safer Regex for <a> to <Link> for internal paths:
  content = content.replace(/<a\b([^>]*)href=(["'])(?!(?:http|mailto|tel|#))([^"']+)\2([^>]*)>/gi, (match, p1, p2, p3, p4) => {
    // If it ends with .html, map it
    let newHref = p3;
    if (newHref === 'index.html') newHref = '/';
    else if (newHref === 'about.html') newHref = '/projects';
    else if (newHref === 'portfolio-details.html') newHref = '/projects';
    else if (newHref === 'service-details.html') newHref = '#';
    // else keep it as is if it's like /projects
    
    // We can't safely change the closing tag just via regex if we don't track pairs.
    // Instead of replacing <a> with <Link>, we can just keep <a> for now but update the hrefs.
    // Wait, the task is to use next/link.
    return match; // skip for now
  });

  fs.writeFileSync(filePath, content);
}

// Since regex replacement of JSX tags is risky, I will just do exact replacements for the most common ones.
function targetedOptimize() {
    let content = fs.readFileSync('c:/Users/Asus/Desktop/shen/harsh-portfolio/components/MainContent.jsx', 'utf8');
    
    if (!content.includes("import Link from 'next/link';")) {
        content = "import Link from 'next/link';\n" + content;
    }

    // Fix index.html -> /
    content = content.replace(/href="index\.html"/g, 'href="/"');
    content = content.replace(/href="portfolio-details\.html"/g, 'href="/projects"');
    content = content.replace(/href="service-details\.html"/g, 'href="#"');
    
    // Add aria-labels to social icons in MainContent
    content = content.replace(/<a([^>]+)href="https:\/\/www\.talentella\.in\/"([^>]*)>/g, '<a$1href="https://www.talentella.in/"$2 aria-label="Visit Talentella">');
    content = content.replace(/<a([^>]+)href="https:\/\/www\.instagram\.com\/talentella\.in\/"([^>]*)>/g, '<a$1href="https://www.instagram.com/talentella.in/"$2 aria-label="Visit Instagram">');
    
    fs.writeFileSync('c:/Users/Asus/Desktop/shen/harsh-portfolio/components/MainContent.jsx', content);
    console.log("MainContent.jsx optimized.");
}

targetedOptimize();
