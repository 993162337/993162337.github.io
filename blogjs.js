
window.onload = function(){
    var topBack = document.getElementById("back");
    var timer = null;
    var timeValue = true;

    window.onscroll = function(){
        if(!timeValue){
            clearInterval(timer);
        }
        timeValue = false;
    }

    topBack.onclick = function(){
        timer = setInterval(function(){
            var osTop = document.documentElement.scrollTop||document.body.scrollTop;
            var osSpeed = Math.floor(-osTop/4);
            document.documentElement.scrollTop=document.body.scrollTop = osTop + osSpeed ;
            //console.log(osTop - osSpeed);
            timeValue = true;
            if(osTop==0){
                clearInterval(timer);
            }
        },30)
    }
}