export default function (results) {
  Object.keys(results).forEach((key) => {
    const input = Array.from(document.getElementsByName(key));

    if (input.length === 0) {
      return;
    }

    input.forEach((inputElement) => {
      // Select
      if (inputElement.tagName === 'SELECT') {
        for (var i = 0; i < inputElement.options.length; i++) {
          inputElement.options[i] &&
            inputElement.options[i].value === results[key] &&
            (inputElement.selectedIndex = i);
        }
      }

      // Checkbox
      if (Array.isArray(results[key])) {
        return (
          results[key].includes(inputElement.value) &&
          inputElement.setAttribute('checked', 'checked')
        );
      }

      // Radio
      if (inputElement.value === results[key]) {
        return inputElement.setAttribute('checked', 'checked');
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
