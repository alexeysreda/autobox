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


// modal form

let modalForm = new tingle.modal({
    footer: false,
    stickyFooter: false,
    closeMethods: ['overlay', 'button', 'escape'],
    closeLabel: "закрыть",

    beforeClose: function () {
        return true; // close the modal
        return false; // nothing happens
    }

});

let modalFormContent = '<form id="modalForm" class="modal__window" action="mailsendmailer/order.php" method="post">\n' +
    '    <h2 class="modal__heading">Оставьте свой телефон, и мы Вам перезвоним!</h2>\n' +
    '    <label class="modal__label" for="modalName">Ваше имя</label>\n' +
    '    <input class="modal__input" type="text" id="modalName" name="modalName" required>\n' +
    '    <label class="modal__label" for="modalPhone">Ваш телефон</label>\n' +
    '    <input class="modal__input" type="text" id="modalPhone" name="modalPhone" required>\n' +
    '\n' +
    '    <div>\n' +
    '        <input type="checkbox" class="footer__checkbox" id="modalCheckbox" required checked>\n' +
    '        <label class="footer__label_checkbox" for="modalCheckbox">Согласен с политикой <a href="policy.html"\n' +
    '                                                                                          target="_blank">обработки\n' +
    '            персональных данных</a></label>\n' +
    '    </div>\n' +
    '\n' +
    '    <button type="submit" class="button">Отправить</button>\n' +
    '\n' +
    '\n' +
    '</form>';

let orderButton = document.getElementById('orderButton');

orderButton.addEventListener('click', function (el) {
    el.preventDefault();
    modalForm.setContent(modalFormContent);
});


// open modal
modalForm.open();
// close modal
modalForm.close();



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


// quiz

let buttonFirst = document.getElementsByClassName('quiz__button_first')[0];
let buttonSecond = document.getElementsByClassName('quiz__button_second')[0];
let buttonThird = document.getElementsByClassName('quiz__button_third')[0];
let buttonFourth = document.getElementsByClassName('quiz__button_fourth')[0];

let quizFirst = document.getElementsByClassName('quiz__question_first')[0];
let quizSecond = document.getElementsByClassName('quiz__question_second')[0];
let quizThird = document.getElementsByClassName('quiz__question_third')[0];
let quizFourth = document.getElementsByClassName('quiz__question_fourth')[0];
let quizFifth = document.getElementsByClassName('quiz__question_fifth')[0];

buttonFirst.addEventListener('click', function () {
    quizFirst.style.display = 'none';
    quizSecond.style.display = 'block';
});

buttonSecond.addEventListener('click', function () {
    quizSecond.style.display = 'none';
    quizThird.style.display = 'block';
});

buttonThird.addEventListener('click', function () {
    quizThird.style.display = 'none';
    quizFourth.style.display = 'block';
});

buttonFourth.addEventListener('click', function () {
    quizFourth.style.display = 'none';
    quizFifth.style.display = 'block';
});

// forms to PHPMailer
// Отправка данных на сервер - квиз

$('#quizForm').trigger('reset');
$(function () {
    'use strict';
    $('#quizForm').on('submit', function (e) {
        e.preventDefault();
        $.ajax({
            url: '../mailsendmailer/quiz.php',
            type: 'POST',
            contentType: false,
            processData: false,
            data: new FormData(this),
            success: function (msg) {
                console.log(msg);
                if (msg == 'ok') {
                    modalSent.setContent(modalSentContent);
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
                    modalSent.setContent(modalSentContent);
                    $('#footerForm').trigger('reset'); // очистка формы
                } else {
                    alert('Ошибка');
                }
            }
        });
    });
});

// Отправка данных на сервер - заказ

$('#modalForm').trigger('reset');
$(function () {
    'use strict';
    $('#modalForm').on('submit', function (e) {
        e.preventDefault();
        $.ajax({
            url: '../mailsendmailer/order.php',
            type: 'POST',
            contentType: false,
            processData: false,
            data: new FormData(this),
            success: function (msg) {
                console.log(msg);
                if (msg == 'ok') {
                    modalSent.setContent(modalSentContent);

                    $('#modalForm').trigger('reset'); // очистка формы
                } else {
                    alert('Ошибка');
                }
            }
        });
    });
});