import '@testing-library/jest-dom';
import { getByLabelText } from '@testing-library/dom';

import {
  normalInput,
  checkboxInput,
  booleanInput

} from '../../src/form/input';

describe('rendering the basic Inputs', () => {
  test('Creating a Required Input', () => {
    const div = normalInput({
      name: 'textinput',
      required: true,
      label: 'Texto',
      type: 'input'
    });

    const inputNode = getByLabelText(div, 'Texto', { selector: 'input' });

    expect(inputNode.getAttribute('type')).toBe('text');
    expect(inputNode.getAttribute('name')).toBe('textinput');
    expect(inputNode.getAttribute('id')).toBe('textinput');
    expect(inputNode).toHaveValue('');
    expect(inputNode).toBeRequired();
    expect(inputNode).not.toBeDisabled();
  });

  test('Creating a Input', () => {
    const div = normalInput({ name: 'TextInput', label: 'Texto', type: 'input'});

    const inputNode = getByLabelText(div, 'Texto');

    expect(inputNode.getAttribute('type')).toBe('text');
    expect(inputNode.getAttribute('name')).toBe('TextInput');
    expect(inputNode.getAttribute('id')).toBe('TextInput');
    expect(inputNode).toHaveValue('');
    expect(inputNode).not.toBeRequired();
    expect(inputNode).not.toBeDisabled();
  });

  test('Creating a TextArea Input', () => {
    const div = newTextArea({ name: 'TextArea', label: 'Texto' });

    const inputNode = getByLabelText(div, 'Texto');

    expect(inputNode.getAttribute('name')).toBe('TextArea');
    expect(inputNode.getAttribute('id')).toBe('TextArea');
    expect(inputNode).toHaveValue('');
    expect(inputNode).not.toBeRequired();
    expect(inputNode).not.toBeDisabled();
  });

  test('Creating a Email Input', () => {
    const div = newEmailInput({ name: 'EmailInput', label: 'Email' });

    const inputNode = getByLabelText(div, 'Email');

    expect(inputNode.getAttribute('type')).toBe('email');
    expect(inputNode.getAttribute('name')).toBe('EmailInput');
    expect(inputNode.getAttribute('id')).toBe('EmailInput');
    expect(inputNode).toHaveValue('');
    expect(inputNode).not.toBeRequired();
    expect(inputNode).not.toBeDisabled();
  });

  test('Creating a Select Input', () => {
    const field = {
      name: 'select',
      label: 'Select',
      options: [
        { label: 'Select a option...', value: '' },
        { label: 'Option 1', value: 1 },
        { label: 'Option 2', value: 2 },
      ],
    };
    const div = newSelectInput(field);
    const inputNode = getByLabelText(div, 'Select', { selector: 'select' });

    expect(inputNode.getAttribute('name')).toBe('select');
    expect(inputNode.getAttribute('id')).toBe('select');
    expect(inputNode).toHaveValue('');
    expect(inputNode).toHaveDisplayValue('Select a option...');
    expect(inputNode).not.toBeRequired();
    expect(inputNode).not.toBeDisabled();
  });

  test('Creating a Checkboxes Input', () => {
    const field = {
      name: 'Checkbox',
      default: [1, 2],
      options: [
        { label: 'Option 1', value: 1 },
        { label: 'Option 2', value: 2 },
        { label: 'Option 3', value: 3 },
      ],
    };
    const checkbox = newCheckboxInput(field);
    const checkboxes = checkbox.getElementsByTagName('input');

    for (let i = 0; i < checkboxes.length; i++) {
      if (i === 0 || i === 1) expect(checkboxes[i]).toBeChecked();
      else expect(checkboxes[i]).not.toBeChecked();
    }
  });

  test('Creating a Hidden Input', () => {
    const input = newHiddenInput({ name: 'id' });
    expect(input.getAttribute('type')).toBe('text');
    expect(input.getAttribute('name')).toBe('id');
    expect(input.getAttribute('id')).toBe('id');
    expect(input).toHaveValue('');
    expect(input).not.toBeRequired();
    expect(input).not.toBeDisabled();
    expect(input).not.toBeVisible();
  });

  test('Creating a Boolean Input', () => {
    const field = {
      label: 'boolean',
      name: 'boolean',
    };
    const input = newBooleanInput(field);
  });

  test('Date Input', () => {
    const div = newDateInput({
      name: 'create_date',
      required: true,
      label: 'Data de criação',
    });

    const inputNode = getByLabelText(div, 'Data de criação', {
      selector: 'input',
    });

    expect(inputNode.getAttribute('type')).toBe('text');
    expect(inputNode.getAttribute('name')).toBe('create_date');
    expect(inputNode.getAttribute('id')).toBe('create_date');
    expect(inputNode).toHaveValue('  /  /    ');
    expect(inputNode).toBeRequired();
    expect(inputNode).not.toBeDisabled();
  });

  test('Number Input', () => {
    const div = newNumberInput({
      name: 'phone',
      required: true,
      label: 'Telefone',
    });

    const inputNode = getByLabelText(div, 'Telefone', {
      selector: 'input',
    });

    expect(inputNode.getAttribute('type')).toBe('text');
    expect(inputNode.getAttribute('name')).toBe('phone');
    expect(inputNode.getAttribute('id')).toBe('phone');
    expect(inputNode).toBeRequired();
    expect(inputNode).not.toBeDisabled();
  });

  test('Creating a Radio Input', () => {
    const field = {
      name: 'Radio',
      default: [1, 2],
      options: [
        { label: 'Option 1', value: 1 },
        { label: 'Option 2', value: 2 },
        { label: 'Option 3', value: 3 },
      ],
    };
    const radio = newRadioInput(field);
    const radios = radio.getElementsByTagName('input');

    for (let i = 0; i < radios.length; i++) {
      if (i === 0 || i === 1) expect(radios[i]).toBeChecked();
      else expect(radios[i]).not.toBeChecked();
    }
  });

});
