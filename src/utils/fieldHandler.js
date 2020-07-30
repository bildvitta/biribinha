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

  // boolean
  // checkbox
  // color - not gonna use
  // date
  // datetime
  // decimal
  // editor - not gonna use
  // money
  // number
  // percent
  // radio
  // select
  // text
  // textarea
  // time
  // upload

  fields.map((field) => {
    if (field.type) {
      switch (field.type) {
        case 'text':
          form.appendChild(TextInput(field));
          break;

        case 'number':
          form.appendChild(NumberInput(field));
          break;

        case 'email':
          form.appendChild(EmailInput(field));
          break;

        case 'textarea':
          form.appendChild(TextArea(field));
          break;

        case 'date':
          form.appendChild(DateInput(field));
          break;

        case 'time':
          form.appendChild(TimeInput(field));
          break;

        case 'select':
          form.appendChild(SelectInput(field));
          break;

        case 'checkbox':
          form.appendChild(CheckboxInput(field));
          break;

        case 'radio':
          form.appendChild(RadioInput(field));
          break;

        case 'boolean':
          form.appendChild(BooleanInput(field));
          break;

        case 'hidden':
          form.appendChild(HiddenInput(field));
          break;

        default:
          break;
      }
    }
  });
}
