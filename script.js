const root = document.documentElement;
const toggle = document.getElementById("toggle");
const label = document.getElementById("mode-label");

// 4. Apply a theme: set the attribute, update the switch and label.
function applyTheme(theme) {
  root.setAttribute("data-theme", theme);
  toggle.setAttribute("aria-checked", theme === "dark");
  label.textContent = theme === "dark" ? "Dark mode" : "Light mode";
}

// 5. Start with the saved choice, else the system preference.
let saved = null;
try { saved = localStorage.getItem("theme"); } catch (e) {}
const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
applyTheme(saved || (systemDark ? "dark" : "light"));

// 6. Toggle on click and remember the choice.
toggle.addEventListener("click", () => {
  const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
  applyTheme(next);
  try { localStorage.setItem("theme", next); } catch (e) {}
});
