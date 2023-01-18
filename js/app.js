//! Global Variable
const list = document.getElementById("navbar__list");
const sections = document.querySelectorAll("section");

//! Function for ::: add Number to every section
const sectionsTitle = document.querySelectorAll(".section_main_title span");
addSectionNumber(); //call func to add number to title
function addSectionNumber() {
  // add number of section beside the title
  for (let index in sections) {
    sectionsTitle[index].textContent = `0${+index + 1}`;
  }
}

//TODO:: Function to create (li > a > href , #section ID)and it take parameter for index loop
const frag = document.createDocumentFragment(); // Use Fragment() as a Variable
dynamicAnchor(); // call the function

function dynamicAnchor() {
  for (let i = 0; i < sections.length; i++) {
    let listItem = document.createElement("li"); // Add <li> Tag
    let navAnchor = document.createElement("a"); // Add <a> Tag
    navAnchor.setAttribute("href", `#${sections[i].id}`); // add <a href="#"> attribute and title link into anchor
    navAnchor.textContent = `${sections[i].dataset.nav}`; //<a> text content
    listItem.appendChild(navAnchor);

    // make link click scrolling (smooth)
    navAnchor.addEventListener("click", (evt) => {
      evt.preventDefault();
      sections[i].scrollIntoView({
        behavior: "smooth",
      });
    });
    // but all <li> in fragement
    frag.appendChild(listItem);
  }
  list.appendChild(frag);
}

//TODO: Checked & Remove & Add Active Link
const links = document.querySelectorAll("#navbar__list a");
// Anchor on CLICK make it active link
for (const link of links) {
  link.addEventListener("click", activeLink);
}
function activeLink(e) {
  for (let link of links) {
    if (link.classList.contains("active__link")) {
      link.classList.remove("active__link");
    }
  }
  e.target.classList.add("active__link");
}

//! section Online & Offline
const option = {
  root: null, // null = it is the viewport
  threshold: 0.3, // 0 to 1.0 // 1 = 100% of intersection
  rootMargin: "-48px 0px", // is exactly -(margin "top right bottom left") negative value to be inside the viewbox
};
// const observer = new IntersectionObserver(callback,option)
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    entry.target.classList.remove("section_online"); // remove any default active class from section
    if (entry.isIntersecting) {
      entry.target.classList.add("section_online");

      // if section in viewArea marke the link who name is in section data-nav
      links.forEach((link) => {
        link.classList.remove("active__link");
        if (link.textContent === entry.target.dataset.nav) {
          link.classList.toggle("active__link");
        }
      });
    } else {
      entry.target.classList.remove("section_online"); //remove active class from any section not in viewsection
    }
  });
}, option);

window.addEventListener("scroll", () => {
  sections.forEach((section) => {
    observer.observe(section);
  });
});

//! hide nav bar aftere 5 second
const header = document.querySelector("header");
document.addEventListener("scroll", (event) => {
  if(window.scrollY >= 300){
    header.style.opacity = 1;
    setTimeout(() => {
      header.style.opacity = 0;
    }, 5000);
  }
});
header.onmouseenter = function(){
  header.style.opacity = 1;
}
//! when document scroll to top remove any active class
window.addEventListener("scroll", Offline);
function Offline() {
  if (window.scrollY <= 150) {
    links.forEach((link) => {
      link.classList.remove("active__link");
    });
  }
}

//! Go to TOP button
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
  if (window.scrollY >= 800) {
    upBtn.style.display = "flex";
  } else {
    upBtn.style.display = "none";
  }
}

