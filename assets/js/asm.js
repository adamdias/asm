$(function(){    
    let visible = false;

    function animeScroll() {
        const target = document.querySelectorAll('[data-anime]');
        const animationClass = 'animate';
        const windowTop = window.pageYOffset + (window.innerHeight - 50);
        target.forEach(function(element) {
            if((windowTop) > element.offsetTop) {
                element.classList.add(animationClass);
            } else {
                element.classList.remove(animationClass);
            }
        })
    }
    
    animeScroll();

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

    if (window.pageYOffset > 0) {
        $('#box_menu').addClass('page-menu-scroll');        
    } else {
        $('#box_menu').removeClass('page-menu-scroll');
    }

    $(window).scroll(function() {
        if (this.pageYOffset > 0) {
            $('#box_menu').addClass('page-menu-scroll');
        } else {
            $('#box_menu').removeClass('page-menu-scroll');
        }

        animeScroll();

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

        // $('.page-section').each(function() {
        //     let sectionId = $('#' + $(this).attr('id'));
        //     let link = $('.link-scroll[href="#' + $(this).attr('id') + '"]');
        //     let sizeMenu = ($(this).attr('id') === 'contact' ? 200 : 60);
        //     if($(window).scrollTop() >= sectionId.offset().top - sizeMenu) {
        //         $(".link-scroll").removeClass('active');
        //         link.addClass('active');
        //     }
        // });  

        $('.box-numbers-item h1').each(function() {
            let $this = $(this);
            if(!$this.data('counted') && $(window).scrollTop() + $(window).height() >= $this.offset().top) {
                $this.data('counted', true);
                $this.animate({dummy: 1}, {
                    duration: 3000,
                    step:     function(now) {
                        var $this   = $(this);
                        var val     = Math.round($this.data('target') * now);
                        $this.html(val);
                    }
                });
            }
        });
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

    $('.box-numbers-item h1').each(function() {
        var $this   = $(this);
        $this.data('target', parseInt($this.html()));
        $this.data('counted', false);        
    });

    $('.main_atas_col').css('display', 'none');
    $('.main_atas_col').each(function(index, el) {
        if (index < 6) {
            $(this).addClass('ataActive');
            $(this).css('display', 'block');
        }

        if ($('.main_atas_col').length <= 6) {
            $('#load_atas').css('display', 'none');
        }
    });
    
    $('#load_atas').on('click', function() {   
        let ataFilter = $('#filtroAtas').attr('filter');        
        let countAtas = (!ataFilter || ataFilter === 'all' ? $('.main_atas_col').length : $('.main_atas_col[year="' + ataFilter + '"]').length);
        let counAtaActive = document.getElementsByClassName('ataActive').length;

        $('.main_atas_col').each(function(index, el) {
            if (ataFilter === 'all') {
                console.log(counAtaActive);
                if (index < counAtaActive + 6) {
                    $(this).addClass('ataActive');
                    $(this).css('display', 'block');
                }
            } else if (ataFilter) {
                if (index < counAtaActive + 6 && $(this).attr('year') === ataFilter) {
                    $(this).addClass('ataActive');
                    $(this).css('display', 'block');
                }
            } else {
                if (index < counAtaActive + 6) {
                    $(this).addClass('ataActive');
                    $(this).css('display', 'block');
                }
            }            
        });

        counAtaActive = document.getElementsByClassName('ataActive').length;
        if (counAtaActive === countAtas) {
            $('#load_atas').css('display', 'none');
        }

        return false;
    });

    $('#filtroAtas').on('change', function() { 
        const filter = this.value;
        let ataCount = 0;
        $('#filtroAtas').attr('filter', filter);
        $('.main_atas_col').css('display', 'none');     
        $('.main_atas_col').removeClass('ataActive');     
        $('.main_atas_col').each(function(index, el) {            
            if (filter === 'all') {                
                if (index < 6) {
                    $(this).addClass('ataActive');
                    $(this).css('display', 'block');
                }
            } else if ($(this).attr('year') === filter && ataCount < 6) {
                ataCount++;
                $(this).addClass('ataActive');
                $(this).css('display', 'block');
            }
        });

        let countItems = (filter === 'all' ? $('.main_atas_col').length : $('.main_atas_col[year="' + filter + '"]').length);
        if (countItems <= 6) {
            $('#load_atas').css('display', 'none');
        } else {
            $('#load_atas').css('display', 'block');
        }
    });    
});