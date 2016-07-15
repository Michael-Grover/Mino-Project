$(document).ready(function(){
    console.log("begun");

    $('h2.maleSwitch').on('click', function() {
            $('img.male').toggle();
    });
    $('h2.femaleSwitch').on('click', function() {
            $('img.female').toggle();
    });
    $('h2.antimaleSwitch').on('click', function() {
            $('img.antimale').toggle();
    });
    $('h2.antifemaleSwitch').on('click', function() {
            $('img.antifemale').toggle();
    });
    

        
        /*
        clickedId = $(this).attr('class');
        shownImage = "#" + clickedId + "_img";
        currentAudio = "audio/" + clickedId + ".mp3";
        console.log(clickedId);
        console.log(shownImage);
        $('img').hide();  
        $(shownImage).show();
        
        audioElement.setAttribute('src', currentAudio);
        audioElement.play();
        */
        
        //$('img').delay(300).hide();
        //$(shownimage).delay(1000).hide();
        //$('#neutral_img').delay(300).show();

        
       
   
});