import setAttrs from '../form/setAttribute';

export default function (metadata) {
  const form = document.createElement('form');

  const attributes = {
    id: 'formCreator',
  };

  metadata.action && (attributes.action = metadata.action);
  metadata.method && (attributes.method = metadata.method);

  setAttrs(form, attributes);

  return form;
}
