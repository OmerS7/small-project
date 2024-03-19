let isDarkMode = window.getComputedStyle(document.body).getPropertyValue('background-color') === 'rgb(30, 30, 30)';

function myFunction(){
    let element = document.body;
    element.classList.toggle("bodyLightMode");
    updateFlashlightIconColor();
}

function updateFlashlightIconColor() {
    const flashlightIcon = document.getElementById("flashlightIcon");
    const bodyBackgroundColor = window.getComputedStyle(document.body).getPropertyValue('background-color');
    isDarkMode = bodyBackgroundColor === 'rgb(30, 30, 30)';

    if (isDarkMode) {
        flashlightIcon.style.filter = "invert(100%)";
    } else {
        flashlightIcon.style.filter = "none";
    }

    updateTooltip(); // Update the tooltip whenever the dark mode changes
}

function toggleDarkMode() {
    myFunction(); // Call myFunction to toggle dark mode
}

function updateTooltip() {
    const flashlightButton = document.querySelector('.flashlight');
    if (isDarkMode) {
        flashlightButton.title = "Light Mode";
    } else {
        flashlightButton.title = "Dark Mode";
    }
}