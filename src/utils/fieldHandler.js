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
  button.classList.add('btn', 'btn-success');
  button.setAttribute('type', 'submit');
  button.setAttribute('value', 'Salvar');
  form.appendChild(button);
}
