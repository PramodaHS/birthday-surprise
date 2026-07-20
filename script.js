// ============================================
// Birthday Surprise
// Created by Pramodh ❤️
// ============================================

// -------------------------
// Elements
// -------------------------

const loader = document.getElementById("loader");
const progressBar = document.getElementById("progressBar");
const loadingText = document.getElementById("loadingText");

const hero = document.getElementById("hero");

const continueBtn = document.getElementById("continueBtn");

// -------------------------
// Hide Hero Initially
// -------------------------

hero.style.display = "none";

// -------------------------
// Loading Messages
// -------------------------

const loadingMessages = [

    "Loading Magic...",

    "Preparing Birthday Wishes...",

    "Adding Sparkles...",

    "Wrapping Your Surprise...",

    "Almost Ready..."

];

let progress = 0;

let msg = 0;

// -------------------------
// Loader Animation
// -------------------------

const loaderAnimation = setInterval(() => {

    progress++;

    progressBar.style.width = progress + "%";

    if(progress % 20 === 0){

        loadingText.textContent = loadingMessages[msg];

        if(msg < loadingMessages.length-1){

            msg++;

        }

    }

    if(progress >= 100){

        clearInterval(loaderAnimation);

        gsap.to(loader,{

            opacity:0,

            duration:1,

            onComplete:()=>{

                loader.style.display="none";

                showHero();

            }

        });

    }

},35);

// -------------------------
// Show Hero
// -------------------------

function showHero(){

    hero.style.display="block";

    gsap.fromTo(

        hero,

        {

            opacity:0,

            y:80

        },

        {

            opacity:1,

            y:0,

            duration:1.4,

            ease:"power3.out"

        }

    );

    startTyping();

}

// -------------------------
// Typed Animation
// -------------------------

function startTyping(){

new Typed("#typed",{

strings:[

"Hi Priyanka 👋",

"Happy Birthday 🎉",

"I wanted to build something instead of simply sending a message.",

"Hope this makes you smile 😊"

],

typeSpeed:45,

backSpeed:20,

backDelay:1800,

loop:true

});

}

// -------------------------
// Button Animation
// -------------------------

gsap.to("#continueBtn",{

scale:1.05,

duration:1.2,

repeat:-1,

yoyo:true,

ease:"power1.inOut"

});

// ==========================
// Hero → Gift Transition
// ==========================

const giftScene = document.getElementById("giftScene");

continueBtn.addEventListener("click", () => {

    confetti({

        particleCount: 180,
        spread: 120,
        origin: { y: 0.6 }

    });

    gsap.to(hero, {

        opacity: 0,
        scale: 0.9,
        duration: 0.8,

        onComplete: () => {

            hero.style.display = "none";

            giftScene.style.display = "flex";

            gsap.fromTo(

                giftScene,

                {
                    opacity: 0
                },

                {
                    opacity: 1,
                    duration: 1
                }

            );

        }

    });

});

// ==========================
// Floating Gift
// ==========================

gsap.to(".gift-box",{

    y:-18,

    duration:2,

    repeat:-1,

    yoyo:true,

    ease:"sine.inOut"

});

// ==========================
// Open Gift
// ==========================

const giftBox = document.querySelector(".gift-box");

giftBox.addEventListener("click",()=>{

    gsap.to(giftBox,{

        rotation:-8,

        duration:0.08,

        repeat:5,

        yoyo:true,

        onComplete:()=>{

            confetti({

                particleCount:350,

                spread:180,

                origin:{y:0.45}

            });

            gsap.to(giftBox,{

                scale:1.4,

                opacity:0,

                duration:0.7

            });

            gsap.to("#giftScene h2",{

                opacity:0,
                duration:0.5

            });

            gsap.to("#giftScene p",{

                opacity:0,
                duration:0.5

            });

            const birthdayScene = document.getElementById("birthdayScene");

setTimeout(() => {

    giftScene.style.display = "none";

    birthdayScene.style.display = "flex";

    gsap.fromTo(

        birthdayScene,

        {
            opacity:0,
            scale:.95
        },

        {
            opacity:1,
            scale:1,
            duration:1
        }

    );

    birthdayFireworks();

},700);

        }

    });

});

// ==========================
// Birthday Fireworks
// ==========================

function birthdayFireworks(){

    const duration = 3000;

    const end = Date.now() + duration;

    (function frame(){

        confetti({

            particleCount:6,

            spread:70,

            startVelocity:35,

            origin:{
                x:Math.random(),
                y:Math.random()-0.2
            }

        });

        if(Date.now() < end){

            requestAnimationFrame(frame);

        }

    })();

}

// ==========================
// Rabbit Animation
// ==========================

gsap.to(".rabbit",{

    rotation:4,

    duration:1,

    repeat:-1,

    yoyo:true,

    ease:"sine.inOut"

});

// ==========================
// Birthday Button Animation
// ==========================

gsap.to("#favoritesBtn",{

    scale:1.05,

    duration:1,

    repeat:-1,

    yoyo:true

});

// ==========================
// Birthday → Favorites
// ==========================

const favoritesScene = document.getElementById("favoritesScene");

document.getElementById("favoritesBtn").addEventListener("click", () => {

    gsap.to(birthdayScene, {

        opacity: 0,
        duration: 0.8,

        onComplete: () => {

            birthdayScene.style.display = "none";

            favoritesScene.style.display = "flex";

            gsap.fromTo(

                favoritesScene,

                {
                    opacity: 0,
                    y: 40
                },

                {
                    opacity: 1,
                    y: 0,
                    duration: 1
                }

            );

        }

    });

});

// ==========================
// Favorite Cards
// ==========================

const cards = document.querySelectorAll(".favorite-card");

const favoriteMessage = document.getElementById("favoriteMessage");

cards.forEach(card => {

    card.addEventListener("click", () => {

        favoriteMessage.innerHTML = card.dataset.message;

        gsap.fromTo(

            "#favoriteMessage",

            {
                opacity: 0,
                scale: 0.9
            },

            {
                opacity: 1,
                scale: 1,
                duration: 0.4
            }

        );

    });

});

// ==========================
// Floating Cards
// ==========================

gsap.to(".favorite-card",{

    y:-8,

    duration:2,

    stagger:0.15,

    repeat:-1,

    yoyo:true,

    ease:"sine.inOut"

});

// ==========================
// Favorites → Terminal
// ==========================

const terminalScene = document.getElementById("terminalScene");

document.getElementById("terminalButton").addEventListener("click", () => {

    gsap.to(favoritesScene, {

        opacity: 0,
        duration: 0.8,

        onComplete: () => {

            favoritesScene.style.display = "none";

            terminalScene.style.display = "flex";

            gsap.fromTo(

                terminalScene,

                {
                    opacity: 0,
                    scale: 0.95
                },

                {
                    opacity: 1,
                    scale: 1,
                    duration: 0.8
                }

            );

            startTerminal();

        }

    });

});

// ==========================
// Terminal Typing
// ==========================

function startTerminal() {

    const terminal = document.getElementById("terminalText");

    const lines = [

        "Pramodh@Birthday:~$ ./birthday.sh",
        "",
        "Initializing Surprise Engine............. ✔",
        "",
        "Loading Coffee Memories................. ☕",
        "",
        "Loading Ludo Sessions................... 🎲",
        "",
        "Loading Chocolate....................... 🍫",
        "",
        "Loading Pizza........................... 🍕",
        "",
        "Loading Burger & Fries................. 🍔",
        "",
        "Loading Ice Cream....................... 🍦",
        "",
        "Loading Rabbit Happiness................ 🐰",
        "",
        "Checking Birthday Mood................. ✔",
        "",
        "Packaging Best Wishes.................. ✔",
        "",
        "Deploying Happiness.................... ✔",
        "",
        "Deployment Status : SUCCESS ✅",
        "",
        "Preparing Final Surprise..."
    ];

    terminal.innerHTML = "";

    let index = 0;

    function typeLine() {

        if (index < lines.length) {

            terminal.innerHTML += lines[index] + "\n";

            terminal.scrollTop = terminal.scrollHeight;

            index++;

            setTimeout(typeLine, 450);

        } else {

            setTimeout(showFinalLetter, 1800);

        }

    }

    typeLine();

}

// ==========================
// Show Final Letter
// ==========================

function showFinalLetter() {

    const terminalScene = document.getElementById("terminalScene");
    const letterScene = document.getElementById("letterScene");

    gsap.to(terminalScene, {

        opacity: 0,
        duration: 1,

        onComplete: () => {

            terminalScene.style.display = "none";

            letterScene.style.display = "flex";

            gsap.fromTo(

                letterScene,

                {
                    opacity: 0,
                    y: 40
                },

                {
                    opacity: 1,
                    y: 0,
                    duration: 1.2,
                    ease: "power3.out"
                }

            );

        }

    });

}

// ==========================
// Grand Celebration
// ==========================

function celebrateBirthday() {

    // Big Confetti Burst
    confetti({

        particleCount: 300,
        spread: 180,
        origin: { y: 0.6 }

    });

    // Fireworks
    const duration = 5000;

    const end = Date.now() + duration;

    (function frame() {

        confetti({

            particleCount: 8,

            angle: 60,

            spread: 80,

            origin: {

                x: Math.random(),

                y: Math.random() * 0.6

            }

        });

        confetti({

            particleCount: 8,

            angle: 120,

            spread: 80,

            origin: {

                x: Math.random(),

                y: Math.random() * 0.6

            }

        });

        if (Date.now() < end) {

            requestAnimationFrame(frame);

        }

    })();

    gsap.to("#finishBtn", {

        scale: 1.15,
        duration: .4,
        yoyo: true,
        repeat: 1

    });

}

// ==========================
// Finish Button
// ==========================



// ==========================
// Floating Sparkles
// ==========================

gsap.to("#stars",{

    opacity:.5,

    duration:2,

    repeat:-1,

    yoyo:true,

    ease:"sine.inOut"

});

gsap.to(".moon",{

    y:18,

    duration:4,

    repeat:-1,

    yoyo:true,

    ease:"sine.inOut"

});

gsap.utils.toArray(".balloon").forEach((balloon,index)=>{

    gsap.to(balloon,{

        y:-25,

        duration:3+index,

        repeat:-1,

        yoyo:true,

        ease:"sine.inOut"

    });

});

gsap.utils.toArray(".sparkle").forEach((sparkle,index)=>{

    gsap.to(sparkle,{

        scale:1.3,

        opacity:.5,

        duration:1.5+index*.2,

        repeat:-1,

        yoyo:true

    });

});

const finishBtn=document.getElementById("finishBtn");

finishBtn.addEventListener("mouseenter",()=>{

    gsap.to(finishBtn,{

        scale:1.08,

        duration:.25

    });

});

finishBtn.addEventListener("mouseleave",()=>{

    gsap.to(finishBtn,{

        scale:1,

        duration:.25

    });

});

finishBtn.addEventListener("click",celebrateBirthday);