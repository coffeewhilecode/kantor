window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;
  if (
    scrollPosition > 200 &&
    document.getElementById("header")?.classList.contains("absolute")
  ) {
    document.getElementById("header")?.classList.remove("bottom-0");
    document.getElementById("header")?.classList.remove("absolute");
    document.getElementById("header")?.classList.add("sticky");
    document.getElementById("header")?.classList.add("top-0");
  }
  if (
    scrollPosition < 200 &&
    document.getElementById("header")?.classList.contains("sticky")
  ) {
    document.getElementById("header")?.classList.remove("sticky");
    document.getElementById("header")?.classList.remove("top-0");
    document.getElementById("header")?.classList.add("absolute");
    document.getElementById("header")?.classList.add("bottom-0");
  }
});
