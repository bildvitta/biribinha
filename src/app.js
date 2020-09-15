import formHandler from './utils/formHandler';
import resultHandler from './utils/resultHandler';
import maskHandler from './utils/maskHandler';
import errorHandler from './utils/errorHandler';
import fieldHandler from './utils/fieldHandler';
import submitHandler from './utils/submitHandler';

import './global.scss';
// https://github.com/bildvitta/api

class Biribinha {
  async start({ mode, url, elementId = 'app', elementStyle = 'bootstrap4' }) {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('Can not connect to the server');
    }

    const { errors, fields, result } = await response.json();

    if (!fields) {
      throw new Error('There is no Fields here, check if is everything ok');
    }

    this.initView({ mode, url, elementId, elementStyle });
    this.insertFields(fields, elementStyle);
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
    app.classList.add(`biribinha-${config.elementStyle}`);
    app.appendChild(form);
  }

  insertFields(fields, elementStyle) {
    const fieldElements = Object.values(fields);

    fieldElements &&
      (fieldHandler(fieldElements, elementStyle) || maskHandler(fieldElements));
  }
}

window.Biribinha = Biribinha;
export default Biribinha;
