$(function(){    
    let visible = false;
    $('.page-menu-mobile-btn').click(function() {
        if (!visible) {
            $('#menu_mobile').animate({
                left: "0",
            }, 200)
            visible = true;
        } else {
            $('#menu_mobile').animate({
                left: "-250px",
            }, 200)
            visible = false;
        }

        return false;
    });

    if (this.pageYOffset > 0) {
        box_menu.classList.add('page-menu-scroll');        
    } else {
        box_menu.classList.remove('page-menu-scroll');
    }

    $(window).scroll(function() {
        if (this.pageYOffset > 0) {
            box_menu.classList.add('page-menu-scroll');        
        } else {
            box_menu.classList.remove('page-menu-scroll');
        }

        let who = document.getElementById('who');
        let experience = document.getElementById('experience');
        let atas = document.getElementById('atas');
        let contact = document.getElementById('contact');
        const links_menu = document.getElementsByClassName('link-scroll');
        
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

        if (window.pageYOffset >= (contact.offsetTop - 200)) {
            Array.from(links_menu).forEach(function(a) {
                a.classList.remove('active');        
                if (a.getAttribute('href') == "#contact") {
                    a.classList.add('active');
                }
            });
        }
    });

    $('.link-scroll').click(function() {
        $('.link-scroll').removeClass('active');
        $(this).addClass('active');
        $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top - 55 }, 1000);
        $('#menu_mobile').animate({
            left: "-250px",
        }, 200)
        visible = false;
        return false;
    });

    $('#load_atas').click(function() {
        let data = [
            {
                "date": "2019-04-20T00:00:00",
                "name": "Esse é o nome da ata",
                "description": "Essa é a descrição da ata",
                "file": "arquivo.pdf"
            },
            {
                "date": "2019-04-22T00:00:00",
                "name": "Esse é o nome da ata 2",
                "description": "Essa é a descrição da ata 2",
                "file": "arquivo2.pdf"
            },
            {
                "date": "2019-05-25T00:00:00",
                "name": "Esse é o nome da ata 3",
                "description": "Essa é a descrição da ata 3",
                "file": "arquivo3.pdf"
            },
            {
                "date": "2019-06-10T00:00:00",
                "name": "Esse é o nome da ata 4",
                "description": "Essa é a descrição da ata 4",
                "file": "arquivo4.pdf"
            },
            {
                "date": "2019-07-15T00:00:00",
                "name": "Esse é o nome da ata 5",
                "description": "Essa é a descrição da ata 5",
                "file": "arquivo5.pdf"
            },
            {
                "date": "2019-08-30T00:00:00",
                "name": "Esse é o nome da ata 6",
                "description": "Essa é a descrição da ata 6",
                "file": "arquivo6.pdf"
            }
        ];

        let html = '';
        for (i = 0; i < data.length; i++) {
            animate = (i % 2 === 0 ? 'data-anime="right"' : 'data-anime="left"');
            let date = new Date(data[i].date);
            let month = date.toLocaleDateString('pt-BR', {month: "short"}).toLocaleUpperCase();
            let day = date.getDate();
            let year = date.getFullYear();
            html += `
            <div class="col main_atas_col animate" ${animate}>
                <article class="box-atas-item">
                    <div class="col col-5">
                        <ul class="atas-item-date">
                            <li class="m">${month}</li>
                            <li class="d">${day}</li>
                            <li class="y">${year}</li>
                        </ul>
                    </div> 

                    <div class="col col-30">
                        <h1>${data[i].name}</h1>                    
                    </div>
                    <div class="col col-55">
                        <p class="tagline">${data[i].description}</p>
                    </div>                                                     

                    <div class="col col-10">
                        <a href="#${data[i].file}" class="atas-item-download" title="Baixar ata"><i class="fas fa-download"></i> PDF</a>
                    </div>                    
                </article>
            </div>
            `;
        }

        $('#main_atas_box_ajax').append(html)
        $('#load_atas').css('display', 'none');
        return false;
    });

    $('.box-numbers-item h1').each(function() {
        var $this   = $(this);
        $this.data('target', parseInt($this.html()));
        $this.data('counted', false);
        $this.html('0');
    });

    $(window).bind('scroll', function() {
        var speed   = 3000;
        $('.box-numbers-item h1').each(function() {
            var $this   = $(this);
            if(!$this.data('counted') && $(window).scrollTop() + $(window).height() >= $this.offset().top) {
                $this.data('counted', true);
                $this.animate({dummy: 1}, {
                    duration: speed,
                    step:     function(now) {
                        var $this   = $(this);
                        var val     = Math.round($this.data('target') * now);
                        $this.html(val);
                    }
                });
            }
        });
    }).triggerHandler('scroll');
});

const debounce = function(func, wait, immediate) {
    let timeout;
    return function(...args) {
        const context = this;
        const later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

function animeScroll() {
    const target = document.querySelectorAll('[data-anime]');
    const animationClass = 'animate';
    const windowTop = window.pageYOffset + ((window.innerHeight * 4) / 4);
    target.forEach(function(element) {
        if((windowTop) > element.offsetTop) {
        element.classList.add(animationClass);
        } else {
        element.classList.remove(animationClass);
        }
    })
}

animeScroll();

window.onscroll = (debounce(function() {
    animeScroll();
}, 200));