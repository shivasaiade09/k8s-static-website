/* ==========================================
   TRANSPORTATION WEBSITE - SCRIPT.JS
========================================== */

document.addEventListener("DOMContentLoaded", function () {

    /* ==========================
       MOBILE MENU
    ========================== */

    const menuBtn = document.querySelector(".menu-btn");
    const navLinks = document.querySelector(".nav-links");

    if (menuBtn && navLinks) {
        menuBtn.addEventListener("click", () => {
            navLinks.classList.toggle("show");
        });
    }

    /* ==========================
       CLOSE MENU AFTER CLICK
    ========================== */

    const links = document.querySelectorAll(".nav-links a");

    links.forEach(link => {
        link.addEventListener("click", () => {
            if (navLinks) {
                navLinks.classList.remove("show");
            }
        });
    });

    /* ==========================
       STICKY HEADER
    ========================== */

    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {

        if (!header) return;

        if (window.scrollY > 80) {

            header.style.background = "#ffffff";
            header.style.boxShadow = "0 5px 20px rgba(0,0,0,.15)";

        } else {

            header.style.background = "#ffffff";
            header.style.boxShadow = "0 2px 10px rgba(0,0,0,.08)";
        }

    });

    /* ==========================
       SMOOTH SCROLL
    ========================== */

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            e.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {

                target.scrollIntoView({
                    behavior: "smooth"
                });

            }

        });

    });

    /* ==========================
       COUNTER ANIMATION
    ========================== */

    const counters = document.querySelectorAll(".counter");

    const startCounter = () => {

        counters.forEach(counter => {

            const target = +counter.getAttribute("data-target");

            let count = 0;

            const speed = target / 200;

            const updateCounter = () => {

                count += speed;

                if (count < target) {

                    counter.innerText = Math.ceil(count);

                    requestAnimationFrame(updateCounter);

                } else {

                    counter.innerText = target;

                }

            };

            updateCounter();

        });

    };

    if (counters.length > 0) {

        const counterSection = counters[0].parentElement;

        const observer = new IntersectionObserver(entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    startCounter();

                    observer.disconnect();

                }

            });

        });

        observer.observe(counterSection);

    }

    /* ==========================
       SCROLL REVEAL
    ========================== */

    const revealElements = document.querySelectorAll(".reveal");

    function reveal() {

        const windowHeight = window.innerHeight;

        revealElements.forEach(element => {

            const top = element.getBoundingClientRect().top;

            if (top < windowHeight - 100) {

                element.classList.add("active");

            }

        });

    }

    window.addEventListener("scroll", reveal);

    reveal();

    /* ==========================
       ACTIVE NAVIGATION
    ========================== */

    const sections = document.querySelectorAll("section");

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 120;

            const sectionHeight = section.clientHeight;

            if (pageYOffset >= sectionTop) {

                current = section.getAttribute("id");

            }

        });

        links.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + current) {

                link.classList.add("active");

            }

        });

    });

    /* ==========================
       BACK TO TOP BUTTON
    ========================== */

    const topButton = document.createElement("button");

    topButton.innerHTML = "↑";

    topButton.id = "topBtn";

    document.body.appendChild(topButton);

    topButton.style.position = "fixed";
    topButton.style.bottom = "20px";
    topButton.style.right = "20px";
    topButton.style.padding = "12px 18px";
    topButton.style.fontSize = "20px";
    topButton.style.cursor = "pointer";
    topButton.style.border = "none";
    topButton.style.borderRadius = "50%";
    topButton.style.background = "#0d6efd";
    topButton.style.color = "#fff";
    topButton.style.display = "none";
    topButton.style.zIndex = "999";

    window.addEventListener("scroll", () => {

        if (window.scrollY > 400) {

            topButton.style.display = "block";

        } else {

            topButton.style.display = "none";

        }

    });

    topButton.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

    /* ==========================
       BOOKING FORM VALIDATION
    ========================== */

    const bookingForm = document.querySelector("#bookingForm");

    if (bookingForm) {

        bookingForm.addEventListener("submit", function (e) {

            e.preventDefault();

            const inputs = bookingForm.querySelectorAll("input, select");

            let valid = true;

            inputs.forEach(input => {

                if (input.value.trim() === "") {

                    input.style.border = "2px solid red";

                    valid = false;

                } else {

                    input.style.border = "2px solid green";

                }

            });

            if (valid) {

                alert("Booking submitted successfully!");

                bookingForm.reset();

            }

        });

    }

    /* ==========================
       CONTACT FORM VALIDATION
    ========================== */

    const contactForm = document.querySelector("#contactForm");

    if (contactForm) {

        contactForm.addEventListener("submit", function (e) {

            e.preventDefault();

            const name = document.querySelector("#name");
            const email = document.querySelector("#email");
            const message = document.querySelector("#message");

            if (
                name.value === "" ||
                email.value === "" ||
                message.value === ""
            ) {

                alert("Please fill in all fields.");

                return;

            }

            alert("Message sent successfully!");

            contactForm.reset();

        });

    }

});
