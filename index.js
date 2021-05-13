const burgerIcon = document.querySelector("#burger");
const navbarMenu = document.querySelector("#navbar-menu");

burgerIcon.addEventListener("click", () => {
  navbarMenu.classList.toggle("is-active");
});

const tabs = document.querySelectorAll(".tabs li");
const tabsContentBoxes = document.querySelectorAll("#tab-content > div");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((item) => item.classList.remove("is-active"));
    tab.classList.add("is-active");
    const target = tab.dataset.target;
    tabsContentBoxes.forEach((box) => {
      if (box.getAttribute("id") === target) {
        box.classList.remove("is-hidden");
      } else {
        box.classList.add("is-hidden");
      }
    });
  });
});

const signup = document.querySelector("#signup");
const modal = document.querySelector(".modal");
const modalBackground = document.querySelector(".modal-background");

signup.addEventListener("click", () => {
  modal.classList.add("is-active");
});

modalBackground.addEventListener("click", () =>
  modal.classList.remove("is-active")
);
