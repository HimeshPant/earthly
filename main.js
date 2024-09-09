gsap.to(".main2 h1",{
  x:"150",
    scrollTrigger:{
        trigger:".main2",
        scroller:"body",
        markers:true,
        // translate:"100",
        start:"top 10",
        end:"top 100",
        scrub:8,
        pin:true,

    }
})