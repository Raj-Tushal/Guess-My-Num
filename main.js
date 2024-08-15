const checkBtn = document.querySelector(".checkBtn");
const userNo = document.querySelector(".userNo");
const machineNo = document.querySelector(".mahineNo");
const againBtn = document.querySelector(".again")
const score = document.querySelector(".score")
const highScore = document.querySelector(".highScore")
const message = document.querySelector(".message")

// users value
// const userValue =userNo.value;
// machine Value

// function generateRandomNumber() {
//     return Math.floor(Math.random() * 20) + 1;
// }



// checkBtn.addEventListener("click",generateRandomNumber)

// if (userValue==machineValue) {
//     machineNo.innerHTML=userValue;
// }
// else{
//     machineNo.innerHTML="try!";
// }


// if (userNo.value==machineNo.innerHTML) {
//     machineNo.innerHTML="matched"
// }

let currentScore = 20;
let maxScore = 0;


checkBtn.addEventListener("click",()=>{
    function generateRandomNumber() {
        return Math.floor(Math.random() * 20) + 1;
    }
    score.innerHTML=20;
    const userNum = parseInt(userNo.value, 10); 
    const randomNum = generateRandomNumber();
    const Score = parseInt(score.innerHTML, 10); 

    console.log(randomNum);
    console.log(userNum);

    if (randomNum===userNum) {
        machineNo.innerHTML=userNum;
        message.style.display="block";
       
        if (currentScore>maxScore) {
            maxScore =currentScore;
            highScore.textContent=currentScore;         
            score.textContent = 0;
            currentScore=20;
        }
    }
    else{
        machineNo.innerHTML="?";
        currentScore--;
        score.textContent = currentScore;

        if (currentScore<=0) {
            highScore.textContent=0;
            alert("Game Over!, Try Again")
        }
    }
})





// again btn 
againBtn.addEventListener("click",()=>{
    location.reload();
    userNo.value=0;
})

