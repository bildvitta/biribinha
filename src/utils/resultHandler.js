export default function resultHandler(results) {
  Object.keys(results).forEach((key) => {
    const input = document.getElementById(`${key}`);

    // case is select
    if (input) {
      if (input.tagName === 'SELECT') {
        for (var i = 0; i < input.options.length; i++) {
          if (input.options[i] && input.options[i].value === results[key]) {
            input.selectedIndex = i;
          }
        }
      }

      // case is normal
      input.setAttribute('value', results[key]);
    }
  });
}
