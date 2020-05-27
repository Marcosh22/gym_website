/* Initialize the click actions and sets the opacity of navbar according the window position on screen */
clickAction();
navOpacity();

/* Initialize the window scroll events */
$(window).scroll(function() {
    navOpacity();
    navSelection();
});

/* Toggle navbar opacity according to header position on screen */
function navOpacity() {
    let element = document.getElementById('navbar');

    let section = $('#sobre').offset().top;
    let top = $(this).scrollTop();

    let offset = top - section;

    if(offset > -100) {
        element.style.backgroundColor = "rgba(50, 50, 50, 0.8)";
    }
    else {
        element.style.backgroundColor = "rgba(50, 50, 50, 0)";
    }

}

/* Selects the active menu item according to the section visible on window */
function navSelection() {
    let top = $(this).scrollTop();

    let sobre = top - $('#sobre').offset().top + 200;
    let aulas = top - $('#aulas').offset().top + 200;
    let instrutores = top - $('#instrutores').offset().top + 200;
    let planos = top - $('#planos').offset().top + 200;
    let contato = top - $('#contato').offset().top + 200;

    if(sobre < 0) {
        activeItem('#nav-home');
    }
    else if(sobre > 0 && aulas < 0) {
        activeItem('#nav-sobre');
    }
    else if(aulas > 0 && instrutores < 0) {
        activeItem('#nav-aulas');
    } 
    else if(instrutores > 0 && planos < 0) {
        activeItem('#nav-instrutores');
    }
    else if(planos > 0 && contato < 0) {
        activeItem('#nav-planos');
    }
    else {
        activeItem('#nav-contato');
    }

    toTopButton();
}

/* Controls the nav items elements with the 'active' class */
function activeItem(id) {
    $('.nav-link').each(function(index, element){
        $(element).removeClass('active');
    });

    $(id).addClass('active');
}

/* Initialize the click events */
function clickAction() {
    $('.nav-link').each(function(index, element) {
        $(element).click(function() {
            let id = '#' + $(this).attr('id');
            activeItem(id);
            $('html, body').animate({ scrollTop: $(id.replace('nav-', '')).offset().top-50 }, 'slow');
        });
    });
    $('#nav-logo').click(function() {
        activeItem('#nav-home');
        $('html, body').animate({ scrollTop: $('#home').offset().top-50 }, 'slow');
    });
    $('#to-top').click(function() {
        activeItem('#nav-home');
        $('html, body').animate({ scrollTop: $('#home').offset().top-50 }, 'slow');
    });
}

/* Scroll window to the header by clicking the to top button */
function toTopButton() {

    let btn = document.getElementById('to-top');

    if($(window).scrollTop() > 100) {
        btn.style.opacity = '1';
    }
    else {
        btn.style.opacity = '0';
    }
}