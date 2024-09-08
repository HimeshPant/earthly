gsap.to(".main2 h1",{
    width:"100%",
    scrollTrigger:{
        trigger:".main m2",
        scroller:"body",
        marker:true,
        start:"top 0",
        end:"top -100",
        scrub:2,
        pin:true,

    }
})