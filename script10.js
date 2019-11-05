var image="1";
    function speechbubble(){
      if(image=="1"){
        document.getElementById("speech").src = "intro1/Im.png";
        document.getElementById("speech").style.width= "180px";
        document.getElementById("speech").style.height= "100px";
        image="2";
      }
      else if(image=="2"){
        document.getElementById("speech").src = "intro1/So.png";
        document.getElementById("speech").style.width= "200px";
        image="3";
      }
      else if(image=="3"){
        document.getElementById("speech").src = "intro1/Hungry.png";
        document.getElementById("speech").style.width= "350px" ;
        document.getElementById("speech").style.height= "130px" ;
        image="4";
      }
      else if(image=="4"){
        document.getElementById("speech").src = "intro1/I.png";
        document.getElementById("speech").style.width= "200px";
        image="5";
      }
      else if(image=="5"){
        document.getElementById("speech").src = "intro1/Cant.png";
        document.getElementById("speech").style.width= "230px";
        image="6";
      }
      else if(image=="6"){
        document.getElementById("speech").src = "intro1/Move.png";
        document.getElementById("speech").style.width= "230px";
        image="7";
      }
      else if(image=="7"){
        document.getElementById("speech").src = "intro1/I.png";
        document.getElementById("speech").style.width= "230px";
        image="8";
      }
      else if(image=="8"){
        document.getElementById("speech").src = "intro1/Need.png";
        document.getElementById("speech").style.width= "230px";
        image="9";
      }
      else if(image=="9"){
        document.getElementById("speech").src = "intro1/Food.png";
        document.getElementById("speech").style.width= "230px";
        image="10";
      }
      else if(image=="10"){
        document.getElementById("boy2").src='intro1/flashlightground.png';
        image="11";
      }
      else if(image=="11"){
        let answer=prompt("Eat the cat? (Yes/No)");
        if (answer=="Yes"){
          document.getElementById('bigpic').style.display='block';
          document.body.style.backgroundColor = "black";
          var x = document.getElementById("myAudio");

            x.play();
          document.getElementById("cat2").src = "intro1/bg2.png";
          document.getElementById("cat2").style.width= "330px";
        }
        else if(answer=="No"){
          document.location.href="index15starve.html";
        }
      }
    }
    function changeindex16(){
          document.location.href="index16guilt.html";
    }
