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
    var id = this.getAttribute('href');
    var el = document.querySelector(id);
    var posicao = el.getBoundingClientRect().top;
    scrollBy(this.scrollTop, (posicao - 80));

    Array.from(links_menu).forEach(function(a) {    
        a.classList.remove('active');
    });    
    this.classList.add('active');

    if (visible) {
        menu_mobile.style.left = '-250px';
        visible = false;
    }    
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

    if (window.pageYOffset >= (who.offsetTop - 85)) {
        Array.from(links_menu).forEach(function(a) {
            a.classList.remove('active');         
            if (a.getAttribute('href') == "#who") {
                a.classList.add('active');
            }
        });
    } 
    
    if (window.pageYOffset >= (experience.offsetTop - 85)) {
        Array.from(links_menu).forEach(function(a) {
            a.classList.remove('active');        
            if (a.getAttribute('href') == "#experience") {
                a.classList.add('active');
            }
        });
    }

    if (window.pageYOffset >= (atas.offsetTop - 85)) {
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
