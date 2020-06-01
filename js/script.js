// certificates modals
let modal = new tingle.modal({
    footer: false,
    stickyFooter: false,
    closeMethods: ['overlay', 'button', 'escape'],
    closeLabel: "закрыть",

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


// modal sent

let modalSent = new tingle.modal({
    footer: false,
    stickyFooter: false,
    closeMethods: ['overlay', 'button', 'escape'],
    closeLabel: "закрыть",

    beforeClose: function () {
        return true; // close the modal
        return false; // nothing happens
    }

});

let modalSentContent = '<div class="modal__sent">\n' +
    '\n' +
    '    <h2>Ваше сообщение отправлено</h2>\n' +
    '    <h3>Спасибо, что выбрали нас!</h3>\n' +
    '    \n' +
    '\n' +
    '</div>';

modalSent.setContent(modalSentContent);


// open modal
modalSent.open();
// close modal
modalSent.close();


// mobile burger menu
const burger = document.getElementById('burger');
const mobileMenu = document.getElementById('mobileMenu');
let mobileMenuLinks = Array.from(document.getElementsByClassName('header__link'));

burger.addEventListener('click', function () {
    this.classList.toggle('mobile-menu__button_opened');
    mobileMenu.classList.toggle('header__ul_visible');
});

mobileMenuLinks.forEach(function (e) {
    e.addEventListener('click', function () {
        mobileMenu.classList.remove('header__ul_visible');
        burger.classList.remove('mobile-menu__button_opened');

    });
});


// forms to PHPMailer
// Отправка данных на сервер - квиз

$('#quizForm').trigger('reset');
$(function () {
    'use strict';
    $('#quizForm').on('submit', function (e) {
        e.preventDefault();
        $.ajax({
            url: '../mailsendmailer/question.php',
            type: 'POST',
            contentType: false,
            processData: false,
            data: new FormData(this),
            success: function (msg) {
                console.log(msg);
                if (msg == 'ok') {
                    modalSent.open();
                    $('#quizForm').trigger('reset'); // очистка формы
                } else {
                    alert('Ошибка');
                }
            }
        });
    });
});


// Отправка данных на сервер - вопрос

$('#footerForm').trigger('reset');
$(function () {
    'use strict';
    $('#footerForm').on('submit', function (e) {
        e.preventDefault();
        $.ajax({
            url: '../mailsendmailer/question.php',
            type: 'POST',
            contentType: false,
            processData: false,
            data: new FormData(this),
            success: function (msg) {
                console.log(msg);
                if (msg == 'ok') {

                    modalSent.open();
                    $('#footerForm').trigger('reset'); // очистка формы
                } else {
                    alert('Ошибка');
                }
            }
        });
    });
});
