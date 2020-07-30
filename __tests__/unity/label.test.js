import '@testing-library/jest-dom';
import { getByLabelText } from '@testing-library/dom';

import {
  createInputLabel,
  createCheckboxLabel,
  createInputLegend,

} from '../../src/form/label';

describe('rendering the basic Labels', () => {
  test('Creating a Input Label', () => {
    const div = createInputLabel({
      label: 'Texto da label',
      name: 'inputLabel',
      hint: 'Texto',
    });

    const inputNode = getByLabelText(div, 'Texto da label', { selector: 'input' });

    expect(inputNode.getAttribute('label')).toBe('Texto da label');
    expect(inputNode.getAttribute('name')).toBe('inputLabel');
    expect(inputNode.getAttribute('hint')).toBe('Texto');
  });

  test('Creating a Checkbox Label', () => {
    const div = createCheckboxLabel({
      optionLabel: 'Texto checkbox 1',
      optionValue: 1,
    });

    const inputNode = getByLabelText(div, 'Texto checkbox 1', { selector: 'input' });

    expect(inputNode.getAttribute('optionLabel')).toBe('Texto checkbox 1');
    expect(inputNode.getAttribute('optionValue')).toBe(1);
  });

  test('Creating a Input Legend', () => {
    const div = createInputLegend({
      label: 'Texto',
      name: 'inputLabel',
    });

    const inputNode = getByLabelText(div, 'Texto', { selector: 'input' });

    expect(inputNode.getAttribute('label')).toBe('Texto');
    expect(inputNode.getAttribute('name')).toBe('inputLabel');
  });
});
