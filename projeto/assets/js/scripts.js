$(()=>{
    $(window).scroll(()=>{
        if($('#navbar').offset().top > 0){
            $('#navbar').addClass('nav-flying');
            $('.nav-item').css('color', '#000')
            $('.login').css('color', '#000')
        }else{
            $('#navbar').removeClass('nav-flying');
            $('.nav-item').css('color', '#fff')
            $('.login').css('color', '#fff')
        }
        console.log();
    });
});