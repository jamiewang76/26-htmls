function boy(){
  document.getElementById("speech").style.display="block";

}
var image="1";
function speech(){
      if(image=="1"){
        document.getElementById("speech").src = "intro1/realize.png";
        document.getElementById("speech").style.width= "500px";
        image="2";
      }
      else if(image=="2"){
        document.getElementById("speech").src = "intro1/save.png";
        document.getElementById("speech").style.width= "550px" ;
        document.getElementById("speech").style.height= "230px" ;
        image="3";
      }
      else if(image=="3"){
        document.getElementById("speech").src = "intro1/inturn.png";
        document.getElementById("speech").style.width= "500px";
        document.getElementById("speech").style.height= "230px" ;
        image="4";
      }
      else if(image=="4"){
        document.getElementById("speech").src = "intro1/luck.png";
        document.getElementById("speech").style.width= "500px";
        document.getElementById("speech").style.height= "230px" ;
        image="5";
      }
      else if(image=="5"){
        document.location.href="index1.html";
      }
    }
