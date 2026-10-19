// Select DOM elements
const nameInput = document.querySelector("#username");
const greetButton = document.querySelector("#greetBtn");
const greetingMessage = document.querySelector("#greetingMessage");

// Function to handle generating the personalized greeting
function handleGreeting() {
    const enteredName = nameInput.value.trim();

    // Input validation check
    if (enteredName === "") {
        greetingMessage.textContent = "⚠️ Please type your name before clicking the button.";
        greetingMessage.style.color = "#dc2626"; // Error red
    } else {
        greetingMessage.textContent = "Hello, " + enteredName + "! Welcome to Averon Academy Week 3 project.";
        greetingMessage.style.color = "#0369a1"; // Success blue
    }
}

// Register event listener on button click
greetButton.addEventListener("click", handleGreeting);

// Optional enhancement: Trigger greeting on pressing "Enter" key inside input field
nameInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        handleGreeting();
    }
});