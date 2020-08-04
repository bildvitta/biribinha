export default function (results) {
  Object.keys(results).forEach((key) => {
    const input = Array.from(document.getElementsByName(key));

    if (!input) {
      return;
    }

    input.forEach((inputElement) => {
      // Checkbox
      if (Array.isArray(results[key])) {
        return (
          results[key].includes(inputElement.value) &&
          inputElement.setAttribute('checked', 'checked')
        );
      }

      // Radio
      if (inputElement.value === results[key]) {
        return inputElement.setAttribute('checked', 'checed');
      }

      // Boolean
      if (inputElement.type === 'checkbox') {
        return results[key] === true
          ? inputElement.setAttribute('checked', 'checked')
          : inputElement.removeAttribute('checked');
      }

      // Normal
      inputElement.setAttribute('value', results[key]);
    });
  });
}
