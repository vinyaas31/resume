/* =========================
   TYPING ANIMATION
========================= */

const typingText = document.getElementById("typing-text");

const words = [
    "MCA Student",
    "Java Developer",
    "Full Stack Developer",
    "Web Developer",
    "Spring Boot Developer"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!isDeleting) {

        typingText.textContent =
            currentWord.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentWord.length) {
            isDeleting = true;
            setTimeout(typeEffect, 1200);
            return;
        }

    } else {

        typingText.textContent =
            currentWord.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {
            isDeleting = false;
            wordIndex++;

            if (wordIndex === words.length) {
                wordIndex = 0;
            }
        }
    }

    setTimeout(typeEffect, isDeleting ? 50 : 100);
}

typeEffect();


/* =========================
   SMOOTH SCROLL NAV
========================= */

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        const targetId = this.getAttribute("href");
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 80,
                behavior: "smooth"
            });
        }
    });
});


/* =========================
   NAV ACTIVE HIGHLIGHT
========================= */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;

        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});


/* =========================
   SCROLL ANIMATION
========================= */

const animatedElements = document.querySelectorAll(
    ".education-card, .skill-card, .project-card, .certificate-card, .internship-card"
);

function revealOnScroll() {

    const triggerBottom = window.innerHeight * 0.85;

    animatedElements.forEach(el => {

        const elementTop = el.getBoundingClientRect().top;

        if (elementTop < triggerBottom) {
            el.classList.add("show");
        }

    });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();


/* =========================
   FLOATING PROFILE PARALLAX
========================= */

const profileImg = document.querySelector(".hero-image img");

if (profileImg) {

    window.addEventListener("mousemove", (e) => {

        const x = (window.innerWidth / 2 - e.clientX) / 25;
        const y = (window.innerHeight / 2 - e.clientY) / 25;

        profileImg.style.transform =
            `translate(${x}px, ${y}px)`;
    });
}


/* =========================
   SCROLL TO TOP BUTTON
========================= */

const scrollBtn = document.createElement("button");

scrollBtn.innerText = "↑";
scrollBtn.id = "scrollTopBtn";
document.body.appendChild(scrollBtn);

scrollBtn.style.cssText = `
position:fixed;
bottom:30px;
right:30px;
width:45px;
height:45px;
border-radius:50%;
border:none;
background:#00d9ff;
color:#fff;
font-size:20px;
cursor:pointer;
display:none;
z-index:999;
`;

window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
});

scrollBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


/* =========================
   SECTION FADE IN (SIMPLE)
========================= */

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

}, {
    threshold: 0.2
});

document.querySelectorAll("section").forEach(sec => {
    sec.classList.add("hidden");
    observer.observe(sec);
});


/* =========================
   CONSOLE MESSAGE
========================= */

console.log("Harshitha Portfolio Loaded Successfully 🚀");