var image_tracker="1"


function speechbubble(){

  var speech=document.getElementById("speech")
  if (image_tracker=="1"){
    speech.src="intro1/cold.png";
    document.getElementById("speech").style.width= "600px";
    document.getElementById("speech").style.height= "200px";
    image_tracker="2";
  }
  else if (image_tracker=="2"){
    speech.src="intro1/comeclose.png";
    document.getElementById("speech").style.width= "600px";
    document.getElementById("speech").style.height= "200px";
    image_tracker="3";
  }
  else if (image_tracker=="3"){
    speech.src="intro1/lightmeup.png";
    document.getElementById("speech").style.width= "600px";
    document.getElementById("speech").style.height= "200px";
    image_tracker="4";
  }
  else if (image_tracker=="4"){
    speech.src="intro1/soulsofevil.png";
    document.getElementById("speech").style.width= "600px";
    document.getElementById("speech").style.height= "200px";
    image_tracker="5";
  }
  else if (image_tracker=="5"){
    let answer=prompt("Do you want to awaken the evil spirits? In return, you'll feel warmer. (Yes/No)");
    if (answer=="Yes") {
      document.getElementById('speech').style.display="none";
      document.getElementById("candle").style.display="block";
      document.getElementById("candle").style.width= "120px";
      document.getElementById("candle").style.height= "200px";
      image_tracker="6";
    }
    else {
      document.location.href="index10.html";
    }
  }
}
var counter="1";

function candle(){

  if (counter=="1"){
    speech.src="intro1/cold.png";
    document.getElementById('spark1').style.display='block';
    counter="2";
  }
  else if (counter=="2"){
    speech.src="intro1/comeclose.png";
    document.getElementById('spark2').style.display='block';
    counter="3";
  }
  else if (counter=="3"){
    speech.src="intro1/comeclose.png";
    document.getElementById('spark3').style.display='block';
    counter="4";
  }
  else if (counter=="4"){
    speech.src="intro1/comeclose.png";
    document.getElementById('spark4').style.display='block';
    counter="5";
  }
  else if (counter=="5"){
    document.location.href="index15cult.html";
  }

}
