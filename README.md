# To-do App (Vanilla JavaScript)

A minimal, client-side To-do list built with plain HTML, CSS and JavaScript. Add tasks and delete them from the list in the browser. This project is intentionally small and easy to run — no build step or server required.

**Features**
- Add new tasks using the text input and `Register` button.
- Delete tasks using the `delete` button next to each item.
- Simple, dependency-free code (vanilla JS).

**Limitations**
- Tasks are not persisted — reloading the page will reset the list.
- No edit or complete-state features are implemented.

**Files**
- `app.html` : Main HTML file and UI structure.
- `app.js`   : JavaScript logic for adding and deleting tasks.
- `app.css`  : Styling (currently empty/place-holder).

**Quick Start (open directly)**
1. Open `app.html` in your browser (double-click or `Open with` → your browser).

**Run on a local server (recommended for some browsers)**
Using Python 3 (PowerShell):
```
python -m http.server 8000
Start-Process "http://localhost:8000/app.html"
```
Using `npx` with `http-server` (Node.js):
```
npx http-server -c-1 . 8080
```

**How it works (brief)**
- `app.js` selects the input, button and `ul` list, then appends an `<li>` element when the button is clicked.
- Each new `<li>` gets a `delete` button; clicking that button removes the parent `<li>` from the DOM.

**Customization ideas**
- Add `localStorage` persistence so tasks survive page reloads.
- Add edit and mark-as-complete functionality.
- Improve styling in `app.css`.

**License**
This project is licensed under the MIT License — see the LICENSE file for details.
