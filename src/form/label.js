function createInputLabel({ label, name, hint }) {
  const labelDiv = document.createElement('label');
  labelDiv.setAttribute('for', name); // Create Label for Name Field
  labelDiv.innerHTML = `${label}:`; // Set Field Labels
  if (hint) {
    const hintDiv = document.createElement('span');
    hintDiv.setAttribute('class', 'material-icons');
    hintDiv.innerHTML = 'help';
    hintDiv.setAttribute('data-toggle', 'tooltip');
    hintDiv.setAttribute('data-placement', 'top');
    hintDiv.setAttribute('title', hint);
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
