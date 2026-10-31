document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".reveal");

  elements.forEach((el, i) => {
    setTimeout(() => el.classList.add("visible"), 200 + i * 160);
  });
});
