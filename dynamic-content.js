// Typing effect for the dynamic description
const dynamicDescription = document.getElementById('dynamic-description');
const descriptionText = [
    "I am an aspiring software developer passionate about building innovative and efficient solutions for real-world problems.",
    "Currently honing my skills in both front-end and back-end development.",
    "I enjoy learning new technologies and applying them to create seamless user experiences With a strong foundation in programming and a dedication to continuous learning, I aim to grow into a versatile and skilled developer."
];

let textIndex = 0; // Index of current sentence
let charIndex = 0; // Index of current character

function typeText() {
    if (textIndex < descriptionText.length) {
        if (charIndex < descriptionText[textIndex].length) {
            dynamicDescription.innerHTML += descriptionText[textIndex].charAt(charIndex);
            charIndex++;
            setTimeout(typeText, 50); // Faster typing speed (reduced from 100 to 50)
        } else {
            charIndex = 0;
            textIndex++;
            dynamicDescription.innerHTML += "<br><br>"; // Add spacing between sentences
            setTimeout(typeText, 500); // Reduced pause before the next sentence
        }
    }
}


// Start typing effect when the page loads
window.onload = typeText;
