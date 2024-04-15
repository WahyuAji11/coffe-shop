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
const shoppingCart = document.querySelector('.shopping-cart');
document.querySelector('#shopping-cart-button').onclick = (e) => {
    shoppingCart.classList.toggle('active');
    e.preventDefault();
}

// klik diluar element
const hamburger = document.querySelector('#hamburger-menu');
const searchButton = document.querySelector('#search-button');
const shoppingButton = document.querySelector('#shopping-cart-button');

document.addEventListener('click', function (e) {
    // hamburger menu
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
    // search button
    if(!searchButton.contains(e.target) && !searchForm.contains(e.target)) {
        searchForm.classList.remove('active');
    }
    // shopping cart
    if(!shoppingButton.contains(e.target) && !shoppingCart.contains(e.target)) {
        shoppingCart.classList.remove('active');
    }

});

// modal box
const itemDetailModal = document.querySelector('#item-detail-modal');
const itemDetailButtons = document.querySelectorAll('.item-detail-button');

itemDetailButtons.forEach((btn) => {
    btn.onclick = (e) => {
        itemDetailModal.style.display = 'flex';
        e.preventDefault();
    }
})


// close button
document.querySelector('.modal .close-item').onclick = (e) => {
    itemDetailModal.style.display = 'none';
    e.preventDefault();
}

// diluar modal box
window.onclick = (e) => {
    if(e.target === itemDetailModal) {
        itemDetailModal.style.display = 'none';
    }
}