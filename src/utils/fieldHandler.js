import { normalInput, checkboxInput, booleanInput } from '../form/input';

export default function (fields) {
  const form = document.getElementById('formCreator');

  fields.map((field) => {
    if (field.type) {
      switch (field.type) {
        case 'checkbox':
        case 'radio':
          return form.appendChild(checkboxInput(field));

        case 'boolean':
          return form.appendChild(booleanInput(field));

        default:
          return form.appendChild(normalInput(field));
      }
    }
  });

  const button = document.createElement('input');
  button.setAttribute('class', 'btn');
  button.setAttribute('type', 'submit');
  button.innerHTML = 'ROLEEE';
  form.appendChild(button);
}
