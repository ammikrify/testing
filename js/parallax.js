      // This code loads only when  html doucment is ready

      $(document).ready(function() {

        // this function will keep on checks the offset of the scroller, while we scroll
    function  updatePosition(){
     position.innerHTML = this.y>>0;
     var pos = position.innerHTML ;
         var half = pos/2;
         if(half<-171){
         	half = -171;
         }
     $('.navbar1').css('background-position-y',half);
     if(pos>-342){
     
        $('.navbar1').css('background-image','none');
     }
     else{
       $('.navbar1').css('background-image','url(./images/tiger.jpg)');
     }




     // Changing opacity of both top header and bottom header of the slider
    $('.profile-pic').css('top',(this.y)/2);
    var opacity =-(this.y/100);
     var opacity2 =-(this.y/100)+2;
    $('.navbar1').css('background-color','rgba(10,10,10,'+opacity/7+')');
    $('.navbar2').css('background-color','rgba(10,10,10,'+opacity2/5+')');
    if(pos<-342){
      $('.navbar1>.container').css('background-color','rgba(10,10,10,0.5)');
    }
    else{
      $('.navbar1>.container').css('background-color','rgba(10,10,10,0)');
    }
    }


     // Creating scroll Object for easy scrolling(its a plugin Code)

      var scroll = new IScroll('#scroll', { probeType: 3 });
      new IScrollSticky(scroll, 'div.stick');

       scroll.on('scroll',updatePosition);
      scroll.on('scrollEnd',updatePosition);
      
      });
 
  