import formHandler from './utils/formHandler';
import resultHandler from './utils/resultHandler';
import maskHandler from './utils/maskHandler';
import errorHandler from './utils/errorHandler';
import fieldHandler from './utils/fieldHandler';
import submitHandler from './utils/submitHandler';

import './global.scss';
// https://github.com/bildvitta/api

class Biribinha {
  async start({ mode, url, elementId = 'app' }) {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('Can not connect to the server');
    }

    const { errors, fields, result } = await response.json();

    if (!fields) {
      throw new Error('There is no Fields here, check if is everything ok');
    }

    this.initView({ mode, url, elementId });
    this.insertFields(fields);
    result && resultHandler(result);
    errors && errorHandler(errors);
    submitHandler(fields, result, url);
  }

  initView(config) {
    const app = document.getElementById(config.elementId);

    if (!app) {
      throw new Error('Please set a valid element id');
    }

    const form = formHandler(config);
    app.appendChild(form);
  }

  insertFields(fields) {
    const fieldElements = Object.values(fields);

    fieldElements &&
      (fieldHandler(fieldElements) || maskHandler(fieldElements));
  }
}

window.Biribinha = Biribinha;
export default Biribinha;
