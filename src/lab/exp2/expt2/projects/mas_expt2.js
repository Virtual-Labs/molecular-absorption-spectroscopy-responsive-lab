var images = [];
var img;
images[0] = "images/spec_on_redLight.png";
images[1] = "images/spec_on_no_redLight.png";
var x=0;
// Variables necessary to obtain motion of all the images
    var initial_top;
    var initial_left;
    var final_top;
    var final_left;
    var step;
    var elem;
    var img,img1;
    var id,id1;
    var type_of_movement;// Indicates upward or downward motion
    var step_no=0;// This variable is used to perform all the actions in the required sequence. Depending on the value of this variable the part of the method is called.
    var sol_name;
    var empty_flask;
function initial_function(){
  var index=0;
        document.getElementById("data_button").addEventListener("click", function() {
            popitup("slideshow.html");
        }, false);  

        document.getElementById("demo").innerHTML = "Step-No 1:Prepare five 1 x 10<sup>-5</sup> M coumarin-138 solutions in solvents: cyclohexane, dioxane, acetonitrile, ethyl alcohol and ethylene glycol. Such dilute solutions can be prepared via dilution from 1 x 10<sup>-4</sup> M stock solutions in respective solvents. Here solutions in different solvents are shown on a solvent selection bar. To take a particular solution, click on the appropriate solvent on the solvent selection bar and then click on the volumetric flask containing the solution.";

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

//This specifies the solution to be used when the input button is clicked
function setSolution(){
  sol_name = document.getElementById("conc_scale").value;
  if(sol_name == 0){
    document.getElementById("solution_name").src = "image-specific/solution.png";
    document.getElementById("round-bottom-flask").src = "image-specific/filled-round-bottom-flask.png"
  }
  else if(sol_name == 1){
    document.getElementById("solution_name").src = "image-specific/solution1.png";
    document.getElementById("round-bottom-flask").src = "image-specific/filled-round-bottom-flask.png"
  }
  else if(sol_name == 2){
    document.getElementById("solution_name").src = "image-specific/solution2.png";
    document.getElementById("round-bottom-flask").src = "image-specific/filled-round-bottom-flask.png"
  }
  else if(sol_name == 3){
    document.getElementById("solution_name").src = "image-specific/solution3.png";
    document.getElementById("round-bottom-flask").src = "image-specific/filled-round-bottom-flask.png"
  }
  else if(sol_name == 4){
    document.getElementById("solution_name").src = "image-specific/solution4.png";
    document.getElementById("round-bottom-flask").src = "image-specific/filled-round-bottom-flask.png"
  }
  document.getElementById("demo").innerHTML = "Step-No 2: Click on the volumetric flask containing the solution.";
}


// This function is a general method used to move images from initial position to final position.
function moveImage(){
        id = setInterval(frame, 5);
        function frame() {
            if(type_of_movement == 0){
                if (initial_top > final_top) {
                    clearInterval(id);
                 } else {
                    initial_top+=step_top; 
                    // console.log(initial_top);
                    initial_left+=step_left;
                    // console.log(initial_left);
                    elem.style.top = initial_top + 'px'; 
                    elem.style.left = initial_left + 'px'; 

                }
            }
            else if(type_of_movement == 1){
                if (initial_top < final_top) {
                    clearInterval(id);
                 } else {
                    initial_top+=step_top; 
                    initial_left+=step_left;
                    elem.style.top = initial_top + 'px'; 
                    elem.style.left = initial_left + 'px'; 
                    
                }
            }
        } 
}

// This is the function called when flask is clicked. 
// It moves the beaker from the shelf to the table.
function moveFlask(){
        if(step_no==0){
            empty_flask = document.getElementById("round-bottom-flask");
            if( empty_flask.src == "image-specific/round-bottom-flask.png" )
            {
                alert("please first select the solvent from the solvent selection bar");
            }
            else {
                // Get image
                elem = document.getElementById("round-bottom-flask"); 
                //Detect thecurrent position of the flask.
                initial_top = Math.round($('#round-bottom-flask').position().top);
                initial_left = Math.round($('#round-bottom-flask').position().left);
                // Initialise all the values for the motion of the images.
                final_top = 305;
                step_top = 1;
                step_left = 0.3;
                type_of_movement = 0;
                // Move the flask image to desired position.
                moveImage();
                // Change to next intsruction to be followed.
                document.getElementById("solution_name").style.visibility ="hidden";
                document.getElementById("conc_scale").disabled = true;
                document.getElementById("conc_scale").style.opacity = "0.4";   
                document.getElementById("demo").innerHTML = "Step-No 3:Click on the quartz cuvette (path length 1x1cm) to take it to the instrument table. Quartz cuvettes for spectrophotometric measurements are transparent only on two opposite sides, unlke the  all-side transparent quartz cuvettes used for flourescence measurements.";
                step_no++;
          }
      }
  }

// This is the function called when quartz cuvette is clicked. 
// It moves the cuvette from the shelf to the table.
function moveCuvette() {
          if(step_no  == 1){
            // get the image of the shelf
            elem = document.getElementById("quartz_cuvette"); 
            // Move the cuvette from the shelf to the table
            // Detect the current position of the flask.
            initial_top = Math.round($('#quartz_cuvette').position().top);
            initial_left = Math.round($('#quartz_cuvette').position().left);
            // Initialise all the values for the motion of the images.
            final_top = 340;
            step_top = 1;
            step_left = -0.2;
            type_of_movement = 0;
            // Move it to the table.
            moveImage();
            // Change the next instruction to be followed.
            document.getElementById("demo").innerHTML = "Step-No 4: Click on the 5ml capacity pipette to collect 3ml of the experimental solution which will be transferred into the quartz cuvette. In the real operation, one has to set up the volume to 3ml in the pipette and an appropriate tip should be attatched prior to dipping it in the solution.";
            step_no++;
          }
          if(step_no == 9){
            // Depending on the cuvette choosen get images accordingly.
            elem = document.getElementById("quartz_cuvette"); 
            // Move the cuvette from the table to the socket in the spectrophotmeter.
            // Detect the current position of the flask.
            initial_top = Math.round($('#quartz_cuvette').position().top);
            initial_left = Math.round($('#quartz_cuvette').position().left);
            // Initialise all the values for the motion of the images.
            final_top = 221;
            step_top = -0.5;
            step_left = -1.97;
            type_of_movement = 1;
            // Move it to a position over the spectrophotometer.
            moveImage();
            // After 1200ms call moveDown() method.
            setTimeout("moveDown()",1500);
            step_no++;
        }

}

//This method is used to move the cuvette downwards into the spectrophotometer.
function moveDown(){
        // Detect the current position of the flask.
        initial_top = Math.round($('#quartz_cuvette').position().top);
        initial_left = Math.round($('#quartz_cuvette').position().left);
        // Initialise all the values for the motion of the images.
        final_top = 320;
        step_top = 1;
        step_left = 0;
        type_of_movement = 0;
        // Move it into the spectrophotometer.
        moveImage();
        // Call extraCuvette() method which moves the reference cuvette into the spectrophotometer.
        setTimeout("extraCuvette()",1000);
}

function extraCuvette(){
        // Get the transparent image and replace it with a reference cuvette image and move it down into the spectrophotometer.
        $('#ref_cuvette').attr('src', 'images/cuvette_filled_water.png'); 
        document.getElementById("reference").style.visibility ="visible";
        elem = document.getElementById("ref_cuvette"); 
        // Detect the current position of the flask.
        initial_top = Math.round($('#ref_cuvette').position().top);
        initial_left = Math.round($('#ref_cuvette').position().left);
        // Initialise all the values for the motion of the images.
        final_top = 102;
        step_top = 2;
        step_left = 0;
        type_of_movement = 0;
        // Move it into the spectrophotometer.
        moveImage();
        // After 800ms make the sample cuvette and the referance cuvette hidden and replace the spectrophotometer with an image that has cuvette within them. 
        setTimeout(function(){
            images[0] = "images/spec_open_cuvette.png";
            images[1] = "images/spec_open_cuvette.png";
            $('#ref_cuvette').attr('src', 'images/vertical_button.png'); 
            $('#quartz_cuvette').attr('src', 'images/vertical_button.png'); 
            document.getElementById("reference").style.visibility ="hidden";
        },1000);

}

// This function is called when we click on the pipette
function rotatePipette() {
          if(step_no == 2){
            // Get image
            elem = document.getElementById("pipette"); 
            var angle=0;
            var id = setInterval(function(){
            angle+=1;
            if(angle>=23){
                clearInterval(id);
            }
            $("#pipette").rotate(angle);
            },10);
            //Detect thecurrent position of the flask.
            initial_top = Math.round($('#pipette').position().top);
            initial_left = Math.round($('#pipette').position().left);
            // Initialise all the values for the motion of the images.
            final_top = 243;
            step_top = 1;
            step_left = -0.12;
            type_of_movement = 0;
            // Move the beaker image to desired position.
            moveImage();
            // Change to next intsruction to be followed.
            document.getElementById("demo").innerHTML = "Step-No 5: Click on the pipette to draw solution into it.";
            step_no++;
          }
          else if(step_no == 3){
            $("#pipette").rotate(0);
            elem.src = "image-specific/pipette-with-solution.png";
            elem.style.left = "225.16px";
            document.getElementById("demo").innerHTML = "Step-No 6: Click on the pipette to take it out of the volumetric flask.";
            step_no++;          
          }
          else if(step_no == 4){
            elem = document.getElementById("pipette");
             $("#pipette").animate({top: '210px'},"slow")
                          .animate({left: '330px'},"slow")
                          .animate({top: '230px'},"slow");
            // Change to next instruction to be followed.
            document.getElementById("demo").innerHTML = "Step-No 7:Click on the pipette again to transfer the solution into the cuvette ";
            step_no ++;
          }

          else if(step_no == 5){
            elem = document.getElementById("pipette");
             $("#pipette").rotate(34);
             $("#pipette").attr("src", "image-specific/pipette.png");
             $("#quartz_cuvette").attr("src", "image-specific/cuv.png");
            // Change to next instruction to be followed.
            document.getElementById("demo").innerHTML = "Step-No 7:Click on the pipette again to transfer the solution into the cuvette ";
            step_no ++;
            setTimeout(movebackPipette, 1000);
          }
}

  //This function is used to move the pipette back to the shelf.
    function movebackPipette() {
          elem = document.getElementById("pipette");
          // Detect the current position of the pipette.
          initial_top = Math.round($('#pipette').position().top);
          initial_left = Math.round($('#pipette').position().left);
          // Initialise all the values for the motion of the images.
          final_top = 23;
          step_top = -1;
          step_left = -.30;
          type_of_movement = 1;
          // Move it to the shelf
          moveImage();
          document.getElementById("demo").innerHTML = "Step-No 8: To start the absorption spectral scan. click on the pop-up 'start Absorption Measurement";
          setTimeout( function(){
            document.getElementById("popup").style.visibility = 'visible';
            document.getElementById("start").style.visibility = 'visible';
          }, 2000);
    }

    function showInstruction() {
      if(step_no == 6){
          document.getElementById("popup").style.visibility = 'hidden';
          document.getElementById("start").style.visibility = 'hidden';
          document.getElementById("demo").innerHTML = 'Step-No 9: Turn on the spectrometer clicking on the power button. In real operation it takes approx.30 min for initialization of the instrument.'
      step_no++;
      }
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
  if(step_no==7){
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
      // setTimeout("disposeClock()",3000);
      document.getElementById("demo").innerHTML = "Step-No 10: Click on the lid of the sample chamber of the spectrophotometer by clicking on the lid for placing the sample in the cell holder;"
      setTimeout("removeClock()",3000);
  }
}

function removeClock() {
  $('#clockHand, #clockScreen').remove();
}

    // First time its called to open the spectrophotometer
    // Second time its called to close the spectrophotometer
    function spectrophotometer(){

        if (step_no == 8){
            // Replace the spectrophotometer images with the open spectrophotometer images
            images[0] = "images/spec_open.png";
            images[1] = "images/spec_open.png";
            document.getElementById("demo").innerHTML = "Step-No 11: Click on the cuvette to place it in the sample holder. One has to use pure solvent as the sample bank or reference in this measurement. Here a double beam spectrophotometer is shown.";
            step_no++;
            }
        else if(step_no == 10){
            // Replace the spectrophotometer images with the closed spectrophotmeter images.
            images[0] = "images/spec_on_redLight.png";
            images[1] = "images/spec_on_no_redLight.png";
            document.getElementById("demo").innerHTML = "Step-No 12: Run the wavelength scan by clicking on the computer monitor and then on the scan button and observe the wavelength scan";
            step_no++;
        }

    }

     function scan(){
        if(step_no==11){
            // After the cuvette are inserted into the spectrophotometer, when the computer in pressed to scan, depending on the cuvette choosen appropriate graph video is obtained.
            var scan_graph = document.getElementById("scan_graph");
            var input1 = document.getElementById("input1");
            var input2 = document.getElementById("input2");
            var start_btn = document.getElementById("start_btn");
            var instruction_bkgd = document.getElementById("instruction_bkgd");
            var graph_instruction = document.getElementById("graph_instruction");
            scan_graph.style.visibility = "visible";
            input1.style.visibility = "visible";
            input2.style.visibility = "visible";
            start_btn.style.visibility = "visible";
            instruction_bkgd.style.visibility ="visible";

            if(sol_name == 0){
                graph_instruction.innerHTML = "On the screen enter the wavelength range of spectral scan. start: 430 nm End: 275 nm. In real operation, the wavelength range of incident light for the sample is chosen and the wavelength scan is run via the accompanied computer software. One can run the scan in absorbance (A)  or transmittance (%T) mode. Click on the green 'start' button on the measurement set-up screen to run the wavelength scan. Observe the wavelength scan.";
            }else if(sol_name ==1){
                graph_instruction.innerHTML = "On the screen enter the wavelength range of spectral scan. start: 430 nm End: 275 nm. In real operation, the wavelength range of incident light for the sample is chosen and the wavelength scan is run via the accompanied computer software. One can run the scan in absorbance (A)  or transmittance (%T) mode. Click on the green 'start' button on the measurement set-up screen to run the wavelength scan. Observe the wavelength scan.";            }
            else if(sol_name ==2){
                graph_instruction.innerHTML = "On the screen enter the wavelength range of spectral scan. start: 430 nm End: 275 nm. In real operation, the wavelength range of incident light for the sample is chosen and the wavelength scan is run via the accompanied computer software. One can run the scan in absorbance (A)  or transmittance (%T) mode. Click on the green 'start' button on the measurement set-up screen to run the wavelength scan. Observe the wavelength scan.";            }
            else if(sol_name ==3){
                graph_instruction.innerHTML = "On the screen enter the wavelength range of spectral scan. start: 430 nm End: 275 nm. In real operation, the wavelength range of incident light for the sample is chosen and the wavelength scan is run via the accompanied computer software. One can run the scan in absorbance (A)  or transmittance (%T) mode. Click on the green 'start' button on the measurement set-up screen to run the wavelength scan. Observe the wavelength scan.";            }
            else if(sol_name ==4){
                graph_instruction.innerHTML = "On the screen enter the wavelength range of spectral scan. start: 430 nm End: 275 nm. In real operation, the wavelength range of incident light for the sample is chosen and the wavelength scan is run via the accompanied computer software. One can run the scan in absorbance (A)  or transmittance (%T) mode. Click on the green 'start' button on the measurement set-up screen to run the wavelength scan. Observe the wavelength scan.";            }
            else if(sol_name ==5){
                graph_instruction.innerHTML = "On the screen enter the wavelength range of spectral scan. start: 430 nm End: 275 nm. In real operation, the wavelength range of incident light for the sample is chosen and the wavelength scan is run via the accompanied computer software. One can run the scan in absorbance (A)  or transmittance (%T) mode. Click on the green 'start' button on the measurement set-up screen to run the wavelength scan. Observe the wavelength scan.";            }
        }
    }

    function startBtn(){
                 var input1 = document.getElementById("input1").value;
                 var input2 = document.getElementById("input2").value;
                 var video1 = document.getElementById("video1");
                 var video2 = document.getElementById("video2");
                 var video3 = document.getElementById("video3");
                 var video4 = document.getElementById("video4");
                 var video5 = document.getElementById("video5");
                 var context = document.getElementById('scan');
            if(sol_name == 0 &&  input1 == 430 && input2 == 275){
                document.getElementById("scan_graph").style.visibility = "hidden";
                context.style.visibility='visible';
                video1.style.visibility='visible';
                document.getElementById("graph_instruction").innerHTML = "Click on the close button when the spectral scal is complete. In real operation, the scan data are stored in the computer. The instrument stores data and therefore asks for the Sample File name. One enters a file name to save the data.";
                document.getElementById("start_btn").style.visibility = 'hidden';
                document.getElementById("input1").style.visibility = 'hidden';
                document.getElementById("input2").style.visibility = 'hidden';
                video1.play();
                
            }
            
            else if(sol_name == 1 &&  input1 == 430 && input2 == 275){
                document.getElementById("scan_graph").style.visibility = "hidden";
                context.style.visibility='visible';
                video2.style.visibility='visible';
                document.getElementById("graph_instruction").innerHTML = "Click on the close button when the spectral scal is complete. In real operation, the scan data are stored in the computer. The instrument stores data and therefore asks for the Sample File name. One enters a file name to save the data.";
                document.getElementById("start_btn").style.visibility = 'hidden';
                document.getElementById("input1").style.visibility = 'hidden';
                document.getElementById("input2").style.visibility = 'hidden';
                video2.play();
            }
            else if(sol_name == 2  && input1 == 430 && input2 == 275){
                document.getElementById("scan_graph").style.visibility = "hidden";
                context.style.visibility='visible';
                video3.style.visibility='visible';
                document.getElementById("graph_instruction").innerHTML = "Click on the close button when the spectral scal is complete. In real operation, the scan data are stored in the computer. The instrument stores data and therefore asks for the Sample File name. One enters a file name to save the data.";
                document.getElementById("start_btn").style.visibility = 'hidden';
                document.getElementById("input1").style.visibility = 'hidden';
                document.getElementById("input2").style.visibility = 'hidden';
                video3.play();
            }
            else if(sol_name == 3  && input1 == 430 && input2 == 275){
                document.getElementById("scan_graph").style.visibility = "hidden";
                context.style.visibility='visible';
                video4.style.visibility='visible';
                document.getElementById("graph_instruction").innerHTML = "Click on the close button when the spectral scal is complete. In real operation, the scan data are stored in the computer. The instrument stores data and therefore asks for the Sample File name. One enters a file name to save the data.";
                document.getElementById("start_btn").style.visibility = 'hidden';
                document.getElementById("input1").style.visibility = 'hidden';
                document.getElementById("input2").style.visibility = 'hidden';
                video4.play();
            }
            else if(sol_name == 4  && input1 == 430 && input2 == 275){
                document.getElementById("scan_graph").style.visibility = "hidden";
                context.style.visibility='visible';
                video5.style.visibility='visible';
                document.getElementById("graph_instruction").innerHTML = "Click on the close button when the spectral scal is complete. In real operation, the scan data are stored in the computer. The instrument stores data and therefore asks for the Sample File name. One enters a file name to save the data.";
                document.getElementById("start_btn").style.visibility = 'hidden';
                document.getElementById("input1").style.visibility = 'hidden';
                document.getElementById("input2").style.visibility = 'hidden';
                video5.play();
            }
            else{
                alert("Enter start and end values and click start button on top of the window");
            }
    }

//This method makes the graph hidden once the video is played and close is pressed. 
function disposeGraph(){
          // After playing the graph plotting video close option is choosen, the background scan image and the video is mafde hidden.
            document.getElementById('video1').style.visibility='hidden';
            document.getElementById('video2').style.visibility='hidden';
            document.getElementById('video3').style.visibility='hidden';
            document.getElementById('video4').style.visibility='hidden';
            document.getElementById('video5').style.visibility='hidden';
            document.getElementById('scan').style.visibility='hidden';
            document.getElementById("graph_instruction").style.visibility ="hidden";
            document.getElementById("instruction_bkgd").style.visibility ="hidden";
}

  

    


// //This moves the flask to the table
// var solvent;
// function moveFlask(){
//   solvent = document.getElementById("slider").value;
//   console.log(solvent);
//   var img;
//   img = document.getElementById("round-bottom-flask");
//   var p,q;
//       p = Number(img.style.left.substring(0,2));
//       alert(p);
//       q = Number(img.style.top.substring(0,2));
//       alert(q);
//       var move_cuvette = setInterval(function(){
//         p=p+1;
//         img.style.left= String(p)+"%";
//         if(p>=35){
//           clearInterval(move_cuvette);
//         }
//       },30);
  
//     var movecuvette = setInterval(function(){
//         q=q+1;
//         img.style.top= String(q) + "%";
//         if(q>=190){
//           clearInterval(movecuvette);
//         }
//       },15);
//    img.style="position:absolute;top:190%;left:35%;z-index:47899";
//    document.getElementById("demo").innerHTML = "Click on the quartz cuvette (path length 1x1cm) to take it to the instrument table. Quartz cuvettes for spectrophotometric measurements are transparent only on two opposite sides, unlke the  all-side transparent quartz cuvettes used for flourescence measurements. ";

// }
// var index =0;
// function moveCuvette(){
//   if(index==0){
//   index ++;
//   var img;
//   img = document.getElementById("quartz-cuvette");
//   var p,q;
//       p = Number(img.style.left.substring(0,2));
//       q = Number(img.style.top.substring(0,2));
//       var move_cuvette = setInterval(function(){
//         p=p+1;
//         img.style.left= String(p)+"%";
//         if(p>=45){
//           clearInterval(move_cuvette);
//         }
//       },30);
  
//     var movecuvette = setInterval(function(){
//         q=q+1;
//         img.style.top= String(q) + "%";
//         if(q>=130){
//           clearInterval(movecuvette);
//         }
//       },15);
//   img.style = "position:absolute; top:130%;left:45%;z-index:10000";
//    document.getElementById("demo").innerHTML = "Click on the 5ml capacity pipette to collect 3ml of the experimental solution which will be transferred into the quartz cuvette. In the real operation, one has to set up the volume to 3ml in the pipette and an appropriate tip should be attatched prior to dipping it in the solution. ";
// index++;
//   }
//   if(take==10){
//       img = document.getElementById("quartz-cuvette");
//       var p,q;
//       p = Number(img.style.left.substring(0,2));
//       q = Number(img.style.top.substring(0,2));
//      var amovecuvette = setInterval(function(){
//         q=q-1;
//         img.style.top= String(q) + "%";
//         if(q<=5){
//           clearInterval(amovecuvette);
//         }
//       },100);    
//     var amove_cuvette = setInterval(function(){
//         p=p-1;
//         img.style.left= String(p)+"%";
//         if(p<=-45){
//           clearInterval(amove_cuvette);
//         }
//       },30);
//    img.parentNode.removeChild(img);
//    step_no=15;
// }
// }
// var count=0;
// function rotatePipette(){
//   var img;
//   count++;
//   if(count==1){
//   img = document.getElementById("pipette");
//   var angle=0;
//   var id = setInterval(function(){
//     angle+=1;
//     if(angle>=26.5){
//       clearInterval(id);
//     }
//     $("#pipette").rotate(angle);
//   },16.67);
//   var p,q;
//       p = Number(img.style.left.substring(0,2));
//       q = Number(img.style.top.substring(0,2));
//       var move_cuvette = setInterval(function(){
//         p=p+1;
//         img.style.left= String(p)+"%";
//         if(p>=35){
//           clearInterval(move_cuvette);
//         }
//       },30);
  
//     var movecuvette = setInterval(function(){
//         q=q+1;
//         img.style.top= String(q) + "%";
//         if(q>=140){
//           clearInterval(movecuvette);
//         }
//       },30);
//   img.style = "cursor:pointer;position:absolute; top:140% ; left:35% ; z-index:9999";
//   document.getElementById("demo").innerHTML = "Click on the pipette to draw solution into it.";
//   }
//   if(count==2){
//     img = document.getElementById("pipette");
//     img.src = "image-specific/pipette-with-solution.png";
//     $("#pipette").rotate(0);
//     document.getElementById("demo").innerHTML = "Click on the pipette to take it out of the volumetric flask.";   
//      img.style = "cursor:pointer;position:absolute; top:140% ; left:39.5% ; z-index:9999";
//   } 
//   if(count==3){
//     img = document.getElementById("pipette");
//      var p,q;
//       p = Number(img.style.left.substring(0,2));
//       q = Number(img.style.top.substring(0,2));
//       var move_cuvette = setInterval(function(){
//         p=p+1;
//         img.style.left= String(p)+"%";
//         if(p>=62.5){
//           clearInterval(move_cuvette);
//         }
//       },30);
//       var movecuvette = setInterval(function(){
//         q=q-1;
//         img.style.top= String(q) + "%";
//         if(q<=140){
//           clearInterval(movecuvette);
//         }
//       },15)
//     step_no=15;
//     //img.style = "position:absolute; top:120% ; left:62.5% ; z-index:9999";
//      document.getElementById("demo").innerHTML = "Click on the pipette again to put the solution into the cuvette.";
//   }
//   if(count==4){
//     img = document.getElementById("pipette");
//     img.src = "image-specific/pipette.png";
//     img.style = "cursor:pointer;position:absolute; top:10% ; left:30%;";
//     step_no=8;
//      document.getElementById("demo").innerHTML = "Click on the pop-up saying Start Absorption Measurement.";
//     popUpMeasure();
//   }
// }

// function popUpMeasure(){
//   var img;
//   img = document.getElementById("popup");
//   img.src = "image-specific/popup.png";
//   img.onclick = function(){
//     img.src="";
//      document.getElementById("demo").innerHTML = "Turn on the spectrophotometer by clicking the button and after that, open the lid.";
// };
// }
// var take;  
// function spectrophotometer(){
// if(step_no!=15){
//             images[0] = "images/spec_open.png";
//             images[1] = "images/spec_open.png";
//             document.getElementById("demo").innerHTML = "Click on the cuvette to place it in the sample holder. One has to use pure solvent as the sample blank or the reference in the measurement. Here a double beam spectrophotometer is shown.";
//  take=10;
//   }
//  else{
//             console.log("called");
//             images[0] = "images/spec_on_redLight.png";
//             images[1] = "images/spec_on_no_redLight.png";
//             document.getElementById("demo").innerHTML = "Run the wavelength scan by clicking on the computer monitor and then on the scan button and observe the wavelength scan";
//         }
// } 

// function input(){
// var img,button,input1,input2;
// img = document.getElementById("form");
// button = document.getElementById("start-button");
// input1 = document.getElementById("input1");
// input2 = document.getElementById("input2");
// img.style.visibility = 'visible';
// button.style.visibility = 'visible';
// input1.style.visibility = 'visible';
// input2.style.visibility = 'visible';
// }

// function graphresult(){
// var img,button,input1,input2;
// img = document.getElementById("form");
// button = document.getElementById("start-button");
// input1 = document.getElementById("input1");
// input2 = document.getElementById("input2");
// img.style="position:absolute;top:-30px;left:-40px;z-index:41137848484874;height:115%;width:115%;visibility:hidden;";
// button.style="position:absolute;left:675px;top:80px;cursor:pointer;z-index:4113784848488;visibility:hidden;";
// input1.style="position:absolute;left:413px;top:307px;visibility:hidden;z-index:4113784848488;width:7%";
// input2.style="position:absolute;left:523px;top:307px;visibility:hidden;z-index:4113784848488;width:7%";
// var vid;
//   if(solvent=="0"){
//    vid = document.getElementById("0");
//             }
//  if(solvent=="1"){
//    vid = document.getElementById("1");
//             }
//  if(solvent==2){
//    vid = document.getElementById("2");
//             }
//  if(solvent==3){
//    vid = document.getElementById("3");
//             }
//  if(solvent==4){
//    vid = document.getElementById("4");
//             }

//             var contex=document.getElementById('scan');
//             contex.style.visibility='visible';
//             vid.style.visibility='visible';
//             vid.play(); 
//          step_no=12;
// }

// function disposeGraph(){
//         if(step_no==12){
//             document.getElementById('0').style.visibility='hidden';
//             document.getElementById('1').style.visibility='hidden';
//             document.getElementById('2').style.visibility='hidden';
// document.getElementById('3').style.visibility='hidden';
// document.getElementById('4').style.visibility='hidden';
//             document.getElementById('scan').style.visibility='hidden';
//         }

//     }
