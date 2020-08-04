export default function (results) {
  Object.keys(results).forEach((key) => {
    const input = Array.from(document.getElementsByName(key));

    if (!input) {
      return;
    }

    input.forEach((inputElement) => {
      // Select
      if (inputElement.tagName === 'SELECT') {
        console.log(inputElement);
        for (var i = 0; i < inputElement.options.length; i++) {
          if (
            inputElement.options[i] &&
            inputElement.options[i].value === results[key]
          ) {
            inputElement.selectedIndex = i;
          }
        }
      }

      // Checkbox
      if (Array.isArray(results[key])) {
        if (results[key].includes(inputElement.value)) {
          inputElement.setAttribute('checked', 'checked');
        }
        return;
      }

      // Radio
      if (inputElement.value === results[key]) {
        inputElement.setAttribute('checked', 'checed');
        return;
      }

      // Boolean
      if (inputElement.type === 'checkbox') {
        results[key] === true
          ? inputElement.setAttribute('checked', 'checked')
          : inputElement.removeAttribute('checked');
        return;
      }

      // Normal
      inputElement.setAttribute('value', results[key]);
    });
  });
}
