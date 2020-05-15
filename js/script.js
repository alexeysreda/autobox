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

mobileMenuLinks.forEach(function(e) {
    e.addEventListener('click', function() {
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

buttonFirst.addEventListener('click', function() {
    quizFirst.style.display = 'none';
    quizSecond.style.display = 'block';
});

buttonSecond.addEventListener('click', function() {
    quizSecond.style.display = 'none';
    quizThird.style.display = 'block';
});

buttonThird.addEventListener('click', function() {
    quizThird.style.display = 'none';
    quizFourth.style.display = 'block';
});

buttonFourth.addEventListener('click', function() {
    quizFourth.style.display = 'none';
    quizFifth.style.display = 'block';
});

// forms to PHPMailer
// Отправка данных на сервер

// quizForm.trigger('reset');
// let send = function() {
//     'use strict';
//     quizForm.addEventListener('submit', function(e) {
//         e.preventDefault();
//         document.fetch({
//             url: '../mailsendmailer/send.php',
//             type: 'POST',
//             contentType: false,
//             processData: false,
//             data: new FormData(this),
//             success: function(msg) {
//                 console.log(msg);
//                 if (msg == 'ok') {
//                     alert('Сообщение отправлено');
//                     quizForm.trigger('reset'); // очистка формы
//                 } else {
//                     alert('Ошибка');
//                 }
//             }
//         });
//     });
// };
//
// send();

//
// document.addEventListener("DOMContentLoaded",function() {
//     //получить кнопку
//     const mybutton = document.getElementById('quizButton');
//     //подписаться на событие click по кнопке и назначить обработчик, который будет выполнять действия, указанные в безымянной функции
//     mybutton.addEventListener("click", function(){
//         //1. Сбор данных, необходимых для выполнения запроса на сервере
//         let quizWidth = document.getElementById('quizWidth').value;
//         let quizHeight = document.getElementById('quizHeight').value;
//         let quizDepth = document.getElementById('quizDepth').value;
//         let quizWidth = document.getElementById('quizWidth').value;
//         let quizWidth = document.getElementById('quizWidth').value;
//         //Подготовка данных для отправки на сервер
//         //т.е. кодирование с помощью метода encodeURIComponent
//         name = 'nameUser=' + encodeURIComponent(name);
//         // 2. Создание переменной request
//         let request = new XMLHttpRequest();
//         // 3. Настройка запроса
//         request.open('POST','../mailsendmailer/send.php',true);
//         // 4. Подписка на событие onreadystatechange и обработка его с помощью анонимной функции
//         request.addEventListener('readystatechange', function() {
//             //если запрос пришёл и статус запроса 200 (OK)
//             if ((request.readyState==4) && (request.status==200)) {
//                 // например, выведем объект XHR в консоль браузера
//                 console.log(request);
//                 // и ответ (текст), пришедший с сервера в окне alert
//                 console.log(request.responseText);
//                 // получить элемент c id = welcome
//                 let welcome = document.getElementById('welcome');
//                 // заменить содержимое элемента ответом, пришедшим с сервера
//                 welcome.innerHTML = request.responseText;
//             }
//         });
//         // Устанавливаем заголовок Content-Type(обязательно для метода POST). Он предназначен для указания кодировки, с помощью которой зашифрован запрос. Это необходимо для того, чтобы сервер знал как его раскодировать.
//         request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
//         // 5. Отправка запроса на сервер. В качестве параметра указываем данные, которые необходимо передать (необходимо для POST)
//         request.send(name);
//     });
// });