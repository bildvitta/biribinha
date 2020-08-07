import { getByLabelText } from '@testing-library/dom';

import {
  createInputLabel,
  createCheckboxLabel,
  createInputLegend,

} from '../../src/form/label';

describe('rendering the basic Labels', () => {
  test('Creating a Input Label with Hint', () => {
    const div = createInputLabel({
      label: 'Texto da label',
      name: 'inputLabel',
      hint: 'Essa é a dica do label'
    });

    const labelText = div.innerHTML.match('Texto da label')
    const hint = div.getElementsByClassName('with-tooltip')
    const hintText = div.innerHTML.match('Essa é a dica do label')

    expect(labelText).not.toBeNull()
    expect(div.getAttribute('for')).toBe('inputLabel')
    expect(hint).not.toBeNull()
    expect(hintText).not.toBeNull()
    // expect(div.span.getAttribute('class', ''))

    // npm run test:watch --label.test.js

    // expect(inputNode.getAttribute('label')).toBe('Texto da label');
    // expect(inputNode.getAttribute('name')).toBe('inputLabel');
    // expect(inputNode.getAttribute('hint')).toBe('Texto');
  });

  test('Creating a Checkbox Label', () => {
    const div = createCheckboxLabel({
      optionLabel: 'Texto checkbox',
      optionValue: '1',
    });

    const optionLabel = div.outerHTML

    console.log(optionLabel)
  });

  // test('Creating a Input Legend', () => {
  //   const div = createInputLegend({
  //     label: 'Texto',
  //     name: 'inputLabel',
  //   });

  //   const inputNode = getByLabelText(div, 'Texto', { selector: 'input' });

  //   expect(inputNode.getAttribute('label')).toBe('Texto');
  //   expect(inputNode.getAttribute('name')).toBe('inputLabel');
  // });
});
