document.addEventListener("DOMContentListener", addCloneSection);

const addSection = document.querySelector("main button");
addSection.addEventListener("click", addCloneSection);
function addCloneSection() {
  let cloneSection = document.createElement("section");
  cloneSection.setAttribute("id", "clone");
  let cloneContainer = document.createElement("div");
  cloneContainer.classList.add("container");

  let sectionContent = document.querySelector("#about .section_content");
  let cloneContent = sectionContent.cloneNode(true);

  addSection.before(cloneSection);
  cloneSection.prepend(cloneContainer);
  cloneContainer.innerHTML = `<div class="section_main_title"><h2>Clone</h2><span></span>
  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
  </div></div>`;
  cloneContainer.appendChild(cloneContent);
}
//! section Variable
const allSection = document.querySelectorAll("section");
const allSectionTitle = document.querySelectorAll(".section_main_title h2");
//! add Number to every section
addSectionNumber(); //call func to add number to title
function addSectionNumber() {
  // add number of section beside the title
  for (let i = 0; i < allSectionTitle.length; i++) {
    allSectionTitle[i].nextElementSibling.innerHTML = `0${i + 1}`;
  }
}

//TODO: function to create li > a > href #section ID and it take parameter for index loop
const navList = document.querySelector("#navbar__list");

dynamicAnchor();
function dynamicAnchor() {
  const frag = document.createDocumentFragment();
  for (let i = 0; i < allSection.length; i++) {
    // add <li> tag
    let navLink = document.createElement("li");
    frag.appendChild(navLink);
    // add <a> tag
    let navAnchor = document.createElement("a");
    // add <a href="#"> attribute and title link into anchor
    navAnchor.setAttribute("href", `#${allSection[i].id}`);
    navAnchor.textContent = `${allSectionTitle[i].textContent}`;
    navLink.appendChild(navAnchor);
  }
  navList.appendChild(frag);
}
// `<li><a href="#${allSection[i].id}">${allSectionTitle[i].textContent}</a></li>`

//TODO: checked & remove & add online link
const t0 = performance.now();

// add event on click to anchor link
const links = document.querySelectorAll("#navbar__list a");
for (const link of links) {
  link.addEventListener("click", activeLink);
}
function activeLink(e) {
  let checkClassName = "active__link";
  for (let link of links) {
    if (link.classList.contains(checkClassName))
      link.classList.remove(checkClassName);
  }
  console.log("checked & remove & add online link");
  return e.target.classList.add(checkClassName);
}
const t1 = performance.now();
console.log("This code took " + (t1 - t0) + " milliseconds");
/* 
end of checked & add 
*/
//! remove active class from any section on window loading
window.onload = sectionOffline();
function sectionOffline() {
  for (const section of allSection) {
    section.removeAttribute("class");
    // console.log(section)
  }
}
document.addEventListener("scroll", sectionOnline);
function sectionOnline() {
  for (const section of allSection) {
    const sectionSize = section.getBoundingClientRect();
    const view = visualViewport.pageTop;
    console.log(`section top : ${sectionSize.top}`)
    // console.log(` view Port is: ${view}`)
    console.log(`section bottom ${sectionSize.bottom}`)
    if (sectionSize.top >= view && sectionSize.bottom <= view) {
      section.classList.add("section_online");
    } else {
      section.classList.remove("section_online");
    }
  }
}

allSection[1].getBoundingClientRect().top;
//? test time for any code
/*
const t0 = performance.now();
const t1 = performance.now()
console.log("This code took " + (t1 - t0) + " milliseconds");
*/
//! hide nav bar aftere 5 second
// const header = document.querySelector("header");
// document.addEventListener("scroll", (event) => {
//   header.style.position = "fixed";
//   setTimeout(() => {
//     header.style.position = "static";
//   }, 5000);
// });

//! Up button
const upBtn = document.querySelector(".btn__up");
upBtn.onclick = function () {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
};

window.addEventListener("scroll", showUpBtn);
function showUpBtn() {
  // if (document.documentElement.scrollTop > 300) {
  if (window.scrollY >= 300) {
    upBtn.style.display = "flex";
  } else {
    upBtn.style.display = "none";
  }
}
