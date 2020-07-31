import {
  createInputLabel,
  createCheckboxLabel,
  createInputLegend,
} from './label';
import setAttrs from './setAttribute';

import prefixSuffixTerm from './prefix_suffix';
import checkMasks from './mask';

function TextInput({
  name,
  type,
  label,
  mask,
  required,
  read_only,
  hint,
  prefix,
  suffix,
  options,
  default: _default,
}) {
  const div = document.createElement('div');
  const inputCol = document.createElement('div');

  type !== 'hidden' && div.classList.add('form-group', 'row');

  if (label && type !== 'hidden') {
    div.appendChild(createInputLabel(label, name, hint));
    inputCol.setAttribute('class', `col-sm-${label ? '9' : '12'}`);
  }

  const diferentElements = ['textarea', 'select'];
  const input = document.createElement(
    diferentElements.includes(type) ? type : 'input'
  );

  const attributes = { name, id: name, class: 'form-control' };

  (options || []).map((option) => {
    const optionEle = document.createElement('option');
    optionEle.text = option.label;
    optionEle.value = option.value;
    optionEle.selected = option.value === _default;

    input.add(optionEle);
  });

  type && (attributes['type'] = type);
  mask && (attributes['data-mask'] = mask);
  mask && checkMasks(input, mask);
  required && (attributes['required'] = true);
  read_only && (attributes['readonly'] = true);

  setAttrs(input, attributes);

  if (prefix || suffix) {
    const inputGroup = document.createElement('div');
    inputGroup.setAttribute('class', 'input-group');
    inputGroup.appendChild(input);

    prefix && addPrefixSuffix('prefix', prefix);
    suffix && addPrefixSuffix('sufix', suffix);

    inputCol.appendChild(inputGroup);
  } else {
    inputCol.appendChild(input);
  }

  function addPrefixSuffix(position, term) {
    const element = document.createElement('div');
    element.setAttribute('class', 'input-group-prepend');
    element.appendChild(prefixSuffixTerm(type, term));
    position === 'prefix' ? input.before(element) : input.after(element);
  }

  div.appendChild(inputCol);

  return div;
}

function CheckboxInput(field) {
  const div = document.createElement('div');
  div.classList.add('form-group', 'row');

  if (field.label) {
    const label = createInputLegend(field.label, field.name);
    div.appendChild(label);
  }

  const colDiv = document.createElement('div');
  colDiv.setAttribute('class', 'col-sm-9');

  const inputDiv = document.createElement('div');
  inputDiv.setAttribute('id', field.name);
  colDiv.appendChild(inputDiv);

  field.options.map((option) => {
    const formCheck = document.createElement('div');
    formCheck.setAttribute('class', 'form-check');

    const id = `${field.name}-${option.value}`;
    const label = createCheckboxLabel(option.label, id);
    label.setAttribute('class', 'form-check-label');

    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.setAttribute('value', option.value);
    checkbox.setAttribute('name', `${field.name}`);
    checkbox.setAttribute('id', `${field.name}-${option.value}`);
    checkbox.setAttribute('class', 'form-check-input');

    if (field.default !== '') {
      field.default.forEach((checked) => {
        option.value === checked && checkbox.setAttribute('checked', true);
      });
    }

    formCheck.appendChild(checkbox);
    formCheck.appendChild(label);
    inputDiv.appendChild(formCheck);
    div.appendChild(colDiv);
  });
  return div;
}

function RadioInput(field) {
  const div = document.createElement('div');
  div.classList.add('form-group', 'row');

  if (field.label) {
    const label = createInputLegend(field.label, field.name);
    div.appendChild(label);
  }

  const colDiv = document.createElement('div');
  colDiv.setAttribute('class', 'col-sm-9');
  const inputDiv = document.createElement('div');
  inputDiv.setAttribute('id', field.name);
  colDiv.appendChild(inputDiv);

  field.options.map((option) => {
    const formCheck = document.createElement('div');
    formCheck.setAttribute('class', 'form-check');

    const id = `${field.name}-${option.value}`;
    const label = createCheckboxLabel(option.label, id);
    label.setAttribute('class', 'form-check-label');

    const radio = document.createElement('input');
    radio.setAttribute('type', 'radio');
    radio.setAttribute('value', option.value);
    radio.setAttribute('name', `${field.name}`);
    radio.setAttribute('id', `${field.name}-${option.value}`);
    radio.setAttribute('class', 'form-check-input');

    if (field.default !== '') {
      field.default.forEach((checked) => {
        option.value === checked && radio.setAttribute('checked', true);
      });
    }

    formCheck.appendChild(radio);
    formCheck.appendChild(label);
    inputDiv.appendChild(formCheck);
    div.appendChild(colDiv);
  });
  return div;
}

function BooleanInput(field) {
  const div = document.createElement('div');
  div.classList.add('form-group', 'row');

  const label = createCheckboxLabel(field.label, field.name);
  label.setAttribute('class', 'custom-control-label');

  const inputDiv = document.createElement('div');
  inputDiv.setAttribute('class', 'col-sm-12');

  const formCheck = document.createElement('div');
  formCheck.setAttribute('class', 'form-check custom-switch');

  const checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox');
  checkbox.setAttribute('id', field.name);
  checkbox.setAttribute('name', field.name);
  checkbox.setAttribute('value', field.value);
  checkbox.setAttribute('class', 'custom-control-input');

  field.default === 'true'
    ? checkbox.setAttribute('checked', true)
    : checkbox.setAttribute('checked', false);

  formCheck.appendChild(checkbox);
  formCheck.appendChild(label);
  inputDiv.appendChild(formCheck);
  div.appendChild(inputDiv);

  return div;
}

export { TextInput, BooleanInput, CheckboxInput, RadioInput };
