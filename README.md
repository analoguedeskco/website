# analoguedesk.co website

Source for [docs.analoguedesk.co](https://docs.analoguedesk.co), served via GitHub Pages from the `/docs` folder.

## Structure

```
/                          # source
├── index.html
├── style.css
├── images/                # shared images
├── manual/
│   ├── IDX-2_User_Manual.md   # one Markdown file per device — source of truth
│   ├── IDX-3_User_Manual.md
│   ├── IDX-3.1_User_Manual.md
│   ├── manual.css
│   └── index.html
├── setup/
│   └── index.html
├── scripts/
│   └── build-manual.js    # renders MD → HTML
├── build.ps1              # Windows build script
├── build.sh               # Unix build script (CI)
└── docs/                  # built output — do not edit directly
```

## Editing the manual

Edit the relevant `manual/IDX-*_User_Manual.md`. Images go in `images/`.

To add a new manual, create the Markdown file, add its basename to the `manuals` array in `scripts/build-manual.js`, and add a card to `manual/index.html`.

## Building

```powershell
.\build.ps1
```

This cleans and rebuilds `docs/` from source. Commit and push `docs/` to deploy.

## Dependencies

```
npm install
```

Uses [marked](https://marked.js.org/) to render Markdown to HTML.
