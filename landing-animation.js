var tl=gsap.timeline();
tl.from('#dron',{y:'30vh',x:'50vw',duration:4,delay:8})
tl.from('.home-content h1',{opacity:0,duration:6},'=-4')
tl.from("#cam-3",{y:'-100%',duration:1},'=-2')
tl.from("#cam-2",{y:'100%',duration:1})
tl.from("#cam-1",{y:'-100%',duration:1});
tl.from(".home-button",{y:'200px',opacity:0,duration:1});

//scroll parallax
var scrollprev=0;

window.addEventListener('scroll',()=>{
    var scrolly=window.scrollY;
    var width=window.innerWidth;
    console.log(scrolly,'translate('+.1*scrolly+'px,'+1.3*scrolly+'px)')
    document.getElementById('cam-1').style.transform='translateX('+-1*scrolly+'px) rotate('+.05*scrolly+'deg)';
     document.getElementById('cam-3').style.transform='translateY('+-.4*scrolly+'px) rotate('+-.05*scrolly+'deg)';
      document.getElementById('cam-2').style.transform='translateX('+-.4*scrolly+'px) ';
      document.querySelector('.drone-imgs').style.transform='translate('+.00007*scrolly*width+'px,'+1.3*scrolly+'px)';

    if(scrolly>scrollprev){
        document.getElementById('navbar').style.transform='translateY(-600px)';

    }else{
         document.getElementById('navbar').style.transform='translateY(0px)';
   
    }
    
  scrollprev=scrolly;
})

//services animation

tl2=gsap.timeline({repeat:-1});

tl2.fromTo("#service-1",{y:"-300px",opacity:0},{y:0,duration:2,opacity:1},"=-.3")
tl2.to("#service-1",{y:"300px",duration:2,opacity:0,delay:2},"=-.3")
tl2.fromTo("#service-2",{y:"-300px",opacity:0},{y:0,duration:2,opacity:1},"=-.3")
tl2.to("#service-2",{y:"300px",duration:2,opacity:0,delay:2},"=-.3")
tl2.fromTo("#service-3",{y:"-300px",opacity:0},{y:0,duration:2,opacity:1},"=-.3")
tl2.to("#service-3",{y:"300px",duration:2,opacity:0,delay:2},"=-.3")
tl2.fromTo("#service-4",{y:"-300px",opacity:0},{y:0,duration:2,opacity:1},"=-.3")
tl2.to("#service-4",{y:"300px",duration:2,opacity:0,delay:2},"=-.3")




tl3=gsap.timeline({repeat:-1});

tl3.fromTo("#servicebg-1",{y:"300px",opacity:0},{y:0,duration:2,opacity:1},"=-.3")
tl3.to("#servicebg-1",{y:"-300px",duration:2,opacity:0,delay:2},"=-.3")
tl3.fromTo("#servicebg-2",{y:"300px",opacity:0},{y:0,duration:2,opacity:1},"=-.3")
tl3.to("#servicebg-2",{y:"-300px",duration:2,opacity:0,delay:2},"=-.3")
tl3.fromTo("#servicebg-3",{y:"300px",opacity:0},{y:0,duration:2,opacity:1},"=-.3")
tl3.to("#servicebg-3",{y:"-300px",duration:2,opacity:0,delay:2},"=-.3")
tl3.fromTo("#servicebg-4",{y:"300px",opacity:0},{y:0,duration:2,opacity:1},"=-.3")
tl3.to("#servicebg-4",{y:"-300px",duration:2,opacity:0,delay:2},"=-.3")


//mixitup
window.lazySizesConfig = window.lazySizesConfig || {};
//only for demo in production I would use normal expand option 
window.lazySizesConfig.expand = 9;
$(function(){
    $('#Container').mixItUp();  
});

// https://mixitup.kunkalabs.com/



//preloader



$(document).ready(function() {
//Preloader
preloaderFadeOutTime = 500;
function hidePreloader(){

var preloader = $('.spinner-wrapper');
preloader.delay(8000).fadeOut(preloaderFadeOutTime);
}
hidePreloader();
document.querySelector('.body-wrapper').style.display='block';
});





$(".not-home").hide();
$("#navbar").hide();
// Execute something when DOM is ready:
$(document).ready(function(){
// Delay the action by 10000ms
setTimeout(function(){
// Display the div containing the class "bottomdiv"
$(".not-home").show();
document.querySelector('.body-wrapper').style.height='auto';
$("#navbar").show();
//document.querySelector('.body-wrapper').style.height='auto';
}, 18000);
});

