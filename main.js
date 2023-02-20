// start header in Scroll
let header = document.querySelector("header");
let contener = document.querySelector("header .contener");
let logo = document.querySelector("header .logo");
let links = document.querySelectorAll("nav ul li a");
let burgerIcon  = document.querySelector("header .btn .btn");

window.addEventListener("scroll", function() {
    if (window.scrollY >= 70) {
        header.style.position = "fixed";
        header.style.left = "0";
        header.style.top = "0";
        header.style.backgroundColor = "#fff";
        logo.style.color = "#000";
        contener.style.paddingTop = "15px"
        contener.style.paddingBottom = "15px"
        burgerIcon.style.color = "#000";
        links.forEach((ele) => {
            ele.style.color = "#000";
        });

    } else {
        header.style= "position: absolute; width: 100%; z-index: 2;transform: 0.5s; top: 0; left: 0;";
        logo.style.color = "#fff";
        contener.style.paddingTop = "30px";
        contener.style.paddingBottom = "0px";
        burgerIcon.style.color = "#fff";
        links.forEach((ele) => {
            ele.style.color = "#fff";
        });
    }
})
// end header in Scroll

// start navigation button
let btn = document.querySelector(".btn");
let ul = document.querySelector("ul")
let links_ul = document.querySelectorAll("ul li a");
ul.style.cssText = "left: -100%;"
btn.onclick = function() {
    if (ul.style.left === "-100%") {
        ul.style.cssText = "left: 0;"
        links_ul.forEach((ele) => {
            ele.style.color = "#fff";
        });
    } else {
        ul.style.cssText = "left: -100%;"
        
    }
}
links_ul.forEach((ele) => {
    ele.onclick = function() {
        ul.style.cssText = "left: -100%";
    }
})
// end navigation button

// start scrollToTop
let scrollToTop = document.getElementById("scrollToTop");
window.addEventListener("scroll", function() {
    if (window.scrollY >= 600) {
        scrollToTop.style.cssText = "right: 30px"
    } else {
        scrollToTop.style.cssText = "right: -50px"
    }
});
scrollToTop.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    })
})
// end scrollToTop