//! section Variable
const allSection = document.querySelectorAll("section");
const allSectionTitle = document.querySelectorAll(".section_main_title h2");

//! add Number to every section
function addSectionNumber() {
  // add number of section beside the title
  for (let i = 0; i < allSectionTitle.length; i++) {
    allSectionTitle[i].nextElementSibling.innerHTML = `0${i + 1}`;
  }
}
addSectionNumber(); //call func to add number to title

//TODO: function to create li > a > href #section ID and it take parameter for index loop
const navList = document.querySelector("#navbar__list");

dynamicAnchor();
function dynamicAnchor() {
  const frag = document.createDocumentFragment()
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
  navList.appendChild(frag)
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
const t1 = performance.now()
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
//! make 20 new paragraph and one function to work when click one any one of them
// make20();
// function make20() {
//   const myCustomDiv = document.createElement("div");
//   console.log(myCustomDiv);
  
//   for (let i = 1; i <= 20; i++) {
//     const newElement = document.createElement("p");
//     newElement.textContent = "This is paragraph number " + i;
    
//     myCustomDiv.appendChild(newElement);
//   }
//   let inDiv = document.querySelector("#portfolio .section_content");
//   inDiv.appendChild(myCustomDiv);
// }

const upBtn = document.querySelector(".btn__up");
upBtn.onclick = function () {
  console.log("from up button");
}