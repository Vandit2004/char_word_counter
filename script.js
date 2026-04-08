let input = document.querySelector(".input")
let submit = document.querySelector(".submit")
let countcharacter = document.querySelector(".countCharacter")
let countword = document.querySelector(".countWord")
let warning = document.querySelector(".warning")
function countWord(str){
    let words = str.split(" ")
    let count = 0
    for(let i of words){
        count++
    }
    return count
}
function countCharacter(str){
    let words = str.split(" ")
    let count = 0
    for(let i of words){
        let word = i 
        for(let j of word){
            count++
        }
    }
    return count
}
submit.addEventListener("click",function(){
    let str = input.value
    let resultWord = countWord(str)
    let resultCharacter = countCharacter(str)
    countword.innerHTML = `countWord : ${resultWord}`
    countcharacter.innerHTML = `countCharacter : ${resultCharacter}`
     if(resultCharacter > 200){
        warning.innerHTML = "❌ Limit Exceeded"
        warning.style.color = "red"
    }
    else if(resultCharacter > 180){
        warning.innerHTML = "⚠ Near Limit"
        warning.style.color = "orange"
    }
    else{
        warning.innerHTML = "✅ Within Limit"
        warning.style.color = "green"
    }
})
