// JavaScript Document\
    $(document).ready(function () {
        $("div.card div.card-body div a").hover(function(){
           $(this).css({"color":"#1F415D"}); 
        },function(){
            $(this).css({"color":"#3E83BB"});
        });
        $("#button-menu a").hover(function(){
           $(this).css({"backgroundImage":"linear-gradient(to right,#3EA4A1 , #9181D8)","color":"white"}); 
        },function(){
            $(this).css({"backgroundImage":"none","color":"#474747"});
        });
                    var xxx=true;
        $(window).resize(function(){
           if(window.innerWidth>767){
               $("#lt-menu").animate({"left":"0%"});
            $("#down-menu").animate({"left":"0%"});
            $("#ul-down").animate({"left":"0%"});
                $("#lt-menu1").css({"position":"fixed"});
           }else if(window.innerWidth<767){
               $("#lt-menu").css({"left":"-100%"});
            $("#ul-down").css({"left":"-100%"});
               $("#lt-menu1").css({"position":"fixed","height":"260px","backgroundImage":"linear-gradient(to right,#56BFBC , #A99BE4)"});
           } 
        });
        $("#xsmenu").click(function(){
            if(xxx==true){
                $("#lt-menu").css({"left":"0px"});
                $("#ul-down").css({"left":"0px"});
                $("#lt-menu1").css({"position":"relative","height":"0px","backgroundImage":"none"});
                //$("#top-menu1").css({"top":"-10px"});
                xxx=false;
                console.log(window.innerWidth);
            }else{
                $("#lt-menu").css({"left":"-100%"});
            $("#ul-down").css({"left":"-100%"});
                $("#lt-menu1").css({"position":"fixed","height":"260px","backgroundImage":"linear-gradient(to right,#56BFBC , #A99BE4)"});
                //$("#top-menu1").css({"top":"0px"});
                xxx=true;
            }
        });
        $("#down-menu ul.col-lg-2").mouseover(function() {
            $("#down-menu ul.col-lg-2").niceScroll().resize();
        });
        $("#down-menu ul.col-lg-2").scroll(function() {
            $("#down-menu ul.col-lg-2").niceScroll().resize();
        });
        $("#task-drop").mouseover(function() {
            $("#task-drop").niceScroll().resize();
        });
        $("#note-drop").mouseover(function(){
            $("#note-drop").niceScroll().resize();
        });
        $('.dropdown-toggle').dropdown(); 
        $("#menu-cir").css({"top":window.innerHeight, "left":"92%"});
        $("#menu-cir").animate({"top":window.innerHeight-100},600,"swing");
       $(window).resize(function() {
        $("#menu-cir").css({"top":window.innerHeight-50});
           
       });
        $("#menu-cir").hover(function() {
            $( ".d1" ).stop();
            $(".center-align").css({"display":"flex"});
            $("div#menu-cir div.text-center").css({"display":"block"});
        $("#menu-cir").css({"top":window.innerHeight-100});
          $( ".d1" ).animate({
            width: "30px",
            height: "30px",
              fontSize:"12px"
          }, 700, function() {
              
          });
                },function(){
            $( ".d1" ).stop();
            $( ".d1" ).animate({
            width: "0px",
            height: "0px",
            fontSize:"0px"
          }, 700, function() {
        $(".center-align").css({"display":"none"});
         $("div#menu-cir div.text-center").css({"display":"none"});
          });
        });
        $(".center-align").hover(function() {
            var thisdiv=$(this);
            console.log(thisdiv.inex);
            var y=parseInt(thisdiv.css('top'));
            console.log(y);
            $("#divv").remove();
            var x=$("<div id='divv'></div>").text(thisdiv.attr('id')).css({"position":"absolute","right":"350%","display":"none","zIndex":"99999","color":"white","backgroundColor":"#4E4B4B","width":"400%","height":"30px","borderRadius":"20px","opacity":"0.7"});
            thisdiv.append(x);
            $("#divv").hide().fadeIn(300);
        },function(){
            var thisdiv=$(this);
            $("#divv").fadeOut(600);
        }
         );
        $("#down-menu ul li").not(":eq(0)").click(function(){
            
        $( this ).animate({
          backgroundColor: "#212020"
        }, 500,'linear').animate({backgroundColor: "#353434"},300,'linear');
      
      
        });
    });