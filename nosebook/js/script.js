$(document).ready(function(){
    console.log("begun");

    $('img.nose').hover(function() {
        $('h1.M, h1.O, h1.I').toggleClass( "on" );
    });
                    
    $('img.mg').hover(function() {
        $('h1.M, h1.I, h1.O, h1.N').toggleClass( "on" );
    });

    $('img.shame').hover(function() {
        $('h1.M, h1.I, h1.O').toggleClass( "on" );
    });
    
    $('img.gender').hover(function() {
        $('h1.M, h1.I').toggleClass( "on" );
    });
    
    $('img.journal').hover(function() {
        $('h1.M, h1.I, h1.O, h1.N').toggleClass( "on" );
    });
       
       
   
});