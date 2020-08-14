import setAttrs from './setAttribute';
import prefixSuffixTerm from './prefixSuffix';
import s3UploadHandler from '../utils/s3UploadHandler';

import { createInputLabel, createCheckboxLabel } from './label';

function normalInput({
  name,
  type,
  label,
  required,
  read_only,
  min_length,
  max_length,
  hint,
  prefix,
  suffix,
  options,
  multiple,
  default: _default,
}) {
  const div = document.createElement('div');
  const inputCol = document.createElement('div');

  // Verify if field is hidden, if not, show label and create div for the input
  type !== 'hidden' && div.classList.add('form-group', 'row');

  if (label && type !== 'hidden') {
    div.appendChild(createInputLabel(label, name, hint));
    inputCol.setAttribute('class', `col-sm-9`);
  }

  if (!label && type !== 'hidden') {
    inputCol.setAttribute('class', `col-sm-12`);
  }

  // Create diferent input types
  const diferentElements = ['textarea', 'select'];
  const input = document.createElement(
    diferentElements.includes(type) ? type : 'input'
  );

  // Start of the attributes on input (default name, id and class)
  const attributes = { name, id: name, class: 'form-control' };
  type && (attributes['type'] = type === 'hidden' ? 'hidden' : 'text');
  min_length && (attributes['min_length'] = min_length);
  max_length && (attributes['max_length'] = max_length);
  required && (attributes['required'] = true);
  read_only && (attributes['readonly'] = true);
  multiple && (attributes['multiple'] = 'multiple');

  setAttrs(input, attributes);

  // if is a select Field
  if (options && type === 'select') {
    options.map((option) => {
      const optionEle = document.createElement('option');
      optionEle.text = option.label;
      optionEle.value = option.value;
      optionEle.selected = option.value === _default;

      input.add(optionEle);
    });
  }

  // Check if field have a prefix, suffix
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

function checkboxInput({
  label,
  name,
  type,
  hint,
  options,
  default: _default,
}) {
  const div = document.createElement('div');
  const inputCol = document.createElement('div');

  div.classList.add('form-group', 'row');

  if (label && type !== 'hidden') {
    div.appendChild(createInputLabel(label, name, hint, 'legend'));
    inputCol.setAttribute('class', `col-sm-${label ? '9' : '12'}`);
  }

  const inputDiv = document.createElement('div');
  inputDiv.setAttribute('id', name);
  inputCol.appendChild(inputDiv);

  options.map((option) => {
    const formCheck = document.createElement('div');
    formCheck.setAttribute('class', 'form-check');
    formCheck.setAttribute('id', 'form-check');

    const label = createCheckboxLabel(option.label, `${name}-${option.value}`);
    label.setAttribute('class', 'form-check-label');

    const checkbox = document.createElement('input');
    const attributes = {};
    attributes['type'] = type;
    attributes['value'] = option.value;
    attributes['name'] = name;
    attributes['id'] = `${name}-${option.value}`;
    attributes['class'] = 'form-check-input';
    setAttrs(checkbox, attributes);

    if (_default !== '') {
      _default.forEach((checked) => {
        option.value === checked && checkbox.setAttribute('checked', true);
      });
    }

    formCheck.appendChild(checkbox);
    formCheck.appendChild(label);
    inputDiv.appendChild(formCheck);
    div.appendChild(inputCol);
  });

  return div;
}

function booleanInput({ label, name, value, default: _default }) {
  const div = document.createElement('div');
  div.classList.add('form-group', 'row');

  const labelDiv = createCheckboxLabel(label, name);
  labelDiv.setAttribute('class', 'custom-control-label');

  const inputDiv = document.createElement('div');
  inputDiv.setAttribute('class', 'col-sm-12');

  const formCheck = document.createElement('div');
  formCheck.setAttribute('class', 'form-check custom-switch');

  const checkbox = document.createElement('input');

  const attributes = {
    type: 'checkbox',
    class: 'custom-control-input',
  };

  _default === 'true'
    ? checkbox.setAttribute('checked', 'checked')
    : checkbox.removeAttribute('checked');

  attributes['id'] = name;
  attributes['name'] = name;
  attributes['value'] = value;

  setAttrs(checkbox, attributes);

  formCheck.appendChild(checkbox);
  formCheck.appendChild(labelDiv);
  inputDiv.appendChild(formCheck);
  div.appendChild(inputDiv);

  return div;
}

function uploaderInput({ label, hint, name, multiple }, options) {
  const div = document.createElement('div');
  div.classList.add('form-group', 'row');

  const inputCol = document.createElement('div');

  if (label) {
    div.appendChild(createInputLabel(label, name, hint));
    inputCol.setAttribute('class', `col-sm-9`);
  } else {
    inputCol.setAttribute('class', `col-sm-12`);
  }

  const inputDiv = document.createElement('div');
  inputDiv.classList.add('custom-file');

  const input = document.createElement('input');
  const attributes = { name, id: name, class: 'custom-file-input' };
  attributes['type'] = 'file';
  multiple && (attributes['multiple'] = 'multiple');
  setAttrs(input, attributes);

  const inputLabel = document.createElement('label');
  inputLabel.setAttribute('class', 'custom-file-label');
  inputLabel.setAttribute('for', name);
  inputLabel.innerHTML = 'Escolha o arquivo...';
  inputDiv.append(input, inputLabel);

  if (options.s3endpoint) {
    const progress = document.createElement('div');
    progress.setAttribute('class', 'progress');
    const progressbar = document.createElement('div');
    const progressAttributes = {
      id: 'progress-bar',
      class: 'progress-bar',
      role: 'progressbar',
      'aria-valuenow': '0',
      'aria-valuemin': '0',
      'aria-valuemax': '100',
    };
    setAttrs(progressbar, progressAttributes);
    progress.appendChild(progressbar);
    inputDiv.appendChild(progress);
  }

  inputCol.appendChild(inputDiv);
  div.appendChild(inputCol);

  input.addEventListener('change', (e) => {
    const files = Object.values(e.target.files);
    inputLabel.innerHTML = '';

    files.forEach((file) => {
      if (options.s3endpoint) {
        s3UploadHandler(file, options.s3endpoint);
      }
    });
  });

  return div;
}

export { normalInput, checkboxInput, booleanInput, uploaderInput };
