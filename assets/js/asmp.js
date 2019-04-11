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

        if (window.pageYOffset >= (contact.offsetTop - 150)) {
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
                "d": "11",
                "m": "ABR",
                "y": "2019",
                "name": "Esse é o nome da ata",
                "description": "Essa é a descrição da ata",
                "file": "arquivo.pdf"
            },
            {
                "d": "12",
                "m": "ABR",
                "y": "2019",
                "name": "Esse é o nome da ata 2",
                "description": "Essa é a descrição da ata 2",
                "file": "arquivo2.pdf"
            },
            {
                "d": "13",
                "m": "ABR",
                "y": "2019",
                "name": "Esse é o nome da ata 3",
                "description": "Essa é a descrição da ata 3",
                "file": "arquivo3.pdf"
            },
            {
                "d": "14",
                "m": "ABR",
                "y": "2019",
                "name": "Esse é o nome da ata 4",
                "description": "Essa é a descrição da ata 4",
                "file": "arquivo4.pdf"
            },
            {
                "d": "15",
                "m": "ABR",
                "y": "2019",
                "name": "Esse é o nome da ata 5",
                "description": "Essa é a descrição da ata 5",
                "file": "arquivo5.pdf"
            },
            {
                "d": "16",
                "m": "ABR",
                "y": "2019",
                "name": "Esse é o nome da ata 6",
                "description": "Essa é a descrição da ata 6",
                "file": "arquivo6.pdf"
            }
        ];

        let html = '';
        for (i = 0; i < data.length; i++) {
            html += `
            <div class="col main_atas_col">
                <article class="box-atas-item">
                    <div class="col col-5">
                        <ul class="atas-item-date">
                            <li class="m">${data[i].m}</li>
                            <li class="d">${data[i].d}</li>
                            <li class="y">${data[i].y}</li>
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
});