import api from './services/api';

import form from './form/form-creator';
import { createInputLabel } from './form/label';
import {
  newTextInput,
  newBooleanInput,
  newCheckboxInput,
  newEmailInput,
  newHiddenInput,
  newSelectInput,
  newTextArea,
  newDateInput,
} from './form/input';
import checkMasks from './form/mask';

async function getStatus() {
  try {
    // const response = await api.get(`/assembleia`);
    const response = await api.get(`/colaborador`);

    const fields = Object.values(response.data.fields);
    const results = response.data.result;

    if (fields) {
      const app = document.getElementById('app');
      app.appendChild(form());
    }

    fieldCreate(fields);
    checkMasks();
    fieldResults(results);
    // fieldErrors(erros);
  } catch (error) {
    console.error(`Alguma coisa aconteceu: `, error);
  }
}

getStatus();

function fieldCreate(fields) {
  const form = document.getElementById('formCreator');

  fields.map((field) => {
    if (field.type) {
      switch (field.type) {
        case 'text':
          form.appendChild(newTextInput(field));
          break;

        case 'email':
          form.appendChild(newEmailInput(field));
          break;

        case 'textarea':
          form.appendChild(newTextArea(field));
          break;

        case 'date':
          form.appendChild(newDateInput(field));
          break;

        case 'select':
          form.appendChild(newSelectInput(field));
          break;

        case 'checkbox':
          form.appendChild(newCheckboxInput(field));
          break;

        case 'boolean':
          form.appendChild(newBooleanInput(field));
          break;

        case 'hidden':
          form.appendChild(newHiddenInput(field));
          break;

        default:
          break;
      }
    }
  });
}

function fieldResults(results) {
  Object.keys(results).forEach((key) => {
    const input = document.getElementById(`${key}`);

    if (input) {
      // case is select
      if (input.tagName === 'SELECT') {
        for (var i = 0; input.options; i++) {
          if (input.options[i].value === results[key]) {
            input.selectedIndex = i;
          }
        }
      }

      // case is normal
      input.setAttribute('value', results[key]);
    }
  });
}
