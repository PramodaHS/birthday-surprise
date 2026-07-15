// ==============================
// Birthday Experience
// ==============================

const loader = document.getElementById("loader");
const progressBar = document.getElementById("progressBar");
const loadingText = document.getElementById("loadingText");
const hero = document.getElementById("hero");

const loadingMessages = [
    "Loading Magic...",
    "Adding Twinkling Stars...",
    "Preparing Birthday Wishes...",
    "Wrapping the Surprise...",
    "Almost Ready..."
];

let progress = 0;
let messageIndex = 0;

// Hide hero initially
gsap.set(hero, {
    opacity: 0,
    y: 50
});

// ------------------------------
// Loading Animation
// ------------------------------

const loaderInterval = setInterval(() => {

    progress++;

    progressBar.style.width = progress + "%";

    if (progress % 20 === 0 && messageIndex < loadingMessages.length - 1) {
        messageIndex++;
        loadingText.textContent = loadingMessages[messageIndex];
    }

    if (progress >= 100) {

        clearInterval(loaderInterval);

        gsap.to(loader, {
            opacity: 0,
            duration: 1,
            onComplete: () => {
                loader.style.display = "none";
                startHero();
            }
        });

    }

}, 35);

// ------------------------------
// Hero Animation
// ------------------------------

function startHero() {

    gsap.to(hero, {
        opacity: 1,
        y: 0,
        duration: 1.4,
        ease: "power3.out"
    });

    new Typed("#typed", {

        strings: [

            "Hi Priyanka 👋",

            "Happy Birthday! 🎉",

            "This isn't just another birthday message...",

            "It's a little surprise I built especially for you.",

            "Hope this makes you smile 😊"

        ],

        typeSpeed: 45,
        backSpeed: 20,
        backDelay: 1800,
        loop: true

    });

}

// ------------------------------
// Floating Moon
// ------------------------------

gsap.to(".moon", {

    y: 20,
    duration: 4,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"

});

// ------------------------------
// Begin Journey
// ------------------------------

document.getElementById("continueBtn").addEventListener("click", () => {

    confetti({

        particleCount: 250,
        spread: 120,
        origin: {
            y: 0.6
        }

    });

    gsap.to("#continueBtn", {
        scale: 0.95,
        duration: 0.15,
        yoyo: true,
        repeat: 1
    });

    setTimeout(() => {

        alert("🎁 Scene 2 is coming next!");

    }, 600);

});