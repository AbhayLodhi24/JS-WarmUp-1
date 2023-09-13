/**
    Step1: Find course is inside rectangle or not.
    Step2: Find course is in left side of the rectangle or in right side of the rectangle.
    Step3: Map the values of darkest color to the  leftmost corner of rectangle and gradually decrease its intensity 
            as we are moving towards center similar map the low intensity of blue color to the center and increase the 
            intensity as we move the right-most corner of the rectangle.
 */

const rect = document.getElementById("rect");
let k = 0 ;
rect.addEventListener("mousemove",function(e){
    const rectStart = rect.getBoundingClientRect();
    const rectLocation = e.clientX - rectStart.x ;
  
    if(rectLocation < rectStart.width/2){
         const redColor = gsap.utils.mapRange(0,rectStart.width/2,255, 0 ,rectLocation);
        gsap.to(rect, {
            backgroundColor: `rgb(${redColor}, 0 , 0)`,
            ease: Power4
        });
    }
    else{
         const blueColor = gsap.utils.mapRange(rectStart.width/2,rectStart.y, 0 , 255,rectLocation);
         gsap.to(rect, {
            backgroundColor: `rgb(0,0,${blueColor})`,
            ease: Power4
        });
    }
});

rect.addEventListener("mouseleave", function(){
    gsap.to(rect, {
        backgroundColor:"white"
    });
});