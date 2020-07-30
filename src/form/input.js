import {
  createInputLabel,
  createCheckboxLabel,
  createInputLegend,
} from './label';
import setAttrs from './setAttribute';

import { PrefixSuffix } from './prefix_suffix';
import checkMasks from './mask';

function TextInput({
  name,
  label,
  type,
  mask,
  required,
  read_only,
  hint,
  prefix,
  suffix,
}) {
  const div = document.createElement('div');
  div.classList.add('form-group', 'row');
  const inputCol = document.createElement('div');

  label && div.appendChild(createInputLabel(label, name, hint));
  inputCol.setAttribute('class', `col-sm-${label ? '9' : '12'}`);

  const input = document.createElement('input');

  const attributes = {
    type: 'text',
    name,
    id: name,
    class: 'form-control',
  };

  mask && (attributes['data-mask'] = mask);
  mask && checkMasks(input, mask);

  required && (attributes['required'] = true);
  read_only && (attributes['readonly'] = true);

  setAttrs(input, attributes);

  // disabled uso de estado e cidades por exemplo

  if (prefix || suffix) {
    const inputGroup = document.createElement('div');
    inputGroup.setAttribute('class', 'input-group');

    if (prefix) {
      const inputPrefix = document.createElement('div');
      inputPrefix.setAttribute('class', 'input-group-prepend');
      inputPrefix.appendChild(PrefixSuffix(input, prefix));
      inputGroup.appendChild(inputPrefix);
      inputGroup.appendChild(input);
    }

    if (suffix) {
      const inputSuffix = document.createElement('div');
      inputSuffix.setAttribute('class', 'input-group-append');
      inputSuffix.appendChild(PrefixSuffix(input, suffix));
      inputGroup.appendChild(input);
      inputGroup.appendChild(inputSuffix);
    }

    inputCol.appendChild(inputGroup);
  } else {
    inputCol.appendChild(input);
  }

  div.appendChild(inputCol);

  return div;
}

function NumberInput(field) {
  const div = document.createElement('div');
  div.classList.add('form-group', 'row');
  const inputCol = document.createElement('div');

  if (field.label) {
    div.appendChild(createInputLabel(field));
    inputCol.setAttribute('class', 'col-sm-9');
  } else {
    inputCol.setAttribute('class', 'col-sm-12');
  }

  const input = document.createElement('input');
  input.setAttribute('type', 'text');
  input.setAttribute('name', field.name);
  input.setAttribute('id', field.name);
  input.setAttribute('class', 'form-control');
  if (field.places) {
    checkMasks(input, 'places', field.places);
  }
  if (field.required) {
    input.setAttribute('required', true);
  }
  if (field.read_only) {
    input.setAttribute('readonly', true);
  }

  // disabled uso de estado e cidades por exemplo

  if (field.prefix || field.suffix) {
    const inputGroup = document.createElement('div');
    inputGroup.setAttribute('class', 'input-group');

    if (field.prefix) {
      const inputPrefix = document.createElement('div');
      inputPrefix.setAttribute('class', 'input-group-prepend');
      inputPrefix.appendChild(PrefixSuffix(input, field.prefix));
      // input.classList.add('fix-rounded-right');
      inputGroup.appendChild(inputPrefix);
      inputGroup.appendChild(input);
    }

    if (field.suffix) {
      const inputSuffix = document.createElement('div');
      inputSuffix.setAttribute('class', 'input-group-append');
      inputSuffix.appendChild(PrefixSuffix(input, field.suffix));
      // input.classList.add('fix-rounded-right');
      inputGroup.appendChild(input);
      inputGroup.appendChild(inputSuffix);
    }

    inputCol.appendChild(inputGroup);
  } else {
    inputCol.appendChild(input);
  }

  div.appendChild(inputCol);

  return div;
}

function DateInput(field) {
  const div = document.createElement('div');
  div.classList.add('form-group', 'row');
  const inputCol = document.createElement('div');

  if (field.label) {
    div.appendChild(createInputLabel(field));
    inputCol.setAttribute('class', 'col-sm-9');
  } else {
    inputCol.setAttribute('class', 'col-sm-12');
  }

  const input = document.createElement('input');
  input.setAttribute('type', 'text');
  input.setAttribute('name', field.name);
  input.setAttribute('id', field.name);
  input.setAttribute('class', 'form-control');
  if (field.required) {
    input.setAttribute('required', true);
  }

  input.setAttribute('data-mask', 'date');
  checkMasks(input, 'date');

  if (field.required) {
    input.setAttribute('required', true);
  }
  if (field.read_only) {
    input.setAttribute('readonly', true);
  }

  inputCol.appendChild(input);
  div.appendChild(inputCol);

  return div;
}

function TimeInput(field) {
  const div = document.createElement('div');
  div.classList.add('form-group', 'row');
  const inputCol = document.createElement('div');

  if (field.label) {
    div.appendChild(createInputLabel(field));
    inputCol.setAttribute('class', 'col-sm-9');
  } else {
    inputCol.setAttribute('class', 'col-sm-12');
  }

  const input = document.createElement('input');
  input.setAttribute('type', 'text');
  input.setAttribute('name', field.name);
  input.setAttribute('id', field.name);
  input.setAttribute('class', 'form-control');
  if (field.required) {
    input.setAttribute('required', true);
  }

  input.setAttribute('data-mask', 'time');
  checkMasks(input, 'time');

  if (field.required) {
    input.setAttribute('required', true);
  }
  if (field.read_only) {
    input.setAttribute('readonly', true);
  }

  inputCol.appendChild(input);
  div.appendChild(inputCol);

  return div;
}

function TextArea(field) {
  const div = document.createElement('div');
  div.classList.add('form-group', 'row');
  const inputCol = document.createElement('div');

  if (field.label) {
    div.appendChild(createInputLabel(field));
    inputCol.setAttribute('class', 'col-sm-9');
  } else {
    inputCol.setAttribute('class', 'col-sm-12');
  }

  const textarea = document.createElement('textarea');
  textarea.setAttribute('name', field.name);
  textarea.setAttribute('id', field.name);
  textarea.setAttribute('class', 'form-control');
  if (field.required) {
    input.setAttribute('required', true);
  }
  if (field.read_only) {
    input.setAttribute('readonly', true);
  }

  inputCol.appendChild(textarea);
  div.appendChild(inputCol);

  return div;
}

function EmailInput(field) {
  const div = document.createElement('div');
  const inputCol = document.createElement('div');

  if (field.label) {
    const label = createInputLabel(field);
    div.appendChild(label);
  }

  const input = document.createElement('input');
  input.setAttribute('type', 'email');
  input.setAttribute('name', field.name);
  input.setAttribute('id', field.name);
  input.setAttribute('class', 'form-control');
  if (field.required) {
    input.setAttribute('required', true);
  }
  if (field.read_only) {
    input.setAttribute('readonly', true);
  }

  inputDiv.appendChild(input);
  div.appendChild(inputDiv);

  return div;
}

function SelectInput(field) {
  const div = document.createElement('div');
  div.classList.add('form-group', 'row');
  const inputCol = document.createElement('div');

  if (field.label) {
    div.appendChild(createInputLabel(field));
    inputCol.setAttribute('class', 'col-sm-9');
  } else {
    inputCol.setAttribute('class', 'col-sm-12');
  }

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
    input.setAttribute('required', true);
  }
  if (field.read_only) {
    input.setAttribute('readonly', true);
  }

  inputCol.appendChild(select);
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

function HiddenInput(field) {
  const input = document.createElement('input');
  input.setAttribute('type', 'text');
  input.setAttribute('name', field.name);
  input.setAttribute('id', field.name);
  input.setAttribute('hidden', true);
  return input;
}

export {
  TextInput,
  NumberInput,
  DateInput,
  TimeInput,
  BooleanInput,
  CheckboxInput,
  RadioInput,
  EmailInput,
  HiddenInput,
  SelectInput,
  TextArea,
};
