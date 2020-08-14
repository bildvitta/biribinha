import {
  normalInput,
  checkboxInput,
  booleanInput,
  uploaderInput,
} from '../form/input';

export default function (fields, options) {
  const form = document.getElementById('formCreator');

  fields.map((field) => {
    if (field.type) {
      switch (field.type) {
        case 'checkbox':
        case 'radio':
          return form.appendChild(checkboxInput(field));

        case 'boolean':
          return form.appendChild(booleanInput(field));

        case 'file':
          return form.appendChild(uploaderInput(field, options));

        default:
          return form.appendChild(normalInput(field));
      }
    }
  });
}
