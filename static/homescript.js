const mobile_nav = document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector(".header");

const toggleNavbar = () => {
    nav_header.classList.toggle("active");
};

mobile_nav.addEventListener("click", () => toggleNavbar());

var timeout;

let mm = gsap.matchMedia();
mm.add("(min-width: 600px)", () => {
  gsap.to("#frame1 h1", {
    transform: "translateX(-180%)",
    fontWeight: "80",
    scrollTrigger: {
      trigger: "#frame1",
      scroller: "body",
      start: "top 0",
      end: "end -200%",
      scrub: 2,
      pin: true,
    }
  });
})


//Mouse Follower
Shery.mouseFollower();

//Magnet Effect
Shery.makeMagnet(".magnet");

// events

gsap.to(".events-info", {
    scrollTrigger: {
      trigger: ".events-details",
      pin: true,
      start: "top top",
      end: "bottom bottom",
      endTrigger: ".last",
      scrub: 1,
    },
    y: "-300%",
    ease: Power1,
  });
  

  let sections = document.querySelectorAll(".align");
  Shery.imageEffect(".images", {
    // style: 1,
    config: { onMouse: { value: 1 } },
    slideStyle: (setScroll) => {
      sections.forEach(function (section, index) {
        ScrollTrigger.create({
          trigger: section,
          start: "top top",
          scrub: 1,
          onUpdate: function (prog) {
            setScroll(prog.progress + index);
          },
        });
      });
    },
  });
  
