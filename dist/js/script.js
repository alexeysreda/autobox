"use strict";for(var modal=new tingle.modal({footer:!1,stickyFooter:!1,closeMethods:["overlay","button","escape"],closeLabel:"закрыть",beforeClose:function(){return!0}}),certificatesLinks=document.getElementsByClassName("certificates__link"),_loop=function(e){var t=certificatesLinks[e].firstElementChild.getAttribute("src");certificatesLinks[e].addEventListener("click",function(e){e.preventDefault(),modal.setContent('<img alt="" src="'+t+'">')})},i=0;i<certificatesLinks.length;i++)_loop(i);modal.open(),modal.close();var modalSent=new tingle.modal({footer:!1,stickyFooter:!1,closeMethods:["overlay","button","escape"],closeLabel:"закрыть",beforeClose:function(){return!0}}),modalSentContent='<div class="modal__sent">\n\n    <h2>Ваше сообщение отправлено</h2>\n    <h3>Спасибо, что выбрали нас!</h3>\n    \n\n</div>';modalSent.setContent(modalSentContent),modalSent.open(),modalSent.close();var burger=document.getElementById("burger"),mobileMenu=document.getElementById("mobileMenu"),mobileMenuLinks=Array.from(document.getElementsByClassName("header__link"));burger.addEventListener("click",function(){this.classList.toggle("mobile-menu__button_opened"),mobileMenu.classList.toggle("header__ul_visible")}),mobileMenuLinks.forEach(function(e){e.addEventListener("click",function(){mobileMenu.classList.remove("header__ul_visible"),burger.classList.remove("mobile-menu__button_opened")})}),$("#quizForm").trigger("reset"),$(function(){$("#quizForm").on("submit",function(e){e.preventDefault(),$.ajax({url:"../mailsendmailer/question.php",type:"POST",contentType:!1,processData:!1,data:new FormData(this),success:function(e){console.log(e),"ok"==e?(modalSent.open(),$("#quizForm").trigger("reset")):alert("Ошибка")}})})}),$("#footerForm").trigger("reset"),$(function(){$("#footerForm").on("submit",function(e){e.preventDefault(),$.ajax({url:"../mailsendmailer/question.php",type:"POST",contentType:!1,processData:!1,data:new FormData(this),success:function(e){console.log(e),"ok"==e?(modalSent.open(),$("#footerForm").trigger("reset")):alert("Ошибка")}})})});