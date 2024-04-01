var csrs= document.querySelector("#cursor")
var blur = document.querySelector("#cursor-blur");
document.addEventListener("mousemove", function(dets){
    csrs.style.left = dets.x+"px"
    csrs.style.top = dets.y+"px"
    blur.style.left = dets.x - 250 + "px";
    blur.style.top = dets.y - 250 + "px";
})


gsap.to("#nav", {
    backgroundColor: "#000",
    height: "90px",
    duration: 0.5,
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        // markers: true,
        start: "top -7%",
        end: "top -9%",
        scrub: 2
    }
});

gsap.to("#main",{
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        start: "top -25%",
        end: "top -70%",
        scrub: 2
    }
})
// gsap.from("#about img,#aboutUs", {
//     y: 90,
//     opacity: 0,
//     duration: 1,
//     scrollTrigger: {
//         trigger: "#aboutUs",
//         scroller: "body",
//         // markers:true,
//         start: "top 70%",
//         end: "top 65%",
//         scrub: 1,
//     },
// });

// gsap.from(".card", {
//     scale: 0.8,
//     // opacity:0,
//     duration: 1,
//     stagger: 0.1,
//     scrollTrigger: {
//       trigger: ".card",
//       scroller: "body",
//       // markers:false,
//       start: "top 70%",
//       end: "top 65%",
//       scrub: 1,
//     },
//  });



gsap.from("#colon1", {
    y: -70,
    x: -70,
    scrollTrigger: {
      trigger: "#colon1",
      scroller: "body",
      // markers:true,
      start: "top 55%",
      end: "top 45%",
      scrub: 4,
    },
});

gsap.from("#colon2", {
    y: 70,
    x: 70,
    scrollTrigger: {
      trigger: "#colon1",
      scroller: "body",
    //   markers:true,
      start: "top 55%",
      end: "top 45%",
      scrub: 4,
    },
});