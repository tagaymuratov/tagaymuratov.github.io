$(document).ready(function(){
    $('.menuIcon').on('click tap', function(){
        $(this).toggleClass('menuIcon_b');
        if($('.nav2').is(':visible')) $('nav').slideUp(250);
        else $('.nav2').slideDown(250);
    });

    $('.nav2item').on('click tap', function(){
        $('.menuIcon').click()
    });
});