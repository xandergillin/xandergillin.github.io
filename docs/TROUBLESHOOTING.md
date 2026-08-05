# Troubleshooting

The most common problems and how to fix them.

## My whole page is blank

Almost always a typo in `config.js`. Open your browser's developer tools (right-click → Inspect → Console tab) and look for a red error message. It usually says something like:

> SyntaxError: missing , after property value

Common causes:

- **Missing comma** at the end of a line in CONFIG
- **Missing quote mark** around a value
- **Stray apostrophe** inside a value (e.g., `"Richmond's"`)

For apostrophes: either escape with `"Richmond\\'s"`, or use double quotes around the value and a regular apostrophe inside, or use backticks instead of quotes for that value (backticks ignore apostrophes inside).

## My headshot is not showing up

Three things to check, in order:

1. Is the file actually in the `images/` folder? Click into it in GitHub and confirm.
2. Does the filename match exactly what is in `config.js`? Capitalization matters: `Headshot.JPG` is not the same as `headshot.jpg`.
3. Has GitHub Pages finished rebuilding? It can take 30 to 60 seconds after a commit.

## My project images are not showing up

Same checks as the headshot. The `thumbnail:` path in `config.js` must exactly match the actual file location.

If you uploaded to `images/projects/my-map.png`, your config line should be:

```js
thumbnail: "images/projects/my-map.png",
```

## My case study page shows "Loading..." in the browser tab

This means `config.js` failed to load, usually because of a typo. Same fix as a blank page above.

## The navigation does not highlight the page I am on

The nav decides which page is active based on the URL filename. If you renamed `about.html` to `bio.html`, the highlight will not work until you update `components.js` (the `renderHeader()` function).

If you want to add a new page to the nav, edit `components.js`. Find the `renderHeader()` function and add another `<a>` line.

## My commits are not showing up on the live site

Check **Settings → Pages**. There should be a green checkmark and a URL. A yellow build error means a typo in your HTML; click into it to see what went wrong.

If everything looks fine, hard-refresh your browser: **Ctrl+Shift+R** (Windows/Linux) or **Cmd+Shift+R** (Mac). Browsers cache aggressively.

## The layout looks weird or broken on one page

You probably deleted a closing tag (like `</div>` or `</section>`) when editing. To fix:

1. Compare your file to the original template version (you can see the original at the source repo any time).
2. In the GitHub editor or VS Code, click on an opening tag to see its matching closing tag highlighted.

If a single page is broken but others look fine, the problem is in that one page's HTML, not in `config.js` or `styles.css`.

## My color theme switch did not work

Most common cause: you uncommented two themes at once. Only one `:root { ... }` block can be active. Make sure every other one is wrapped in `/* */`.

## My case study page does not match the example, the styling looks off

Each case study page must include this exact set of script tags right before `</body>`:

```html
<script src="config.js"></script>
<script src="components.js"></script>
```

And this exact link to the stylesheet in `<head>`:

```html
<link rel="stylesheet" href="styles.css">
```

If you copied the page from a different folder, the relative paths might be wrong.

## I want to undo a change

In GitHub, click **History** (or **Commits**) on your repo. Find a commit from before your change, click the `...` menu, then "Revert" to roll back.

## Nothing here matches my problem

Bring it to office hours with:

- Your GitHub repo URL
- A description of what you tried
- Any error message from the browser console (right-click → Inspect → Console)
