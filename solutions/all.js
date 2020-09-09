// Buttons
// When the button with id "display-name-button" is clicked, remove
// the "invisible" class from the alert with id "display-name"
const displayNameButton = document.querySelector('#display-name-button');

displayNameButton.addEventListener('click', () => {
    const displayName = document.querySelector('#display-name');
    displayName.classList.remove('invisible');
});

// Mouse Over
// When the mouse hovers over the image with id "light-bulb", change
// the "src" attribute of the image to "images/light-bulb-on.png"
// When the mouse leaves, change the "src" attribute to "images/light-bulb-off.png"

const lightBulb = document.querySelector('#light-bulb');

lightBulb.addEventListener('mouseenter', () => {
    lightBulb.src = 'images/light-bulb-on.png';
});

lightBulb.addEventListener('mouseleave', () => {
    lightBulb.src = 'images/light-bulb-off.png';
});

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

// Validate
// Use bootstrap validation: https://getbootstrap.com/docs/4.5/components/forms/#server-side
// When the form with id "form-validate" is submitted,
// - prevent the default event from firing
// - check the length of the input with id "form-validate-first-name"
// - if the length is greater than 2, add "is-valid" class to the input, remove the "is-invalid" class
// - if the length if less than 2, add "is-invalid" class to the input, remove the "is-valid" class

const formValidate = document.querySelector('#form-validate');
const formValidateFirstName = document.querySelector('#form-validate-first-name');

formValidate.addEventListener('submit', (event) => {
    event.preventDefault();

    if (formValidateFirstName.value.length > 2) {
        formValidateFirstName.classList.add('is-valid');
        formValidateFirstName.classList.remove('is-invalid');
    } else {
        formValidateFirstName.classList.add('is-invalid');
        formValidateFirstName.classList.remove('is-valid');
    }
});

// Challenge: Lists
// When the form with the id "form-hobby" is submitted
// - prevent default events from firing
// - get the value from the input with the id "form-hobby-text"
// - use the vlaue to create a new li with the class "list-group-item"
// - add the li to the ul with the id "hobby-list"

const formHobby = document.querySelector('#form-hobby');
const formHobbyText = document.querySelector('#form-hobby-text');
const hobbyList = document.querySelector('#hobby-list');

formHobby.addEventListener('submit', (event) => {
    event.preventDefault();

    const newHobby = document.createElement('li');
    newHobby.innerText = formHobbyText.value
    newHobby.classList.add('list-group-item');
    hobbyList.appendChild(newHobby);
});

// Challenge: Lists (Part 2)
// When the ul with the id "hobby-list-2" is clicked
// - check if the event target has the class "remove-hobby", if it does
//      - prevent the default event
//      - get the parent li of the target
//      - remove the parent li from the list with the id "hobby-list-2"

const hobbyList2 = document.querySelector('#hobby-list-2');

hobbyList2.addEventListener('click', (event) => {
    if (event.target.classList.contains('remove-hobby')) {
        event.preventDefault();
        const parentLi = event.target.parentElement;
        hobbyList2.removeChild(parentLi);
    }
});