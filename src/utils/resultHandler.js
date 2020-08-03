export default function (results) {
  Object.keys(results).forEach((key) => {
    const input = Array.from(document.getElementsByName(key));

    if (input) {
      if (input.length > 1) {
        input.find((element) => {
          if (results[key].includes(element.value)) {
            element.setAttribute('checked', 'checked');
          }
        });
      } else {
        // case is select
        if (input[0].tagName === 'SELECT') {
          for (var i = 0; i < input[0].options.length; i++) {
            if (
              input[0].options[i] &&
              input[0].options[i].value === results[key]
            ) {
              input[0].selectedIndex = i;
            }
          }
        }

        // case is checkbox
        if (Array.isArray(results[key])) {
          results[key].forEach((element) => {
            const elementInput = document.getElementById(`${key}-${element}`);
            elementInput.setAttribute('checked', true);
          });
        }

        // case is normal
        input[0].setAttribute('value', results[key]);
      }
    }
  });
}
