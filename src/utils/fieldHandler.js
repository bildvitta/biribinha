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
        case 'text' || 'money':
          return form.appendChild(TextInput(field));

        case 'number' || 'percent':
          return form.appendChild(NumberInput(field));

        case 'email':
          return form.appendChild(EmailInput(field));

        case 'textarea':
          return form.appendChild(TextArea(field));

        case 'date':
          return form.appendChild(DateInput(field));

        case 'time':
          return form.appendChild(TimeInput(field));

        case 'select':
          return form.appendChild(SelectInput(field));

        case 'checkbox':
          return form.appendChild(CheckboxInput(field));

        case 'radio':
          return form.appendChild(RadioInput(field));

        case 'boolean':
          return form.appendChild(BooleanInput(field));

        case 'hidden':
          return form.appendChild(HiddenInput(field));

        default:
          return form.appendChild(TextInput(field));
      }
    }
  });
}
