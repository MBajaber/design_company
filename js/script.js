/*global $, alert, console*/

$(function(){
    
    "use strict";
    
//    Trigger Nice Scroll
    
    $("body").niceScroll({
        cursorcolor:"#f7600e",
        cursorwidth:"10px",
        cursorborder:"1ps solid #f7600e"
    });

//  Loader on Page

    $(window).on("load",function(){
    
        $(".cont-losder").fadeOut(1000)
        
    });


//      Right Side On Click

    $(".right-side ul li").on("click",function(){
    
        $("body, html").animate({
            
            scrollTop: $("." + $(this).data("click")).offset().top
            
        },1000)
        
        $(this).parents(".right-side").fadeOut(500);
    });


//      Menu On Click 


    $(".menu").click(function(){
    
        $(".right-side").slideToggle(1000)
        
    
    });
    
//      Header Height On Window    
    
    $(".header").height($(window).height());
    
    
//      click on Chevro Down on header
    
    $(".arrow .fa-chevron-down").on("click",function(){
    
        $("html,body").animate({
        
            scrollTop: $(".feature").offset().top
            
        },1000)
    });
    
//      click on Hire Button    
    
    $(".hire").on("click",function(){
        
        $("html,body").animate({
        
            scrollTop: $(".our-team").offset().top
            
        },1000)
        
    });
    
    
//      Button Show More On Click
    
    
    $(".show-more").on("click",function(){
    
       if($(this).text() === "show more"){
       
        $(".our-work .items-box .hidden").slideDown(1000)
        
        $(this).text("show less")
        
       }else if($(this).text() === "show less"){
       
            $(".our-work .items-box .hidden").slideUp(1000)
        
            $(this).text("show more")
        }
        
    });
    

//      Start Testimonia
    
    var leftArrow = $(".testim .over .fa-chevron-left");
    var rightArrow = $(".testim .over .fa-chevron-right");
    
    function checkTesti(){
        
        $(".testim .over .client:first").hasClass("active") ? leftArrow.fadeOut() : leftArrow.fadeIn();    
        
        $(".testim .over .client:last").hasClass("active") ?  rightArrow.fadeOut() : rightArrow.fadeIn();
        
    }
    
    checkTesti();
    
    $(".testim i").on("click",function(){
        
        if($(this).hasClass("fa-chevron-right")){
        
            $(".testim .active").fadeOut(200,function(){
            
                $(this).removeClass("active").next(".client").addClass("active").fadeIn();
                
                checkTesti();
            })
            
        }else{
                $(".testim .active").fadeOut(200,function(){
            
                $(this).removeClass("active").prev(".client").addClass("active").fadeIn();
                
                checkTesti();
            });
        }
    });
    
    
//      Start Our Team    
    
    $(".our-team .team-group .team").on("click",function(){
    
        $(this).addClass("active").siblings().removeClass("active");
        
        if($(".our-team .team-group .team").eq(0).hasClass("active")){
            
            $(".ul-bullets li").eq(0).addClass("active").siblings().removeClass("active");
        
        }else if($(".our-team .team-group .team").eq(1).hasClass("active")){
        
            $(".ul-bullets li").eq(1).addClass("active").siblings().removeClass("active");
        
        }
        
        else if($(".our-team .team-group .team").eq(2).hasClass("active")){
        
            $(".ul-bullets li").eq(2).addClass("active").siblings().removeClass("active");
            
        }else if($(".our-team .team-group .team").eq(3).hasClass("active")){
        
            $(".ul-bullets li").eq(3).addClass("active").siblings().removeClass("active");
        }
        
    });
    
    $(".ul-bullets li").on("click",function(){
    
        $(this).addClass("active").siblings().removeClass("active");
        
        
        if($(".ul-bullets li:eq(0)").hasClass("active")){
        
            $(".our-team .team-group .team:eq(0)").addClass("active").siblings().removeClass("active");
            
            
        }else if($(".ul-bullets li:eq(1)").hasClass("active")){
            
            $(".our-team .team-group .team:eq(1)").addClass("active").siblings().removeClass("active");
            
        
        }else if($(".ul-bullets li:eq(2)").hasClass("active")){
            
            $(".our-team .team-group .team:eq(2)").addClass("active").siblings().removeClass("active");
            
            
        }else if($(".ul-bullets li:eq(3)").hasClass("active")){

        $(".our-team .team-group .team:eq(3)").addClass("active").siblings().removeClass("active");
        
        }
    });
    
});