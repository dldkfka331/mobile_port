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

      //slick
      $('.web_list').slick({
        infinite: true,
      });
              

});