let imgnum = 0;
let int;

function stop(){
    clearInterval(int);
}
function move(){
    int = setInterval(function (){
        if(imgnum>3){
            imgnum = 0;
            document.images[3].src ="marbels/marble1.jpg"
        }
    
        document.images[imgnum].src ="marbels/marble3.jpg"
    
        if(imgnum > 0) {
            document.images[imgnum-1].src ="marbels/marble1.jpg"
        } 
        
        imgnum++;
    }, 1000);

}

move();