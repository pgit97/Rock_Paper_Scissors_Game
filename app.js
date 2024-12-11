let choices = document.querySelectorAll(".choice")
let message=document.querySelector("#msg")
let userPoints=document.querySelector(".user-score")
let comPoints=document.querySelector(".comp-score")
let userValue=0,compValue=0

const compChoise = () => {
    const options = ["rock", "paper", "scissor"]
    //Math.random() generate value less than 0, when we multiply with any no. will get less than multiple value
    randIndx = Math.floor(Math.random() * 3)
    return options[randIndx]
}
const matchDraw = () => {
    console.log("match draw");
    message.innerText="Match draw! Play Again"
    message.style.backgroundColor="#071f4f"
}
const winner=(winVal,userSelected,compSelected)=>{
    if(winVal){
        console.log("you win");
        message.innerText=`You win! Your ${userSelected} beats ${compSelected}`;
        message.style.backgroundColor="green"
        userValue++
        userPoints.innerText=userValue
    }
    else{
        console.log("you loose")
        message.innerText=`You loose! Your ${userSelected} beat by ${compSelected}`
        message.style.backgroundColor="red"
        compValue++
        comPoints.innerText=compValue
    }
}
const playGame = (userSelected) => {
    console.log("user choose: ", userSelected)
    compSelected = compChoise()
    console.log("Computer choose: ", compSelected)

    if (userSelected === compSelected) {
        matchDraw()
    }
    else{
        let winVal=true
        if(userSelected==="rock"){
            //comp choice- scissor or paper
            winVal=compSelected==="scissor" ? true :false
        }
        else if(userSelected==="paper"){
            //comp choice-scissor or rock
            winVal=compSelected==="scissor" ?false :true
        }
        else{
            //comp choice paper or rock
            winVal=compSelected==="paper"?true:false
        }
        console.log(winVal)
        winner(winVal,userSelected,compSelected)
    }
  

}
choices.forEach((i) => {
    i.addEventListener("click", () => {
        const userSelected = i.getAttribute("id")
        playGame(userSelected)
    })
})