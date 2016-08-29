    // This file contains all general functions used in the experiment


    var images = [];// Two images that are alternated in ordered to get the blinking effect of the spectrophotometer
    images[0] = "images/spec_on_redLight.png";
    images[1] = "images/spec_on_no_redLight.png";
    var x = 0;
    var y = 0;
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
    var solution=1;// Indicates type of solution being used.
    

    // This method is called when the page is loaded. It helps in providing basic functionality to two buttons manual and data and also sets the first set of instructions
    function initial_function(){

        document.getElementById("data_button").addEventListener("click", function() {
            popitup("slideshow.html");
        }, false);
        // Method is called when the solution is changed. Here the change in solution is marked by chamging the grayscale of flask and beaker.
        $('#solution').change(function () {
            var chosen_solution = $('#solution').val();      
            if(chosen_solution=='caffeine'){
                solution = 2;
                console.log(solution);
                document.getElementById('flask').style.filter='grayscale(100%)';
                document.getElementById('beaker').style.filter='grayscale(100%)';
            }
            else{
                solution = 1;
                document.getElementById('flask').style.filter='grayscale(0%)';
                document.getElementById('beaker').style.filter='grayscale(0%)';

            }
            
        });
        // Intial intrsuction to be followed
        document.getElementById("demo").innerHTML = "Step-No 1: Prepare following two solutions: a) 0.001M of potassium dichromate (K2Cr2O7) and b) 5mg/L caffeine in distilled water. Here the solutions are shown in two volumetric flasks. One can select a solution for measurement by clicking on desired solution from the dropdown menu. Turn on the instrument clicking on the power button and wait for 30 min for initialization of the instrument.";

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

    // When user clicks on the Data button it redirects him to the page containing slideshow of three 
    // graphs obtained from three different sample lengths
    function popitup(url) {
        // Opens a new browser window called newwindow. url specifies the URL of the page to open.
        newwindow=window.open(url,'name','height=380,width=350',"_parent");
        // Sets focus to the new window if the focus is on the previous page.
        if (window.focus) {
            newwindow.focus()
        }
        return false;
    }


    // When the user switches on the spectrophotometer this method is called. Here the spectrophotometer image is changed 
    // continuously  to give the blinking light effect. The two images that are swapped is stored in images[]
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
        // $("#solution").prop("disabled", true);
        // document.getElementById("solution").style.opacity = "0.4";
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
            },50);
            step_no++;
            //After 10 secs dispose clock
            setTimeout("removeClock()",3000);
        }
    }

    // After 30 seconds of display of the timer the visibility of clock is changed back to hidden.
    // function disposeClock(){
    //     // Make the visiblility of the obtained images hidden.
    //     document.getElementById('clockScreen').style.visibility='hidden';
    //     document.getElementById('clockHand').style.visibility='hidden';
    //     // Change to next intsruction to be followed.
    //     document.getElementById("demo").innerHTML = "Step-No 2: Click on the beaker to take clean, dry beaker";
    // }

    function removeClock() {
        $('#clockHand, #clockScreen').remove();
        //Change to next intsruction to be followed.
        document.getElementById("demo").innerHTML = "Step-No 2: Click on the beaker to take clean, dry beaker";
    }

    // First time its called to open the spectrophotometer
    // Second time its called to close the spectrophotometer
    function spectrophotometer(){

        if (step_no == 8){
            // Replace the spectrophotometer images with the open spectrophotometer images
            images[0] = "images/spec_open.png";
            images[1] = "images/spec_open.png";
            document.getElementById("demo").innerHTML = "Step-No 9: Click on the cuvette to place it in the sample holder. One has to use water as the sample bank or reference in this measurement. Here a double beam spectrophotometer is shown.In this case one can place the sample in the sample holder(often the front one) and sample bank or reference in the reference holder(often the back one simultaneously.";
            step_no++;
            }
        else if(step_no == 10){
            // Replace the spectrophotometer images with the closed spectrophotmeter images.
            images[0] = "images/spec_on_redLight.png";
            images[1] = "images/spec_on_no_redLight.png";
            document.getElementById("demo").innerHTML = "Step-No 10: Run the wavelength scan by clicking on the computer monitor and then on the scan button and observe the wavelength scan";
            step_no++;
        }

    }

    // This method is used to play a video which shows constructing graphs based on their sample path length. 
    // function scan(){
    //     if(step_no==11){
    //         // After the cuvette are inserted into the spectrophotometer, when the computer in pressed to scan, depending on the cuvette choosen appropriate graph video is obtained.
    //         if(solution==1){
    //             var vid = document.getElementById("graph1");
    //         }
    //         if(solution==2){
    //             var vid = document.getElementById("graph2");
    //         }
    //         // Get the scan image background.                                                               }
    //         var context=document.getElementById('scan');
    //         // make the image and video obtained visible.
    //         context.style.visibility='visible';
    //         vid.style.visibility='visible';
    //         //play the video.
    //         vid.play(); 
    //         step_no++;
    //     }
    // }

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

            if(solution == 1){
                graph_instruction.innerHTML = "On the screen enter the wavelength range of spectral scan. For K2Cr2O7: start: 700 nm End: 325 nm. In real operation, the wavelength range of incident light for the sample is chosen and the wavelength scan is run via the accompanied computer software. One can run the scan in absorbance (A)  or transmittance (%T) mode. Click on the green 'start' button on the measurement set-up screen to run the wavelength scan. Observe the wavelength scan. If the spectrophotometer is a single beam instrument, then first the sample blank or reference is taken in a cuvette and the wavelength scan is run followed by the sample. One has to subtract the reference data from the sample data for respective wavelengths";
            }else if(solution ==2){
                graph_instruction.innerHTML = "On the screen enter the wavelength range of spectral scan. For caffeine: start: 590 nm End: 290 nm. In real operation, the wavelength range of incident light for the sample is chosen and the wavelength scan is run via the accompanied computer software. One can run the scan in absorbance (A)  or transmittance (%T) mode. Click on the green 'start' button on the measurement set-up screen to run the wavelength scan. Observe the wavelength scan. If the spectrophotometer is a single beam instrument, then first the sample blank or reference is taken in a cuvette and the wavelength scan is run followed by the sample. One has to subtract the reference data from the sample data for respective wavelengths";
            }
        }
    }

    function startBtn(){
             var input1 = document.getElementById("input1").value;
             var input2 = document.getElementById("input2").value;
             var video1 = document.getElementById("graph1");
             var video2 = document.getElementById("graph2");
             var context = document.getElementById('scan');
            if(solution == 1 &&  input1 == 700 && input2 == 325){
                document.getElementById("scan_graph").style.visibility = "hidden";
                context.style.visibility='visible';
                video1.style.visibility='visible';
                document.getElementById("graph_instruction").innerHTML = "Click on the close button when the spectral scal is complete. In real operation, the scan data are stored in the computer. The instrument stores data and therefore asks for the Sample File name. One enters a file name to save the data.";
                document.getElementById("start_btn").style.visibility = 'hidden';
                document.getElementById("input1").style.visibility = 'hidden';
                document.getElementById("input2").style.visibility = 'hidden';
                video1.play();
                
            }
            
            else if(solution == 2 && input1 == 590 && input2 == 290){
                document.getElementById("scan_graph").style.visibility = "hidden";
                context.style.visibility='visible';
                video2.style.visibility='visible';
                document.getElementById("graph_instruction").innerHTML = "Click on the close button when the spectral scal is complete. In real operation, the scan data are stored in the computer. The instrument stores data and therefore asks for the Sample File name. One enters a file name to save the data.";
                document.getElementById("start_btn").style.visibility = 'hidden';
                document.getElementById("input1").style.visibility = 'hidden';
                document.getElementById("input2").style.visibility = 'hidden';
                video2.play();
            }
            else{
                alert("Enter start and end values and click start button on top of the window");
            }
    }

    //This method makes the graph hidden once the video is played and close is pressed. 
    function disposeGraph(){
            // After playing the graph plotting video close option is choosen, the background scan image and the video is mafde hidden.
            document.getElementById('graph1').style.visibility='hidden';
            document.getElementById('graph2').style.visibility='hidden';
            document.getElementById('scan').style.visibility='hidden';
            document.getElementById("graph_instruction").style.visibility ="hidden";
            document.getElementById("instruction_bkgd").style.visibility ="hidden";
    }