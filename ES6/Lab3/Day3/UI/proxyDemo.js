var obj = { 
    x:10,
    y:20
}

var handler={
    set(target,prop,value){
        if(target.hasOwnProperty(prop)){
            if(value >0 && value <30){
                target[prop]=value
            }
            else{
                throw 'error invalid range'
            }
        }
        else{
            throw 'non existing property'
        }
    },
    get(target,prop){
        if(target.hasOwnProperty(prop)){
            return target[prop]
        }
        else{
            throw 'invalid Property'
        }
    }

}

var myProxy = new Proxy(obj,handler)
// myProxy.x=50
// myProxy.z =10
console.log(myProxy.x)