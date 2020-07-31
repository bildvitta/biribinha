import {
  TextInput,
  NumberInput,
  BooleanInput,
  CheckboxInput,
  RadioInput,
  EmailInput,
  HiddenInput,
  SelectInput,
  TextArea,
  DateInput,
  TimeInput,
} from '../form/input';

export default function fieldCreate(fields) {
  const form = document.getElementById('formCreator');

  fields.map((field) => {
    if (field.type) {
      switch (field.type) {
        case 'checkbox':
          return form.appendChild(CheckboxInput(field));

        case 'radio':
          return form.appendChild(RadioInput(field));

        case 'boolean':
          return form.appendChild(BooleanInput(field));

        default:
          return form.appendChild(TextInput(field));
      }
    }
  });
}
