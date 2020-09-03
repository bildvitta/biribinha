import '@testing-library/jest-dom';

import submitHandler from '../../src/utils/submitHandler';

test('render basic create button', () => {
  document.body.innerHTML = `<div id="app"><form id="formCreator"></form></div>`;

  const fields = [
    {
      id: {
        name: 'id',
        label: 'Id',
        default: '',
        type: 'hidden',
      },
    },
  ];
  const results = [];
  const url = '';

  submitHandler(fields, results, url);

  const button = document.body.querySelector('.btn');

  expect(button.classList.value).toBe('btn btn-success');
  expect(button.type).toBe('submit');
  expect(button.value).toBe('Criar');
});

test('render basic edit button', () => {
  document.body.innerHTML = `<div id="app"><form id="formCreator"></form></div>`;

  const fields = [
    {
      id: {
        name: 'id',
        label: 'Id',
        default: '',
        type: 'hidden',
      },
    },
  ];
  const results = { id: 1133 };
  const url = '';

  submitHandler(fields, results, url);

  const button = document.body.querySelector('.btn');

  expect(button.classList.value).toBe('btn btn-success');
  expect(button.type).toBe('submit');
  expect(button.value).toBe('Salvar');
});
