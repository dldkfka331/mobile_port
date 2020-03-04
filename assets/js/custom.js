$(function(){    
    //로딩
    let mainText = $(".main_tit > h1").text().split('').join("</span><span>");
    mainText ="<span>"+ mainText +"</span>";
    $(".main_tit > h1").html(mainText);
    $(".main_tit > h1").find("span").each(function(index){
        setTimeout(function(){
            $(".main_tit > h1").find("span").eq(index).show();
        },100*(index+1));
    });
    setTimeout(function(){
        $(".main_box > div").each(function(index){
            setTimeout(function(){
                $(".main_box > div").eq(index).show();
                $(".main_box > div").eq(-index).show();
            },100*(index+1));
        });    
        setTimeout(function(){
            $(".main_row").fadeIn();
        },2500);
    }, 3000);

    //메인 화살표
    setInterval(down,1000);
    function down(){
        $(".main .main_row").animate({bottom : "5%"},500, 'easeInCubic');
        $(".main .main_row").animate({bottom : "8%"},500,'easeOutCubic');
    };

    //메인 텍스트 지워지기    
    $(".main .main_box .mb_text").mousemove(function(){
        $(this).css("display","none")
    }); 

    //햄버거메뉴
    $(".ham").click(function(){
        $(this).toggleClass("click");
        $(".nav").toggleClass("click");
    });
    $("a[href^='#']").on("click",function(){
        let target = $($(this).attr("href"));
        if(target.length){
          $("html, body").animate({scrollTop: target.offset().top},600,"easeInOutExpo")
        }
      });
    
    //깜빡임
    setInterval(function(){
        $('.who_text_about p.who_click').toggleClass('twink');
        $('.histort_bg .history_text p').toggleClass('twink');
    },500);
    

    //곰
    let bear = $('.history_img');
    setInterval(function(){
        bear.toggleClass('rotate');
    },500);
    
    
    
      //slick
      $('.mobile_list').slick({
        infinite: true,
        centerMode: true,
        centerPadding: '150px',
        slidesToShow: 1
       });

    //기록
    if($(".me_suchi span").is( ":visible" ) ){
        $('.counter').counterUp({
            delay: 100, 
            time: 1500 
        });
    };
    
    //contact
    let conText = $(".contact_tit > h1").text().split('').join("</span><span>");
    conText ="<span>"+ conText +"</span>";
    $(".contact_tit > h1").html(conText);
    
    $(window).scroll(function(){
        let wScroll = $(window).scrollTop();
        let conTop = $('.contact_tit').offset().top;
        console.log(wScroll)
        console.log(conTop)
        if(wScroll >= conTop-100){    
            $(".contact_tit > h1").find("span").each(function(index){
                setTimeout(function(){
                    $(".contact_tit > h1").find("span").eq(index).show();
                },100*(index+1));
            });
        }
   
            
    })
     

});