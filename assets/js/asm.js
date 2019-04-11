let visible = false;
const menu_mobile = document.getElementById('menu_mobile');

function menu() {
    if (!visible) {
        menu_mobile.style.left = 0;            
        visible = true;
    } else {
        menu_mobile.style.left = '-250px';
        visible = false;
    }    
}

const links_menu = document.getElementsByClassName('link-scroll');
Array.from(links_menu).forEach(function(a) {    
    a.addEventListener('click', scrollToo);    
});

function scrollToo(e) {
    e.preventDefault();
    let id = this.getAttribute('href');
    let el = document.querySelector(id);
    let position = el.getBoundingClientRect().top - 57;
    window.scrollBy(this.scrollTop, position);

    Array.from(links_menu).forEach(function(a) {    
        a.classList.remove('active');
    });    
    this.classList.add('active');

    if (visible) {
        menu_mobile.style.left = '-250px';
        visible = false;
    }
}

if (window.pageYOffset > 0) {
    box_menu.classList.add('page-menu-scroll');        
} else {
    box_menu.classList.remove('page-menu-scroll');
}

window.onscroll = scroll;
function scroll() {
    const box_menu = document.getElementById('box_menu');
    if (window.pageYOffset > 0) {
        box_menu.classList.add('page-menu-scroll');        
    } else {
        box_menu.classList.remove('page-menu-scroll');
    }

    let who = document.getElementById('who');
    let experience = document.getElementById('experience');
    let atas = document.getElementById('atas');
    let contact = document.getElementById('contact');

    Array.from(links_menu).forEach(function(a) {
        a.classList.remove('active');
    });

    if (window.pageYOffset >= (who.offsetTop - 60)) {
        Array.from(links_menu).forEach(function(a) {
            a.classList.remove('active');         
            if (a.getAttribute('href') == "#who") {
                a.classList.add('active');
            }
        });
    } 
    
    if (window.pageYOffset >= (experience.offsetTop - 60)) {
        Array.from(links_menu).forEach(function(a) {
            a.classList.remove('active');        
            if (a.getAttribute('href') == "#experience") {
                a.classList.add('active');
            }
        });
    }

    if (window.pageYOffset >= (atas.offsetTop - 60)) {
        Array.from(links_menu).forEach(function(a) {
            a.classList.remove('active');        
            if (a.getAttribute('href') == "#atas") {
                a.classList.add('active');
            }
        });
    }

    if (window.pageYOffset >= (contact.offsetTop - 150)) {
        Array.from(links_menu).forEach(function(a) {
            a.classList.remove('active');        
            if (a.getAttribute('href') == "#contact") {
                a.classList.add('active');
            }
        });
    }
}
