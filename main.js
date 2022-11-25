"use strict";

gsap.registerPlugin(Flip);

const items = document.querySelectorAll(".nav-items a");
const activeNav = document.querySelector(".active-nav");

items.forEach((item) => {
  item.addEventListener("click", (e) => {
    // Make items blue
    gsap.to(items, { color: "#222" });
    if (document.activeElement === e.target) {
      gsap.to(item, { color: "rgb(75, 20, 177)" });
    }

    // Move line
    const state = Flip.getState(activeNav);
    item.appendChild(activeNav);
    Flip.from(state, {
      duration: 1.25,
      absolute: true,
      ease: "elastic(1, 0.5)",
    });
  });
});

// Cards
const card = document.querySelectorAll(".card");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    // Get State
    const state = Flip.getState(cards);

    // Set active class
    const isCardActive = card.classList.contains("active");
    cards.forEach((otherCard, otherIndex) => {
      otherCard.classList.remove("active");
      otherCard.classList.remove("is-inactive");
    });
  });
});
