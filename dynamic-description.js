// JavaScript code for dynamic description
const dynamicDescription = document.getElementById('dynamic-description');
const descriptionText = "I am an aspiring software developer passionate about building innovative solutions.";

let index = 0;

function typeDescription() {
    if (index < descriptionText.length) {
        dynamicDescription.innerHTML += descriptionText.charAt(index);
        index++;
        setTimeout(typeDescription, 100);
    }
}

window.onload = typeDescription;
