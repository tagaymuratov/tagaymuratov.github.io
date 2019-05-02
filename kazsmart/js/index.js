$(document).ready(function(){
    $('.menuIcon').click(function(){
        $(this).toggleClass('menuIcon_b');
        if($('.nav2').is(':visible')) $('nav').slideUp(250);
        else $('.nav2').slideDown(250);
    });

    $('.nav2item').click(function(){
        $('.menuIcon').click()
    });
});