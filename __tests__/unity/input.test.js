import '@testing-library/jest-dom';
import { getByLabelText, QueryByAttribute } from '@testing-library/dom';

import { normalInput, checkboxInput, booleanInput } from '../../src/form/input';

describe('rendering the basic Inputs', () => {
  test('Creating a Required Input', () => {
    const div = normalInput({
      name: 'textinput',
      required: true,
      label: 'Texto',
      type: 'text',
    });

    const inputNode = getByLabelText(div, 'Texto', { selector: 'input' });
    expect(inputNode.getAttribute('type')).toBe('text');
    expect(inputNode.getAttribute('name')).toBe('textinput');
    expect(inputNode.getAttribute('id')).toBe('textinput');
    expect(inputNode).toHaveValue('');
    expect(inputNode).toBeRequired();
    expect(inputNode).not.toBeDisabled();
  });

  test('Creating a Input with min-length and max-length', () => {
    const div = normalInput({
      name: 'TextInput',
      label: 'Texto',
      type: 'text',
      min_length: 12,
      max_length: 30,
    });

    const inputNode = getByLabelText(div, 'Texto');

    expect(inputNode.getAttribute('type')).toBe('text');
    expect(inputNode.getAttribute('name')).toBe('TextInput');
    expect(inputNode.getAttribute('id')).toBe('TextInput');
    expect(inputNode.getAttribute('min_length')).toBe('12');
    expect(inputNode.getAttribute('max_length')).toBe('30');
    expect(inputNode).toHaveValue('');
    expect(inputNode).not.toBeRequired();
    expect(inputNode).not.toBeDisabled();
  });

  test('Creating a readonly Input', () => {
    const div = normalInput({
      name: 'TextInput',
      label: 'Texto',
      type: 'text',
      read_only: true,
    });

    const inputNode = getByLabelText(div, 'Texto');

    expect(inputNode.getAttribute('type')).toBe('text');
    expect(inputNode.getAttribute('name')).toBe('TextInput');
    expect(inputNode.getAttribute('id')).toBe('TextInput');
    expect(inputNode.getAttribute('readonly')).toBe('true');
    expect(inputNode).toHaveValue('');
    expect(inputNode).not.toBeRequired();
    expect(inputNode).not.toBeDisabled();
  });

  test('Creating a Input', () => {
    const div = normalInput({
      name: 'TextInput',
      label: 'Texto',
      type: 'text',
    });

    const inputNode = getByLabelText(div, 'Texto');

    expect(inputNode.getAttribute('type')).toBe('text');
    expect(inputNode.getAttribute('name')).toBe('TextInput');
    expect(inputNode.getAttribute('id')).toBe('TextInput');
    expect(inputNode).toHaveValue('');
    expect(inputNode).not.toBeRequired();
    expect(inputNode).not.toBeDisabled();
  });

  test('Creating a Input with prefix and suffix', () => {
    const div = normalInput({
      name: 'TextInput',
      label: 'Texto',
      type: 'text',
      prefix: '$',
      suffix: ',00',
    });

    const inputNode = getByLabelText(div, 'Texto');
    const prefixText = div.innerHTML.match('$')
    const suffixText = div.innerHTML.match(',00')

    expect(prefixText).not.toBeNull()
    expect(suffixText).not.toBeNull()

    expect(inputNode.getAttribute('type')).toBe('text');
    expect(inputNode.getAttribute('name')).toBe('TextInput');
    expect(inputNode.getAttribute('id')).toBe('TextInput');
    expect(inputNode).toHaveValue('');
    expect(inputNode).not.toBeRequired();
    expect(inputNode).not.toBeDisabled();
  });

  test('Creating a Input with hint', () => {
    const div = normalInput({
      name: 'TextInput',
      label: 'Texto',
      type: 'text',
      hint: 'help'
    });

    const labelText = div.innerHTML.match('Texto')
    const hint = div.getElementsByClassName('with-tooltip')
    const hintText = div.innerHTML.match('help')

    expect(labelText).not.toBeNull()
    expect(hint).not.toBeNull()
    expect(hintText).not.toBeNull()
  });

  test('Creating a TextArea Input', () => {
    const div = normalInput({
      name: 'TextArea',
      label: 'Texto',
      type: 'textarea',
    });

    const inputNode = getByLabelText(div, 'Texto');

    expect(inputNode.getAttribute('name')).toBe('TextArea');
    expect(inputNode.getAttribute('id')).toBe('TextArea');
    expect(inputNode).toHaveValue('');
    expect(inputNode).not.toBeRequired();
    expect(inputNode).not.toBeDisabled();
  });

  test('Creating a Email Input', () => {
    const div = normalInput({
      name: 'EmailInput',
      label: 'Email',
      type: 'email',
    });

    const inputNode = getByLabelText(div, 'Email');

    expect(inputNode.getAttribute('type')).toBe('text');
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
      type: 'select',
      options: [
        { label: 'Select a option...', value: '' },
        { label: 'Option 1', value: 1 },
        { label: 'Option 2', value: 2 },
      ],
    };

    const div = normalInput(field);
    const inputNode = getByLabelText(div, 'Select');

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
      type: 'checkbox',
      label: 'checkbox',
      default: [1, 2],
      options: [
        { label: 'Option 1', value: 1 },
        { label: 'Option 2', value: 2 },
        { label: 'Option 3', value: 3 },
      ],
    };

    const checkbox = checkboxInput(field);
    const checkboxes = checkbox.getElementsByTagName('input');
    const legendText = checkbox.getElementsByTagName('legend');
    expect(legendText).not.toBeNull()

    for (let i = 0; i < checkboxes.length; i++) {
      if (i === 0 || i === 1) expect(checkboxes[i]).toBeChecked();
      else expect(checkboxes[i]).not.toBeChecked();
    }
  });

  test('Creating a Hidden Input', () => {
    const div = normalInput({ name: 'id', type: 'hidden' });
    const input = div.querySelector('input');

    expect(input.getAttribute('type')).toBe('hidden');
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
    const input = booleanInput(field);
  });

  test('Date Input', () => {
    const div = normalInput({
      name: 'create_date',
      required: true,
      label: 'Data de criação',
      type: 'date',
    });

    const inputNode = getByLabelText(div, 'Data de criação', {
      selector: 'input',
    });

    expect(inputNode.getAttribute('type')).toBe('text');
    expect(inputNode.getAttribute('name')).toBe('create_date');
    expect(inputNode.getAttribute('id')).toBe('create_date');
    expect(inputNode).toHaveValue('');
    expect(inputNode).toBeRequired();
    expect(inputNode).not.toBeDisabled();
  });

  test('Number Input', () => {
    const div = normalInput({
      name: 'phone',
      required: true,
      label: 'Telefone',
      type: 'number'
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
      type: 'radio',
      label: 'radio',
      default: [1, 2],
      options: [
        { label: 'Option 1', value: 1 },
        { label: 'Option 2', value: 2 },
        { label: 'Option 3', value: 3 },
      ],
    };
    const radio = checkboxInput(field);
    const radios = radio.getElementsByTagName('input');
    const legendText = radio.getElementsByTagName('legend');
    expect(legendText).not.toBeNull()

    for (let i = 0; i < radios.length; i++) {
      if (i === 0 || i === 1) expect(radios[i]).toBeChecked();
      else expect(radios[i]).not.toBeChecked();
    }
  });

});
