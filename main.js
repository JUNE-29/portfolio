'use strict';


// Make navbar transparent when it is on the top 
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
    if(window.scrollY > navbarHeight) {
        navbar.classList.add('navbar--dark');
    } else {
        navbar.classList.remove('navbar--dark');
    }
});

// Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {
    
    const target = event.target;
    const link = target.dataset.link;
    
    if (link == null) {
        return;
    }
    navbarMenu.classList.remove('open');
    scrollIntoView(link);
});

// Navbar toggle button for small screen
const navbarToggleBtn  = document.querySelector('.navbar__toole-btn');
navbarToggleBtn.addEventListener('click',()=> {
    navbarMenu.classList.toggle('open');
});


// Handle click on "contact me" button on home
const homeContactBtn = document.querySelector(".home__contact");
homeContactBtn.addEventListener('click', ()=> {
    scrollIntoView('#contact')
});


// Make home slowly fade to transparent as the window scrolls down
const homeContainer = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    homeContainer.style.opacity = 1 - window.scrollY / homeHeight;
});

// show "arrow up" button when scrolling down
const arrowUpBtn = document.querySelector(".arrow_up_button");
document.addEventListener('scroll', () => {
    if(window.scrollY > homeHeight) {
        arrowUpBtn.classList.add('visible');
    } else {
        arrowUpBtn.classList.remove('visible');
    }
});

arrowUpBtn.addEventListener('click', ()=> {
    scrollIntoView('#home');
});

// Projects
const workBtnContainer = document.querySelector(".work__categories");
const projectContainer = document.querySelector('.work__projects');
const projects = document.querySelectorAll('.project');

workBtnContainer.addEventListener('click', (event) => {
    const category = event.target.dataset.projectCategory || event.target.parentNode.dataset.projectCategory;
    if (category == null) {
        return;
    }

    // Remove selection from the previous item and select the new one
    const active = document.querySelector('.category__btn.selected');
    active.classList.remove('selected');
    const target = event.target.nodeName === 'BUTTON' ? event.target : event.target.parentNode;
    target.classList.add('selected');

    projectContainer.classList.add('anime-out');
    setTimeout(()=> {
        projects.forEach((project) => {
            if(category === '*' || category === project.dataset.type) {
                project.classList.remove('invisible');
            } else {
                project.classList.add('invisible');
            }
         });
       projectContainer.classList.remove('anime-out');
    },300)
});

function scrollIntoView(selector) {
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior: "smooth", block: "center"});
}
