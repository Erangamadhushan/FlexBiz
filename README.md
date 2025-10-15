# FlexBiz

FlexBiz is a lightweight, static HTML business/agency template. It includes ready-made pages, vendor libraries, and a small contact form handler. The project is intended to be served as a static website (no build required) and is suitable for quick customization and deployment.

## Table of contents

- Project overview
- Quick start
- Project structure
- Included vendor libraries
- Customization
- Contact form
- Troubleshooting
- Contributing
- License and credits

## Quick start

There is no build step required. To preview the site locally, open `index.html` in a browser or serve the folder with a simple static server.

Using Python (recommended):

```powershell
# from project root
python -m http.server 8000
# then open http://localhost:8000 in your browser
```

Using Node (if you have http-server installed):

```powershell
npx http-server -p 8000
```

Open `index.html` or any other page (for example, `portfolio-details.html`) in your browser.

## Project structure

Key files and folders:

- `index.html` — Landing / home page
- `portfolio-details.html`, `service-details.html`, `starter-page.html` — Example pages
- `assets/css/main.css` — Primary stylesheet used by the pages
- `assets/js/main.js` — Main frontend JavaScript for interactions
- `assets/scss/` — Source SCSS (contains a `Readme.txt` inside)
- `assets/img/` — All images used by the site (organized in subfolders)
- `assets/vendor/` — 3rd-party libraries shipped with the template (see list below)
- `forms/contact.php` — Example contact form server-side handler (requires PHP)
- `.github/workflows/ci.yml` — (Present) GitHub Actions workflow (if configured for linting/deploy)
- `README.md` — This file

## Included vendor libraries

This template includes several popular frontend libraries under `assets/vendor/`:

- Bootstrap (CSS & JS)
- AOS (Animate on Scroll)
- GLightbox (lightbox)
- Isotope (layout/filter)
- Swiper (carousel)
- imagesLoaded
- purecounter (counters)
- waypoints
- bootstrap-icons

These are included as local files so the template works offline/out-of-the-box.

## Customization

- Styles: edit `assets/css/main.css` or the files in `assets/scss/` if you prefer to recompile SCSS.
- Scripts: edit `assets/js/main.js` to change interactive behavior.
- Images: replace files in `assets/img/` and update markup in the HTML pages.
- Navigation / links: edit the top navigation markup inside the HTML files.

If you plan to introduce a build system (Sass compilation, bundling, minification), add a `package.json` and configure the tools of your choice. This template intentionally ships precompiled CSS/JS so it can be used immediately.

## Contact form

There is a sample PHP form handler at `forms/contact.php`. To use the contact form you'll need to host the site on a webserver with PHP support (for example Apache, Nginx + PHP-FPM, or a PHP dev server).

## Troubleshooting

- If assets (CSS/JS/images) return 404 when opening `index.html` directly from the filesystem, serve the site from a local webserver (see Quick start).
- If the contact form doesn't work, confirm the server runs PHP and that `forms/contact.php` has the correct mail/send configuration for your host.

## Contributing

Small fixes, accessibility improvements, and updated assets are welcome. Open an issue or submit a pull request with a short description of the change.

Before submitting significant changes, please:

1. Preserve the general structure of vendor files in `assets/vendor/` unless you intentionally upgrade a library (document upgrades in the PR).
2. Test pages in modern browsers (Chrome/Edge/Firefox) and mobile viewports.

## License & credits

This project is a template and may contain assets with their own licenses (check the `vendor` folders for license files). If you add third-party assets, include proper attribution/licenses in your project.

Template built using the included vendor libraries listed above.

---

Last updated: October 15, 2025
