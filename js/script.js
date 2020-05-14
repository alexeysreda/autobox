// instanciate new modal
let modal = new tingle.modal({
    footer: false,
    stickyFooter: false,
    closeMethods: ['overlay', 'button', 'escape'],
    closeLabel: "Close",

    beforeClose: function () {
        return true; // close the modal
        return false; // nothing happens
    }

});


let certificatesLinks = document.getElementsByClassName('certificates__link');
for (let i = 0; i < certificatesLinks.length; i++) {
    let image = certificatesLinks[i].firstElementChild;
    let imgSrc = image.getAttribute('src');

    certificatesLinks[i].addEventListener('click', function (el) {
        el.preventDefault();
        modal.setContent('<img alt="" src="' + imgSrc + '">');
    });
}

// open modal
modal.open();
// close modal
modal.close();


// mobile burger menu
const burger = document.getElementById('burger');
const mobileMenu = document.getElementById('mobileMenu');
let mobileMenuLinks = Array.from(document.getElementsByClassName('header__link'));



burger.addEventListener('click', function () {
    this.classList.toggle('mobile-menu__button_opened');
    mobileMenu.classList.toggle('header__ul_visible');
});

mobileMenuLinks.forEach(e => {
    e.addEventListener('click', function() {
        mobileMenu.classList.remove('header__ul_visible');
        burger.classList.remove('mobile-menu__button_opened');

    });
});

// const words = ['Идеальное', 'Прекрасное', 'Подходящее'];
//
// const wordsChanging = function() {
//     setInterval(() => {
//         for(let i = 0; i < words.length - 1; i++) {
//             document.getElementById('changing').textContent = words[i];
//         }
//
//     }, 1500);
// };
//
// wordsChanging();