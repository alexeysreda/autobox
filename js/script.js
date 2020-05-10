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
    console.log(certificatesLinks[i]);
    let image = certificatesLinks[i].firstElementChild;
    console.log(image);
    let imgSrc = image.getAttribute('src');
    console.log(imgSrc);

    certificatesLinks[i].addEventListener('click', function (el) {
        el.preventDefault();
        // set content
        modal.setContent(`<img alt="" src=${imgSrc}>`);


    });

}

// open modal
modal.open();

// close modal
modal.close();









