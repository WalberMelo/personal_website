export function smoothNavigation() {
  //Smooth scrolling animation
  const allLinks = document.querySelectorAll("a:link");

  allLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const href = link.getAttribute("href");

      //Scroll back top
      if (href === "#")
        //scrollTo - top page value known pixel
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      //scroll other links
      else if (href !== "#" && href.startsWith("#")) {
        const sectionEl = document.querySelector(href);
        sectionEl.scrollIntoView({ behavior: "smooth" });
      }

      //close mobile navigation when link class appear after click
      if (link.classList.contains("main-nav-link")) {
        headerEl.classList.toggle("nav-open");
      }
    });
  });
}
