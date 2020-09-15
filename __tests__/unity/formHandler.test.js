import formHandler from '../../src/utils/formHandler';

describe('Form Handler', () => {
  test('Form Handler as a form element', () => {
    const form = formHandler({
      elementForm: true,
    });

    expect(form.tagName).toBe('FORM');
  });

  test('Form Handler as a div element', () => {
    const form = formHandler({
      elementForm: false,
    });

    expect(form.tagName).toBe('DIV');
  });
});
