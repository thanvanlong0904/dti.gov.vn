$(document).ready(function(){
    $(".click-1").click(function(){
        $(this).css('background-color','#337ab7');
        $(".click-1 ").css('cursor', 'auto');
        $(".click-2 ").css('background-color','#808080');
        $(".click-3 ").css('background-color','#808080');
        var img1 =   $(".slide-1").attr('src');
        $(".slide-0").attr('src',img1);
      return false;
    });
    $(".click-2").click(function(){
        $(this).css('background-color','#337ab7');
        $(".click-1 ").css('cursor', 'pointer');
        $(".click-1 ").css('background-color','#808080');
        $(".click-3 ").css('background-color','#808080');
        var img2 =   $(".slide-2").attr('src');
        $(".slide-0").attr('src',img2);
      return false;
    });
    $(".click-3").click(function(){
        $(this).css('background-color','#337ab7');
        $(".click-1 ").css('cursor', 'pointer');
        $(".click-1 ").css('background-color','#808080');
        $(".click-2 ").css('background-color','#808080');
        var img3 =   $(".slide-3").attr('src');
        $(".slide-0").attr('src',img3);
      return false;
    });
});
// phần email

$(document).ready(function(){
  $("button").click(function(){
    var text = $("input#text").val();
    if( text == ""){
      $(".note-email-no .note-pn").css( 'display', 'block');
      $(".note-email-ok .note-po").hide();
     $(".note-email-no .note-pn").hide(9000);
      return false;
    }else{
      $(".note-email-no .note-pn").hide();
      $(".note-email-ok  .note-po").css( {display: 'block' , background: 'green'});
      $(".note-email-ok .note-po").hide(9000);
      return false;
    }
  })
})




$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
loop:true,
margin:10,
responsiveClass:true,
autoplay:true,
nav:false,
responsive:{
0:{
  items:1,
  nav:true
}
}
})

$('.owl-carousel1').owlCarousel({
  loop:true,
  margin:10,
  responsiveClass:true,
  autoplay:true,
  responsive:{
      0:{
          items:4,
         
      }
      // 600:{
      //     items:3
      // },
      // 1000:{
      //     items:5
      // }
  }
})
});

