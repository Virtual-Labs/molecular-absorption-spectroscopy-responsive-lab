    // This file contains all general functions used in the experiment

    var images = [];
    var x = 0;
    var y = 0;
    var initial_top;
    var initial_left;
    var elem;
    var img,img1;
    var id,id1;
    var step_no=0;// This variable is used to perform all the actions in the required sequence. Depending on the value of this variable the part of the method is called.
    // var solution=1;// Indicates type of solution being used.
    var chosen_solution = 'Coumarin343';
    var chosen_conc ='0';
    var slider_range = 1; 
    images[0] = "images/spec_on_redLight.png";
    images[1] = "images/spec_on_no_redLight.png";

    // This method is called when the page is loaded. It helps in providing basic functionality to two buttons manual and data and also sets the first set of instructions
    function initial_function(){

        document.getElementById("data_button").addEventListener("click", function() {
            popitup("slideshow.html");
        }, false);


        // Method is called when the solution is changed. change in solution changes the saturation of flask and scale range.
        $('#solution').change(function () {
            var chosen_solution = $('#solution').val();      
            if(chosen_solution =='Coumarin343'){
                solution = 1;
                document.getElementById('slider_bkgd').src = "images/scale1.png";
                document.getElementById('beaker').style.filter='grayscale(100%)';
            }
            else if(chosen_solution =='Coumarin6'){
                solution = 2;
                document.getElementById("flask").src= "images/darkerflask.png";
                document.getElementById('slider_bkgd').src = "images/scale2.png";
                document.getElementById('beaker').style.filter='grayscale(100%)';   
            }
            else if(chosen_solution == "1:1mixture"){
                solution = 3;
                document.getElementById("flask").src = "images/darkerflask.png";
                document.getElementById('scale').style.visibility = 'hidden';
                // document.getElementById('beaker').style.filter='grayscale(100%)'; 
            }
        });

        // Method is called when the slider range is changed.
        $('#conc_scale').change(function () {
            var chosen_conc = $("#conc_scale").val();
            var chosen_solution = $('#solution').val(); 
            
            if(chosen_conc=='0' &&  chosen_solution =='Coumarin343'){
                slider_range = 1;
            }
            else if(chosen_conc=='1' &&  chosen_solution =='Coumarin343'){
                 slider_range = 2;
            }
            else if(chosen_conc=='2' &&  chosen_solution =='Coumarin343'){
                 slider_range = 3;
            }
            else if(chosen_conc=='3' &&  chosen_solution =='Coumarin343'){
                 slider_range = 4;
            }
            else if(chosen_conc=='4' &&  chosen_solution =='Coumarin343'){
                 slider_range = 5;
            }
            else if(chosen_conc=='0' &&  chosen_solution =='Coumarin6'){
                 slider_range = 6;
            }
            else if(chosen_conc=='1' &&  chosen_solution =='Coumarin6'){
                 slider_range = 7;
            }
            else if(chosen_conc=='2' &&  chosen_solution =='Coumarin6'){
                 slider_range = 8;
            }
            else if(chosen_conc=='3' &&  chosen_solution =='Coumarin343'){
                 slider_range = 9;
            }
            else if(chosen_conc=='4' &&  chosen_solution =='Coumarin343'){
                 slider_range = 10;
            }
            else{
                 slider_range = 11;
            }
        });

        // Intial intrsuction to be followed
        document.getElementById("demo").innerHTML = "Step-No 1: The solutions to be analyzed are selcted from the drop-down menu. The solution concentrations are selected from the concentration scale bars & turn on the instrument clicking on the power button and wait for 30 mins for initialization of the instrument.";

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
            },50);
            step_no++;
            //After 10 secs dispose clock
            // setTimeout("disposeClock()",3000);
            setTimeout("removeClock()",3000);
        }
    }

    // After 30 seconds of display of the timer the visibility of clock is changed back to hidden.
    // function disposeClock(){
    //     // Make the visiblility of the obtained images hidden.
    //     document.getElementById('clockScreen').style.visibility='hidden';
    //     document.getElementById('clockHand').style.visibility='hidden';
    //     // Change to next intsruction to be followed.
    //     document.getElementById("demo").innerHTML = "Step-No 2: Click on the beaker to take 1 clean, dry beaker.";
    // }

    function removeClock() {
        $('#clockHand, #clockScreen').remove();
        $("#solution").prop("disabled", true);
        document.getElementById("solution").style.opacity = "0.4";
        //Change to next intsruction to be followed.
        document.getElementById("demo").innerHTML = "Step-No 2: Click on the beaker to take a clean, dry beaker.";
    }
    
    // First time its called to open the spectrophotometer
    // Second time its called to close the spectrophotometer
    function spectrophotometer(){

        if (step_no == 8){
            // Replace the spectrophotometer images with the open spectrophotometer images
            images[0] = "images/spec_open.png";
            images[1] = "images/spec_open.png";
            document.getElementById("demo").innerHTML = "Step-No 9: Click on the cuvette to place it in the sample holder. Place the sample blank in the reference holder and the sample in the sample holder & Run the scan (A versus).";
            step_no++;
            }
        else if(step_no == 10){
            // Replace the spectrophotometer images with the closed spectrophotmeter images.
            images[0] = "images/spec_on_redLight.png";
            images[1] = "images/spec_on_no_redLight.png";
            document.getElementById("demo").innerHTML = "Step-No 10: Similarly run the spectral scans for all the other samples proceeding from lower concentrations to higher concentrations. Every time one should rinse the cuvette taking a small portion of the solution from the solution that will be analyzed. Repeat the same thing for other solutions.";
            step_no++;
        }

    }

    // This method is used to play a video which shows constructing graphs based on their sample path length. 
    function scan(){
        if(step_no==11){
            // After the cuvette are inserted into the spectrophotometer, when the computer in pressed to scan, depending on the cuvette choosen appropriate graph video is obtained.
            if( slider_range==1){
                var vid = document.getElementById("graph1");
            }
            else if( slider_range==2){
                var vid = document.getElementById("graph2");
            }
            else if( slider_range==3){
                var vid = document.getElementById("graph3");
            }
            else if( slider_range==4){
                var vid = document.getElementById("graph4");
            }
            else if( slider_range==5){
                var vid = document.getElementById("graph5");
            }
            else if( slider_range==6){
                var vid = document.getElementById("graph6");
            }
            else if( slider_range==7){
                var vid = document.getElementById("graph7");
            }
            else if( slider_range==8){
                var vid = document.getElementById("graph8");
            }
            else if( slider_range==9){
                var vid = document.getElementById("graph9");
            }
            else if( slider_range==10){
                var vid = document.getElementById("graph10");
            }
            else{
                var vid = document.getElementById("graph11");
            }

            // Get the scan image background.                                                               }
            var context=document.getElementById('scan');
            // make the image and video obtained visible.
            context.style.visibility='visible';
            vid.style.visibility='visible';
            //play the video.
            vid.play(); 
            step_no++;
        }
    }

    // This method makes the graph hidden once the video is played nad close is pressed. 
    function disposeGraph(){
        if(step_no==12){
            // After playing the graph plotting video close option is choosen, the background scan image and the video is mafde hidden.
            document.getElementById('graph1').style.visibility='hidden';
            document.getElementById('graph2').style.visibility='hidden';
            document.getElementById('graph3').style.visibility='hidden';
            document.getElementById('graph4').style.visibility='hidden';
            document.getElementById('graph5').style.visibility='hidden';
            document.getElementById('graph6').style.visibility='hidden';
            document.getElementById('graph7').style.visibility='hidden';
            document.getElementById('graph8').style.visibility='hidden';
            document.getElementById('graph9').style.visibility='hidden';
            document.getElementById('graph10').style.visibility='hidden';
            document.getElementById('graph11').style.visibility='hidden';
            document.getElementById('scan').style.visibility='hidden';
        }

    }