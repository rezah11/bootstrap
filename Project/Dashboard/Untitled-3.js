// JavaScript Document
$(document).ready(function(){
   var d=[];
    var combovalue = $('select').find(":selected").text();
    $("#search").val("");
    var inpvalue= $("#search").val();
    $.getJSON('list.json',function(data){
		d = data.PatiantList;
		//console.log(d[0]);
        loadpage(combovalue,inpvalue);
	});
        // console.log(combovalue);
    function loadpage(comval,inpval){
        $('tbody').children('tr').remove();
       // $("ul.pagination li:nth-child(n+3):not(:last-of-type)").remove();
        //loadtbl(dat);
        for (var i=0 ; i< d.length ;i++){
           /* if ((i+2)>d.length{return;}
                else{
                var li=$("<li />");
                    //.attr("href","#")
                var a=$("<a />").text(i+2 );
                    li.append(a);
                $('ul.pagination').find(' > li:last-of-type').before(li);
                 }*/
            for(var z=0 ; z<1 ;z++){
                var tr=$("<tr />");
                //console.log(d[z].name);
                $.each(d[i], function(key,value){
                    var td=$("<td />").text(value);
                    tr.append(td);
                    $("tbody").append(tr);
                });
                $.each($('tbody tr'),
        function(i, val) {
                    for (var cnt=1;cnt<7;cnt++){
                        //console.log(cnt);
                        var customerId = $(this).find("td:nth-of-type(" + cnt +")"); 
                            if ($(customerId).text().indexOf(inpval) != 0) {
                                $('tbody tr').eq(i).hide();
                            } else {
                                $('tbody tr').eq(i).show();
                                break;
                                //var z=$('tbody tr').eq(i).length;
                            } 
                    }
                });
                //console.log(rowcount);
            }
            }
        var rowcount=$('tbody tr:visible').length;
            loadtbl(rowcount);
                /**/
    }
    $('select').bind('change',function() {
        var x=$(this).find("option:selected").text();
        $("ul.pagination li").removeClass("active");
        var inpvalu= $("#search").val();
        $("ul.pagination li").eq(1).addClass("active");
        loadpage(x,inpvalu);
    });
    function loadtbl(rowcnt){
        var combovalue = $('select').find(":selected").text();
        var indexpageact=$("ul.pagination").find(".active").index();
        //console.log(indexpageact+"index1");
        console.log(rowcnt);
        if (rowcnt<=combovalue){
            $("ul.pagination li:nth-child(n+3):not(:last-of-type)").remove();
            $("ul.pagination li").eq(1).addClass("active");
            
        }else{
            $("ul.pagination li:nth-child(n+3):not(:last-of-type)").remove();
            //console.log(indexpageact +"is");
            //console.log(rowcnt);
             //$("ul.pagination li").removeClass("active");
            //console.log(Math.ceil(lengt/combovalue));
            for (var z=0 ; z< Math.ceil(rowcnt/combovalue)-1;z++){
                var li=$("<li />");
                    //.attr("href","#")
                var a=$("<a />").text(z+2 );
                    li.append(a);
                if(z+2 === indexpageact){
                    li.addClass("active");
                }
                $('ul.pagination').find(' > li:last-of-type').before(li);
            }
              //  $('tbody tr').not(':eq('+i+')').hide();
                //$("#myTable tr").filter(function() {
            var ii= (combovalue * indexpageact)-combovalue;
            //console.log(ii);
            //$('.table tbody tr').filter(function(){
                    //for (var i=ii ; i<(combovalue*indexpageact) ;i++){
                      //$(".table tbody").find('tr:nth-child(n+'+(combovalue*indexpageact+1)+')').hide();
                        $(".table tbody").find('tr:visible').each(function(index, tr) {
                            if(!(index>=ii) || !(index<combovalue * indexpageact)) {
                            $(tr).hide();
                            }
                        });
                    //}
               // });
            //$(".table tbody").find(':not tr.sssss').css({"display":"none"});
            ///$(".table tbody tr").removeClass("sssss");
            //console.log(i+"aaa");
               // });
                
            
        }
        /*var x=$("ul.pagination").find(".active").index();
        var ii=(x*z)-z;
        $('tbody').children('tr').remove();
        for(var i=ii; i<z*x ;i++){
           // console.log(i);
            for(var m=0 ; m<1 ;m++){
                var tr=$("<tr />");
                $.each(d[i], function(key,value){
                    var td=$("<td />").text(value);
                    tr.append(td);
                    $("tbody").append(tr);
                });
            }
        }*/
    }
   /* $("ul.pagination li").click(function(){
   var combovalue = $('select').find(":selected").text();
        console.log("3333");
        $("ul.pagination li").removeClass("active");
        $(this).addClass("active");
    });*/
    $(document).on('click','ul.pagination li:not(:first, :last)',function() {
        var comboval = $('select').find(":selected").text();
        $("ul.pagination li").removeClass("active");
        $(this).addClass("active");
        var inpal= $("#search").val();
        loadpage(comboval,inpal);
});
    $("ul.pagination li.next").click(function(){
        var x=$("ul.pagination").find("li.active");
                var nextt=x.next().not(":last-child").length ? x.next() : $("ul.pagination li:nth-child(n+2)");
                var z=nextt.index();
                console.log(z);
                $("ul.pagination li").removeClass("active");
                nextt.not(":last-child").addClass("active");
                var inpal= $("#search").val();
                var comboval = $('select').find(":selected").text();
        loadpage(comboval,inpal);
                console.log(nextt.index());
    });
    $("ul.pagination li.previous").click(function(){
        var x=$("ul.pagination").find("li.active");
        var y=$("ul.pagination li:last-of-type").index();

                var nextt=x.prev().not(":first-child").length ? x.prev() : $("ul.pagination").find("li:nth-of-type(" + y +")");
                var z=nextt.index();
                console.log(z);
                $("ul.pagination li").removeClass("active");
                nextt.not(":first-child").addClass("active");
                var inpal= $("#search").val();
                var comboval = $('select').find(":selected").text();
        loadpage(comboval,inpal);
                console.log(y+"ind");
    });
    $(document).on('keyup','#search',function() {
        var inputvalue= $(this).val();
        var comvalue = $('select').find(":selected").text();
        $("ul.pagination li").removeClass("active");
        $("ul.pagination li:nth-of-type(2)").addClass("active");
        $("tbody").children().show();
        loadpage(comvalue,inputvalue);
        /*var x= $(this).val();
        console.log(x);
        $.each($('tbody tr'),
    function(i, val) {
        if ($(val).text().indexOf(x) == -1) {
            $('tbody tr').eq(i).hide();
        } else {
            $('tbody tr').eq(i).show();
            //var z=$('tbody tr').eq(i).length;
            console.log($('tbody tr:visible').length);
        }
    });*/
    });
});