
boy.onclick = function() {
      let start = Date.now();

      let timer = setInterval(function() {
        let timePassed = Date.now() - start;

        boy.style.left = timePassed / 5 + 'px';

        if (timePassed > 9000) clearInterval(timer);

      }, 20);
      var x = document.getElementById("myAudio");


        x.play();




    }
