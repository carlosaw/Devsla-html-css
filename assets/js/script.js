const btnMenu = document.querySelector(".btnMenu");
  const bars = document.querySelector(".bars");
  const areaMenu = document.querySelector(".areaMenu");

  btnMenu.addEventListener("click", (event) => {
    event.preventDefault();
    areaMenu.classList.add("menuActived");
    document.querySelector(".areaOfContent").style.filter = "blur(3px)";
    document.documentElement.style.overflow = "hidden";
  });

  function closeMenu() {
    areaMenu.classList.remove("menuActived");
    document.querySelector(".areaOfContent").style.filter = "none";
    document.documentElement.style.overflow = "auto";
  }

  bars.addEventListener("click", closeMenu);
  areaMenu.addEventListener("click", (event) => {
    if (event.target === areaMenu) {
      closeMenu();
    }
  });