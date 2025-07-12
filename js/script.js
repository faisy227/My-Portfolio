
    /**
     * PRELOADER
     */

    const preloader = document.querySelector("[data-preloader]");

    window.addEventListener("DOMContentLoaded", function () {
      preloader.classList.add("loaded");
      document.body.classList.add("loaded");
    });

    // Header scroll effect
    const header = document.querySelector('.header');
    window.addEventListener('scroll', function() {
      if (window.scrollY > 100) {
        header.classList.add('active');
      } else {
        header.classList.remove('active');
      }
    });

    // Mobile menu toggle
    const navTogglers = document.querySelectorAll('[data-nav-toggler]');
    const navbar = document.querySelector('[data-navbar]');
    const overlay = document.querySelector('[data-overlay]');

    const toggleNav = function() {
      navbar.classList.toggle('active');
      overlay.classList.toggle('active');
      document.body.classList.toggle('nav-active');
      
      // Toggle the hamburger icon
      navTogglers.forEach(toggler => {
        toggler.classList.toggle('active');
      });
    }

    navTogglers.forEach(toggler => {
      toggler.addEventListener('click', toggleNav);
    });

    overlay.addEventListener('click', toggleNav);

    // Close navbar when clicking on a link
    const navbarLinks = document.querySelectorAll('.navbar-link');
    navbarLinks.forEach(link => {
      link.addEventListener('click', toggleNav);
    });

    // Experience tabs
    const experienceTabBtns = document.querySelectorAll('.experience-tab-btn');
    const experienceTabContents = document.querySelectorAll('.experience-tab-content');

    const changeExperienceTab = function() {
      // Remove active class from all buttons and contents
      experienceTabBtns.forEach(btn => btn.classList.remove('active'));
      experienceTabContents.forEach(content => content.classList.remove('active'));
      
      // Add active class to clicked button and corresponding content
      this.classList.add('active');
      const tabContent = document.querySelector(`[data-tab-content="${this.dataset.tabBtn}"]`);
      tabContent.classList.add('active');
    }

    experienceTabBtns.forEach(btn => {
      btn.addEventListener('click', changeExperienceTab);
    });

    // Project slider
   /**
     * SLIDER
     */

    const sliders = document.querySelectorAll("[data-slider]");

    const initSlider = function (currentSlider) {

      const sliderContainer = currentSlider.querySelector("[data-slider-container]");
      const sliderPrevBtn = currentSlider.querySelector("[data-slider-prev]");
      const sliderNextBtn = currentSlider.querySelector("[data-slider-next]");

      let totalSliderVisibleItems = Number(getComputedStyle(currentSlider).getPropertyValue("--slider-items"));
      let totalSlidableItems = sliderContainer.childElementCount - totalSliderVisibleItems;

      let currentSlidePos = 0;

      const moveSliderItem = function () {
        sliderContainer.style.transform = `translateX(-${sliderContainer.children[currentSlidePos].offsetLeft}px)`;
      }

      /**
       * NEXT SLIDE
       */
      const slideNext = function () {
        const slideEnd = currentSlidePos >= totalSlidableItems;

        if (slideEnd) {
          currentSlidePos = 0;
        } else {
          currentSlidePos++;
        }

        moveSliderItem();
      }

      sliderNextBtn.addEventListener("click", slideNext);

      /**
       * PREVIOUS SLIDE
       */
      const slidePrev = function () {
        if (currentSlidePos <= 0) {
          currentSlidePos = totalSlidableItems;
        } else {
          currentSlidePos--;
        }

        moveSliderItem();
      }

      sliderPrevBtn.addEventListener("click", slidePrev);

      const dontHaveExtraItem = totalSlidableItems <= 0;
      if (dontHaveExtraItem) {
        sliderNextBtn.style.display = 'none';
        sliderPrevBtn.style.display = 'none';
      }

      /**
       * RESPONSIVE
       */

      window.addEventListener("resize", function () {
        totalSliderVisibleItems = Number(getComputedStyle(currentSlider).getPropertyValue("--slider-items"));
        totalSlidableItems = sliderContainer.childElementCount - totalSliderVisibleItems;

        moveSliderItem();
      });

    }

    for (let i = 0, len = sliders.length; i < len; i++) { initSlider(sliders[i]); }
