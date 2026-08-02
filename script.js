// টাইপিং অ্যানিমেশন এর জন্য
const words = ["Full Stack Developer", "Minecraft Specialist", "Discord Bot Developer", "Content Creator"];
let i = 0;
let timer;

function typingEffect() {
    let word = words[i].split("");
    var loopTyping = function() {
        if (word.length > 0) {
            document.querySelector('.typing-text').innerHTML += word.shift();
        } else {
            setTimeout(deletingEffect, 2000); // লেখা শেষ হওয়ার পর ২ সেকেন্ড থাকবে
            return false;
        }
        timer = setTimeout(loopTyping, 100); // টাইপিং স্পিড
    };
    loopTyping();
}

function deletingEffect() {
    let word = words[i].split("");
    var loopDeleting = function() {
        if (word.length > 0) {
            word.pop();
            document.querySelector('.typing-text').innerHTML = word.join("");
        } else {
            if (words.length > (i + 1)) {
                i++;
            } else {
                i = 0;
            }
            setTimeout(typingEffect, 500);
            return false;
        }
        timer = setTimeout(loopDeleting, 50); // কাটার স্পিড
    };
    loopDeleting();
}

// পেজ লোড হলে অ্যানিমেশন শুরু হবে
document.addEventListener("DOMContentLoaded", function() {
    typingEffect();
});

// স্ক্রল করার সময় একটিভ মেনু হাইলাইট করার জন্য
const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll(".navbar nav a");

window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 120) {
            current = section.getAttribute("id");
        }
    });

    navLi.forEach((a) => {
        a.classList.remove("active");
        if (a.getAttribute("href").includes(current)) {
            a.classList.add("active");
        }
    });
});