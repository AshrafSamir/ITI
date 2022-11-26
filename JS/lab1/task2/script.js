var input = NULL;
var sum;
var flag = 1;

do{
    input = prompt("Enter number")    
    if(((input == 0) || (sum >= 100)) )flag = 0;
    sum+=input    
    
}while(flag)

alert("asd")


//&& (typeof input == Number)