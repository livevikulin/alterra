'use strict';

(function(root) {

    // Инициализация прилдожения
    var windowWidth = $(window).width();

    function init() {

        if ($('.gallery').get(0)) {
            $('.gallery__element').first().trigger('click');
        }

        $('[data-tabs]').each(function(i, tabs) {
            $(tabs).children().first().trigger('click');
        });

        $('.toggle_close').each(function(i, toggle) {
            var data = $(this).data('toggle');

            $(this).parent().find('.' + data).hide();
        });
    };

    var evt = new Event(),
        m = new Magnifier(evt);

    $(window).on('resize', function() {
        windowWidth = $(window).width();

        if (windowWidth <= 960 && $('.container__side-scroll').parent().hasClass('sticky-wrapper')) {
            $('.container__side-scroll').unstick();
        } else if (windowWidth > 960 && $('.container__side-scroll').get(0) && !$('.container__side-scroll').parent().hasClass('sticky-wrapper')) {
            stickySide();
        }
    });

    // Слайдеры
    var dataSliders = {
        feautures: {
            items: 6,
            nav: true
        },
        gallery: {
            items: 1,
            nav: true,
            dots: true,
            mouseDrag: false,
            responsive: {
                961: {
                    items: 4,
                    dots: false
                }
            }
        },
        promo: {
            items: 1,
            dots: true,
            loop: true,
            autoplay: true
        },
        shop: {
            items: 1,
            loop: true,
            nav: false,
            center: false,
            responsive: {
                680: {
                    items: 3,
                    center: true,
                    nav: true
                }
            }
        }
    };

    $('[data-slider]').each(function(i, slider) {
        var data = $(this).data('slider');

        $(slider).owlCarousel(dataSliders[data]);
    });

    $('.range__slider').each(function() {
        var range = this,
            minInput = $(range).closest('.range').find('[data-input="min"]'),
            maxInput = $(range).closest('.range').find('[data-input="max"]');

        function update() {
            var from = $(range).data('from'),
                to = $(range).data('to');

            $(minInput).val(from);
            $(maxInput).val(to);
        }

        $(range).ionRangeSlider({
            extra_classes: 'range__slider',
            hide_min_max: true,
            hide_from_to: true
        });

        update();
        $(range).on('change', update);
    });

    $('[data-input]').on('change', function() {
        var range = $(this).closest('.range').find('input.range__slider').data("ionRangeSlider"),
            val = $(this).val(),
            min = range.options.min,
            max = range.options.max,
            from = range.options.from,
            to = range.options.to,
            step = range.options.step;

        switch ($(this).data('input')) {
            case 'min':
                if (val <= min) {
                    val = min;
                } else if (val >= max) {
                    val = max - step;
                } else if (val >= to) {
                    val = to - step;
                }

                range.update({
                    from: val
                });
                break;
            case 'max':
                if (val >= max) {
                    val = max;
                } else if (val <= min) {
                    val = min + step;
                } else if (val <= from) {
                    val = from + step;
                }

                range.update({
                    to: val
                });
                break;
        }

        $(this).val(val);
    });

    // fields
    function filled(field) {
        var val = $(field).val().trim();

        if (val.length > 0) {
            $(field).closest('.field').addClass('field_filled');
        } else {
            $(field).closest('.field').removeClass('field_filled');
        }
    }

    $('.field input, .field textarea').each(function() {
        filled(this);
    });

    $(document).on('keydown', '.field input, .field textarea', function() {
        var t = this;
        setTimeout(function() {
            filled(t);
        }, 100);
    });

    $('.toggle').on('click', function(e) {
        e.stopPropagation();
        var content = $(this).parent().find($('.' + $(this).data('toggle')));
        $(this).toggleClass('toggle_close');
        $(content).stop().slideToggle(300);
    });

    $('.filter__block-content').each(function(i, block) {
        var checks = $(block).find('.checkbox').length;

        if (checks > 5) {
            $(block).addClass('filter__block-content_more');
            $(block).append('<span class="filter__block-more">Показать все</span>');
        }
    });

    $('.filter__block-more').on('click', function() {
        $(this).parent().removeClass('filter__block-content_more');
        $(this).remove();
    });

    $('.drop__item').on('click', function() {
        if (!$(this).hasClass('drop__item_link')) {
            $(this).addClass('drop__item_active').siblings().removeClass('drop__item_active');
        }

        $(this).closest('[data-drop]').removeClass('drop-open');
    });

    $(document).on('click', '[data-drop]', function() {

        var data = $(this).data('drop');

        if (data == 'trigger') {
            $('.drop-open').removeClass('drop-open');
            $(this).parent().closest('[data-drop]').addClass('drop-open');
        } else return;
    });

    $(document).on('click', function(e) {

        var drop = $(e.target).parent().closest('[data-drop]').get(0),
            tip = $(e.target).parent().closest('.tip').get(0);

        if ($(e.target).hasClass('counter__btn_plus')) return;

        if (!drop) {
            $('.drop-open').removeClass('drop-open');
        }

        if (!tip) {
            $('.tip__hidecontent').hide();
            $('.container__main').css('z-index', '');
        }
    });

    $('.description__show').on('click', function() {
        $(this).hide();
        $('.description__short').hide();
        $('.description__all').show();
    });

    $('[data-close]').on('click', function(e) {
        e.preventDefault();

        $(this).parent().hide();
        $(this).closest('.card').css('z-index', '');
    });

    $('.tip__name').on('click', function() {
        $('.tip').css('z-index', '');
        $('.container__main').css('z-index', '3');
        $('.card').css('z-index', '');
        $('.tip__hidecontent').hide();
        $(this).parent().find('.tip__hidecontent').show();
        $(this).closest('.card').css('z-index', '2');
        $(this).closest('.tip').css('z-index', '9');
    });

    $('.tip_hover').hover(function() {
        $(this).find('.tip__hidecontent').show();
    }, function() {
        $('.tip__hidecontent').hide();
    });

    // Gallery
    var gId = 0;

    $('.gallery__element').on('click', function() {

        if ($(this).hasClass('gallery__element_video')) {
            var video = $(this).find('video').clone();

            $('.modal_zoom .modal__content').html(video);

            $('.modal_zoom').iziModal('open');
        } else {
            var img = $(this).find('img').clone(),
                href = $(img).attr('src');

            $(img).attr({
                'id': 'thumb' + gId,
                'data-large-img-url': href,
                'data-large-img-wrapper': 'preview'
            });

            $(this).closest('.gallery').find('.gallery__view').attr('href', href).empty().append(img);

            $(this).closest('.gallery__list').find('.gallery__element_active').removeClass('gallery__element_active');
            $(this).addClass('gallery__element_active');

            $('.gallery__preview').empty();
            m.attach({ thumb: '#thumb' + gId });

            var childPos = $(img).offset();
            var parentPos = $(img).parent().offset();
            var margin = childPos.left - parentPos.left;

            $(img).next().css('margin-left', margin + 'px');

            gId++;

            $('.gallery__view img').hover(function() {
                $('.gallery__preview').addClass('gallery__preview_hover');
            }, function() {
                $('.gallery__preview').removeClass('gallery__preview_hover');
            });
        }
    });

    $('.vlist_full').each(function(i, list) {
        var show = $(list).data('show'),
            line = $(list).find('.vlist__line:not(.vlist__line_head)').get(show);

        $(line).hide().nextAll(':not(.vlist__line_more)').hide();
    });

    $('.vlist__more').on('click', function() {
        $(this).closest('.vlist').toggleClass('vlist_allshow');
    });

    // Modal

    setTimeout(function() {
        $('[data-modal]').iziModal({
            onClosing: function onClosing(r) {
                var video = r.$element.find('video').get(0);

                if (video) {
                    video.pause();
                }
            }
        });
    }, 1);

    $('[data-open]').on('click', function(e) {
        e.preventDefault();

        var m = $(this).data('open');
        $('[data-modal=' + m + ']').iziModal('open');
    });

    $('.gallery__view, .shop__slide').on('click', function(e) {
        e.preventDefault();

        var img = $(this).find('img').clone();

        $('.modal_zoom .modal__content').html(img);

        $('.modal_zoom').iziModal('open');
    });

    $('.filter-toggle').on('click', function() {
        $('.filter .toggle:not(.toggle_close)').trigger('click');
        $('.filter').toggle();
    });

    $('.categories-toggle').on('click', function() {
        $('.categories .toggle:not(.toggle_close)').trigger('click');
        $('.categories').toggle();
    });

    $('.categories__block-head').click(function() {
        var $catList = $(this).next('.categories-list');

        if ($(this).hasClass('toggle_close')) {
            $catList.slideUp('list_close');
        } else {
            $catList.slideDown('list_close');
        };
    });

    $('.categories-list__down').click(function() {
        var $dogList = $(this).next('.categories-list__sub');
        $dogList.slideToggle('sub_close');
        $(this).toggleClass('sub_down');
    });

    $('.m-menu__toggle').on('click', function() {
        if (!$('.page').hasClass('page_freeze')) {
            var h = $('.m-menu__content').height();
            $('.page').addClass('page_freeze').css('height', h + 'px');
            $('html,body').css('overflow-x', 'hidden');
        } else {
            $('.page').removeClass('page_freeze').css('height', '');
            $('html,body').css('overflow', '');
        };

        $(window).scrollTop(0);

        $('.m-menu__content').toggle();
    });

    $('.m-menu__item-wrap').on('click', function() {
        $(this).toggleClass('m-menu__arrow-up')
    });
    $('li[data-counter]').on('click', function() {
        $(this).toggleClass('m-menu__arrow-up')
    });

    $('.m-menu__item_drop').on('click', function(e) {
        e.stopPropagation();

        var drop = $(this).find('.m-menu__drop').first(),
            catalog = Boolean($(this).closest('.m-menu__drop_catalog').get(0)) || Boolean($(this).find('.m-menu__drop_catalog').get(0));

        if ($(e.target).parentsUntil('.m-menu__item_drop').length <= 1) {
            $(drop).toggleClass('m-menu__drop_show');

            if (!catalog) {
                var _h = $('.m-menu__content').height();
                $('.page').css('height', _h);
                return;
            }

            var h = $(drop).closest('.m-menu__drop_catalog').height();
            $('.page').css('height', h);
        }
    });

    $('.m-menu__back').on('click', function(e) {
        e.stopPropagation();

        $(this).closest('.m-menu__drop_show').removeClass('m-menu__drop_show');

        var h = $('.m-menu__content').height();
        $('.page').css('height', h);
        return;
    });

    $('[data-tabs] > *').on('click', function(e) {
        e.preventDefault();

        var data = $(this).parent().data('tabs'),
            index = $(this).index(),
            content = $('[data-tabs-content=' + data + ']').children().get(index);

        $(content).show().siblings().hide();

        if (!content) {
            $('[data-tabs-content=' + data + ']').children().hide();
        }

        $(this).addClass('active').siblings().removeClass('active');
    });

    $('.video').on('click', function() {
        var id = $(this).data('id');

        $('#' + id).iziModal('open');
    });

    $('.checkbox input').on('click', function(e) {
        e.stopPropagation();

        $(this).closest('.checkbox').toggleClass('checkbox_active');
    });

    var scrolling,
        toTop = document.querySelector('.to-top');

    document.addEventListener('scroll', function(e) {
        scrolling = (window.pageYOffset || document.body.scrollTop) - (document.body.clientTop || 0);

        if ($(e.target).closest('.results').get(0)) return;

        if ($(window).width() > 960) {
            if (scrolling >= 200) {
                $('.header__fix').addClass('header__fix_show');
                $('.results').appendTo('.header__fix .search');
            } else if ($('.header__fix').hasClass('header__fix_show')) {
                $('.header__fix').removeClass('header__fix_show');
                $('.results').appendTo('.header__body .search');
            }
        } else {
            if (scrolling >= 31 && !$('.page').hasClass('page_freeze')) {
                $('.header__mobile').addClass('header__mobile_fix');
            } else if ($('.header__mobile').hasClass('header__mobile_fix')) {
                $('.header__mobile').removeClass('header__mobile_fix');
            }
        }

        if (scrolling >= 1000 && windowWidth > 960) {
            toTop.classList.add('to-top_show');
        } else {
            toTop.classList.remove('to-top_show');
        }
    }, true);

    $('.to-top').on('click', function() {
        $("html, body").stop().animate({ scrollTop: 0 }, 500, 'swing');
    });

    $('.counter__btn_plus').on('click', function(e) {
        e.preventDefault();

        $('.card').css('z-index', '');

        $('.tip__hidecontent').hide();
        $('.tip').css('z-index', '');
        $(this).parent().find('.tip__hidecontent').first().show();
        $(this).closest('.card').css('z-index', '5');
        $(this).parent().find('.tip').css('z-index', '9');

        if ($('.container__side').get(0)) {
            $('.container__main').css('z-index', '3');
        }
    });

    // search
    $('.search__field input').on('click', function() {
        $(this).closest('.search').addClass('search_focus');
        $('.page').append('<div class="fade-bg"></div>');
    });

    $(document).on('click', '.fade-bg', function(e) {
        $('.search').removeClass('search_focus');
        $(this).remove();
    });

    $('button.btn, .counter__btn, .close').on('click', function(e) {
        e.preventDefault();
    });

    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        var id = $(this).attr('href');

        try {
            $('html, body').animate({
                scrollTop: $(id).offset().top + $('body').scrollTop() - 80
            }, 1000);
        } catch (e) {}
    });

    $('.drop .close').on('click', function(e) {
        e.preventDefault();
        e.stopPropagation();

        $(this).closest('.drop-open').removeClass('drop-open');
    });

    var heightBottomScroll = 0;

    $('.page__content').nextAll().each(function(i, el) {
        heightBottomScroll += $(el).height();
    });

    //поиск в бургер-меню
    $(window).scroll(function() {
        if ($(window).scrollTop() > 50) {
            $('.search-scroll').show();
            $('.search-catalog').hide();
        } else if ($(window).scrollTop()) {
            $('.search-scroll').hide();
            $('.search-catalog').show();
        }
    });

    // nav index adaptive menu page
    $('.catalog-nav__item').on('click', function(e) {
        if (windowWidth <= 960) {

            var t = $(e.target).parent()[0];

            if (!$(t).hasClass('drop-nav__item_group')) e.preventDefault();

            var drop = $(e.target).closest('li').find('.drop-nav')[0] || $(e.target).closest('.drop-nav__list_drop')[0],
                link = $(e.target).closest('.catalog-nav__item-wrap').find('a').attr('href') || $(e.target).closest('li').find('a').attr('href');

            if (drop) {
                if ($(drop).hasClass('drop-nav_show')) {
                    $(drop).removeClass('drop-nav_show');
                    $(this).removeClass('catalog-nav__up');
                } else if (!$(drop).hasClass('drop-nav__list')) {
                    $(drop).addClass('drop-nav_show');
                    $(this).addClass('catalog-nav__up');
                } else if ($(e.target).closest('.drop-nav__item:not(.drop-nav__item_group)')[0]) {
                    window.location = link;
                }
            } else {
                window.location = link;
            }

            return false;
        }
    });

    $('.drop-nav__item_group').on('click', function(e) {
        if (windowWidth <= 960) {
            var showing = $(this).parent().hasClass('drop-nav__list_show');

            if (showing) {
                $(this).parent().removeClass('drop-nav__list_show');
                $(this).parent().find('.drop-nav__up').removeClass('drop-nav__up');

            } else {
                e.preventDefault();
                $('.drop-nav__list_show').removeClass('drop-nav__list_show');
                $(this).parent().addClass('drop-nav__list_show');
                $('.drop-nav__up').removeClass('drop-nav__up');
                $(this).addClass('drop-nav__up');

            }
        }
    });

    // sticky cart side

    function stickySide() {
        $('.container__side-scroll').sticky({
            topSpacing: 80,
            bottomSpacing: $('.footer').height() + $('.container__side-scroll').offset().top
        });
    }

    if (windowWidth > 960 && $('.container__side-scroll').get(0)) stickySide();

    $('.description').each(function(i, block) {
        var short = $(block).find('.description__short');
        if ($(short).height() >= 100) {
            $(short).addClass('description__short_gradient');
        }
    });

    init();
})(window);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmlwdC5qcyJdLCJuYW1lcyI6WyJyb290Iiwid2luZG93V2lkdGgiLCIkIiwid2luZG93Iiwid2lkdGgiLCJpbml0IiwiZ2V0IiwiZmlyc3QiLCJ0cmlnZ2VyIiwiZWFjaCIsImkiLCJ0YWJzIiwiY2hpbGRyZW4iLCJ0b2dnbGUiLCJkYXRhIiwicGFyZW50IiwiZmluZCIsImhpZGUiLCJldnQiLCJFdmVudCIsIm0iLCJNYWduaWZpZXIiLCJvbiIsImhhc0NsYXNzIiwidW5zdGljayIsInN0aWNreVNpZGUiLCJkYXRhU2xpZGVycyIsImZlYXV0dXJlcyIsIml0ZW1zIiwibmF2IiwiZ2FsbGVyeSIsImRvdHMiLCJtb3VzZURyYWciLCJyZXNwb25zaXZlIiwicHJvbW8iLCJsb29wIiwiYXV0b3BsYXkiLCJzaG9wIiwiY2VudGVyIiwic2xpZGVyIiwib3dsQ2Fyb3VzZWwiLCJyYW5nZSIsIm1pbklucHV0IiwiY2xvc2VzdCIsIm1heElucHV0IiwidXBkYXRlIiwiZnJvbSIsInRvIiwidmFsIiwiaW9uUmFuZ2VTbGlkZXIiLCJleHRyYV9jbGFzc2VzIiwiaGlkZV9taW5fbWF4IiwiaGlkZV9mcm9tX3RvIiwibWluIiwib3B0aW9ucyIsIm1heCIsInN0ZXAiLCJmaWxsZWQiLCJmaWVsZCIsInRyaW0iLCJsZW5ndGgiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwiZG9jdW1lbnQiLCJ0Iiwic2V0VGltZW91dCIsImUiLCJzdG9wUHJvcGFnYXRpb24iLCJjb250ZW50IiwidG9nZ2xlQ2xhc3MiLCJzdG9wIiwic2xpZGVUb2dnbGUiLCJibG9jayIsImNoZWNrcyIsImFwcGVuZCIsInJlbW92ZSIsInNpYmxpbmdzIiwiZHJvcCIsInRhcmdldCIsInRpcCIsImNzcyIsInNob3ciLCJwcmV2ZW50RGVmYXVsdCIsImhvdmVyIiwiZ0lkIiwidmlkZW8iLCJjbG9uZSIsImh0bWwiLCJpemlNb2RhbCIsImltZyIsImhyZWYiLCJhdHRyIiwiZW1wdHkiLCJhdHRhY2giLCJ0aHVtYiIsImNoaWxkUG9zIiwib2Zmc2V0IiwicGFyZW50UG9zIiwibWFyZ2luIiwibGVmdCIsIm5leHQiLCJsaXN0IiwibGluZSIsIm5leHRBbGwiLCJvbkNsb3NpbmciLCJyIiwiJGVsZW1lbnQiLCJwYXVzZSIsImgiLCJoZWlnaHQiLCJzY3JvbGxUb3AiLCJjYXRhbG9nIiwiQm9vbGVhbiIsInBhcmVudHNVbnRpbCIsImluZGV4IiwiaWQiLCJzY3JvbGxpbmciLCJ0b1RvcCIsInF1ZXJ5U2VsZWN0b3IiLCJhZGRFdmVudExpc3RlbmVyIiwicGFnZVlPZmZzZXQiLCJib2R5IiwiY2xpZW50VG9wIiwiYXBwZW5kVG8iLCJjbGFzc0xpc3QiLCJhZGQiLCJhbmltYXRlIiwidG9wIiwiaGVpZ2h0Qm90dG9tU2Nyb2xsIiwiZWwiLCJsaW5rIiwibG9jYXRpb24iLCJzaG93aW5nIiwic3RpY2t5IiwidG9wU3BhY2luZyIsImJvdHRvbVNwYWNpbmciLCJzaG9ydCJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxDQUFDLFVBQVNBLElBQVQsRUFBZTs7QUFFZjtBQUNBLEtBQUlDLGNBQWNDLEVBQUVDLE1BQUYsRUFBVUMsS0FBVixFQUFsQjs7QUFFQSxVQUFTQyxJQUFULEdBQWdCOztBQUVmLE1BQUlILEVBQUUsVUFBRixFQUFjSSxHQUFkLENBQWtCLENBQWxCLENBQUosRUFBMEI7QUFDekJKLEtBQUUsbUJBQUYsRUFBdUJLLEtBQXZCLEdBQStCQyxPQUEvQixDQUF1QyxPQUF2QztBQUNBOztBQUVETixJQUFFLGFBQUYsRUFBaUJPLElBQWpCLENBQXNCLFVBQVNDLENBQVQsRUFBWUMsSUFBWixFQUFrQjtBQUN2Q1QsS0FBRVMsSUFBRixFQUFRQyxRQUFSLEdBQW1CTCxLQUFuQixHQUEyQkMsT0FBM0IsQ0FBbUMsT0FBbkM7QUFDQSxHQUZEOztBQUlBTixJQUFFLGVBQUYsRUFBbUJPLElBQW5CLENBQXdCLFVBQVNDLENBQVQsRUFBWUcsTUFBWixFQUFvQjtBQUMzQyxPQUFJQyxPQUFPWixFQUFFLElBQUYsRUFBUVksSUFB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QUlkLEVBQUVzSSxLQUFGLEVBQVMzQixNQUFULE1BQXFCLEdBQXpCLEVBQThCO0FBQzdCM0csS0FBRXNJLEtBQUYsRUFBUzNFLFFBQVQsQ0FBa0IsNkJBQWxCO0FBQ0E7QUFDRCxFQUxEOztBQU9BeEQ7QUFHQSxDQXhrQkQsRUF3a0JHRixNQXhrQkgiLCJmaWxlIjoic2NyaXB0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKHJvb3QpIHtcblxuXHQvLyDQmNC90LjRhtC40LDQu9C40LfQsNGG0LjRjyDQv9GA0LjQu9C00L7QttC10L3QuNGPXG5cdHZhciB3aW5kb3dXaWR0aCA9ICQod2luZG93KS53aWR0aCgpO1xuXG5cdGZ1bmN0aW9uIGluaXQoKSB7XG5cblx0XHRpZiAoJCgnLmdhbGxlcnknKS5nZXQoMCkpIHtcblx0XHRcdCQoJy5nYWxsZXJ5X19lbGVtZW50JykuZmlyc3QoKS50cmlnZ2VyKCdjbGljaycpO1xuXHRcdH1cblxuXHRcdCQoJ1tkYXRhLXRhYnNdJykuZWFjaChmdW5jdGlvbihpLCB0YWJzKSB7XG5cdFx0XHQkKHRhYnMpLmNoaWxkcmVuKCkuZmlyc3QoKS50cmlnZ2VyKCdjbGljaycpO1xuXHRcdH0pO1xuXG5cdFx0JCgnLnRvZ2dsZV9jbG9zZScpLmVhY2goZnVuY3Rpb24oaSwgdG9nZ2xlKSB7XG5cdFx0XHR2YXIgZGF0YSA9ICQodGhpcykuZGF0YSgndG9nZ2xlJyk7XG5cblx0XHRcdCQodGhpcykucGFyZW50KCkuZmluZCgnLicrZGF0YSkuaGlkZSgpO1xuXHRcdH0pO1xuXHR9O1xuXG5cdHZhciBldnQgPSBuZXcgRXZlbnQoKSxcbiAgXHRcdG0gPSBuZXcgTWFnbmlmaWVyKGV2dCk7XG5cblx0JCh3aW5kb3cpLm9uKCdyZXNpemUnLCBmdW5jdGlvbigpIHtcblx0XHR3aW5kb3dXaWR0aCA9ICQod2luZG93KS53aWR0aCgpO1xuXG5cdFx0aWYgKHdpbmRvd1dpZHRoIDw9IDk2MCAmJiAkKCcuY29udGFpbmVyX19zaWRlLXNjcm9sbCcpLnBhcmVudCgpLmhhc0NsYXNzKCdzdGlja3ktd3JhcHBlcicpKSB7XG5cdFx0XHQkKCcuY29udGFpbmVyX19zaWRlLXNjcm9sbCcpLnVuc3RpY2soKTtcblx0XHR9IGVsc2UgaWYgKHdpbmRvd1dpZHRoID4gOTYwICYmICQoJy5jb250YWluZXJfX3NpZGUtc2Nyb2xsJykuZ2V0KDApICYmICEkKCcuY29udGFpbmVyX19zaWRlLXNjcm9sbCcpLnBhcmVudCgpLmhhc0NsYXNzKCdzdGlja3ktd3JhcHBlcicpKSB7XG5cdFx0XHRzdGlja3lTaWRlKCk7XG5cdFx0fVxuXHR9KTtcblxuXHQvLyDQodC70LDQudC00LXRgNGLXG5cdHZhciBkYXRhU2xpZGVycyA9IHtcblx0XHRmZWF1dHVyZXM6IHtcblx0XHRcdGl0ZW1zOiA2LFxuXHRcdFx0bmF2OiB0cnVlXG5cdFx0fSxcblx0XHRnYWxsZXJ5OiB7XG5cdFx0XHRpdGVtczogMSxcblx0XHRcdG5hdjogdHJ1ZSxcblx0XHRcdGRvdHM6IHRydWUsXG5cdFx0XHRtb3VzZURyYWc6IGZhbHNlLFxuXHRcdFx0cmVzcG9uc2l2ZToge1xuXHRcdFx0XHQ5NjE6IHtcblx0XHRcdFx0XHRpdGVtczogNCxcblx0XHRcdFx0XHRkb3RzOiBmYWxzZVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRwcm9tbzoge1xuXHRcdFx0aXRlbXM6IDEsXG5cdFx0XHRkb3RzOiB0cnVlLFxuXHRcdFx0bG9vcDogdHJ1ZSxcblx0XHRcdGF1dG9wbGF5OiB0cnVlLFxuXHRcdH0sXG5cdFx0c2hvcDoge1xuXHRcdFx0aXRlbXM6IDEsXG5cdFx0XHRsb29wOiB0cnVlLFxuXHRcdFx0bmF2OiBmYWxzZSxcblx0XHRcdGNlbnRlcjogZmFsc2UsXG5cdFx0XHRyZXNwb25zaXZlOiB7XG5cdFx0XHRcdDY4MDoge1xuXHRcdFx0XHRcdGl0ZW1zOiAzLFxuXHRcdFx0XHRcdGNlbnRlcjogdHJ1ZSxcblx0XHRcdFx0XHRuYXY6IHRydWUsXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQkKCdbZGF0YS1zbGlkZXJdJykuZWFjaChmdW5jdGlvbihpLCBzbGlkZXIpIHtcblx0XHR2YXIgZGF0YSA9ICQodGhpcykuZGF0YSgnc2xpZGVyJyk7XG5cblx0XHQkKHNsaWRlcikub3dsQ2Fyb3VzZWwoZGF0YVNsaWRlcnNbZGF0YV0pXG5cdH0pO1xuXG5cdCQoJy5yYW5nZV9fc2xpZGVyJykuZWFjaChmdW5jdGlvbigpIHtcblx0XHR2YXIgcmFuZ2UgPSB0aGlzLFxuXHRcdFx0XHRtaW5JbnB1dCA9ICQocmFuZ2UpLmNsb3Nlc3QoJy5yYW5nZScpLmZpbmQoJ1tkYXRhLWlucHV0PVwibWluXCJdJyksXG5cdFx0XHRcdG1heElucHV0ID0gJChyYW5nZSkuY2xvc2VzdCgnLnJhbmdlJykuZmluZCgnW2RhdGEtaW5wdXQ9XCJtYXhcIl0nKTtcblxuXHRcdGZ1bmN0aW9uIHVwZGF0ZSgpIHtcblx0XHRcdHZhciBmcm9tID0gJChyYW5nZSkuZGF0YSgnZnJvbScpLFxuXHRcdFx0XHRcdHRvID0gJChyYW5nZSkuZGF0YSgndG8nKTtcblxuXHRcdFx0JChtaW5JbnB1dCkudmFsKGZyb20pO1xuXHRcdFx0JChtYXhJbnB1dCkudmFsKHRvKTtcblx0XHR9XG5cblx0XHQkKHJhbmdlKS5pb25SYW5nZVNsaWRlcih7XG5cdFx0XHRleHRyYV9jbGFzc2VzOiAncmFuZ2VfX3NsaWRlcicsXG5cdFx0XHRoaWRlX21pbl9tYXg6IHRydWUsXG5cdFx0XHRoaWRlX2Zyb21fdG86IHRydWUsXG5cdFx0fSk7XG5cblx0XHR1cGRhdGUoKTtcblx0XHQkKHJhbmdlKS5vbignY2hhbmdlJywgdXBkYXRlKTtcblx0fSk7XG5cblx0JCgnW2RhdGEtaW5wdXRdJykub24oJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciByYW5nZSA9ICQodGhpcykuY2xvc2VzdCgnLnJhbmdlJykuZmluZCgnaW5wdXQucmFuZ2VfX3NsaWRlcicpLmRhdGEoXCJpb25SYW5nZVNsaWRlclwiKSxcblx0XHRcdFx0dmFsID0gJCh0aGlzKS52YWwoKSxcblx0XHRcdFx0bWluID0gcmFuZ2Uub3B0aW9ucy5taW4sXG5cdFx0XHRcdG1heCA9IHJhbmdlLm9wdGlvbnMubWF4LFxuXHRcdFx0XHRmcm9tID0gcmFuZ2Uub3B0aW9ucy5mcm9tLFxuXHRcdFx0XHR0byA9IHJhbmdlLm9wdGlvbnMudG8sXG5cdFx0XHRcdHN0ZXAgPSByYW5nZS5vcHRpb25zLnN0ZXA7XG5cblx0XHRzd2l0Y2ggKCQodGhpcykuZGF0YSgnaW5wdXQnKSkge1xuXHRcdFx0Y2FzZSAnbWluJzpcblx0XHRcdFx0aWYgKHZhbCA8PSBtaW4pIHtcblx0XHRcdFx0XHR2YWwgPSBtaW47XG5cdFx0XHRcdH0gZWxzZSBpZiAodmFsID49IG1heCkge1xuXHRcdFx0XHRcdHZhbCA9IG1heCAtIHN0ZXA7XG5cdFx0XHRcdH0gZWxzZSBpZiAodmFsID49IHRvKSB7XG5cdFx0XHRcdFx0dmFsID0gdG8gLSBzdGVwO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0cmFuZ2UudXBkYXRlKHtcblx0XHRcdFx0XHRmcm9tOiB2YWxcblx0XHRcdFx0fSk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAnbWF4Jzpcblx0XHRcdFx0aWYgKHZhbCA+PSBtYXgpIHtcblx0XHRcdFx0XHR2YWwgPSBtYXg7XG5cdFx0XHRcdH0gZWxzZSBpZiAodmFsIDw9IG1pbikge1xuXHRcdFx0XHRcdHZhbCA9IG1pbiArIHN0ZXA7XG5cdFx0XHRcdH0gZWxzZSBpZiAodmFsIDw9IGZyb20pIHtcblx0XHRcdFx0XHR2YWwgPSBmcm9tICsgc3RlcDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJhbmdlLnVwZGF0ZSh7XG5cdFx0XHRcdFx0dG86IHZhbFxuXHRcdFx0XHR9KTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXG5cdFx0JCh0aGlzKS52YWwodmFsKTtcblxuXHR9KTtcblxuXHQvLyBmaWVsZHNcblx0ZnVuY3Rpb24gZmlsbGVkKGZpZWxkKSB7XG5cdFx0dmFyIHZhbCA9ICQoZmllbGQpLnZhbCgpLnRyaW0oKTtcblxuXHRcdGlmICh2YWwubGVuZ3RoID4gMCkge1xuXHRcdFx0JChmaWVsZCkuY2xvc2VzdCgnLmZpZWxkJykuYWRkQ2xhc3MoJ2ZpZWxkX2ZpbGxlZCcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQkKGZpZWxkKS5jbG9zZXN0KCcuZmllbGQnKS5yZW1vdmVDbGFzcygnZmllbGRfZmlsbGVkJyk7XG5cdFx0fVxuXHR9XG5cblx0JCgnLmZpZWxkIGlucHV0LCAuZmllbGQgdGV4dGFyZWEnKS5lYWNoKGZ1bmN0aW9uKCkge1xuXHRcdGZpbGxlZCh0aGlzKTtcblx0fSk7XG5cblx0JChkb2N1bWVudCkub24oJ2tleWRvd24nLCAnLmZpZWxkIGlucHV0LCAuZmllbGQgdGV4dGFyZWEnLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgdCA9IHRoaXM7XG5cdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdGZpbGxlZCh0KTtcblx0XHR9LCAxMDApXG5cdH0pO1xuXG5cblx0JCgnLnRvZ2dsZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcblx0XHRlLnN0b3BQcm9wYWdhdGlvbigpXG5cdFx0dmFyIGNvbnRlbnQgPSAkKHRoaXMpLnBhcmVudCgpLmZpbmQoJCgnLicrJCh0aGlzKS5kYXRhKCd0b2dnbGUnKSkpO1xuXHRcdCQodGhpcykudG9nZ2xlQ2xhc3MoJ3RvZ2dsZV9jbG9zZScpO1xuXHRcdCQoY29udGVudCkuc3RvcCgpLnNsaWRlVG9nZ2xlKDMwMCk7XG5cdH0pO1xuXG5cdCQoJy5maWx0ZXJfX2Jsb2NrLWNvbnRlbnQnKS5lYWNoKGZ1bmN0aW9uKGksIGJsb2NrKSB7XG5cdFx0dmFyIGNoZWNrcyA9ICQoYmxvY2spLmZpbmQoJy5jaGVja2JveCcpLmxlbmd0aDtcblxuXHRcdGlmIChjaGVja3MgPiA1KSB7XG5cdFx0XHQkKGJsb2NrKS5hZGRDbGFzcygnZmlsdGVyX19ibG9jay1jb250ZW50X21vcmUnKTtcblx0XHRcdCQoYmxvY2spLmFwcGVuZCgnPHNwYW4gY2xhc3M9XCJmaWx0ZXJfX2Jsb2NrLW1vcmVcIj7Qn9C+0LrQsNC30LDRgtGMINCy0YHQtTwvc3Bhbj4nKTtcblx0XHR9XG5cdH0pO1xuXG5cdCQoJy5maWx0ZXJfX2Jsb2NrLW1vcmUnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcblx0XHQkKHRoaXMpLnBhcmVudCgpLnJlbW92ZUNsYXNzKCdmaWx0ZXJfX2Jsb2NrLWNvbnRlbnRfbW9yZScpO1xuXHRcdCQodGhpcykucmVtb3ZlKCk7XG5cdH0pO1xuXG5cdCQoJy5kcm9wX19pdGVtJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG5cdFx0aWYgKCEkKHRoaXMpLmhhc0NsYXNzKCdkcm9wX19pdGVtX2xpbmsnKSkge1xuXHRcdFx0JCh0aGlzKS5hZGRDbGFzcygnZHJvcF9faXRlbV9hY3RpdmUnKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdkcm9wX19pdGVtX2FjdGl2ZScpO1xuXHRcdH1cblxuXHRcdCQodGhpcykuY2xvc2VzdCgnW2RhdGEtZHJvcF0nKS5yZW1vdmVDbGFzcygnZHJvcC1vcGVuJyk7XG5cdH0pO1xuXG5cdCQoZG9jdW1lbnQpLm9uKCdjbGljaycsICdbZGF0YS1kcm9wXScsIGZ1bmN0aW9uKCkge1xuXG5cdFx0dmFyIGRhdGEgPSAkKHRoaXMpLmRhdGEoJ2Ryb3AnKTtcblxuXHRcdGlmIChkYXRhID09ICd0cmlnZ2VyJykge1xuXHRcdFx0JCgnLmRyb3Atb3BlbicpLnJlbW92ZUNsYXNzKCdkcm9wLW9wZW4nKTtcblx0XHRcdCQodGhpcykucGFyZW50KCkuY2xvc2VzdCgnW2RhdGEtZHJvcF0nKS5hZGRDbGFzcygnZHJvcC1vcGVuJyk7XG5cdFx0fSBlbHNlIHJldHVybjtcblxuXHR9KTtcblxuXHQkKGRvY3VtZW50KS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG5cblx0XHR2YXIgZHJvcCA9ICQoZS50YXJnZXQpLnBhcmVudCgpLmNsb3Nlc3QoJ1tkYXRhLWRyb3BdJykuZ2V0KDApLFxuXHRcdFx0XHR0aXAgPSAkKGUudGFyZ2V0KS5wYXJlbnQoKS5jbG9zZXN0KCcudGlwJykuZ2V0KDApO1xuXG5cdFx0aWYgKCQoZS50YXJnZXQpLmhhc0NsYXNzKCdjb3VudGVyX19idG5fcGx1cycpKSByZXR1cm47XG5cblx0XHRpZiAoIWRyb3ApIHtcblx0XHRcdCQoJy5kcm9wLW9wZW4nKS5yZW1vdmVDbGFzcygnZHJvcC1vcGVuJyk7XG5cdFx0fVxuXG5cdFx0aWYgKCF0aXApIHtcblx0XHRcdCQoJy50aXBfX2hpZGVjb250ZW50JykuaGlkZSgpO1xuXHRcdFx0JCgnLmNvbnRhaW5lcl9fbWFpbicpLmNzcygnei1pbmRleCcsICcnKTtcblx0XHR9XG5cblx0fSlcblxuXHQkKCcuZGVzY3JpcHRpb25fX3Nob3cnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcblx0XHQkKHRoaXMpLmhpZGUoKTtcblx0XHQkKCcuZGVzY3JpcHRpb25fX3Nob3J0JykuaGlkZSgpO1xuXHRcdCQoJy5kZXNjcmlwdGlvbl9fYWxsJykuc2hvdygpO1xuXHR9KTtcblxuXHQkKCdbZGF0YS1jbG9zZV0nKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdFx0JCh0aGlzKS5wYXJlbnQoKS5oaWRlKCk7XG5cdFx0JCh0aGlzKS5jbG9zZXN0KCcuY2FyZCcpLmNzcygnei1pbmRleCcsICcnKTtcblx0fSk7XG5cblx0JCgnLnRpcF9fbmFtZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuXHRcdCQoJy50aXAnKS5jc3MoJ3otaW5kZXgnLCAnJyk7XG5cdFx0JCgnLmNvbnRhaW5lcl9fbWFpbicpLmNzcygnei1pbmRleCcsICczJyk7XG5cdFx0JCgnLmNhcmQnKS5jc3MoJ3otaW5kZXgnLCAnJyk7XG5cdFx0JCgnLnRpcF9faGlkZWNvbnRlbnQnKS5oaWRlKCk7XG5cdFx0JCh0aGlzKS5wYXJlbnQoKS5maW5kKCcudGlwX19oaWRlY29udGVudCcpLnNob3coKTtcblx0XHQkKHRoaXMpLmNsb3Nlc3QoJy5jYXJkJykuY3NzKCd6LWluZGV4JywgJzInKTtcblx0XHQkKHRoaXMpLmNsb3Nlc3QoJy50aXAnKS5jc3MoJ3otaW5kZXgnLCAnOScpO1xuXHR9KTtcblxuXHQkKCcudGlwX2hvdmVyJykuaG92ZXIoZnVuY3Rpb24oKSB7XG5cdFx0JCh0aGlzKS5maW5kKCcudGlwX19oaWRlY29udGVudCcpLnNob3coKTtcblx0fSwgZnVuY3Rpb24oKSB7XG5cdFx0JCgnLnRpcF9faGlkZWNvbnRlbnQnKS5oaWRlKCk7XG5cdH0pO1xuXG5cdC8vIEdhbGxlcnlcblx0dmFyIGdJZCA9IDA7XG5cblx0JCgnLmdhbGxlcnlfX2VsZW1lbnQnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcblxuXHRcdGlmICgkKHRoaXMpLmhhc0NsYXNzKCdnYWxsZXJ5X19lbGVtZW50X3ZpZGVvJykpIHtcblx0XHRcdHZhciB2aWRlbyA9ICQodGhpcykuZmluZCgndmlkZW8nKS5jbG9uZSgpO1xuXG5cdFx0XHQkKCcubW9kYWxfem9vbSAubW9kYWxfX2NvbnRlbnQnKS5odG1sKHZpZGVvKTtcblxuXHRcdFx0JCgnLm1vZGFsX3pvb20nKS5pemlNb2RhbCgnb3BlbicpO1xuXG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBpbWcgPSAkKHRoaXMpLmZpbmQoJ2ltZycpLmNsb25lKCksXG5cdFx0XHRcdFx0aHJlZiA9ICQoaW1nKS5hdHRyKCdzcmMnKTtcblxuXHRcdFx0JChpbWcpLmF0dHIoe1xuXHRcdFx0XHQnaWQnOiAndGh1bWInK2dJZCxcblx0XHRcdFx0J2RhdGEtbGFyZ2UtaW1nLXVybCc6IGhyZWYsXG5cdFx0XHRcdCdkYXRhLWxhcmdlLWltZy13cmFwcGVyJzogJ3ByZXZpZXcnXG5cdFx0XHR9KTtcblxuXHRcdFx0JCh0aGlzKS5jbG9zZXN0KCcuZ2FsbGVyeScpLmZpbmQoJy5nYWxsZXJ5X192aWV3JykuYXR0cignaHJlZicsIGhyZWYpLmVtcHR5KCkuYXBwZW5kKGltZyk7XG5cblx0XHRcdCQodGhpcykuY2xvc2VzdCgnLmdhbGxlcnlfX2xpc3QnKS5maW5kKCcuZ2FsbGVyeV9fZWxlbWVudF9hY3RpdmUnKS5yZW1vdmVDbGFzcygnZ2FsbGVyeV9fZWxlbWVudF9hY3RpdmUnKTtcblx0XHRcdCQodGhpcykuYWRkQ2xhc3MoJ2dhbGxlcnlfX2VsZW1lbnRfYWN0aXZlJyk7XG5cblx0XHRcdCQoJy5nYWxsZXJ5X19wcmV2aWV3JykuZW1wdHkoKTtcblx0XHRcdG0uYXR0YWNoKHt0aHVtYjogJyN0aHVtYicrZ0lkfSk7XG5cblx0XHRcdHZhciBjaGlsZFBvcyA9ICQoaW1nKS5vZmZzZXQoKTtcblx0XHRcdHZhciBwYXJlbnRQb3MgPSAkKGltZykucGFyZW50KCkub2Zmc2V0KCk7XG5cdFx0XHR2YXIgbWFyZ2luID0gY2hpbGRQb3MubGVmdCAtIHBhcmVudFBvcy5sZWZ0O1xuXG5cdFx0XHQkKGltZykubmV4dCgpLmNzcygnbWFyZ2luLWxlZnQnLCBtYXJnaW4rJ3B4JylcblxuXHRcdFx0Z0lkKys7XG5cblx0XHRcdCQoJy5nYWxsZXJ5X192aWV3IGltZycpLmhvdmVyKGZ1bmN0aW9uKCkge1xuXHRcdFx0XHQkKCcuZ2FsbGVyeV9fcHJldmlldycpLmFkZENsYXNzKCdnYWxsZXJ5X19wcmV2aWV3X2hvdmVyJyk7XG5cdFx0XHR9LCBmdW5jdGlvbigpIHtcblx0XHRcdFx0JCgnLmdhbGxlcnlfX3ByZXZpZXcnKS5yZW1vdmVDbGFzcygnZ2FsbGVyeV9fcHJldmlld19ob3ZlcicpO1xuXHRcdFx0fSk7XG5cblx0XHR9XG5cblx0fSk7XG5cblx0JCgnLnZsaXN0X2Z1bGwnKS5lYWNoKGZ1bmN0aW9uKGksIGxpc3QpIHtcblx0XHR2YXIgc2hvdyA9ICQobGlzdCkuZGF0YSgnc2hvdycpLFxuXHRcdFx0XHRsaW5lID0gJChsaXN0KS5maW5kKCcudmxpc3RfX2xpbmU6bm90KC52bGlzdF9fbGluZV9oZWFkKScpLmdldChzaG93KTtcblxuXHRcdCQobGluZSkuaGlkZSgpLm5leHRBbGwoJzpub3QoLnZsaXN0X19saW5lX21vcmUpJykuaGlkZSgpO1xuXHR9KTtcblxuXHQkKCcudmxpc3RfX21vcmUnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcblx0XHQkKHRoaXMpLmNsb3Nlc3QoJy52bGlzdCcpLnRvZ2dsZUNsYXNzKCd2bGlzdF9hbGxzaG93Jyk7XG5cdH0pO1xuXG5cdC8vIE1vZGFsXG5cblx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHQkKCdbZGF0YS1tb2RhbF0nKS5pemlNb2RhbCh7XG5cdFx0XHRvbkNsb3Npbmc6IGZ1bmN0aW9uKHIpe1xuXHRcdFx0XHR2YXIgdmlkZW8gPSByLiRlbGVtZW50LmZpbmQoJ3ZpZGVvJykuZ2V0KDApO1xuXG5cdFx0XHRcdGlmICh2aWRlbykge1xuXHRcdFx0XHRcdHZpZGVvLnBhdXNlKCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9KTtcblx0fSwgMSlcblxuXG5cdCQoJ1tkYXRhLW9wZW5dJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblxuXHRcdHZhciBtID0gJCh0aGlzKS5kYXRhKCdvcGVuJyk7XG5cdFx0JCgnW2RhdGEtbW9kYWw9JyttKyddJykuaXppTW9kYWwoJ29wZW4nKTtcblx0fSk7XG5cblxuXHQkKCcuZ2FsbGVyeV9fdmlldywgLnNob3BfX3NsaWRlJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblxuXHRcdHZhciBpbWcgPSAkKHRoaXMpLmZpbmQoJ2ltZycpLmNsb25lKCk7XG5cblx0XHQkKCcubW9kYWxfem9vbSAubW9kYWxfX2NvbnRlbnQnKS5odG1sKGltZylcblxuXHRcdCQoJy5tb2RhbF96b29tJykuaXppTW9kYWwoJ29wZW4nKTtcblx0fSk7XG5cblxuXHQkKCcuZmlsdGVyLXRvZ2dsZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuXHRcdCQoJy5maWx0ZXIgLnRvZ2dsZTpub3QoLnRvZ2dsZV9jbG9zZSknKS50cmlnZ2VyKCdjbGljaycpO1xuXHRcdCQoJy5maWx0ZXInKS50b2dnbGUoKTtcblx0fSk7XG5cblx0JCgnLm0tbWVudV9fdG9nZ2xlJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG5cdFx0aWYgKCEkKCcucGFnZScpLmhhc0NsYXNzKCdwYWdlX2ZyZWV6ZScpKSB7XG5cdFx0XHRjb25zdCBoID0gJCgnLm0tbWVudV9fY29udGVudCcpLmhlaWdodCgpO1xuXHRcdFx0JCgnLnBhZ2UnKS5hZGRDbGFzcygncGFnZV9mcmVlemUnKS5jc3MoJ2hlaWdodCcsIGgrJ3B4Jyk7XG5cdFx0XHQkKCdodG1sLGJvZHknKS5jc3MoJ292ZXJmbG93LXgnLCAnaGlkZGVuJyk7XG5cblx0XHR9IGVsc2Uge1xuXHRcdFx0JCgnLnBhZ2UnKS5yZW1vdmVDbGFzcygncGFnZV9mcmVlemUnKS5jc3MoJ2hlaWdodCcsICcnKTtcblx0XHRcdCQoJ2h0bWwsYm9keScpLmNzcygnb3ZlcmZsb3cnLCAnJyk7XG5cdFx0fTtcblxuXHRcdCQod2luZG93KS5zY3JvbGxUb3AoMCk7XG5cblx0XHQkKCcubS1tZW51X19jb250ZW50JykudG9nZ2xlKCk7XG5cdH0pO1xuXG5cdCQoJy5tLW1lbnVfX2l0ZW1fZHJvcCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcblx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xuXG5cdFx0dmFyIGRyb3AgPSAkKHRoaXMpLmZpbmQoJy5tLW1lbnVfX2Ryb3AnKS5maXJzdCgpLFxuXHRcdFx0XHRjYXRhbG9nID0gQm9vbGVhbigkKHRoaXMpLmNsb3Nlc3QoJy5tLW1lbnVfX2Ryb3BfY2F0YWxvZycpLmdldCgwKSkgfHwgQm9vbGVhbigkKHRoaXMpLmZpbmQoJy5tLW1lbnVfX2Ryb3BfY2F0YWxvZycpLmdldCgwKSk7XG5cblx0XHRpZiAoJChlLnRhcmdldCkucGFyZW50c1VudGlsKCcubS1tZW51X19pdGVtX2Ryb3AnKS5sZW5ndGggPD0gMSkge1xuXHRcdFx0JChkcm9wKS50b2dnbGVDbGFzcygnbS1tZW51X19kcm9wX3Nob3cnKTtcblxuXHRcdFx0aWYgKCFjYXRhbG9nKSB7XG5cdFx0XHRcdGNvbnN0IGggPSAkKCcubS1tZW51X19jb250ZW50JykuaGVpZ2h0KCk7XG5cdFx0XHRcdCQoJy5wYWdlJykuY3NzKCdoZWlnaHQnLCBoKTtcblx0XHRcdFx0cmV0dXJuXG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IGggPSAkKGRyb3ApLmNsb3Nlc3QoJy5tLW1lbnVfX2Ryb3BfY2F0YWxvZycpLmhlaWdodCgpO1xuXHRcdFx0JCgnLnBhZ2UnKS5jc3MoJ2hlaWdodCcsIGgpO1xuXHRcdH1cblxuXHR9KTtcblxuXHQkKCcubS1tZW51X19iYWNrJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuXHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cblx0XHQkKHRoaXMpLmNsb3Nlc3QoJy5tLW1lbnVfX2Ryb3Bfc2hvdycpLnJlbW92ZUNsYXNzKCdtLW1lbnVfX2Ryb3Bfc2hvdycpO1xuXG5cdFx0Y29uc3QgaCA9ICQoJy5tLW1lbnVfX2NvbnRlbnQnKS5oZWlnaHQoKTtcblx0XHQkKCcucGFnZScpLmNzcygnaGVpZ2h0JywgaCk7XG5cdFx0cmV0dXJuXG5cdH0pO1xuXG5cdCQoJ1tkYXRhLXRhYnNdID4gKicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHR2YXIgZGF0YSA9ICQodGhpcykucGFyZW50KCkuZGF0YSgndGFicycpLFxuXHRcdFx0XHRpbmRleCA9ICQodGhpcykuaW5kZXgoKSxcblx0XHRcdFx0Y29udGVudCA9ICQoJ1tkYXRhLXRhYnMtY29udGVudD0nK2RhdGErJ10nKS5jaGlsZHJlbigpLmdldChpbmRleCk7XG5cblx0XHQkKGNvbnRlbnQpLnNob3coKS5zaWJsaW5ncygpLmhpZGUoKTtcblxuXHRcdGlmICghY29udGVudCkge1xuXHRcdFx0JCgnW2RhdGEtdGFicy1jb250ZW50PScrZGF0YSsnXScpLmNoaWxkcmVuKCkuaGlkZSgpO1xuXHRcdH1cblxuXHRcdCQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuXHR9KTtcblxuXHQkKCcudmlkZW8nKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgaWQgPSAkKHRoaXMpLmRhdGEoJ2lkJyk7XG5cblx0XHQkKCcjJytpZCkuaXppTW9kYWwoJ29wZW4nKTtcblx0fSk7XG5cblx0JCgnLmNoZWNrYm94IGlucHV0Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuXHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cblx0XHQkKHRoaXMpLmNsb3Nlc3QoJy5jaGVja2JveCcpLnRvZ2dsZUNsYXNzKCdjaGVja2JveF9hY3RpdmUnKTtcblx0fSk7XG5cblx0dmFyIHNjcm9sbGluZyxcblx0XHRcdHRvVG9wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvLXRvcCcpO1xuXG5cdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGZ1bmN0aW9uKGUpIHtcblx0XHQgc2Nyb2xsaW5nID0gKHdpbmRvdy5wYWdlWU9mZnNldCB8fCBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCkgIC0gKGRvY3VtZW50LmJvZHkuY2xpZW50VG9wIHx8IDApO1xuXG5cdFx0IGlmICgkKGUudGFyZ2V0KS5jbG9zZXN0KCcucmVzdWx0cycpLmdldCgwKSkgcmV0dXJuO1xuXG5cdFx0IGlmICgkKHdpbmRvdykud2lkdGgoKSA+IDk2MCkge1xuXHRcdFx0IGlmIChzY3JvbGxpbmcgPj0gMjAwKSB7XG5cdFx0XHRcdCAkKCcuaGVhZGVyX19maXgnKS5hZGRDbGFzcygnaGVhZGVyX19maXhfc2hvdycpO1xuXHRcdFx0XHQgJCgnLnJlc3VsdHMnKS5hcHBlbmRUbygnLmhlYWRlcl9fZml4IC5zZWFyY2gnKTtcblx0XHRcdCB9IGVsc2UgaWYgKCQoJy5oZWFkZXJfX2ZpeCcpLmhhc0NsYXNzKCdoZWFkZXJfX2ZpeF9zaG93JykpIHtcblx0XHRcdFx0ICQoJy5oZWFkZXJfX2ZpeCcpLnJlbW92ZUNsYXNzKCdoZWFkZXJfX2ZpeF9zaG93Jyk7XG5cdFx0XHRcdCAkKCcucmVzdWx0cycpLmFwcGVuZFRvKCcuaGVhZGVyX19ib2R5IC5zZWFyY2gnKTtcblx0XHRcdCB9XG5cdFx0IH0gZWxzZSB7XG5cdFx0XHQgaWYgKHNjcm9sbGluZyA+PSAzMSAmJiAhJCgnLnBhZ2UnKS5oYXNDbGFzcygncGFnZV9mcmVlemUnKSkge1xuXHRcdFx0XHQgJCgnLmhlYWRlcl9fbW9iaWxlJykuYWRkQ2xhc3MoJ2hlYWRlcl9fbW9iaWxlX2ZpeCcpO1xuXHRcdFx0IH0gZWxzZSBpZiAoJCgnLmhlYWRlcl9fbW9iaWxlJykuaGFzQ2xhc3MoJ2hlYWRlcl9fbW9iaWxlX2ZpeCcpKSB7XG5cdFx0XHRcdCAkKCcuaGVhZGVyX19tb2JpbGUnKS5yZW1vdmVDbGFzcygnaGVhZGVyX19tb2JpbGVfZml4Jyk7XG5cdFx0XHQgfVxuXG5cdFx0IH1cblxuXHRcdCBpZiAoc2Nyb2xsaW5nID49IDEwMDAgJiYgd2luZG93V2lkdGggPiA5NjApIHtcblx0XHRcdCB0b1RvcC5jbGFzc0xpc3QuYWRkKCd0by10b3Bfc2hvdycpO1xuXHRcdCB9IGVsc2Uge1xuXHRcdFx0IHRvVG9wLmNsYXNzTGlzdC5yZW1vdmUoJ3RvLXRvcF9zaG93Jyk7XG5cdFx0IH1cblx0fSwgdHJ1ZSk7XG5cblx0JCgnLnRvLXRvcCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuXHRcdCQoXCJodG1sLCBib2R5XCIpLnN0b3AoKS5hbmltYXRlKHtzY3JvbGxUb3A6MH0sIDUwMCwgJ3N3aW5nJyk7XG5cdH0pO1xuXG5cdCQoJy5jb3VudGVyX19idG5fcGx1cycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHQkKCcuY2FyZCcpLmNzcygnei1pbmRleCcsICcnKTtcblxuXHRcdCQoJy50aXBfX2hpZGVjb250ZW50JykuaGlkZSgpO1xuXHRcdCQoJy50aXAnKS5jc3MoJ3otaW5kZXgnLCAnJyk7XG5cdFx0JCh0aGlzKS5wYXJlbnQoKS5maW5kKCcudGlwX19oaWRlY29udGVudCcpLmZpcnN0KCkuc2hvdygpO1xuXHRcdCQodGhpcykuY2xvc2VzdCgnLmNhcmQnKS5jc3MoJ3otaW5kZXgnLCAnNScpO1xuXHRcdCQodGhpcykucGFyZW50KCkuZmluZCgnLnRpcCcpLmNzcygnei1pbmRleCcsICc5Jyk7XG5cblx0XHRpZiAoJCgnLmNvbnRhaW5lcl9fc2lkZScpLmdldCgwKSkge1xuXHRcdFx0JCgnLmNvbnRhaW5lcl9fbWFpbicpLmNzcygnei1pbmRleCcsICczJyk7XG5cdFx0fVxuXHR9KTtcblxuXHQvLyBzZWFyY2hcblx0JCgnLnNlYXJjaF9fZmllbGQgaW5wdXQnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcblx0XHQkKHRoaXMpLmNsb3Nlc3QoJy5zZWFyY2gnKS5hZGRDbGFzcygnc2VhcmNoX2ZvY3VzJyk7XG5cdFx0JCgnLnBhZ2UnKS5hcHBlbmQoJzxkaXYgY2xhc3M9XCJmYWRlLWJnXCI+PC9kaXY+Jyk7XG5cdH0pO1xuXG5cdCQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuZmFkZS1iZycsIGZ1bmN0aW9uKGUpIHtcblx0XHQkKCcuc2VhcmNoJykucmVtb3ZlQ2xhc3MoJ3NlYXJjaF9mb2N1cycpO1xuXHRcdCQodGhpcykucmVtb3ZlKClcblx0fSk7XG5cblx0JCgnYnV0dG9uLmJ0biwgLmNvdW50ZXJfX2J0biwgLmNsb3NlJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0fSlcblxuXHQkKCdhW2hyZWZePVwiI1wiXScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0dmFyIGlkID0gJCh0aGlzKS5hdHRyKCdocmVmJyk7XG5cblx0XHR0cnkge1xuXHRcdFx0JCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xuXHRcdFx0XHRzY3JvbGxUb3A6ICQoaWQpLm9mZnNldCgpLnRvcCArICQoJ2JvZHknKS5zY3JvbGxUb3AoKSAtIDgwXG5cdFx0XHR9LCAxMDAwKTtcblx0XHR9IGNhdGNoIChlKSB7fVxuXG5cdH0pO1xuXG5cdCQoJy5kcm9wIC5jbG9zZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcblxuXHRcdCQodGhpcykuY2xvc2VzdCgnLmRyb3Atb3BlbicpLnJlbW92ZUNsYXNzKCdkcm9wLW9wZW4nKTtcblx0fSlcblxuXHR2YXIgaGVpZ2h0Qm90dG9tU2Nyb2xsID0gMDtcblxuXHQkKCcucGFnZV9fY29udGVudCcpLm5leHRBbGwoKS5lYWNoKGZ1bmN0aW9uKGksIGVsKSB7XG5cdFx0aGVpZ2h0Qm90dG9tU2Nyb2xsICs9ICQoZWwpLmhlaWdodCgpO1xuXHR9KTtcblxuXHQvLyBuYXYgaW5kZXggYWRhcHRpdmUgbWVudSBwYWdlXG5cblx0JCgnLmNhdGFsb2ctbmF2X19pdGVtJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuXHRcdGlmICh3aW5kb3dXaWR0aCA8PSA5NjApIHtcblxuXHRcdFx0dmFyIHQgPSAkKGUudGFyZ2V0KS5wYXJlbnQoKVswXTtcblxuXHRcdFx0aWYgKCEkKHQpLmhhc0NsYXNzKCdkcm9wLW5hdl9faXRlbV9ncm91cCcpKVx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdFx0XHRjb25zdCBkcm9wID0gJChlLnRhcmdldCkuY2xvc2VzdCgnbGknKS5maW5kKCcuZHJvcC1uYXYnKVswXSB8fCAkKGUudGFyZ2V0KS5jbG9zZXN0KCcuZHJvcC1uYXZfX2xpc3RfZHJvcCcpWzBdLFxuXHRcdFx0XHRcdFx0bGluayA9ICQoZS50YXJnZXQpLmNsb3Nlc3QoJy5jYXRhbG9nLW5hdl9faXRlbS13cmFwJykuZmluZCgnYScpLmF0dHIoJ2hyZWYnKSB8fCAkKGUudGFyZ2V0KS5jbG9zZXN0KCdsaScpLmZpbmQoJ2EnKS5hdHRyKCdocmVmJyk7XG5cblx0XHRcdGlmIChkcm9wKSB7XG5cdFx0XHRcdGlmICgkKGRyb3ApLmhhc0NsYXNzKCdkcm9wLW5hdl9zaG93JykpIHtcblx0XHRcdFx0XHQkKGRyb3ApLnJlbW92ZUNsYXNzKCdkcm9wLW5hdl9zaG93Jyk7XG5cdFx0XHRcdH0gZWxzZSBpZiAoISQoZHJvcCkuaGFzQ2xhc3MoJ2Ryb3AtbmF2X19saXN0Jykpe1xuXHRcdFx0XHRcdCQoZHJvcCkuYWRkQ2xhc3MoJ2Ryb3AtbmF2X3Nob3cnKTtcblx0XHRcdFx0fSBlbHNlIGlmICgkKGUudGFyZ2V0KS5jbG9zZXN0KCcuZHJvcC1uYXZfX2l0ZW06bm90KC5kcm9wLW5hdl9faXRlbV9ncm91cCknKVswXSl7XG5cdFx0XHRcdFx0d2luZG93LmxvY2F0aW9uID0gbGluaztcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0d2luZG93LmxvY2F0aW9uID0gbGluaztcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIGZhbHNlXG5cblx0XHR9XG5cdH0pO1xuXG5cdCQoJy5kcm9wLW5hdl9faXRlbV9ncm91cCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcblx0XHRpZiAod2luZG93V2lkdGggPD0gOTYwKSB7XG5cdFx0XHRjb25zdCBzaG93aW5nID0gJCh0aGlzKS5wYXJlbnQoKS5oYXNDbGFzcygnZHJvcC1uYXZfX2xpc3Rfc2hvdycpXG5cblx0XHRcdGlmIChzaG93aW5nKSB7XG5cdFx0XHRcdCQodGhpcykucGFyZW50KCkucmVtb3ZlQ2xhc3MoJ2Ryb3AtbmF2X19saXN0X3Nob3cnKVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHQkKCcuZHJvcC1uYXZfX2xpc3Rfc2hvdycpLnJlbW92ZUNsYXNzKCdkcm9wLW5hdl9fbGlzdF9zaG93Jylcblx0XHRcdFx0JCh0aGlzKS5wYXJlbnQoKS5hZGRDbGFzcygnZHJvcC1uYXZfX2xpc3Rfc2hvdycpXG5cdFx0XHR9XG5cdFx0fVxuXHR9KTtcblxuXHQvLyBzdGlja3kgY2FydCBzaWRlXG5cblx0ZnVuY3Rpb24gc3RpY2t5U2lkZSgpIHtcblx0XHQkKCcuY29udGFpbmVyX19zaWRlLXNjcm9sbCcpLnN0aWNreSh7XG5cdFx0XHR0b3BTcGFjaW5nOiA4MCxcblx0XHRcdGJvdHRvbVNwYWNpbmc6ICQoJy5mb290ZXInKS5oZWlnaHQoKSArICQoJy5jb250YWluZXJfX3NpZGUtc2Nyb2xsJykub2Zmc2V0KCkudG9wXG5cdFx0fSk7XG5cdH1cblxuXHRpZiAod2luZG93V2lkdGggPiA5NjAgJiYgJCgnLmNvbnRhaW5lcl9fc2lkZS1zY3JvbGwnKS5nZXQoMCkpIHN0aWNreVNpZGUoKTtcblxuXHQkKCcuZGVzY3JpcHRpb24nKS5lYWNoKGZ1bmN0aW9uKGksIGJsb2NrKSB7XG5cdFx0dmFyIHNob3J0ID0gJChibG9jaykuZmluZCgnLmRlc2NyaXB0aW9uX19zaG9ydCcpO1xuXHRcdGlmICgkKHNob3J0KS5oZWlnaHQoKSA+PSAxMDApIHtcblx0XHRcdCQoc2hvcnQpLmFkZENsYXNzKCdkZXNjcmlwdGlvbl9fc2hvcnRfZ3JhZGllbnQnKTtcblx0XHR9XG5cdH0pXG5cblx0aW5pdCgpO1xuXG5cbn0pKHdpbmRvdyk7XG4iXX0=