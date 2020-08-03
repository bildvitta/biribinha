import api from './services/api';

import form from './form/form-creator';

import resultHandler from './utils/resultHandler';
import maskHandler from './utils/maskHandler';
import errorHandler from './utils/errorHandler';
import fieldHandler from './utils/fieldHandler';

// https://github.com/bildvitta/api

async function start() {
  try {
    // const response = await api.get(`/assembleia`);
    const response = await api.get(`/colaborador`);

    const fields = Object.values(response.data.fields);

    if (fields) {
      const app = document.getElementById('app');
      app.appendChild(form());
      fieldHandler(fields);
      maskHandler(fields);
    }

    if (response.data.result) {
      const results = response.data.result;
      resultHandler(results);
    }

    if (response.data.errors) {
      const errors = response.data.errors;
      errorHandler(errors);
    }
  } catch (error) {
    console.error(`Alguma coisa aconteceu: `, error);
  }
}

start();
