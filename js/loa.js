$(document).ready(function(){
    $("a").click(function(e){
        e.preventDefault();
    })
    $(".header_sub_r, .sub").hide();

    $(".header_menu > li, .header_sub_r").hover(function(){
        $(".header_sub_r, .sub").stop().slideDown("fast");
    },function(){
        $(".header_sub_r, .sub").stop().slideUp("fast");
    })

    $(".start a").click(function(){
        alert("게임이 실행중입니다.");
    })

    $(".mainslide_box a").click(function(){
        $(".mainslide_box a").removeClass("btn_act");
        $(this).addClass("btn_act");

    })

    $(".slide_img a").eq(0).siblings().hide();
})