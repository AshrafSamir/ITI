/**
 * async--->
 * Timers
 * Events
 * Ajax
 * ---running web API--event loop ---main stack
 */
// var myPromise = new Promise(function(success,failure){

//     var xhr = new XMLHttpRequest()
//     xhr.open('GET','https://jsonplaceholder.typicode.com/users')
//     xhr.onreadystatechange = function(){
//         if(xhr.readyState == 4){
//             if(xhr.status == 200){
//                 success(xhr.responseText)
//             }
//             else{
//                 failure("Error")
//             }
//         }
//     }
//     xhr.send('')
// }).then(function(data){
//     var obj = JSON.parse(data)


//     console.log(obj)
// }).catch(function(msg){
//     console.log(msg)
// })

 function fun(){
    // async function fun(){
    
var x =10
var y = 10
var myPromise1 = new Promise(function(resolve,reject){

    if(x==10){
        setTimeout(()=>{
            resolve('success1')
        },5000)
    }
    else{
        reject('fail1')
    }
})
var myPromise2 = new Promise(function(resolve,reject){

    if(y==1){
        setTimeout(()=>{
            resolve('success2')
        },2000)
    }
    else{
        reject('fail2')
    }
})

// await myPromise1

// myPromise1.then(function(data){console.log(data)}).catch(function(data){console.log(data)})
// myPromise2.then(function(data){console.log(data)}).catch(function(data){console.log(data)})
Promise.all([myPromise1,myPromise2])
.then(function(){
    console.log('Done')
})
.catch(function(){
    console.log('try again')
})
}


fun()