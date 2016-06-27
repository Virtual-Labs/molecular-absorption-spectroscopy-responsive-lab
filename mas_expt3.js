    var images = [];
    var x = 0;
    var y = 0;
    var initial_top;
    var initial_left;
    var elem;
    var img,img1;
    var mql;
    var id,id1;
    var step_no=0;// This variable is used to perform all the actions in the required sequence. Depending on the value of this variable the part of the method is called.
    var cuv;// indicates which cuvette
    images[0] = "images/spec_on_redLight.png";
    images[1] = "images/spec_on_no_redLight.png";

    // This method is called when the page is loaded. It helps in providing basic functionality to two buttons manual and data and also sets the first set of instructions
    function initial_function(){

        document.getElementById("data_button").addEventListener("click", function() {
            popitup("slideshow.html");
        }, false);

        // Intial intrsuction to be followed
        document.getElementById("demo").innerHTML = "Step-No 1: Turn on the instrument clicking on the power button and wait for 30 min for initialization of the instrument.";

        var modal = document.getElementById('manual');

        // Get the button that opens the manual modal
        var btn = document.getElementById("manual_button");

        // Get the <span> element that closes the manual modal
        var span = document.getElementsByClassName("close")[0];

        // When the user clicks the button, open the manual modal 
        btn.onclick = function() {
            modal.style.display = "block";
        }

        // When the user clicks on <span> (x), close the modal
        span.onclick = function() {
            modal.style.display = "none";
        }

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    }
    // When user clicks on the Data button it redirects him to the page containing slideshow of three graphs obtained from three different sample lengths
    function popitup(url) {
        // Opens a new browser window called newwindow. url specifies the URL of the page to open.
        newwindow=window.open(url,'name','height=300,width=250',"_parent");
        // Sets focus to the new window if the focus is on the previous page.
        if (window.focus) {
            newwindow.focus()
        }
        return false;
    }

    // When the user clicks on reset experiment this method is called
    function reload(){
        // Reloads the current document.
        location.reload();
    }

    // When the user switches on the spectrophotometer this method is called. Here the spectrophotometer image is changed continuously  to give the blinking light effect. The two images that are swapped is stored in images[]
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

    // This method displays a timer which runs for 30 seconds. There exists two images which are hidden initailly; when this method is called they are amde visible and the clock hand is made to rotate.  
    function showClock(){
        if(step_no==0){
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
            },170);
            step_no++;
            //After 10 secs dispose clock
            setTimeout("disposeClock()",10000);
        }
    }

    // After 30 seconds of display of the timer the visibility of clock is changed back to hidden.
    function disposeClock(){
        // Make the visiblility of the obtained images hidden.
        document.getElementById('clockScreen').style.visibility='hidden';
        document.getElementById('clockHand').style.visibility='hidden';
        // Change to next intsruction to be followed.
        document.getElementById("demo").innerHTML = "Step-No 2: Click on the beaker to take clean, dry beaker";
    }

    // When this method is called for the first time the tansparent image button on the shelf flask is replaced with an image of the flask and is moved down and the shlef image is changed to an image with no flask.
    // When this method is called for the second time the moveFlask() method is called.
    function flask() {
        if ( step_no == 2){
            // Get images
            img = document.getElementById('shelf');
            // Change the source of the image of the shelf to an image without beaker and flask
            img.src = "images/shelf_without_beaker_flask.png";
            // Replace the transparent button with an image of flask.
            $('#flask').attr('src', 'images/flask.png'); 
            elem = document.getElementById("flask"); 
            initial_top= 0;
            initial_left = 0;
            // Move the flask image to desired position.
            id = setInterval(frame, 5);
            function frame() {
                if (initial_top == 305) {
                    clearInterval(id);
                } else {
                    initial_top++; 
                    initial_left+=0.8;
                    elem.style.top = initial_top + 'px'; 
                    elem.style.left = initial_left + 'px'; 

                }
            } 
            // Change to next intsruction to be followed.
            document.getElementById("demo").innerHTML = "Step-No 4: Click on the Conical flask to pour the solution into clean, dry beaker";
            step_no += 1;
        }
        else if(step_no==3){
            document.getElementById("flask").onclick = moveFlask();
            step_no++;
        }
    }

    // This method helps in moving the flask in upward direction and then calls changeFlask() and moveFlask1()
    function moveFlask() {
        // Get image
        elem = document.getElementById("flask"); 
        initial_top = 200;
        initial_left = 200;
        // Move the flask image to desired location. 
        id = setInterval(frame, 5);
        function frame() {
           if (initial_left == 245) {
                clearInterval(id);
            } else {
                initial_top-=0.01; 
                initial_left++;
                elem.style.top = initial_top + 'px'; 
                elem.style.left = initial_left + 'px'; 
            }
        }
        // Call changeFlask() at a regular interval of 50 ms.
        id1 = setInterval(changeFlask,50);
        // Change to next intsruction to be followed.
        document.getElementById("demo").innerHTML = "Step-No 5: Click on the micropipette to collect appropriate quantity of solution from the beaker";
        // Call moveFlaskBack() to move it back to the table.
        setTimeout("moveFlaskBack()",1725);
    }

    // This method provides rotational motion along with the solution pouring effect to the flask and filling effect to the beaker. It consists of a set of 30 images flask[] changed continuously.
    function changeFlask(){
        img = document.getElementById("flask");
        img1 = document.getElementById("beaker");
        var flask =[];
        flask[0] = "images/flask1.png";
        flask[1] = "images/flask2.png";
        flask[2] = "images/flask3.png";
        flask[3] = "images/flask4.png";
        flask[4] = "images/flask5.png";
        flask[5] = "images/flask6.png";
        flask[6] = "images/flask7.png";
        flask[7] = "images/flask8.png";
        flask[8] = "images/flask9.png";
        flask[9] = "images/flask10.png";
        flask[10] = "images/flask11.png";
        flask[11] = "images/flask12.png";
        flask[12] = "images/flask13.png";
        flask[13] = "images/flask14.png";
        flask[14] = "images/flask15.png";
        flask[15] = "images/flask16.png";
        flask[16] = "images/flask17.png";
        flask[17] = "images/flask18.png";
        flask[18] = "images/flask19.png";
        flask[19] = "images/flask20.png";
        flask[20] = "images/flask21.png";
        flask[21] = "images/flask22.png";
        flask[22] = "images/flask22.png";
        flask[23] = "images/flask22.png";
        flask[24] = "images/flask22.png";
        flask[25] = "images/flask23.png";
        flask[26] = "images/flask24.png";
        flask[27] = "images/flask25.png";
        flask[28] = "images/flask26.png";
        flask[29] = "images/flask26.png";

        if(y < flask.length){
            img.src = flask[y];
        }

        y++;

        if (y == 3){
            img.style.width = '11%';
        }
        if (y == 16){
            img.style.width = '15%';
            img1.src = "images/beaker0.png";
        }
        if (y == 25){
            img.style.width = '14%';
            img1.src = "images/beaker2.png";
        }
        if(y == 30){
            //img1.src = "images/beaker2.png";
            clearInterval(id1);
        }
    }

    // This method helps in moving back the empty flask back to the table
    function moveFlaskBack() {
        // Get image
        elem = document.getElementById("flask");
        initial_top = 200;
        initial_left = 235; 
        // Move it back to the table
        elem.style.width = "8%"
        elem.src= "images/69.png"; 
        id2 = setInterval(frame, 10);
           function frame() {
           if (initial_left == 200) {
                clearInterval(id2);
           } else {
                initial_top+=3; 
                initial_left--;
                elem.style.top = initial_top + 'px'; 
                elem.style.left = initial_left + 'px'; 
            } 
        }
    }

    // When this method is called the tansparent image button on the shelf beaker is replaced with an image of the beaker and is moved down and the shelf image is changed to an image with no beaker.
    function beaker() {
      if(step_no==1){
        // Get image
        img = document.getElementById('shelf');
        // Change the image of the shelf to an image without beaker.
        img.src = "images/shelf_without_beaker.png";
        // Change the trasparent button over beaker to an image of the beaker
        $('#beaker').attr('src', 'images/beaker.png'); 
        elem = document.getElementById("beaker"); 
        // Move the beaker.
        initial_top = 0;
        initial_left = 318;
           id = setInterval(frame, 5);
           function frame() {
                if (initial_top == 305) {
                    clearInterval(id);
                } else {
                    initial_top++; 
                    elem.style.top = initial_top + 'px'; 
                    elem.style.left = initial_left + 'px'; 
                }
            }
            // Change to next intsruction to be followed.
            document.getElementById("demo").innerHTML = "Step-No 3: Click on the Conical flask to take it to experiment table";
            step_no++;
        }
    }

    // When this method is called for the first time the tansparent image button on the shelf pipette is replaced with an image of the pipette and is moved down and the shelf image is changed to an image with no pipette.
    // When this method is called for the first time fillPipette() method is called.
    // When this method is called for the third time movePipette() method is called.
    function pipette() {
        if ( step_no == 4){
            // Get image
            img = document.getElementById('shelf');
            // Change the image of the shelf to an image without pipette.
            img.src = "images/shelf_without_beaker_flask_pipette.png";
            // Change the trasparent button over pipette to an image of the pipette
            $('#pipette').attr('src', 'images/pipette.png'); 
            elem = document.getElementById("pipette"); 
            // Move the pipette.
            initial_top = 0;
            initial_left = 200;
            id = setInterval(frame, 5);
            function frame() {
                if (initial_top == 280) {
                    clearInterval(id);
                } else {
                    initial_top++; 
                    initial_left+=0.5;
                    elem.style.top = initial_top + 'px'; 
                    elem.style.left = initial_left + 'px'; 
                }
            }
            $('#pipette').attr('src', 'images/pipette_inside.png'); 
            // Change to next instruction to be followed. 
            document.getElementById("demo").innerHTML = "Step-No 5: Click on the micropipette to collect appropriate quantity of solution from the beaker";
            step_no += 1;
        }

        else if(step_no==5){
            fillPipette();
            // Change to next instruction to be followed.
            document.getElementById("demo").innerHTML = "Step-No 6: Take cuvette by clicking on it";
            step_no += 1;
        }

        else if(step_no==7){
            movePipette();
            // Change to next instruction to be followed.
            document.getElementById("demo").innerHTML = "Step-No 8:Click on the spectrophotometer lid to open it ";
            step_no +=1;
        }
    }

    // This method replaces the beaker image with less amount of solution.
    function fillPipette() {
        img = document.getElementById("beaker");
        img.src = "images/beaker1.png";
        setTimeout(function() {
            img.src = "images/beaker3.png";
        }, 1000);
    }
    
    // This method moves the filled pipette to the cuvette and replaces that cuvette image to a filled cuvette image
    function movePipette(){
        elem = document.getElementById("pipette"); 
        initial_top = 290;
        initial_left = 280;
        id = setInterval(frame, 5);
           function frame() {
                if (initial_left == 253) {
                    clearInterval(id);
            } else {
                initial_top--; 
                initial_left--;
                elem.style.top = initial_top + 'px'; 
                elem.style.left = initial_left + 'px'; 
            }
        }
        setTimeout(function() {
            if(cuv==1){
                img = document.getElementById("cuvette1");
            }
            if(cuv==2){
                img = document.getElementById("cuvette2");
            }
            if(cuv==3){
                img = document.getElementById("cuvette3");
            }
            img.src = "images/cuvette_filled.png";
        }, 1000);
    }

    // When this method is called for the first time the tansparent image button on the shelf cuvette is replaced with an image of the cuvette and is moved down and the shelf image is changed to an image with no cuvette depending on the cuvette clicked.
    // When this method is called for the second time the cuvette is moved upto the spectrophotometer.
    function cuvette(event){
        if ( step_no == 6){
            img = document.getElementById('shelf');
            if(event.id=="cuvette1"){
                img.src = "images/shelf_without_cuvette.png";
                $('#cuvette1').attr('src', 'images/176.png'); 
                elem = document.getElementById("cuvette1"); 
                cuv = 1;
            } 
            if(event.id=="cuvette2"){
                img.src = "images/shelf_without_cuvette2.png";
                $('#cuvette2').attr('src', 'images/176.png'); 
                elem = document.getElementById("cuvette2"); 
                cuv = 2;
            } 
            if(event.id=="cuvette3"){
                img.src = "images/shelf_without_cuvette3.png";
                $('#cuvette3').attr('src', 'images/176.png'); 
                elem = document.getElementById("cuvette3"); 
                cuv = 3;
            } 
            elem.style.width = "2.5%";
            initial_top = 10;
            initial_left = 400;
            id = setInterval(frame, 5);
            function frame() {
                if (initial_top == 340) {
                    clearInterval(id);
            } else {
                initial_top++; 
                initial_left-=0.4;
                elem.style.top = initial_top + 'px'; 
                elem.style.left = initial_left + 'px'; 
                 
                }
           }
            document.getElementById("demo").innerHTML = "Step-No 7: Pour the solution from the micropipette into the cuvette by clicking on the cuvette(In actual measurements the cuvette is filled to two-third of its volume";
            step_no++;
        }
        else if(step_no == 9){
            if(event.id=="cuvette1"){
                elem = document.getElementById("cuvette1");
            } 
            if(event.id=="cuvette2"){
                elem = document.getElementById("cuvette2");
            } 
            if(event.id=="cuvette3"){
                elem = document.getElementById("cuvette3");
            } 
            initial_top = 320;
            initial_left = 290;
            id = setInterval(frame, 5);
            function frame() {
                if (initial_top == 212 ) {
                    clearInterval(id);
                } else {
                    initial_top-=0.5; 
                    initial_left-=2;
                    elem.style.top = initial_top + 'px'; 
                    elem.style.left = initial_left + 'px'; 
                }
            }
            setTimeout("moveDown()",1200);
            step_no++;
        }
    }

    // This method is used to move the cuvette downwards into the spectrophotometer.
    function moveDown(){
        initial_top = 212;
        id1 = setInterval(frame, 5);
        function frame() {
            if (initial_top == 299 ) {
                clearInterval(id1);
            } else {
               initial_top+=1; 
               elem.style.top = initial_top + 'px'; 
            }
        }
      setTimeout("extraCuvette()",1000);
    }

    // This method is used to move the reference cuvette into the spectrophptometer. 
    function extraCuvette(){
        $('#ref_cuvette').attr('src', 'images/cuvette_filled_water.png'); 
        var elem1 = document.getElementById("ref_cuvette"); 
        initial_top = 10;
        var id2 = setInterval(frame, 5);
        function frame() {
           if (initial_top == 92) {
             clearInterval(id2);
           } else {
                initial_top++; 
                elem1.style.top = initial_top + 'px'; 
                elem1.style.left = "412px"; 

           }
         }
        setTimeout(function(){
            images[0] = "images/spec_open_cuvette.png";
            images[1] = "images/spec_open_cuvette.png";
            $('#ref_cuvette').attr('src', 'images/vertical_button.png'); 
            $('#cuvette1').attr('src', 'images/vertical_button.png'); 
            $('#cuvette2').attr('src', 'images/vertical_button.png'); 
            $('#cuvette3').attr('src', 'images/vertical_button.png'); 

        },800);

    }
    
    // First time its called to open the spectrophotometer
    // Second time its called to close the spectrophotometer
    function spectrophotometer(){

        if (step_no == 8){
            images[0] = "images/spec_open.png";
            images[1] = "images/spec_open.png";
            document.getElementById("demo").innerHTML = "Step-No 9: Click on the cuvette to palce it in the sample holder. One has to use water as the sample bank or reference in this measurement. Here a double beam spectrophotometer is shown.In this case one can place the sample in the sample holder(often the front one) and sample bank or reference in the reference holder(often the back one simultaneously.";
            step_no++;
            }
        else if(step_no == 10){
            images[0] = "images/spec_on_redLight.png";
            images[1] = "images/spec_on_no_redLight.png";
            document.getElementById("demo").innerHTML = "Step-No 10: Run the wavelength scan by clicking on the computer monitor and then on the scan button and observe the wavelength scan";
            step_no++;
        }

    }

    // This method is used to play a video which shows constructing graphs based on their sample path length. 
    function scan(){
        if(step_no==11){
            if(cuv==1){
                var vid = document.getElementById("10mm_graph");
            }
            else if(cuv==2){
                var vid = document.getElementById("5mm_graph");
            }
            else if(cuv==3){
                var vid = document.getElementById("1mm_graph");
                                                                            }
            var context=document.getElementById('scan');
            context.style.visibility='visible';
            vid.style.visibility='visible';
            vid.play(); 
         step_no++;
        }
    }

    // This method makes the graph hidden once the video is played nad close is pressed. 
    function disposeGraph(){
        if(step_no==12){
            document.getElementById('10mm_graph').style.visibility='hidden';
            document.getElementById('5mm_graph').style.visibility='hidden';
            document.getElementById('1mm_graph').style.visibility='hidden';
            document.getElementById('scan').style.visibility='hidden';
        }

    }