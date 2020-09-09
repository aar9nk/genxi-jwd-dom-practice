// Buttons
// When the button with id "display-name-button" is clicked, remove
// the "invisible" class from the alert with id "display-name"

const displayNameButton = document.querySelector('#display-name-button');

displayNameButton.onclick = () => {
    const displayName = document.querySelector('#display-name');
    displayName.classList.remove('invisible');
};