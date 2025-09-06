const Infoquiz =[ {
    Question: "1. Which of the following is the event hosted by KDAG ?",
    options: ["Convolve","Fugacity", "Indian Case challenge", "KRAIG workshop"],
    correct : 0,
},
{
    Question: "2. What is the main purpose of data analytics ?",
    options: ["To make fdata accesible","To get insights for better decision making", "Only to clean Data", "Make efficient Storage"],
    correct : 1,
},
{
    Question: "3. What is first step in data analytics process ?",
    options: ["Predicting","modelling", "Collection", "Analysing"],
    correct : 2,
},
{
    Question: "4. Which proggraming language is most commonly used for data analytics ?",
    options: ["C","C++", "Python", "Java"],
    correct : 2,
},
{
    Question: "5. Which is not correct data type for analytics ?",
    options: ["Text","Boolean", "Numericle", "Coloured Graphs"],
    correct : 3,
},

];
const option1 = document.querySelector(".option1");
const option2 = document.querySelector(".option2");
const option3 = document.querySelector(".option3");
const option4 = document.querySelector(".option4");
const GivenAns = document.querySelectorAll(".answer");
const GivenQue = document.querySelector("#question");
const submitbtn = document.querySelector("#submit");
let currentQuiz= 0;
let score = 0;

function loadQuiz(){
    const{Question,options}= Infoquiz[currentQuiz];
    GivenQue.innerText= Question;
   options.forEach(
    (curOption, index) => {
  window[`option${index + 1}`].innerText = curOption;
}

);
};
loadQuiz();


function getSelectedOption(){
    let ans_index;
    GivenAns.forEach((curOption, index)=> {
        if(curOption.checked){
             ans_index= index;
        }
    });
    return ans_index;
};

submitbtn.addEventListener("click",()=> {
    const selectedOptionIndex = getSelectedOption();
    console.log(selectedOptionIndex);

    if(selectedOptionIndex== Infoquiz[currentQuiz].correct){
        score+=1;
    }
    currentQuiz++;

    if(currentQuiz<Infoquiz.length){
        loadQuiz();
    }
    else{
        if (score === 0) {
            box.innerHTML = `
            <div>Your score is: ${score}/${Infoquiz.length}<br>You really need to search a bit more.
            <br> The correct answers are: 1.(a), 2.(b), 3.(c), 4.(c), 5.(d)</div>`;
        } else if (score === 1) {
            box.innerHTML = `
            <div>Your score is: ${score}/${Infoquiz.length}<br>Little steps take us to success, learn step by step and you will surely improve.
            <br> The correct answers are: 1.(a), 2.(b), 3.(c), 4.(c), 5.(d)</div>`;
        
        } else if (score === 2) {
            box.innerHTML = `
            <div>Your score is: ${score}/${Infoquiz.length}<br>You are performing well just a few things more to know.
            <br> The correct answers are: 1.(a), 2.(b), 3.(c), 4.(c), 5.(d)</div>`;}
            if (score === 3) {
            box.innerHTML = `
            <div>Your score is: ${score}/${Infoquiz.length}<br>You performed good let's check the mistakes and find if you can score full in next quiz.
            <br> The correct answers are: 1.(a), 2.(b), 3.(c), 4.(c), 5.(d)</div>`;
    
        } else if (score === 4) {
            box.innerHTML = `
            <div>Your score is: ${score}/${Infoquiz.length}<br>Excellent performance, let's just check the mistake and proceed.
            <br> The correct answers are: 1.(a), 2.(b), 3.(c), 4.(c), 5.(d)</div>`;
        }
        else if (score === 5) {
            box.innerHTML = `
            <div>Your score is: ${score}/${Infoquiz.length}<br>Outstanding, you got all of them correctly.
            <br> The correct answers are: 1.(a), 2.(b), 3.(c), 4.(c), 5.(d)</div>`;
        }

    }
});