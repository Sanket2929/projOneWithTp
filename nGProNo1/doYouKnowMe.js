const readlineSync = require(`readline-sync`);

//welcome user
let userName = readlineSync.question(`what is your name ?\n`)

console.log(`welcome ${userName} to the game DO YOU KNOW ME ?`);
console.log(`lets start the quiz game`);

//for space
console.log("\n")

let score = 0;

function playTheGame(question,answer){
  let userAnswer = readlineSync.question(question)
  if(userAnswer === answer){
    console.log(`your answer is right`)
    score = ++score
  }else{
    console.log(`your answer is wrong`)
  }
  console.log(`your score is :- ${score}`)
  console.log(`-------------------------`)
}
//array of objects 
let questions = [{
    question:`which skill i'm learning ?\n a) web development \n b) blockchain\n`,
    answer :`a`
  },
  {
    question : `which programing language i am learning ?\n a) python \n b) javascript\n`,
    answer :`b`
  },
  {
    question : `from which bootcamp i am learning web development ?\n a) neogCamp \n b) learnWebDev\n`,
    answer : `a`
  },
  {
    question : `do i go to the gym ? \n a) yes \n b) no\n`,
    answer :`a`
  },
  {
    question :`which is my hometown ? \n a) mumbai \n b) nagar\n`,
    answer :`b`
  },
  {
    question : `above who is my inspiration ?\n a) richi rich \n b) elon musk\n`,
    answer :`b`
  }]

for (let i = 0; i < questions.length; ++i){
  let currentQuestion = questions[i]
  playTheGame(currentQuestion.question,currentQuestion.answer)
}

//high score chart
let highScoreChart = [
  {
    name : `sanket : `,
    highScore : 6
  }
  ,
  {
    name : `abhishek : `,
    highScore : 6
  }
]


console.log(`quiz game is over now your score is ${score} till now.`)
                                  
//to show the high Score Chart

    function showHighScoreBoard(){
        let giveMeHighScore = readlineSync.question(`do you want to see the score board ? \n a) yes \n b) no \n`)
        if(giveMeHighScore === `a`){
            for(let i = 0; i < highScoreChart.length; ++i){
                let currentScore = highScoreChart[i]
                console.log(currentScore.name,currentScore.highScore)
            }
        }else{
            console.log(`ok bye then.`)
        }
    }
    
showHighScoreBoard()
    


