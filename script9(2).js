
var image_tracker="1"


function changeimg(){
  var image=document.getElementById("images")
  if (image_tracker=="1"){
    images.src="intro1/story2.png";
    image_tracker="2";
  }
  else if (image_tracker=="2"){
    images.src="intro1/story3.png";
    image_tracker="3";
  }
  else if (image_tracker=="3"){
    let answer=prompt("Do you want to save Alice? (Yes/No)");
    if(answer=="Yes"){
      document.location.href="index16drown.html";
    }
    else if(answer=="No"){
      document.location.href="index14.html";
    }
  }

}
