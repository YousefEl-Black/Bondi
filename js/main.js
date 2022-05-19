// Scroll Effect

let services = document.getElementById("features");
let portfolio = document.getElementById("our-work");
let about = document.getElementById("stuff");
let testmonials = document.getElementById("our-team");
let project = document.getElementById("project");
let blog = document.getElementById("blog");
let contact = document.getElementById("footer");

window.onscroll = () => {
  if (window.pageYOffset > (services.offsetTop - 84)) {
    for (i = 0; i < document.querySelectorAll("nav ul li").length; i++) {
      document.querySelector(`nav ul li:nth-child(${i + 1}) a`).classList.remove("active");
    }
    document.querySelector("nav ul li:nth-child(1) a").classList.add("active");
  }
  if (window.pageYOffset > (portfolio.offsetTop - 84)) {
    for (i = 0; i < document.querySelectorAll("nav ul li").length; i++) {
      document.querySelector(`nav ul li:nth-child(${i + 1}) a`).classList.remove("active");
    }
    document.querySelector("nav ul li:nth-child(2) a").classList.add("active");
  }
  if (window.pageYOffset > (about.offsetTop - 84)) {
    for (i = 0; i < document.querySelectorAll("nav ul li").length; i++) {
      document.querySelector(`nav ul li:nth-child(${i + 1}) a`).classList.remove("active");
    }
    document.querySelector("nav ul li:nth-child(3) a").classList.add("active");
  }
  if (window.pageYOffset > (testmonials.offsetTop - 84)) {
    for (i = 0; i < document.querySelectorAll("nav ul li").length; i++) {
      document.querySelector(`nav ul li:nth-child(${i + 1}) a`).classList.remove("active");
    }
    document.querySelector("nav ul li:nth-child(4) a").classList.add("active");
  }
  if (window.pageYOffset > (project.offsetTop - 84)) {
    for (i = 0; i < document.querySelectorAll("nav ul li").length; i++) {
      document.querySelector(`nav ul li:nth-child(${i + 1}) a`).classList.remove("active");
    }
    document.querySelector("nav ul li:nth-child(5) a").classList.add("active");
  }
  if (window.pageYOffset > (blog.offsetTop - 84)) {
    for (i = 0; i < document.querySelectorAll("nav ul li").length; i++) {
      document.querySelector(`nav ul li:nth-child(${i + 1}) a`).classList.remove("active");
    }
    document.querySelector("nav ul li:nth-child(6) a").classList.add("active");
  }
  if (window.pageYOffset > (contact.offsetTop - 84)) {
    for (i = 0; i < document.querySelectorAll("nav ul li").length; i++) {
      document.querySelector(`nav ul li:nth-child(${i + 1}) a`).classList.remove("active");
    }
    document.querySelector("nav ul li:nth-child(7) a").classList.add("active");
  }
}

// Create A Preloader

let preloader = document.querySelector(".preloader")


$(document).ready( () => {
  setTimeout(() => {
    $(".preloader").css("padding", "0")
    $(".preloader").slideUp(1000)
  },1_000)
})

// Search Adjustment

let searchIcon = document.querySelector(".navbar .search");
console.log(searchIcon)
let searchBox = document.querySelector(".navbar .search-box");
console.log(searchBox)

searchIcon.onclick = () => {
  searchBox.classList.toggle("active");
  searchIcon.classList.toggle("active");
}