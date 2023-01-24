//! dark ui and light ui
let toggleButton = document.querySelector(".toggle_btn");
let toggleDot = document.querySelector(".toggle_dot");

toggleButton.style.cssText =
  "--dot-size: 20px;--dot-space: 2px;position: relative;width: 40px;height: var(--dot-size);display: flex;justify-content: center;align-items: center;border-radius: 100vw;box-sizing: content-box;transition: background ease-in 0.6s;align-self: center";
toggleDot.style.cssText =
  "  display: block;width: calc(var(--dot-size) - var(--dot-space));height: calc(var(--dot-size) - var(--dot-space));border-radius: 100vw;box-sizing: border-box;position: absolute;transition: background ease-in 0.6s, right ease-in 0.5s;cursor: pointer";

toggleDot.addEventListener("click", function (e) {
  document.body.classList.toggle("lightTheme");
  document.body.classList.toggle("darkTheme");
  window.localStorage.setItem("theme",document.body.classList)
  
  e.target.classList.toggle("darkUiDot");
  e.target.classList.toggle("lightUiDot");
  window.localStorage.setItem("dot",toggleDot.classList)

  toggleButton.classList.toggle("darkUi");
  toggleButton.classList.toggle("lightUi");
  window.localStorage.setItem("btn",toggleButton.classList)
  
});
if(window.localStorage.theme) {
  document.body.classList = window.localStorage.theme
}
if(window.localStorage.btn) {
  toggleButton.classList = window.localStorage.btn
}
if(window.localStorage.theme) {
  toggleDot.classList = window.localStorage.dot
}