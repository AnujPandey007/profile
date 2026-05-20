/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");
// Menu show
// Validate if constant exists
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

// Menu Hidden
// Validate if constant exists
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}
/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  // when we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));
/*=============== ADD BLUR TO HEADER ===============*/
const blurHeader = () => {
  const header = document.getElementById("header");
  // when the scroll is greater than 50 viewport height, add
  this.scrollY >= 50
    ? header.classList.add("blur-header")
    : header.classList.remove("blur-header");
};
window.addEventListener("scroll", blurHeader);

/*=============== WORK TABS ===============*/
const tabs = document.querySelectorAll('[data-target]'), 
tabContents = document.querySelectorAll('[data-content]')
      
tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const targetSelector = tab.dataset.target,
          targetContent = document.querySelector(targetSelector)

    /* Disable all content and active tabs */
    tabContents.forEach((content) => content.classList.remove('work-active'))
    tabs.forEach((t) => t.classList.remove('work-active'))

    /* Activate the tab correspondind content */
    tab.classList.add('work-active')
    targetContent.classList.add('work-active')
  })
})

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollDown = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionsClass = document.querySelector(
        ".nav__menu a[href*=" + sectionId + "]"
      );

    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active-link");
    } else {
      sectionsClass.classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 1000,
  delay: 150,
  reset: true, //Animation repeat
});

sr.reveal(
  `.home__data, .home__social, .footer__container`
);
sr.reveal(`.home__image`, { origin: "bottom" });
sr.reveal(`.about__data, .skills__data`, { origin: "left" });
sr.reveal(`.about__image, .skills__content`, { origin: "right" });
sr.reveal(`.work__area, .skills__content`, { origin: "left" });
sr.reveal(`.services__card, .projects__card`, { origin: "right"});
sr.reveal(`.section__title, .projects__card`, { setInterval: 300});

/*=============== OPEN LINKS IN NEW TAB ===============*/
function sendEmail() {
  window.open(
    "https://mail.google.com/mail/?view=cm&fs=1&to=panuj330@gmail.com&su=Hi, I saw your website&body=Hello, I would like to contact you.",
    "_blank"
  );
}

function viewResume() {
  window.open(
    "https://drive.google.com/file/d/114-8Mbyd51tQOYjGcwIYZ_u2pVZD_Vgp/view?usp=sharing",
    "_blank"
  );
}

function sendLeadership() {
  window.open(
    "https://play.google.com/store/apps/details?id=com.anujfilegot.aatmagyan",
    "_blank"
  );
}

function sendBlogger() {
  window.open(
    "https://medium.com/@panuj330",
    "_blank"
  );
}