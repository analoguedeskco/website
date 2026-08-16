const fs = require('fs');
const path = require('path');
const { marked } = require('marked');

const ROOT = path.join(__dirname, '..');
const manualDir = path.join(ROOT, 'manual');
const cssSource = path.join(manualDir, 'manual.css');
const outputDir = path.join(ROOT, 'docs', 'manual');

fs.mkdirSync(outputDir, { recursive: true });

const manuals = ['IDX-2_User_Manual', 'IDX-3_User_Manual', 'IDX-3.1_User_Manual'];

for (const name of manuals) {
    const md = fs.readFileSync(path.join(manualDir, `${name}.md`), 'utf8');
    const content = marked.parse(md).replace(/<h([1-6])>([^<]+)<\/h\1>/g, (_, level, text) => {
        const id = text.toLowerCase().trim().replace(/[^\w]+/g, '-').replace(/^-|-$/g, '');
        return `<h${level} id="${id}">${text}</h${level}>`;
    });

    const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>IDX User Manual | Analogue Desk Co.</title>
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

    const outputHtml = path.join(outputDir, `${name}.html`);
    fs.writeFileSync(outputHtml, html);
    console.log('  manual HTML →', path.relative(ROOT, outputHtml));
}

const outputCss = path.join(outputDir, 'manual.css');
fs.copyFileSync(cssSource, outputCss);
console.log('  manual CSS  →', path.relative(ROOT, outputCss));
