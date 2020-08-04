import { createPopper } from '@popperjs/core';

function createInputLabel(label, name, hint) {
  const labelDiv = document.createElement('label');
  labelDiv.classList.add('col-sm-3', 'col-form-label');
  labelDiv.setAttribute('for', name);
  labelDiv.innerHTML = label;

  if (hint) {
    const hintDiv = document.createElement('span');
    hintDiv.classList.add('with-tooltip', 'material-icons');
    hintDiv.innerHTML = 'help';
    const tooltip = document.createElement('div');
    tooltip.setAttribute('class', 'tooltip');
    tooltip.setAttribute('role', 'tooltip');
    tooltip.innerHTML = `${hint}`;

    hintDiv.appendChild(tooltip);

    createPopper(hintDiv, tooltip, {
      placement: 'top',
      modifiers: [
        {
          name: 'offset',
          options: {
            offset: [0, 8],
          },
        },
      ],
    });

    labelDiv.append(hintDiv);
  }

  return labelDiv;
}

function createCheckboxLabel(optionLabel, optionValue) {
  const labelDiv = document.createElement('label');
  labelDiv.setAttribute('for', optionValue); // Create Label for Name Field
  labelDiv.innerHTML = optionLabel; // Set Field Labels
  return labelDiv;
}

function createInputLegend(label, name, hint) {
  const labelDiv = document.createElement('legend');
  labelDiv.classList.add('col-sm-3', 'col-form-label');
  labelDiv.setAttribute('for', name); // Create Label for Name Field
  labelDiv.innerHTML = label; // Set Field Labels

  if (hint) {
    const hintDiv = document.createElement('span');
    hintDiv.classList.add('with-tooltip', 'material-icons');
    hintDiv.innerHTML = 'help';
    const tooltip = document.createElement('div');
    tooltip.setAttribute('class', 'tooltip');
    tooltip.setAttribute('role', 'tooltip');
    tooltip.innerHTML = hint;

    hintDiv.appendChild(tooltip);

    createPopper(hintDiv, tooltip, {
      placement: 'top',
      modifiers: [
        {
          name: 'offset',
          options: {
            offset: [0, 8],
          },
        },
      ],
    });

    labelDiv.append(hintDiv);
  }

  return labelDiv;
}

export { createInputLabel, createCheckboxLabel, createInputLegend };
