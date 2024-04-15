// active toggle hamburger menu
const navbarNav = document.querySelector('.navbar-nav');

document.querySelector('#hamburger-menu').
    onclick = (e) => {
        navbarNav.classList.toggle('active');
        e.preventDefault();
    };

// end hamburger menu

const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');

// toogle search form
document.querySelector('#search-button').onclick = (e) => {
    searchForm.classList.toggle('active');
    searchBox.focus()
    e.preventDefault()
}

// shopping cart
const shoppingButton = document.querySelector('#shopping-cart-button');
const shoppingCart = document.querySelector('.shopping-cart');
document.querySelector('#shopping-cart-button').onclick = (e) => {
    shoppingCart.classList.toggle('active');
    e.preventDefault();
}

// klik diluar element
const hamburger = document.querySelector('#hamburger-menu');
const searchButton = document.querySelector('#search-button');

document.addEventListener('click', function (e) {
    // hamburger menu
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
    // search button
    if(!searchButton.contains(e.target) && !searchForm.contains(e.target)) {
        searchForm.classList.remove('active');
    }
});