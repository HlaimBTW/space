const mains = document.getElementsByClassName("main");
const images = document.querySelectorAll("img");
const text = document.querySelectorAll(".text");

gsap.registerPlugin(ScrollTrigger);
gsap.utils.toArray(images).forEach((image, i) => {
  gsap.from(image, {
    scrollTrigger: {
      start: "-30% top",
      end: "100% bottom",
      trigger: image,
      scrub: 2,
    },
    opacity: 0,
    x: -200,
    scale: 3,
    duration: 1,
    ease: Expo.easeInOut,
  });
});
gsap.utils.toArray(text).forEach((txt, i) => {
  gsap.from(txt, {
    scrollTrigger: {
      start: "top 30%",
      end: "80% bottom",
      trigger: txt,

      scrub: 1,
    },
    opacity: 0,
    x: -200,
    duration: 1,
    ease: Expo.easeInOut,
  });
});
