function sum(x,y){
    if(isFinite(x) && isFinite(y)){

        return x+y;
    }else{
        throw new TypeError("nums only")
    }
}
function convertToArray(x,y,z){
    return [x,y,z]
}
function checkPositivity(x){
    if(x>0){
        return true
    }else{
        return false
    }
}
module.exports = {sum,convertToArray,checkPositivity}