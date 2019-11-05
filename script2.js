
var image_tracker="1"


function changeimg(){
  var image=document.getElementById("images")
  if (image_tracker=="1"){
    images.src="intro1/2.png";
    image_tracker="2";
  }
  else if (image_tracker=="2"){
    images.src="intro1/3.png";
    image_tracker="3";
  }
  else if (image_tracker=="3"){
    images.src="intro1/4.png";
    image_tracker="4";
  }
  else if (image_tracker=="4"){
    images.src="intro1/5.png";
    image_tracker="5";
  }
  else if (image_tracker=="5"){
    images.src="intro1/5.png";
  }
}
