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
    
    $('img.think').hover(function() {
        $('h1.I, h1.N').toggleClass( "on" );
    });
    
    $('img.fb').hover(function() {
        $('h1.M, h1.I, h1.N, h1.O').toggleClass( "on" );
    });
       
    
    $('img.about').hover(function() {
        $('h1.M, h1.I, h1.N, h1.O').toggleClass( "on" );
        $('p.aboutText').toggle();
    });
    
    $('img.talk').hover(function() {
        $('h1.M, h1.I, h1.N, h1.O').toggleClass( "on" );
    });
    
    $('img.nosebook').hover(function() {
        $('h1.I, h1.O').toggleClass( "on" );
    });
    
    $('iframe.meeting').hover(function() {
        $('h1.M, h1.I, h1.N, h1.O').toggleClass( "on" );
    });
       
   
});