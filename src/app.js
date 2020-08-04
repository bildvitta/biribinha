import api from './services/api';

import formHandler from './utils/formHandler';
import resultHandler from './utils/resultHandler';
import maskHandler from './utils/maskHandler';
import errorHandler from './utils/errorHandler';
import fieldHandler from './utils/fieldHandler';

import './global.scss';
// https://github.com/bildvitta/api
// mudar para export default class
class App {
  async start({ mode, url, elementId = 'app' }) {
    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error();
      }

      const { errors, fields, metadata, result } = await response.json();

      this.initView({ mode, url, elementId });
      this.insertFields(fields);
      result && resultHandler(result);
      errors && errorHandler(errors);
    } catch (error) {
      throw new Error('Something whrong is not right', error);
    }
  }

  initView(config) {
    const app = document.getElementById(config.elementId);
    const form = formHandler(config);
    app.appendChild(form);
  }

  insertFields(fields) {
    const fieldElements = Object.values(fields);

    fieldElements &&
      (fieldHandler(fieldElements) || maskHandler(fieldElements));
  }
}

const app = new App();
app.start({
  url: 'http://localhost:3000/colaborador',
  mode: 'replace',
});
