$('.panel-heading').click(function(){
    $(this).toggleClass('active').next().slideToggle();
    $('.panel-heading').not(this).removeClass('active').next().slideUp();
})