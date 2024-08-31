

const changeby=document.getElementById('changeby');

let count = 0;

function increment() {

    count++;

    document.getElementById('counter').innerText = count;
}

function decrement() {
    if (document.getElementById('counter').innerText == 0) {
        document.getElementById('counter').innerText = 0 
    } else {
        count--
        document.getElementById('counter').innerText = count;
    }
}

function reset(){
    count=0
    document.getElementById('counter').innerText=count;
}