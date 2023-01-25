export function add(x,y){
    return x+y
}

export function sub(x,y){
    return x-y
}

const pi=3.14

function calcCircleArea(r){
    return pi*(r**2)
}

export class  User{

    // var addrr="123"//XXXXXXXXXError
    abc = 10
    #userName//private
    constructor(nm,id){
        if(this.constructor== User){
            throw 'Abstract Class'
        }
        this.userId = id//public
        this.#userName = nm
    }

    get UserName(){
        return this.#userName
    }

    set UserName(val){
        this.#userName = val
    }

    display(){
        return `your name ${this.#userName} 
        your id ${this.userId}`
    }

    static fun(){
        return 'abc'
    }

    static key ="10"

    toString(){
        return `${this.#userName}`
    }
}
