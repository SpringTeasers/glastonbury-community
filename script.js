/* ==========================================================================
   Glastonbury Community Site — progressive enhancement
   Everything on this site works with JavaScript disabled. This file only
   adds two cosmetic behaviours allowed by design/system.md §4.2 and §5.1:
     1. the sticky header's soft shadow once the page has scrolled
     2. closing the <details> mobile menu when a nav link is followed
   No content, no navigation and no link is produced here.
   ========================================================================== */
(function () {
  "use strict";

  var header = document.querySelector(".site-header");
  if (header) {
    var setScrolled = function () {
      header.classList.toggle("is-scrolled", window.scrollY > 4);
    };
    setScrolled();
    window.addEventListener("scroll", setScrolled, { passive: true });
  }

  /* The mobile menu is a native <details>, so it is fully operable with JS
     off. This only collapses it after an in-page navigation click, so the
     panel isn't left open behind the reader. */
  var menu = document.getElementById("site-menu");
  if (menu) {
    menu.addEventListener("click", function (event) {
      if (event.target.closest("a")) {
        menu.removeAttribute("open");
      }
    });
  }
})();
