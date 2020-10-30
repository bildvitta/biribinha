import formHandler from './utils/formHandler';
import resultHandler from './utils/resultHandler';
import maskHandler from './utils/maskHandler';
import errorHandler from './utils/errorHandler';
import fieldHandler from './utils/fieldHandler';
import submitHandler from './utils/submitHandler';

import './global.scss';
// https://github.com/bildvitta/api

class Biribinha {
  async start({
    mode,
    url,
    elementId = 'app',
    elementStyle = 'bootstrap4',
    elementForm = true,
  }) {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('Can not connect to the server');
    }

    const { errors, fields, result } = await response.json();

    if (!fields) {
      throw new Error('There is no Fields here, check if is everything ok');
    }

    this.initView({ mode, url, elementId, elementStyle, elementForm });
    this.insertFields(fields, elementStyle);
    result && resultHandler(result);
    errors && errorHandler(errors);
    elementForm && submitHandler(fields, result, url);

    // Creating a event if is everything done
    const event = document.createEvent('HTMLEvents');
    event.initEvent('biribinhaDone', true, false);
    window.dispatchEvent(event);
  }

  initView(config) {
    const app = document.getElementById(config.elementId);

    if (!app) {
      throw new Error('Please set a valid element id');
    }

    app.classList.add(`biribinha-${config.elementStyle}`);
    const form = formHandler(config);
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
