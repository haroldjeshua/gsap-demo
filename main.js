"use strict";

gsap.registerPlugin(Flip);

const items = document.querySelectorAll(".nav-items a");
const activeNav = document.querySelector(".active-nav");

items.forEach((item) => {
  item.addEventListener("click", (e) => {
    gsap.to(items, { color: "#222" });

    if (document.activeElement === e.target) {
      gsap.to(item, { color: "rgb(75, 20, 177)" });
    }
  });
});
