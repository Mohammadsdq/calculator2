let display = document.querySelector(".display");
let list = document.querySelectorAll(".list");
let clAll = document.querySelector(".clear-all");
let clLast = document.querySelector(".clear-last");
let result = document.querySelector(".result");

function showDisplay(e) {
    const x = e.target.innerText;
    if (display.innerText == 0) {
        return display.innerText = x;
    }
    return display.innerText += x;
}

function lastcleared() {
    const text = display.innerText;
    if(text.length == 1) {
        display.innerText = 0;
    } else {
        display.innerText = text.substring(0, text.length -1);
    }
}

clLast.addEventListener("click", lastcleared);

clAll.addEventListener("click", function(){
    display.innerText = 0;
});

result.addEventListener("click", function(){
    const resulted = display.innerText;
    display.innerText = eval(resulted);
});

list.forEach(item => {
    item.addEventListener("click", showDisplay);
});