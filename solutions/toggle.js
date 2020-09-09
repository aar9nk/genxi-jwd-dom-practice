// Toggle
// Clicking the button with id "toggle-button" should toggle the visibility
// of the alert with id "toggle-alert" on and off.

let isToggled = false;

const toggleButton = document.querySelector('#toggle-button');
const toggleAlert = document.querySelector('#toggle-alert');

toggleButton.addEventListener('click', () => {
    if (isToggled) {
        isToggled = false;
        toggleAlert.classList.add('invisible');
        toggleButton.innerHTML = 'On';
    } else {
        isToggled = true;
        toggleAlert.classList.remove('invisible');
        toggleButton.innerHTML = 'Off';
    }
});