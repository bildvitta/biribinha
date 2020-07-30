export default function errorHandler(errors) {
  Object.keys(errors).forEach((key) => {
    const input = document.getElementById(`${key}`);
    const parent = input.parentNode;
    const feedback = document.createElement('div');

    input.classList.add('is-invalid');
    feedback.setAttribute('class', 'invalid-feedback');
    errors[key].forEach((error, index) => {
      if (index === errors[key].length) {
        feedback.innerHTML = `${feedback.innerHTML + error}`;
      } else {
        feedback.innerHTML = `${feedback.innerHTML + error}</br>`;
      }
    });

    parent.appendChild(feedback);
  });
}
