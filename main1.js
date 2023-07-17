//new rabbit refresh page
var respondingCount = 0;
var newRabbit = document.querySelector('#navigator .new-rabbit');
newRabbit.addEventListener("click",function () {
  window.location.reload();
})

//click button send message
var mainMessage = document.querySelector("#main");
document.querySelector('#message').addEventListener("keydown", function(event) {
  if (event.key === 'Enter') {
    sendMessage();
  }
});


function sendMessage() {
  if( document.querySelector('#message input').value != ''){
    if(displayMain == true){
      document.querySelector('#main .intro').style.display = 'none';
      displayMain = false;
    }
    //xử lý chính cho tin nhắn ra vào
    var myMessage = document.querySelector('#message input').value;
    messageIn(myMessage);
    messageOut();
  }
  
}

function messageIn(myMessage) {
  var inputMessage = document.createElement("div");
  inputMessage.innerHTML = `<div class="message inputMessage"><img src="./asset/carrot1.png" alt="icon" width="40px">${myMessage}</div>`;
  mainMessage.appendChild(inputMessage);
  mainMessage.scrollTop = mainMessage.scrollHeight - mainMessage.clientHeight;

}

function messageOut() {
  var timeResponding =  Math.floor(Math.random() * (3 - 1 + 1)) + 1;// create a random time for responding
  var randomAnswer = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
  //create the answer
  respondingCount ++;
  var respondingMessage;
  if(respondingCount % 5 == 0){
    respondingMessage = 'Hỏi gì lắm thế? Hỏi lại đi. Grrr.';
  }else{
    switch (randomAnswer) {
      
      case 1:
        respondingMessage = 'twich twich twich, twich twich. twich twich twich twich!';
        break;
      case 2:
        respondingMessage = 'thump thud, grr. Thump thump thump thud thud, thud thud.';
        break;  
      case 3:
        respondingMessage = 'YYAAAAAAAAAAHHHHHHH!';
        break;
      case 4:
        respondingMessage = 'zip zip .... zip zip? zip zip zip.';
        break;  
      case 5:
        respondingMessage = 'grr grr brrrrrrrr..... brr brrrrrr';
        break;
      case 6:
        respondingMessage = 'Squeak squeak .... queak queak queak.';
        break; 
      case 7:
        respondingMessage = 'Yelp yelp! yelp yelp yelp! YEEEEEELPPPPP!';
        break;
      case 8:
        respondingMessage = 'Whineeeeeeeeeeeeeeeeeeeeeeeeeee....';
        break; 
      case 9:
        respondingMessage = 'Meow meow meow meow ';
        break;
      case 10:
        respondingMessage = 'Grunt runt grunt grunt, grunt grunt grunt grunt.';
        break;  
    }
  }
  document.querySelector("#message button").style.display = 'none';
  document.querySelector('#message input').value = '';
  var tempOutputMessage = document.createElement("div");
  tempOutputMessage.innerHTML = `<div class="message tempOutputMessage"><img src="./asset/rabbit_bot.png" alt="icon" width="30px">...</div>`;
  mainMessage.appendChild(tempOutputMessage);
  mainMessage.scrollTop = mainMessage.scrollHeight - mainMessage.clientHeight;
  setTimeout(function(){
    mainMessage.querySelector('.tempOutputMessage').remove();   
  },1000 * timeResponding);
  setTimeout(function(){
    var outputMessage = document.createElement("div");

    outputMessage.innerHTML = `<div class="message outputMessage"><img src="./asset/rabbit_bot.png" alt="icon" width="30px">${respondingMessage}</div>`;

    mainMessage.appendChild(outputMessage);
    mainMessage.scrollTop = mainMessage.scrollHeight - mainMessage.clientHeight;
    document.querySelector("#message button").style.display = 'block';
  },1000 * timeResponding); 
}
//change theme
var theme = document.querySelector('#navigator .theme');
var displayMain = true; //phuc vu dang sau

  theme.addEventListener("click", function() {
    if(theme.getAttribute('class') == 'theme dark-theme'){
      document.querySelector('html').style.background = 'rgb(90, 90, 90)';
      theme.textContent = 'Light theme';
      if(displayMain == true){
          document.querySelector('#main .title').style.color = 'white';
        for(let i=0;i<3;i++){
          document.querySelectorAll('#main ul .subtitle')[i].style.color = 'rgb(200,200,200)';   
        }
      }

      theme.classList.remove('dark-theme');
      theme.classList.add('light-theme');
    }else if(theme.getAttribute('class') == 'theme light-theme'){
      document.querySelector('html').style.background = 'rgb(255, 255, 255)';
      theme.textContent = 'Dark theme';
      
      if(displayMain == true){
        document.querySelector('#main .title').style.color = 'black';
        document.querySelector('#main ul li').style.color = 'black'; 
        for(let i=0;i<3;i++){
          document.querySelectorAll('#main ul .subtitle')[i].style.color = 'black';   
        }
      } 
      theme.classList.remove('light-theme');
      theme.classList.add('dark-theme');
    }
  });



