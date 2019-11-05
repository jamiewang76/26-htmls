boy.onclick = function() {
      let start = Date.now();

      let timer = setInterval(function() {
        let timePassed = Date.now() - start;

        boy.style.left = timePassed / 5 + 'px';

        if (timePassed > 2000) clearInterval(timer);

      }, 20);


    }

var image="1";
function speechbubble(){
  if(image=="1"){
    document.getElementById("speech").src = "intro1/are.png";
    document.getElementById("speech").style.width= "450px";
    document.getElementById("speech").style.height= "200px";
    image="2";
  }
  else if(image=="2"){
    document.getElementById("speech").src = "intro1/eat.png";
    document.getElementById("speech").style.width= "500px";
    image="3";
  }
  else if(image=="3"){
    document.getElementById("speech").src = "intro1/starving.png";
    document.getElementById("speech").style.width= "650px" ;
    document.getElementById("speech").style.height= "200px" ;
    image="4";
  }
  else if(image=="4"){
    let answer=prompt("Will you eat the berries? (Enter Yes/No)");
      if (answer=="Yes"){
        document.location.href = "index16poisonberries.html";
      }
      else if(answer=="No"){
        document.location.href = "index16starve.html";
      }
  }
}
