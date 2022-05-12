let card1 = document.querySelector("#card1")
let card2 = document.querySelector("#card2")
let card3 = document.querySelector("#card3")
let card4 = document.querySelector("#card4")
let score = document.querySelector("#score")

card1.addEventListener("click", function(){
    card1.src = "./img/apple.jpg"
    console.log("works")
}
)

card2.addEventListener("click", function(){
    card2.src = "./img/Banana.jpg"
    console.log("works")
}
)

card3.addEventListener("click", function(){
    card3.src = "./img/Banana.jpg"
    console.log("works")
}
)

card4.addEventListener("click", function(){
    card4.src = "./img/apple.jpg"
    console.log("works")
}
)

if(card1.src == "./img/apple.jpg" && card4.src == "./img/apple.jpg"){
    score.append("50")
    console.log("hi")
}

