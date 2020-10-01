import setAttrs from '../form/setAttribute';

export default function (config) {
  const form = config.elementForm
    ? document.createElement('form')
    : document.createElement('div');

  const attributes = {
    id: 'formCreator',
  };

  config.action && (attributes.action = config.action);
  config.method && (attributes.method = config.method);

  setAttrs(form, attributes);

  return form;
}
