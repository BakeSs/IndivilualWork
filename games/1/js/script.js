var answers = [
  'Maybe.', 'Certainly not.', 'I hope so.', 'Not in your wildest dreams.',
  'There is a good chance.', 'Quite likely.', 'I think so.', 'I hope not.',
  'I hope so.', 'Never!', 'Fuhgeddaboudit.', 'Ahaha! Really?!?', 'Pfft.',
  'Sorry, bucko.', 'Hell, yes.', 'Hell to the no.', 'The future is bleak.',
  'The future is uncertain.', 'I would rather not say.', 'Who cares?',
  'Possibly.', 'Never, ever, ever.', 'There is a small chance.', 'Yes!'];

const newContent = document.createTextNode("Ask a question, dreamer");
var input = document.createElement("input");
var ballInner = document.createElement("div");
var ball = document.createElement("img");
var outText = document.createElement("h3");
var button = document.createElement("button");
var buttonBack = document.createElement("button");
const container = document.createElement("div");


input.id="input";
button.innerHTML = "Spin";
buttonBack.innerHTML = "Go back";
buttonBack.setAttribute('id', 'back')
ball.src = "image/Magic_ball.png";
ball.alt = "Youre not lucky :(";
ballInner.className = "container ballInner";
container.className = "container";

ballInner.appendChild(ball);
ballInner.appendChild(outText);

container.appendChild(buttonBack);
container.appendChild(newContent);
container.appendChild(input);
container.appendChild(ballInner);
container.appendChild(button);

document.body.appendChild(container);

button.onclick = function randomize()
{
  var elem = document.getElementById("input").value;
  if(elem == "")
    outText.innerHTML = "Empty";
    else
    {
      var answer = answers[Math.floor(Math.random() * answers.length)];
      outText.innerHTML = answer;
    }
};

$("#back").click(function(){
  let url = window.location.href;
  let urlLenght = url.length;
  urlLenght -= 18;
  url = url.substring(0, urlLenght);
  url += "index.html";
  console.log(url);
  window.location.assign(url);
});