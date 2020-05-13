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

burger.addEventListener('click', function () {
    this.classList.toggle('mobile-menu__button_opened');
    mobileMenu.classList.toggle('header__ul_visible');
});



//todo закрывать меню по клику на ссылку, закрывать меню по клику вне меню