const password = document.querySelector("[name='password'");
const button = document.querySelector('button');
const errorContainer = document.querySelector('.errors');
let errors = [];
function validate() {
    const value = this.value;
    errors = [];
    clearContainer();
    if (value.trim().length < 5) {
        errors.push('Too few characters');
    }
    if (value.includes(' ')) {
        errors.push('No spaces allowed');
    }
    errors.forEach(function (error) {
        const errorDiv = document.createElement('div');
        const errorContent = document.createTextNode(error);
        errorDiv.appendChild(errorContent);
        errorDiv.classList.add('error');
        errorContainer.appendChild(errorDiv);
    });
}
button.disabled = !buttonEnabled();
password.addEventListener('keyup', validate);
function clearContainer() {
    while (errorContainer.hasChildNodes()) {
        errorContainer.removeChild(errorContainer.lastChild);
    }
}
function buttonEnabled() {
    if (errors.length === 0) {
        return true;
    }
    return false;
}
