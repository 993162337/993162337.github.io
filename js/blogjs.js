
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


    var topBack1 = document.getElementById("back_top");
    var timer1 = null;
    var timeValue1 = true;

    window.onscroll = function(){
        if(!timeValue1){
            clearInterval(timer1);
        }
        timeValue1 = false;
    }

    topBack1.onclick = function(){
        timer1 = setInterval(function(){
            var osTop1 = document.documentElement.scrollTop||document.body.scrollTop;
            var osSpeed1 = Math.floor(-osTop/4);
            document.documentElement.scrollTop=document.body.scrollTop = osTop1 + osSpeed1 ;
            //console.log(osTop - osSpeed);
            timeValue1 = true;
            if(osTop1==0){
                clearInterval(timer1);
            }
        },30)
    }
}

