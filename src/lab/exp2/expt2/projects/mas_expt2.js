var images = [];
var img;
images[0] = "images/spec_on_redLight.png";
images[1] = "images/spec_on_no_redLight.png";
var solvents = ["Cyclohexane","Dioxane","Acetonitrile","Etmhanol","Ethylene Glycol"];
var cases = [0,1,2,3,4];
var x=0;
var step_no=0;

function initial_function(){
  var index=0;
        document.getElementById("data_button").addEventListener("click", function() {
            popitup("slideshow.html");
        }, false);  

        document.getElementById("demo").innerHTML = "Step-No 1:Prepare five 1 x 10<sup>-5</sup> M coumarin-138 solutions in solvents: cyclohexane, dioxane, acetonitrile, ethyl alcohol and ethylene glycol. Such dilute solutions can be prepared via dilution from 1 x 10<sup>-4</sup> M stock solutions in respective solvents. Here solutions in different solvents are shown on a solvent selection bar.";

        var modal = document.getElementById('manual');

        // Get the button that opens the manual modal
        var btn = document.getElementById("manual_button");

        // Get the <span> element that closes the manual modal
        var span = document.getElementsByClassName("close")[0];

        // When the user clicks the button, open the manual modal 
        btn.onclick = function() {
            modal.style.display = "block";
        };

        // When the user clicks on <span> (x), close the modal
        span.onclick = function() {
            modal.style.display = "none";
        };

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        };
 }
    function popitup(url) {
        // Opens a new browser window called newwindow. url specifies the URL of the page to open.
        newwindow=window.open(url,'name','height=300,width=250',"_parent");
        // Sets focus to the new window if the focus is on the previous page.
        if (window.focus) {
            newwindow.focus();
        }
        return false;
    }

    // When the user clicks on reset experiment this method is called
    function reload(){
        // Reloads the current document.
        location.reload();
    }


    function turnOn() {
        // Get the image
        img = document.getElementById('table_with_spec');
        // Change the source of the image 
        img.src = images[x];
        //increment x;
        x++;
        if(x >= images.length){
            x = 0;
        }
        // Call turnOn() method every 250ms 
        setTimeout("turnOn()", 250);
  
    }
    
    function showClock(){
        if(step_no==8){
            // Get the images.
            var context=document.getElementById('clockScreen');
            var hand =document.getElementById('clockHand');
            // Make the visiblility of the obtained images visible
            context.style.visibility='visible';
            hand.style.visibility="visible";
            // Rotate 'clockHand' using jQueryRotate.js
            var angle = 0;
            setInterval(function(){
                angle+=3;
                $('#clockHand').rotate(angle);
            },50);
            step_no++;
            //After 10 secs dispose clock
            setTimeout("disposeClock()",3000);
        }
    }

    // After 30 seconds of display of the timer the visibility of clock is changed back to hidden.
    function disposeClock(){
        // Make the visiblility of the obtained images hidden.
        document.getElementById('clockScreen').style.visibility='hidden';
        document.getElementById('clockHand').style.visibility='hidden';
        // Change to next intsruction to be followed.
    }

// This specifies the solution to be used whne the input button is clicked
function setSolution(){
  var img;
  img = document.getElementById("round-bottom-flask") ;
  img.src = "image-specific/filled-round-bottom-flask.png";
  document.getElementById("demo").innerHTML = "Step-No 2: To take a particular solution, click on the appropriate solvent on the solvent selection bar and then click on the volumetric flask containing the solution.";
  
}

//This moves the flask to the table
var solvent;
function moveFlask(){
  solvent = document.getElementById("slider").value;
  console.log(solvent);
  var img;
  img = document.getElementById("round-bottom-flask");
  var p,q;
      p = Number(img.style.left.substring(0,2));
      q = Number(img.style.top.substring(0,2));
      var move_cuvette = setInterval(function(){
        p=p+1;
        img.style.left= String(p)+"%";
        if(p>=35){
          clearInterval(move_cuvette);
        }
      },30);
  
    var movecuvette = setInterval(function(){
        q=q+1;
        img.style.top= String(q) + "%";
        if(q>=190){
          clearInterval(movecuvette);
        }
      },15);
   img.style="position:absolute;top:190%;left:35%;z-index:47899";
   document.getElementById("demo").innerHTML = "Click on the quartz cuvette (path length 1x1cm) to take it to the instrument table. Quartz cuvettes for spectrophotometric measurements are transparent only on two opposite sides, unlke the  all-side transparent quartz cuvettes used for flourescence measurements. ";

}
var index =0;
function moveCuvette(){
  if(index==0){
  index ++;
  var img;
  img = document.getElementById("quartz-cuvette");
  var p,q;
      p = Number(img.style.left.substring(0,2));
      q = Number(img.style.top.substring(0,2));
      var move_cuvette = setInterval(function(){
        p=p+1;
        img.style.left= String(p)+"%";
        if(p>=45){
          clearInterval(move_cuvette);
        }
      },30);
  
    var movecuvette = setInterval(function(){
        q=q+1;
        img.style.top= String(q) + "%";
        if(q>=130){
          clearInterval(movecuvette);
        }
      },15);
  img.style = "position:absolute; top:130%;left:45%;z-index:10000";
   document.getElementById("demo").innerHTML = "Click on the 5ml capacity pipette to collect 3ml of the experimental solution which will be transferred into the quartz cuvette. In the real operation, one has to set up the volume to 3ml in the pipette and an appropriate tip should be attatched prior to dipping it in the solution. ";
index++;
  }
  if(take==10){
      img = document.getElementById("quartz-cuvette");
      var p,q;
      p = Number(img.style.left.substring(0,2));
      q = Number(img.style.top.substring(0,2));
     var amovecuvette = setInterval(function(){
        q=q-1;
        img.style.top= String(q) + "%";
        if(q<=5){
          clearInterval(amovecuvette);
        }
      },100);    
    var amove_cuvette = setInterval(function(){
        p=p-1;
        img.style.left= String(p)+"%";
        if(p<=-45){
          clearInterval(amove_cuvette);
        }
      },30);
   img.parentNode.removeChild(img);
   step_no=15;
}
}
var count=0;
function rotatePipette(){
  var img;
  count++;
  if(count==1){
  img = document.getElementById("pipette");
  var angle=0;
  var id = setInterval(function(){
    angle+=1;
    if(angle>=26.5){
      clearInterval(id);
    }
    $("#pipette").rotate(angle);
  },16.67);
  var p,q;
      p = Number(img.style.left.substring(0,2));
      q = Number(img.style.top.substring(0,2));
      var move_cuvette = setInterval(function(){
        p=p+1;
        img.style.left= String(p)+"%";
        if(p>=35){
          clearInterval(move_cuvette);
        }
      },30);
  
    var movecuvette = setInterval(function(){
        q=q+1;
        img.style.top= String(q) + "%";
        if(q>=140){
          clearInterval(movecuvette);
        }
      },30);
  img.style = "cursor:pointer;position:absolute; top:140% ; left:35% ; z-index:9999";
  document.getElementById("demo").innerHTML = "Click on the pipette to draw solution into it.";
  }
  if(count==2){
    img = document.getElementById("pipette");
    img.src = "image-specific/pipette-with-solution.png";
    $("#pipette").rotate(0);
    document.getElementById("demo").innerHTML = "Click on the pipette to take it out of the volumetric flask.";   
     img.style = "cursor:pointer;position:absolute; top:140% ; left:39.5% ; z-index:9999";
  } 
  if(count==3){
    img = document.getElementById("pipette");
     var p,q;
      p = Number(img.style.left.substring(0,2));
      q = Number(img.style.top.substring(0,2));
      var move_cuvette = setInterval(function(){
        p=p+1;
        img.style.left= String(p)+"%";
        if(p>=62.5){
          clearInterval(move_cuvette);
        }
      },30);
      var movecuvette = setInterval(function(){
        q=q-1;
        img.style.top= String(q) + "%";
        if(q<=140){
          clearInterval(movecuvette);
        }
      },15)
    step_no=15;
    //img.style = "position:absolute; top:120% ; left:62.5% ; z-index:9999";
     document.getElementById("demo").innerHTML = "Click on the pipette again to put the solution into the cuvette.";
  }
  if(count==4){
    img = document.getElementById("pipette");
    img.src = "image-specific/pipette.png";
    img.style = "cursor:pointer;position:absolute; top:10% ; left:30%;";
    step_no=8;
     document.getElementById("demo").innerHTML = "Click on the pop-up saying Start Absorption Measurement.";
    popUpMeasure();
  }
}

function popUpMeasure(){
  var img;
  img = document.getElementById("popup");
  img.src = "image-specific/popup.png";
  img.onclick = function(){
    img.src="";
     document.getElementById("demo").innerHTML = "Turn on the spectrophotometer by clicking the button and after that, open the lid.";
};
}
var take;  
function spectrophotometer(){
if(step_no!=15){
            images[0] = "images/spec_open.png";
            images[1] = "images/spec_open.png";
            document.getElementById("demo").innerHTML = "Click on the cuvette to place it in the sample holder. One has to use pure solvent as the sample blank or the reference in the measurement. Here a double beam spectrophotometer is shown.";
 take=10;
  }
 else{
            console.log("called");
            images[0] = "images/spec_on_redLight.png";
            images[1] = "images/spec_on_no_redLight.png";
            document.getElementById("demo").innerHTML = "Run the wavelength scan by clicking on the computer monitor and then on the scan button and observe the wavelength scan";
        }
} 

function input(){
var img,button,input1,input2;
img = document.getElementById("form");
button = document.getElementById("start-button");
input1 = document.getElementById("input1");
input2 = document.getElementById("input2");
img.style.visibility = 'visible';
button.style.visibility = 'visible';
input1.style.visibility = 'visible';
input2.style.visibility = 'visible';
}

function graphresult(){
var img,button,input1,input2;
img = document.getElementById("form");
button = document.getElementById("start-button");
input1 = document.getElementById("input1");
input2 = document.getElementById("input2");
img.style="position:absolute;top:-30px;left:-40px;z-index:41137848484874;height:115%;width:115%;visibility:hidden;";
button.style="position:absolute;left:675px;top:80px;cursor:pointer;z-index:4113784848488;visibility:hidden;";
input1.style="position:absolute;left:413px;top:307px;visibility:hidden;z-index:4113784848488;width:7%";
input2.style="position:absolute;left:523px;top:307px;visibility:hidden;z-index:4113784848488;width:7%";
var vid;
  if(solvent=="0"){
   vid = document.getElementById("0");
            }
 if(solvent=="1"){
   vid = document.getElementById("1");
            }
 if(solvent==2){
   vid = document.getElementById("2");
            }
 if(solvent==3){
   vid = document.getElementById("3");
            }
 if(solvent==4){
   vid = document.getElementById("4");
            }

            var contex=document.getElementById('scan');
            contex.style.visibility='visible';
            vid.style.visibility='visible';
            vid.play(); 
         step_no=12;
}

function disposeGraph(){
        if(step_no==12){
            document.getElementById('0').style.visibility='hidden';
            document.getElementById('1').style.visibility='hidden';
            document.getElementById('2').style.visibility='hidden';
document.getElementById('3').style.visibility='hidden';
document.getElementById('4').style.visibility='hidden';
            document.getElementById('scan').style.visibility='hidden';
        }

    }
