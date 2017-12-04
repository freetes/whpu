{
    let pic = {
        position : 0,
        speed : 3000,
        urls : ["url('imgs/bg/1.jpg')","url('imgs/bg/2.jpg')","url('imgs/bg/3.jpg')","url('imgs/bg/4.jpg')","url('imgs/bg/5.jpg')"]
    }
    let sh=setInterval(allChange,parseInt(pic.speed));

    $("#buttonLeft").click(function(){
        clearInterval(sh);
        if(pic.position>0) 
            pic.position -= 1;
        else 
            pic.position = 4;
        dotSet(pic.position);
        imgSet();
        if(pic.position==0) 
            pic.position=5;
        sh=setInterval(allChange,parseInt(pic.speed));
    })

    $("#buttonRight").click(function(){
        clearInterval(sh);
        if(pic.position<4) 
            pic.position += 1;
        else 
            pic.position = 0;
        dotSet(pic.position);
        imgSet();
        if(pic.position==4) 
            pic.position=-1;
        sh=setInterval(allChange,parseInt(pic.speed));
    })

    $(".dot").click(function(){
        clearInterval(sh);
        if($(this).attr("class") == "dot d1") 
            pic.position=0;
        else if($(this).attr("class") == "dot d2") 
            pic.position=1;
        else if($(this).attr("class") == "dot d3") 
            pic.position=2;
        else if($(this).attr("class") == "dot d4") 
            pic.position=3;
        else 
            pic.position=4;
        dotSet(pic.position);
        imgSet();
        if(pic.position==4) 
            pic.position=-1;
        sh=setInterval(allChange,parseInt(pic.speed));
    })
    
    //FUNCTIONS
    function imgSet(){
        $("#imgMain").css("background-image",pic.urls[pic.position]);
    }
    function dotSet(n){
        n += 1;
        let id = ".d" + n;
        $(".dot").css("opacity","0.2");
        $(id).fadeTo(100,0.9);
    }
    function allChange(){
        pic.position += 1;
        $("#imgMain").css("background-image",pic.urls[pic.position]);
        dotSet(pic.position);
        if(pic.position>=4) 
            pic.position=-1;
    }
}