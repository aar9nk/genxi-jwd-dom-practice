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
