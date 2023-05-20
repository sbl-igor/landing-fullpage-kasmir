let arrHeaders = [
    'Lorem ipsum!', 
    'Lorem ipsum!', 
    'Lorem ipsum dolor sit amet!',
];

let arrParagraphs = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non felis non at tristique. Est ante magna diam magna pharetra. Turpis sagittis consectetur est, integer sed. Sagittis malesuada tellus diam sapien platea.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non felis non at tristique. Est ante magna diam magna pharetra. Turpis sagittis consectetur est, integer sed. Sagittis malesuada tellus diam sapien platea.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non felis non at tristique. Est ante magna diam magna pharetra. Turpis sagittis consectetur est, integer sed. Sagittis malesuada tellus diam sapien platea.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non felis non at tristique. Est ante magna diam magna pharetra. Turpis sagittis consectetur est, integer sed. Sagittis malesuada tellus diam sapien platea.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non felis non at tristique. Est ante magna diam magna pharetra. Turpis sagittis consectetur est, integer sed. Sagittis malesuada tellus diam sapien platea.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non felis non at tristique. Est ante magna diam magna pharetra. Turpis sagittis consectetur est, integer sed. Sagittis malesuada tellus diam sapien platea.!',
]

jQuery(function(){

    function addAnimationNumber(selector, animationSelector) {
        $(selector).removeClass(animationSelector);
        setTimeout(() => {
            $(selector).addClass(animationSelector);
        }, 5)
    }

    function deleteAnimationNumber(selector, animationSelector) {
    }

    $('.sidebar__button-elem').click(function() {
        if ($('.section-menu__counter-p').text() === '01') {
            $('.section-menu__main-info-p').css({'overflow-y': 'scroll'});
            addAnimationNumber('.sidebar__slider-text-up', 'sidebar__slider-text-up_animation');
            addAnimationNumber('.section-menu__counter-p', 'section-menu__counter-p_animation');
            $('.sidebar__slider-option-scroll').css({'top': '20%'});
            $('.section-menu__main-info-h3').text(arrHeaders[0]);
            $('.section-menu__main-info-p').text(arrParagraphs[0])
            $('.section-menu__counter-p').text('02');
            $('.sidebar__slider-text-up').text('02');
        } else if ($('.section-menu__counter-p').text() === '02') {
            $('.section-menu__main-info-p').css({'overflow-y': 'scroll'});
            addAnimationNumber('.sidebar__slider-text-up', 'sidebar__slider-text-up_animation');
            addAnimationNumber('.section-menu__counter-p', 'section-menu__counter-p_animation');
            $('.sidebar__slider-option-scroll').css({'top': '40%'});
            $('.section-menu__main-info-h3').text(arrHeaders[1]);
            $('.section-menu__main-info-p').text(arrParagraphs[1])
            $('.section-menu__counter-p').text('03');
            $('.sidebar__slider-text-up').text('03');
        } else if ($('.section-menu__counter-p').text() === '03') {
            $('.section-menu__main-info-p').css({'overflow-y': 'hidden'});
            addAnimationNumber('.sidebar__slider-text-up', 'sidebar__slider-text-up_animation');
            addAnimationNumber('.section-menu__counter-p', 'section-menu__counter-p_animation');
            $('.sidebar__slider-option-scroll').css({'top': '0'});
            $('.section-menu__main-info-h3').text(arrHeaders[2]);
            $('.section-menu__main-info-p').text(arrParagraphs[2]);
            $('.section-menu__counter-p').text('01');
            $('.sidebar__slider-text-up').text('01');
        }
    })
})