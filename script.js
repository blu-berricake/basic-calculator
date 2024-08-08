const screenEl = document.getElementById("screen")
const equalEl = document.getElementById("equal")
const signsEl = document.getElementsByClassName("sign")
const clearEl = document.getElementById("clear")
const numEl = document.getElementsByClassName("num")

let operation = ""
let operationState = false
let firstNo = 0
let secondNo = 0

screenEl.textContent = firstNo

function equationStart(sign) {
    if (operationState === false) {
        screenEl.innerHTML += "<span class='operation'>"+sign+"</span>"
        operation = sign
        operationState = true
    }
}

function noPress(number){
    if (operationState === true) {
        screenEl.innerHTML += number
        secondNo = secondNo * 10 + number
    }else {
        firstNo = firstNo * 10 + number
        screenEl.innerHTML = firstNo
    }
}


equalEl.addEventListener("click", function() {
    if (operation === "+") {
        screenEl.innerHTML = firstNo + secondNo
        firstNo = 0
        secondNo = 0
        operationState = false
        operation = ""
    }else if(operation === "-"){
        screenEl.innerHTML = firstNo - secondNo
        firstNo = 0
        secondNo = 0
        operationState = false
        operation = ""
    }else if(operation === "/"){
        sum = firstNo / secondNo
        screenEl.innerHTML = Math.round(sum * 1000000)/1000000
        firstNo = 0
        secondNo = 0
        operationState = false
        operation = ""
    }else if (operation === "*"){
        screenEl.innerHTML = firstNo * secondNo
        firstNo = 0
        secondNo = 0
        operationState = false
        operation = ""
    }
    
})

clearEl.addEventListener("click", function(){
    firstNo = 0
    secondNo = 0
    operationState = false
    operation = ""
    screenEl.innerHTML = 0
})

signsEl[0].addEventListener("click", function(){equationStart("+")})
signsEl[1].addEventListener("click", function(){equationStart("*")})
signsEl[2].addEventListener("click", function(){equationStart("-")})
signsEl[3].addEventListener("click", function(){equationStart("/")})

numEl[0].addEventListener("click", function(){noPress(7)})
numEl[1].addEventListener("click", function(){noPress(8)})
numEl[2].addEventListener("click", function(){noPress(9)})
numEl[3].addEventListener("click", function(){noPress(4)})
numEl[4].addEventListener("click", function(){noPress(5)})
numEl[5].addEventListener("click", function(){noPress(6)})
numEl[6].addEventListener("click", function(){noPress(1)})
numEl[7].addEventListener("click", function(){noPress(2)})
numEl[8].addEventListener("click", function(){noPress(3)})
numEl[9].addEventListener("click", function(){noPress(0)})