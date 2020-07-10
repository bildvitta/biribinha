function createInputLabel(labelText, name) {
  const label = document.createElement("label");
  label.setAttribute("for", name); // Create Label for Name Field
  label.innerHTML = `${labelText}:`; // Set Field Labels
  return label;
}

function createCheckboxLabel(optionLabel, optionValue) {
  const label = document.createElement("label");
  label.setAttribute("for", optionValue); // Create Label for Name Field
  label.innerHTML = `${optionLabel}`; // Set Field Labels
  return label;
}

export { createInputLabel, createCheckboxLabel };
