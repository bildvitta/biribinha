import { createCheckboxLabel } from './label';
import checkMasks from './mask';

function newTextInput(field) {
  const input = document.createElement('input');
  input.setAttribute('type', 'text');
  input.setAttribute('name', field.name);
  input.setAttribute('id', field.name);
  if (field.mask) {
    input.setAttribute('data-mask', field.mask);
    checkMasks(input, field.mask);
  }
  if (field.required) {
    input.setAttribute('required', true);
  }
  return input;
}

function newTextArea({ name }) {
  const textarea = document.createElement('textarea');
  textarea.setAttribute('name', name);
  textarea.setAttribute('id', name);
  return textarea;
}

function newEmailInput({ name }) {
  const input = document.createElement('input');
  input.setAttribute('type', 'email');
  input.setAttribute('name', name);
  input.setAttribute('id', name);
  return input;
}

function newSelectInput(field) {
  const input = document.createElement('select');
  input.setAttribute('name', field.name);
  input.setAttribute('id', field.name);
  field.options.map((option) => {
    const optionEle = document.createElement('option');
    optionEle.text = option.label;
    optionEle.value = option.value;
    optionEle.selected = option.value === field.default ? true : false;

    input.add(optionEle);
  });
  return input;
}

function newCheckboxInput(field) {
  const div = document.createElement('div');
  field.options.map((option) => {
    const id = `${field.name}-${option.value}`;
    const label = createCheckboxLabel(option.label, id);
    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.setAttribute('value', option.value);
    checkbox.setAttribute('id', id);

    if (field.default !== '') {
      field.default.forEach((checked) => {
        option.value === checked && checkbox.setAttribute('checked', true);
      });
    }

    div.appendChild(checkbox);
    div.appendChild(label);
  });
  return div;
}

function newBooleanInput(field) {
  const div = document.createElement('div');
  const label = createCheckboxLabel(field.label, field.name);

  const checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox');
  checkbox.setAttribute('id', field.name);
  checkbox.setAttribute('name', field.name);
  checkbox.setAttribute('value', field.value);

  field.default === 'true'
    ? checkbox.setAttribute('checked', true)
    : checkbox.setAttribute('checked', false);

  div.appendChild(checkbox);
  div.appendChild(label);

  return div;
}

function newHiddenInput(field) {
  const input = document.createElement('input');
  input.setAttribute('type', 'text');
  input.setAttribute('name', field.name);
  input.setAttribute('id', field.name);
  input.setAttribute('hidden', true);
  return input;
}

export {
  newTextInput,
  newBooleanInput,
  newCheckboxInput,
  newEmailInput,
  newHiddenInput,
  newSelectInput,
  newTextArea,
};
