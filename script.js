// Theme switcher
const themeButton = document.getElementById("themeButton");

if (themeButton) {
    themeButton.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            themeButton.textContent = "Light Mode";
        } else {
            themeButton.textContent = "Dark Mode";
        }
    });
}


// Read More / Read Less
const readButton = document.getElementById("readButton");
const extraText = document.getElementById("extraText");

if (readButton && extraText) {
    readButton.addEventListener("click", function () {
        extraText.hidden = !extraText.hidden;

        if (extraText.hidden) {
            readButton.textContent = "Read More";
        } else {
            readButton.textContent = "Read Less";
        }
    });
}


// Random colour palette using an array and a loop
const paletteButton = document.getElementById("paletteButton");
const paletteBox = document.getElementById("paletteBox");

const colours = [
    "#B026FF",
    "#00F5FF",
    "#FF78A9",
    "#A3B18A",
    "#F5F0E8",
    "#344E41"
];

if (paletteButton && paletteBox) {
    paletteButton.addEventListener("click", function () {
        paletteBox.innerHTML = "";

        for (let i = 0; i < 3; i++) {
            const randomIndex = Math.floor(Math.random() * colours.length);
            const colour = colours[randomIndex];

            const colourBox = document.createElement("div");
            colourBox.textContent = colour;
            colourBox.style.backgroundColor = colour;
            colourBox.style.padding = "15px";
            colourBox.style.margin = "8px";
            colourBox.style.color = "#111111";

            paletteBox.appendChild(colourBox);
        }
    });
}


// Basic feedback form validation
const feedbackForm = document.getElementById("feedbackForm");

if (feedbackForm) {
    feedbackForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const userName = document.getElementById("userName").value;
        const feedback = document.getElementById("feedback").value;

        if (userName.trim() === "" || feedback.trim() === "") {
            alert("Please fill in all fields.");
        } else {
            alert("Thank you, " + userName + "! Your feedback has been received.");
            feedbackForm.reset();
        }
    });
}


// Flexbox Playground: create items using an array and a for loop
const flexPlayground = document.getElementById("flexPlayground");
const flexLabels = ["Minimal", "Retro", "Glitch", "Creative", "Modern"];

if (flexPlayground) {
    for (let i = 0; i < flexLabels.length; i++) {
        const flexItem = document.createElement("div");
        flexItem.className = "playground-item";
        flexItem.textContent = flexLabels[i];
        flexPlayground.appendChild(flexItem);
    }
}


// Flexbox controls
const directionSelect = document.getElementById("directionSelect");
const justifySelect = document.getElementById("justifySelect");
const wrapSelect = document.getElementById("wrapSelect");
const alignSelect = document.getElementById("alignSelect");
const alignContentSelect = document.getElementById("alignContentSelect");

if (flexPlayground && directionSelect) {
    directionSelect.addEventListener("change", function () {
        flexPlayground.style.flexDirection = directionSelect.value;
    });
}

if (flexPlayground && justifySelect) {
    justifySelect.addEventListener("change", function () {
        flexPlayground.style.justifyContent = justifySelect.value;
    });
}

if (flexPlayground && wrapSelect) {
    wrapSelect.addEventListener("change", function () {
        flexPlayground.style.flexWrap = wrapSelect.value;
    });
}

if (flexPlayground && alignSelect) {
    alignSelect.addEventListener("change", function () {
        flexPlayground.style.alignItems = alignSelect.value;
    });
}

if (flexPlayground && alignContentSelect) {
    alignContentSelect.addEventListener("change", function () {
        flexPlayground.style.alignContent = alignContentSelect.value;
    });
}
