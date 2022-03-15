document.addEventListener('DOMContentLoaded', ()=>{

    let tl = gsap.timeline();

    tl.from(".menu-1" , {
        duration: 1,
        ease: "power3.out",
        opacity:0,
        y:50,
        delay: 1
    })

    .from(".menu-2" , {
        duration: 1,
        ease: "power3.out",
        y:50,
        opacity:0,
    }, "-=0.8")

    .from(".menu-3" , {
        duration: 1,
        ease: "power3.out",
        y:50,
        opacity:0,
    }, "-=0.8")

    .from(".container-item div", {
        duration: 1,
        ease: "power3.out",
        y:300,
        opacity:0,
        
    } , "-=0.8")
    .from(".button-1", {
        duration: 1,
        ease: "power3.out",
        y:300,
        opacity:0,
        
    } , "-=0.8")
    .from(".bg-techer", {
        duration: 1,
        ease: "power3.out",
        y:300,
        opacity:0,
        
    } , "-=0.8")


})


