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
            $(".main_row").fadeIn();
        },2500);


    //메인 화살표
    setInterval(down,1000);
    function down(){
        $(".main .main_row").animate({bottom : "5%"},500, 'easeInCubic');
        $(".main .main_row").animate({bottom : "8%"},500,'easeOutCubic');
    };

});