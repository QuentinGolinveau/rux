"use strict";

// DARK MODE

let lightmodeBtn = document.querySelector('.lightmode');
let activeMode = localStorage.getItem("mode");
if(activeMode == "dark"){
    document.body.classList.add("dark");
}
lightmodeBtn.addEventListener("click", (e) =>{
    document.body.classList.toggle("dark");
    if(document.body.classList.contains("dark")){
        localStorage.setItem("mode", "dark");
    }else{
        localStorage.setItem("mode", "light");
    } 
});

// BURGER MENU

function Pages(){
	let pages = document.querySelectorAll(".page--active");
	for(let page of pages){
		page.classList.remove("page--active");
	}
}
let menuButtons = document.querySelectorAll(".button--header");
let navLinks = document.querySelectorAll(".nav__el a");
for(let menuButton of menuButtons){
	menuButton.addEventListener("click", (e) => {
		document.body.classList.toggle("body--nav-open");
	});
}
for(let navLink of navLinks){
	navLink.addEventListener("click", (e) => {
		Pages();
		let PageIdActif = e.currentTarget.getAttribute("href");
		let PageActive = document.querySelector(PageIdActif);
		if(PageActive){
			PageActive.classList.add("page--active");
		}
		document.body.classList.remove("body--nav-open");
	});
}

// COPYRIGHT

let ajd = new Date();
let year = ajd.getFullYear();
let copyright = document.querySelector(".copyright");
copyright.innerHTML = "©"+ year;
