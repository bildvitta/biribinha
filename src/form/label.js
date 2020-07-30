import { createPopper } from '@popperjs/core';
import './style.scss';

function createInputLabel({ label, name, hint }) {
  const labelDiv = document.createElement('label');
  labelDiv.setAttribute('for', name); // Create Label for Name Field
  labelDiv.innerHTML = `${label}`; // Set Field Labels
  if (hint) {
    const hintDiv = document.createElement('span');
    hintDiv.classList.add('with-tooltip');
    hintDiv.classList.add('material-icons');
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
  const label = document.createElement('label');
  label.setAttribute('for', optionValue); // Create Label for Name Field
  label.innerHTML = `${optionLabel}`; // Set Field Labels
  return label;
}

function createInputLegend(labelText, name) {
  const label = document.createElement('legend');
  label.setAttribute('for', name); // Create Label for Name Field
  label.innerHTML = `${labelText}`; // Set Field Labels
  return label;
}

export { createInputLabel, createCheckboxLabel, createInputLegend };
