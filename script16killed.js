function boy(){
  document.getElementById("speech").style.display="block";

}
var image="1";
function speech(){
      if(image=="1"){
        document.getElementById("speech").src = "intro1/hands.png";
        document.getElementById("speech").style.width= "550px" ;
        document.getElementById("speech").style.height= "230px" ;
        image="2";
      }
      else if(image=="2"){
        document.getElementById("speech").src = "intro1/consequences.png";
        document.getElementById("speech").style.width= "550px" ;
        document.getElementById("speech").style.height= "230px" ;
        image="3";
      }
      else if(image=="3"){
        document.getElementById("speech").src = "intro1/this.png";
        document.getElementById("speech").style.width= "550px" ;
        document.getElementById("speech").style.height= "230px" ;
        image="4";
      }
      else if(image=="4"){
        document.getElementById("speech").src = "intro1/wrong.png";
        document.getElementById("speech").style.width= "550px" ;
        document.getElementById("speech").style.height= "230px" ;
        image="5";
      }
      else if(image=="5"){
        document.getElementById("speech").src = "intro1/luck.png";
        document.getElementById("speech").style.width= "550px" ;
        document.getElementById("speech").style.height= "230px" ;
        image="6";
      }
      else if(image=="6"){
        document.location.href="index1.html";
      }
    }
