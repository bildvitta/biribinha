import '@testing-library/jest-dom';
import {
  newTextInput,
  newTextArea,
  newEmailInput,
  newSelectInput,
  newCheckboxInput,
  newHiddenInput,
  newBooleanInput,
} from '../../src/form/input';

describe('rendering the basic Inputs', () => {
  test('Creating a Required Input', () => {
    const input = newTextInput({ name: 'TextInput', required: true });
    expect(input.getAttribute('type')).toBe('text');
    expect(input.getAttribute('name')).toBe('TextInput');
    expect(input.getAttribute('id')).toBe('TextInput');
    expect(input).toHaveValue('');
    expect(input).toBeRequired();
    expect(input).not.toBeDisabled();
  });

  test('Creating a Input', () => {
    const input = newTextInput({ name: 'TextInput' });
    expect(input.getAttribute('type')).toBe('text');
    expect(input.getAttribute('name')).toBe('TextInput');
    expect(input.getAttribute('id')).toBe('TextInput');
    expect(input).toHaveValue('');
    expect(input).not.toBeRequired();
    expect(input).not.toBeDisabled();
  });

  test('Creating a TextArea Input', () => {
    const textarea = newTextArea({ name: 'TextArea' });
    expect(textarea.getAttribute('name')).toBe('TextArea');
    expect(textarea.getAttribute('id')).toBe('TextArea');
    expect(textarea).toHaveValue('');
    expect(textarea).not.toBeRequired();
    expect(textarea).not.toBeDisabled();
  });

  test('Creating a Email Input', () => {
    const input = newEmailInput({ name: 'EmailInput' });
    expect(input.getAttribute('type')).toBe('email');
    expect(input.getAttribute('name')).toBe('EmailInput');
    expect(input.getAttribute('id')).toBe('EmailInput');
    expect(input).toHaveValue('');
    expect(input).not.toBeRequired();
    expect(input).not.toBeDisabled();
  });

  test('Creating a Select Input', () => {
    const field = {
      name: 'Select',
      options: [
        { label: 'Select a option...', value: '' },
        { label: 'Option 1', value: 1 },
        { label: 'Option 2', value: 2 },
      ],
    };
    const select = newSelectInput(field);
    expect(select.getAttribute('name')).toBe('Select');
    expect(select.getAttribute('id')).toBe('Select');
    expect(select).toHaveValue('');
    expect(select).toHaveDisplayValue('Select a option...');
    expect(select).not.toBeRequired();
    expect(select).not.toBeDisabled();
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
});
