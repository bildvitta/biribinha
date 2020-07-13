export default function newForm(display) {
  const form = document.createElement('form');
  form.setAttribute('id', 'formCreator');
  form.setAttribute('action', '');
  form.setAttribute('method', 'post');

  if (display) {
    form.setAttribute('class', `form-${display}`);
  }

  return form;
}
