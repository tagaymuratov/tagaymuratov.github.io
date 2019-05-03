$(document).ready(function(){
    $(document).on('click','.menuIcon',function(e){
        e.preventDefault();
        $('.menuIcon').toggleClass('menuIcon_b');
        if($('.nav2').is(':visible')) $('nav').slideUp(250);
        else $('.nav2').slideDown(250);
    });

    $(document).on('click','.nav2item',function(e){
        e.preventDefault();
        $('.menuIcon').toggleClass('menuIcon_b');
        $('.nav2').slideUp(250);
    });
    
    /*$('.menuIcon').on('click touchend', function(){
        $(this).toggleClass('menuIcon_b');
        if($('.nav2').is(':visible')) $('nav').slideUp(250);
        else $('.nav2').slideDown(250);
    });

    $('.nav2item').on('click', function(){
        $('.menuIcon').click()
    });*/
});