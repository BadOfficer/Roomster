$(document).ready(function () {
    
    $('.search').click(function () {
        $('.search__area').css('top', '0');
    })
    $('.search__close, .search__button').click(function () {
        $('.search__area').css('top', '-100%');
    })

    const swiper1 = new Swiper('.about__slider', {
        autoplay: {
            delay: 5000,
        },
        loop: true,
        effect: 'cards',
        cardsEffect: {
            slideShadows: false,
        },
    });
    const swiper2 = new Swiper('.collections__tabs-slider', {
        loop: true,
        effect: 'cards',
        cardsEffect: {
            slideShadows: false,
        },
    });
    const swiper3 = new Swiper('.comments__slider', {
        loop: true,
    });


    tabs_list = document.querySelectorAll('.collections__item');
    tabs_item = document.querySelectorAll('.collections__tabs-page');

    tabs_list.forEach(function (tab, tabIndex) {
        tab.addEventListener('click', function () {
            tabs_list.forEach(function (tab) {
                tab.classList.remove('active');
            })
            tab.classList.add('active');

            tabs_item.forEach(function (content, contentIndex) {
                if (contentIndex == tabIndex) {
                    content.style.display = 'block';
                }
                else {
                    content.style.display = 'none';
                }
            })
        })
    })
})
