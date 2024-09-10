gsap.to(".main2 h1",{
  transform:translateX("200"),
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
