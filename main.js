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

const homeBtn = document.querySelector('.Home__button');
const home = document.querySelector('#home');

homeBtn.addEventListener('click', () => {
    home.scrollIntoView({behavior: "smooth", block: "center", inline:"nearest"}); 
});



const aboutBtn = document.querySelector('.about__button');
const about = document.querySelector('#about');

aboutBtn.addEventListener('click', () => {
    about.scrollIntoView({behavior: "smooth", block: "center", inline:"nearest"}); 
});


const skillsBtn=  document.querySelector('.skills__button');
const skills = document.querySelector('#skills');

skillsBtn.addEventListener('click', ()=> {
    skills.scrollIntoView({behavior: "smooth", block: "center", inline:"nearest"});
});


const workBtn=  document.querySelector('.work__button');
const work = document.querySelector('#work');

workBtn.addEventListener('click', ()=> {
    work.scrollIntoView({behavior: "smooth", block: "center", inline:"nearest"});
});

const contactBtn=  document.querySelector('.contact__button');
const contact = document.querySelector('#contact');
const homeContactBtn = document.querySelector(".home__contact");

contactBtn.addEventListener('click', ()=> {
    contact.scrollIntoView({behavior: "smooth", block: "center", inline:"nearest"});
});

homeContactBtn.addEventListener('click', ()=> {
    contact.scrollIntoView({behavior: "smooth", block: "center", inline:"nearest"});
});