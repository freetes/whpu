{
    let height = "360px"
    let pic = {
        position : 1,
        speed : 3000
    }
    let picDiv = $("#picChange");
    let picY;
    
    function picCg(){
        picY = parseFloat(picDiv.css("top"));
        picY = picY-parseFloat(height)+'px';
        pic.position++;
        if(pic.position <= 5)
            picDiv.animate({top:picY},1000);
        else{
            pic.position = 1;
            picDiv.animate({top:0},1000);
            picY = parseFloat(picDiv.css("top"));
            picY = picY-parseFloat(height)+'px';
        }
    }

    let loop = setInterval(picCg,pic.speed);
    
    /*
    * By requestAnimationFrame()
    */
    /*
    function animate(time) {
        picCg();
        window.requestNextAnimationFrame(animate(5000));
    }
    window.requestNextAnimationFrame(animate(5000));
    */
}