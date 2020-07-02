// Challenge1 : Your age in days
//DOM - Document Object Model 
function ageinDays() {
    var birthYear = prompt("what year were you born... Good friend?");
    var age = (2020-birthYear) * 365;
    var h3 = document.createElement('h3');
    var textAnswer = document.createTextNode (' Yor are ' + age + ' days old ')
  h3.setAttribute ('id','ageinDays');
  h3.appendChild(textAnswer);
  document.getElementById('flex-box-result').appendChild(h3);
    // console.log(age);
}

function reset () {
    document.getElementById('ageinDays').remove();
}


// Challenge2 : Generate Cat

function generateCat () {
  var image = document.createElement('img');
  var div = document.getElementById('flex-cat-gen');
  image.src = "http://thecatapi.com/api/images/get?format=src&type=gif&size=small";
  div.appendChild(image)
}

//Challange3: Rock,Paper,Scissor

function rpsGame(yourChoice) {
  console.log(yourChoice);
  var humanChoice, botChoice;
  humanChoice = yourChoice.id;

  botChoice = numberToChoice(randToRpsInt());
  console.log ('computer choice:',botChoice)

  results = decideWinner(humanChoice,botChoice); //{0,1} human lost| bot won
  console.log(results);

  message = finalMessage(results); //{message:"you won",'color':'green'}
  console.log(message);

  rpsFrontEnd(yourChoice.id, botChoice,message);

}
function randToRpsInt () {
  return Math.floor(Math.random() * 3 )
} 

function numberToChoice(number) {
  return ['rock','paper','scissor'] [number];
}
function decideWinner (yourChoice,computerChoice) {
  var rpsDatabase = {
    'rock':{'scissors': 1,'rock': 0.5,'paper': 0},
    'paper':{'rock': 1,'paper': 0.5,'scissors': 0},
    'scissor':{'paper': 1,'scissors': 0.5,'rock': 0 },
  
  }
  var yourScore = rpsDatabase [yourChoice][computerChoice];
  var computerScore = rpsDatabase[computerChoice][yourChoice];

  return [yourScore,computerScore]
}

function finalMessage ([yourScore,  computerScore]) {
  if (yourScore === 0) {
    return{'message': 'Your Lost','color':'red'};
  }else if (yourScore === 0.5) {
    return{'message' : 'You Tied', 'color':'yellow'};
  }else {
    return{'message' : 'You Won!', 'color':'green'};
  }
}

function rpsFrontEnd (humanImageChoice,botImageChoice,finalMessage) {
  var imagesDatabase = {
    'rock': document.getElementById('rock').src,
    'paper': document.getElementById('paper').src,
    'scissor': document.getElementById('scissor').src,

  }

  //let's remove all the images

  document.getElementById('rock').remove();
  document.getElementById('paper').remove();
  document.getElementById('scissor').remove();

  var humanDiv = document.createElement('div');
  var botDiv = document.createElement('div');
  var MessageDiv = document.createElement('div');

  humanDiv.innerHTML = "<img src='" + imagesDatabase[humanImageChoice] + "' height=150 width=150   style='box-shadow: 0px 10px 50px rgba(37, 50,213, 1);'>"
  MessageDiv.innerHTML ="<h1 style='color:"  + finalMessage['color'] + "; font-size:60px; padding:30px; '>" + finalMessage['message'] + "<h1>"
botDiv.innerHTML = "<img src='" + imagesDatabase[botImageChoice] + "' height=150 width=150   style='box-shadow: 0px 10px 50px rgba(243, 38,24, 1);'>"

  document.getElementById('flex-box-rps-div').appendChild(humanDiv);
  document.getElementById('flex-box-rps-div').appendChild(MessageDiv);
  document.getElementById('flex-box-rps-div').appendChild(botDiv);
}