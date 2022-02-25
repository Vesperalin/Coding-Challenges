const emailInputField = document.getElementById('email');
const tick = document.getElementById('tick');

const patternForEmail = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

emailInputField.addEventListener('input', e => {
	const ifValidEmail = patternForEmail.test(e.target.value);

	if (ifValidEmail && !emailInputField.classList.contains('valid')) {
		emailInputField.classList.add('valid');
		tick.classList.add('tick-transition');
	} else if (!ifValidEmail && emailInputField.classList.contains('valid')) {
		emailInputField.classList.remove('valid');
		tick.classList.remove('tick-transition');
	}
});
