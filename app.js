//question sdection 

let quiz = [
    {
        quesition:"Who is the vice president of india?",
        opa:"Arbind Kejriwal",
        opb:"M. Venkaiah Naidu",
        opc:"Ramnath Kobind",
        opd:"Usman Patel",
        correct:"opb"
        
    },
    {
        quesition:"Oil, natural gas and coal are examples of …",
        opa:"Renewable resources",
        opb:"Fossil fuels",
        opc:"Geothermal resources",
        opd:"Biofuels",
        correct:"opb"
        
    },
    {
        quesition:"Who is the founder of Lenskart",
        opa:"Peyush Bansal",
        opb:"Amit Chaudhary",
        opc:"Sumeet Kapahi",
        opd:"All of them",
        correct:"opd"
        
    },
    {
        quesition:"What is the use of the <noscript> tag in Javascript?",
        opa:"The contents are displayed by non js based browsers",
        opb:"No such tag exist",
        opc:"hide content",
        opd:"none",
        correct:"opa"
        
    },
    {
        quesition:"Which is not valid data type in Javascript ?",
        opa:"undefined",
        opb:"boolean",
        opc:"float",
        opd:"number",
        correct:"opc"
        
    }
]


// variables and html elements get section
let currques=0;
var testScore = 0;
var solution = undefined;
const quizBox = document.querySelector(".quiz-box")
const result = document.querySelector(".result")
const next = document.getElementById('next');
const submit = document.getElementById('submit');
const answer = document.querySelectorAll('.ans');
const score = document.getElementById('score')





//functions section 

function chngBox(){
    if(next.innerHTML=="submit"){
        quizBox.classList.toggle('show')
        result.classList.toggle('show');
    }
    
}


function loadquiz(){
    
    document.getElementById('questext').innerText=quiz[currques].quesition;
    document.getElementById('a-text').innerText=quiz[currques].opa;
    document.getElementById('b-text').innerText=quiz[currques].opb;
    document.getElementById('c-text').innerText=quiz[currques].opc;
    document.getElementById('d-text').innerText=quiz[currques].opd;
   
    currques++;
    
    
    
}
function userAns(){
   answer.forEach((element)=>{
       if(element.checked){
        solution = element.id;
        if(solution===quiz[currques-1].correct){
            testScore++;
        }
       }
   })

//    return solution;
}

function unCheck(){
    answer.forEach((element)=>{
        element.checked = false;
    })
}

function nextQ(){
    if(currques<quiz.length)
    {
        userAns();
        loadquiz();
        unCheck();
        if(currques==(quiz.length)){
            next.innerText="submit"
        }
    }
    else{
        userAns();
        chngBox();
        score.innerText= testScore + " Out of "+quiz.length;
        
    }
}


//function call section
loadquiz();
