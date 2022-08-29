$('.fonts').css({'left' : `-${$('.fontButtons').outerWidth()+7}px`});





$('.fontIcon').click(()=>{
    if($('.fonts').css('left')=='0px'){
        $('.fonts').animate({'left' : `-${$('.fontButtons').outerWidth()+7}px`},1000);
        
    }
    else{
        $('.fonts').animate({'left' : `0px`},1000);
         console.log($('.fonts').css('left'));
    }

})



$('.fontButtons button').click(function(){
    $('body,html').css({'font-family':$(this).css("font-family")})
})
