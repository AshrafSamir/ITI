const fs = require('fs')
const http = require('http')

const server = http.createServer((req, res) => {
    if(req.url !== '/favicon.ico') {
        let inputs = req.url.split('/')
        let operator = inputs[1]
        let numbers = inputs.slice(2)
        let result = 0
        switch(operator) {
            case 'add':
                result = add(...numbers)
                break
            case 'sub':
                result = sub(...numbers)
                break
            case 'mul':
                result = mul(...numbers)
                break
            case 'div':
                result = div(...numbers)
                break
            default:
                result = 'Invalid Operator'
                break
        }

        res.write("<h1> Result: "+result.toString()+"</h1>")
        fs.writeFileSync('result.txt', "Result: " + result.toString() + "\n")

    }
    res.end()   
}).listen(7000)

let add = (...inputs) => {
    let sum = 0
    inputs.forEach((input) => {
        sum += Number.parseInt(input)
    })
    return sum
}
let sub = (...inputs) => {
    let sum = 0
    inputs.forEach((input) => {
        sum -= Number.parseInt(input)
    })
    return sum
}
let mul = (...inputs) => {
    let sum = 1
    inputs.forEach((input) => {
        sum *= Number.parseInt(input)
    })
    return sum
}
let div = (...inputs) => {
    console.log(inputs)
    let sum = Number.parseInt(inputs[0])
    for(let i =1; i<inputs.length; i++) {
        sum /= Number.parseInt(inputs[i])
    }
    return sum
}