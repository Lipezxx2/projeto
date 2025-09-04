 // Header scroll effect
      window.addEventListener("scroll", function () {
        const header = document.querySelector("header");
        if (window.scrollY > 50) {
          header.classList.add("scrolled");
        } else {
          header.classList.remove("scrolled");
        }
      });

      // Mobile menu toggle
      document
        .getElementById("mobile-menu-btn")
        .addEventListener("click", function () {
          document.getElementById("nav_list").classList.toggle("mobile-open");
        });

      // Slider functionality
      document.addEventListener("DOMContentLoaded", function () {
        const slides = document.querySelectorAll(".slide");
        const dots = document.querySelectorAll(".slider-dot");
        const prevBtn = document.querySelector(".arrow.prev");
        const nextBtn = document.querySelector(".arrow.next");
        let currentSlide = 0;
        let slideInterval;

        function showSlide(n) {
          slides.forEach((slide) => slide.classList.remove("active"));
          dots.forEach((dot) => dot.classList.remove("active"));

          currentSlide = (n + slides.length) % slides.length;

          slides[currentSlide].classList.add("active");
          dots[currentSlide].classList.add("active");
        }

        function nextSlide() {
          showSlide(currentSlide + 1);
        }

        function startSlideShow() {
          slideInterval = setInterval(nextSlide, 5000);
        }

        // Click events for dots
        dots.forEach((dot, index) => {
          dot.addEventListener("click", () => {
            clearInterval(slideInterval);
            showSlide(index);
            startSlideShow();
          });
        });

        // Arrow controls
        prevBtn.addEventListener("click", () => {
          clearInterval(slideInterval);
          showSlide(currentSlide - 1);
          startSlideShow();
        });

        nextBtn.addEventListener("click", () => {
          clearInterval(slideInterval);
          showSlide(currentSlide + 1);
          startSlideShow();
        });

        // Initialize slideshow
        startSlideShow();

        // ScrollReveal animations
        ScrollReveal().reveal(".section-title, .section-subtitle", {
          delay: 200,
          origin: "top",
          distance: "30px",
          duration: 800,
          easing: "ease-in-out",
        });

        ScrollReveal().reveal(".dish", {
          delay: 300,
          origin: "bottom",
          distance: "30px",
          duration: 800,
          interval: 200,
          easing: "ease-in-out",
          beforeReveal: function (el) {
            el.classList.add("animated");
          },
        });

        // Cart functionality
        //const cartButtons = document.querySelectorAll(".add-to-cart-btn");
        //const cartCount = document.querySelector(".cart-count");
        //let count = 0;

        cartButtons.forEach((button) => {
          button.addEventListener("click", function (e) {
            e.preventDefault();
            count++;
            cartCount.textContent = count;

            // Animation effect
            cartCount.parentNode.classList.add(
              "animate__animated",
              "animate__bounceIn"
            );
            setTimeout(() => {
              cartCount.parentNode.classList.remove(
                "animate__animated",
                "animate__bounceIn"
              );
            }, 1000);
          });
        });
      });