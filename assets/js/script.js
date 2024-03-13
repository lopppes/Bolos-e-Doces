'use strict';

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}

const preloader = document.querySelector("[data-preloader]");

window.addEventListener("DOMContentLoaded", function () {
  preloader.classList.add("loaded");
  document.body.classList.add("loaded");
});

const [navTogglers, navLinks, navbar, overlay] = [
  document.querySelectorAll("[data-nav-toggler]"),
  document.querySelectorAll("[data-nav-link]"),
  document.querySelector("[data-navbar]"),
  document.querySelector("[data-overlay]")
];

const toggleNav = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("active");
}

addEventOnElem(navTogglers, "click", toggleNav);

const closeNav = function () {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
  document.body.classList.remove("active");
}

addEventOnElem(navLinks, "click", closeNav);


function showProducts(category) {

  var products = document.querySelectorAll('.grid-list li');
  products.forEach(function(product) {
    product.style.display = 'none';
  });


  var categoryProducts = document.querySelectorAll('.grid-list li[data-category="' + category + '"]');
  for (var i = 0; i < 6 && i < categoryProducts.length; i++) {
    categoryProducts[i].style.display = 'block';
  }
}

function showMoreProducts() {

  var hiddenProducts = document.querySelectorAll('.grid-list li[style="display: none;"]');
  hiddenProducts.forEach(function(product, index) {
    if (index < 2) { 
      product.style.display = 'block';
    }
  });
}

showProducts('bolos');


const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  window.scrollY >= 100 ? backTopBtn.classList.add("active")
    : backTopBtn.classList.remove("active");
});



function toggleActive(element, category) {

  const filterButtons = document.querySelectorAll('.filter-btn');
  filterButtons.forEach(btn => {
    btn.classList.remove('active');
  });

  element.closest('.filter-btn').classList.add('active');

  showProducts(category);
}
