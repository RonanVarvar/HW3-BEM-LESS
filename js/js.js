$(function(){
    $('.c-menu__button').hover(function(){
        $(this).find('ul')
        .stop(true, true).slideToggle('fast');
    });
});