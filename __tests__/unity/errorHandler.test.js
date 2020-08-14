import '@testing-library/jest-dom';
import errorHandler from '../../src/utils/errorHandler';

test('error handling', () => {
  document.body.innerHTML = `
    <div id="app">
      <div class="form-group row">
        <label class="col-sm-3 col-form-label" for="name">
          Nome
        </label>
        <div class="col-sm-9">
          <input name="name" id="name" class="form-control is-invalid" type="text" readonly="true" value="Pedro Silva de Imbondo">
        </div>
      </div>
    </div>
  `;
  const errors = {
    name: [
      'Campo obrigatório',
    ],
  };

  errorHandler(errors);

  const errorsResponse = document.getElementsByClassName('invalid-feedback');

  expect(
    errorsResponse[0].innerHTML.includes('Campo obrigatório')
  ).toBeTruthy();
});