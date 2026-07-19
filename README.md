# Portfolio Source Code

A clean, responsive, framework-free game developer portfolio designed for GitHub Pages.

## Customising the Portfolio

All configuration for this website exists inside `script.js`. You do **not** need to edit the HTML files to update your personal text or add new projects.

### 1. Replacing Placeholders
Open `script.js` and locate the `config` object at the top. Update the `personalInfo`, `socials`, `skills`, and `education` dictionaries with your own data. Search for `<!-- PLACEHOLDER` in the javascript file to see exactly what to replace.

### 2. Updating the CV / Resume
Place your PDF resume into the `assets/resume/` folder. Update the `resumeLink` property in `script.js` to point to it (e.g., `"assets/resume/MyName-CV.pdf"`). 

### 3. Adding a Project
To add a new project, simply add a new dictionary object to the `projects` array in `script.js`. 
* Use the existing objects as a template.
* The `id` property acts as the URL parameter (e.g., `id: "my-game"` means the project is viewable at `projects/project.html?id=my-game`).
* The homepage grid will automatically expand to accommodate as many projects as you put in this array.

### 4. Adding Screenshots & GIFs
Place all imagery inside `assets/gifs/` or `assets/screenshots/`. In your `script.js` project object, assign the relative path to these files. Note that on the homepage, paths are relative to the root (`assets/gifs/...`), while inside the `projects` array, screenshot paths must step out of the projects folder (`../assets/screenshots/...`).

### 5. Changing Colours
Open `style.css` and locate the `:root` variables at the top of the file. Change `--accent-cyan`, `--accent-purple`, and `--accent-blue` to whatever hex codes you prefer. The gradients, shadows, and hover effects will automatically adapt.