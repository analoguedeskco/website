const fs = require('fs');
const path = require('path');
const { marked } = require('marked');

const ROOT = path.join(__dirname, '..');
const mdSource  = path.join(ROOT, 'manual', 'IDX-1_User_Manual.md');
const cssSource = path.join(ROOT, 'manual', 'manual.css');
const outputDir = path.join(ROOT, 'docs', 'manual');
const outputHtml = path.join(outputDir, 'IDX-1_User_Manual.html');
const outputCss  = path.join(outputDir, 'manual.css');

fs.mkdirSync(outputDir, { recursive: true });

const md = fs.readFileSync(mdSource, 'utf8');
const content = marked.parse(md);

const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>IDX-1 User Manual | Analogue Desk Co.</title>
    <link rel="icon" href="../favicon.png" type="image/png">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="../style.css">
    <link rel="stylesheet" href="manual.css">
</head>
<body>
    <a href="../index.html">
        <img src="../images/logo_1_line.png" alt="Analogue Desk Co." class="logo">
    </a>
    <div class="manual-content">
${content}
    </div>
    <div class="footer">
        <a href="index.html" class="footer-link">Manuals</a>
        <br>
        <span class="footer-copy">&copy; 2026 Analogue Desk Co.</span><br>
        <a href="mailto:hello@analoguedesk.co" class="footer-email">hello@analoguedesk.co</a>
    </div>
</body>
</html>`;

fs.writeFileSync(outputHtml, html);
fs.copyFileSync(cssSource, outputCss);

console.log('  manual HTML →', path.relative(ROOT, outputHtml));
console.log('  manual CSS  →', path.relative(ROOT, outputCss));
