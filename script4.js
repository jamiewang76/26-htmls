boy.onclick = function() {
      let start = Date.now();

      let timer = setInterval(function() {
        let timePassed = Date.now() - start;

        boy.style.left = timePassed / 5 + 'px';

        if (timePassed > 2000) clearInterval(timer);

      }, 20);
      var x = document.getElementById("myAudio");


        x.play();


    }

var image="1";
function speechbubble(){
  if(image=="1"){
    document.getElementById("speech").src = "intro1/acat.png";
    document.getElementById("speech").style.width= "150px";
    image="2";
  }
  else if(image=="2"){
    document.getElementById("speech").src = "intro1/why.png";
    document.getElementById("speech").style.width= "200px";
    image="3";
  }
  else if(image=="3"){
    document.getElementById("speech").src = "intro1/take.png";
    document.getElementById("speech").style.width= "350px" ;
    document.getElementById("speech").style.height= "100px" ;
    image="4";
  }
  else if(image=="4"){
    let answer=prompt("Are you taking the cat? (Enter Yes/No)");
      if (answer=="Yes"){
        document.location.href = "index5.html";
      }
      else if(answer=="No"){
        document.location.href = "index6.html";
      }
  }
}
