import {
  createInputLabel,
  createCheckboxLabel,
  createInputLegend,
} from './label';
import checkMasks from './mask';

function newTextInput(field) {
  const div = document.createElement('div');
  div.classList.add('form-group', 'row');

  if (field.label) {
    const label = createInputLabel(field.label, field.name);
    label.classList.add('col-sm-3', 'col-form-label');
    div.appendChild(label);
  }

  const inputDiv = document.createElement('div');
  inputDiv.setAttribute('class', 'col-sm-9');

  const input = document.createElement('input');
  input.setAttribute('type', 'text');
  input.setAttribute('name', field.name);
  input.setAttribute('id', field.name);
  input.setAttribute('class', 'form-control');
  if (field.mask) {
    input.setAttribute('data-mask', field.mask);
    checkMasks(input, field.mask);
  }
  if (field.required) {
    input.setAttribute('required', true);
  }

  inputDiv.appendChild(input);
  div.appendChild(inputDiv);

  return div;
}

function newTextArea(field) {
  const div = document.createElement('div');
  div.classList.add('form-group', 'row');

  if (field.label) {
    const label = createInputLabel(field.label, field.name);
    label.classList.add('col-sm-3', 'col-form-label');
    div.appendChild(label);
  }

  const inputDiv = document.createElement('div');
  inputDiv.setAttribute('class', 'col-sm-9');

  const textarea = document.createElement('textarea');
  textarea.setAttribute('name', field.name);
  textarea.setAttribute('id', field.name);
  textarea.setAttribute('class', 'form-control');
  if (field.required) {
    input.setAttribute('required', true);
  }

  inputDiv.appendChild(textarea);
  div.appendChild(inputDiv);

  return div;
}

function newEmailInput(field) {
  const div = document.createElement('div');
  div.classList.add('form-group', 'row');

  if (field.label) {
    const label = createInputLabel(field.label, field.name);
    label.classList.add('col-sm-3', 'col-form-label');
    div.appendChild(label);
  }

  const inputDiv = document.createElement('div');
  inputDiv.setAttribute('class', 'col-sm-9');

  const input = document.createElement('input');
  input.setAttribute('type', 'email');
  input.setAttribute('name', field.name);
  input.setAttribute('id', field.name);
  input.setAttribute('class', 'form-control');
  if (field.required) {
    input.setAttribute('required', true);
  }

  inputDiv.appendChild(input);
  div.appendChild(inputDiv);

  return div;
}

function newSelectInput(field) {
  const div = document.createElement('div');
  div.classList.add('form-group', 'row');

  if (field.label) {
    const label = createInputLabel(field.label, field.name);
    label.classList.add('col-sm-3', 'col-form-label');
    div.appendChild(label);
  }

  const inputDiv = document.createElement('div');
  inputDiv.setAttribute('class', 'col-sm-9');

  const select = document.createElement('select');
  select.setAttribute('name', field.name);
  select.setAttribute('id', field.name);
  select.setAttribute('class', 'form-control');
  field.options.map((option) => {
    const optionEle = document.createElement('option');
    optionEle.text = option.label;
    optionEle.value = option.value;
    optionEle.selected = option.value === field.default ? true : false;

    select.add(optionEle);
  });

  if (field.required) {
    select.setAttribute('required', true);
  }

  inputDiv.appendChild(select);
  div.appendChild(inputDiv);

  return div;
}

function newCheckboxInput(field) {
  const div = document.createElement('div');
  div.classList.add('form-group', 'row');

  if (field.label) {
    const label = createInputLegend(field.label, field.name);
    label.classList.add('col-sm-3', 'col-form-label');
    div.appendChild(label);
  }

  const inputDiv = document.createElement('div');
  inputDiv.setAttribute('class', 'col-sm-9');

  field.options.map((option) => {
    const formCheck = document.createElement('div');
    formCheck.setAttribute('class', 'form-check');

    const id = `${field.name}-${option.value}`;
    const label = createCheckboxLabel(option.label, id);
    label.setAttribute('class', 'form-check-label');

    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.setAttribute('value', option.value);
    checkbox.setAttribute('id', id);
    checkbox.setAttribute('class', 'form-check-input');

    if (field.default !== '') {
      field.default.forEach((checked) => {
        option.value === checked && checkbox.setAttribute('checked', true);
      });
    }

    formCheck.appendChild(checkbox);
    formCheck.appendChild(label);
    inputDiv.appendChild(formCheck);
    div.appendChild(inputDiv);
  });
  return div;
}

function newBooleanInput(field) {
  const div = document.createElement('div');
  div.classList.add('form-group', 'row');

  const label = createCheckboxLabel(field.label, field.name);
  label.setAttribute('class', 'form-check-label');

  const inputDiv = document.createElement('div');
  inputDiv.setAttribute('class', 'col-sm-12');

  const formCheck = document.createElement('div');
  formCheck.setAttribute('class', 'form-check');

  const checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox');
  checkbox.setAttribute('id', field.name);
  checkbox.setAttribute('name', field.name);
  checkbox.setAttribute('value', field.value);
  checkbox.setAttribute('class', 'form-check-input');

  field.default === 'true'
    ? checkbox.setAttribute('checked', true)
    : checkbox.setAttribute('checked', false);

  formCheck.appendChild(checkbox);
  formCheck.appendChild(label);
  inputDiv.appendChild(formCheck);
  div.appendChild(inputDiv);

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
