let id = 1;
let int;
let flag = 0;
function next(){
    if(id<6){
        id++;
        document.getElementById("img").src = "SlideShow/"+id+".jpg";
    }
}
function previuos(){
    if(id>1){
        id--;
        document.getElementById("img").src = "SlideShow/"+id+".jpg";
    }
}

function slideShow(){


    int = setInterval(function(){
        if(id<6){
            id++;
            document.getElementById("img").src = "SlideShow/"+id+".jpg";
        }
        else{
            id=1;
            document.getElementById("img").src = "SlideShow/"+id+".jpg";
        }
    },1000);
}

function stop(){
    clearInterval(int);
}