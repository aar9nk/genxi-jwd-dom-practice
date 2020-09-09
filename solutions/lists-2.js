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