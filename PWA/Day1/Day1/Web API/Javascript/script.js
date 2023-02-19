var timer;
document.getElementById('btn').onclick = function(){
    var counter = 0
    timer = setInterval(function(){
        document.getElementById('sp1').innerHTML += counter + ","
        counter++
    },1000)
}

document.getElementById('btn1').onclick = function(){
    clearInterval(timer)
}

var myWorker = new Worker('../Javascript/workerScript.js')

document.getElementById('btn2').onclick = function(){
    var val1 = document.getElementById('txt1').value
    var val2 = document.getElementById('txt2').value
    myWorker.postMessage([val1,val2])
}

myWorker.onmessage = function(event){
    console.log(event.data)
    document.getElementById('sp2').innerHTML = event.data[0]
}