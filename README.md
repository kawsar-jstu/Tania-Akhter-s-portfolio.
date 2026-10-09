# Tania Akhter — Personal Portfolio

A responsive multi-page personal portfolio built with plain HTML, CSS, and JavaScript. It is designed to be easy to edit and publish with GitHub Pages.

## Pages

- `index.html` — Home (profile photo; no academic results on the homepage)
- `about.html` — About Tania
- `education.html` — Education details
- `skills.html` — Skills and interests
- `projects.html` — Project ideas and portfolio gallery
- `experience.html` — Experience and activities
- `contact.html` — Contact information

## Shared files

- `style.css` — Site-wide colors, typography, layout, responsive styles, and dark mode
- `script.js` — Mobile navigation, saved theme preference, and automatic footer year
- `tania.jpeg` — Profile photo used on the homepage

## Edit the portfolio

1. Extract the ZIP file.
2. Open the extracted folder in Visual Studio Code or another text editor.
3. Edit the page you want to change. The main text is inside the matching `.html` file.
4. Change colors, fonts, spacing, and image styling in `style.css`.
5. Change navigation and theme behavior in `script.js`.
6. Save the files and open `index.html` in a browser to preview the website.

### Change the profile photo

Replace `tania.jpeg` with the new photo, keeping the filename `tania.jpeg`. Alternatively, change the `src="tania.jpeg"` value in `index.html` to match the new image filename. The photo is styled as a circle and cropped automatically.

### Change the colors

At the top and near the theme sections of `style.css`, look for CSS custom properties such as `--bg`, `--paper`, `--ink`, `--accent`, and `--line`. The final rules in the stylesheet take priority where a property is defined more than once.

## Publish with GitHub Pages

1. Upload the contents of this folder to the root of your GitHub repository (not the ZIP file itself).
2. In GitHub, open **Settings → Pages**.
3. Select your main branch and the root (`/`) folder, then save.
4. Open the published URL after GitHub Pages finishes deploying.

## Before publishing

Please verify the education history, GPA values, skills, project descriptions, experience, and contact details. Replace generic or example text with accurate personal information. The homepage intentionally does not show academic results.
