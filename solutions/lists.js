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