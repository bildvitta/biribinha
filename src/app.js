import formHandler from './utils/formHandler';
import resultHandler from './utils/resultHandler';
import maskHandler from './utils/maskHandler';
import errorHandler from './utils/errorHandler';
import fieldHandler from './utils/fieldHandler';

import './global.scss';
// https://github.com/bildvitta/api
// mudar para export default class

class Biribinha {
  async start({ mode, url, elementId = 'app' }) {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error();
    }

    const { errors, fields, metadata, result } = await response.json();

    this.initView({ mode, url, elementId });
    this.insertFields(fields);
    result && resultHandler(result);
    errors && errorHandler(errors);
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

// const app = new Biribinha();
// app.start({
//   url: 'http://localhost:3000/colaborador',
//   mode: 'replace',
// });
