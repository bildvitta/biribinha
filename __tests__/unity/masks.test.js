import { fireEvent } from '@testing-library/dom';
import '@testing-library/jest-dom';

import { newTextInput } from '../../src/form/input';

describe('rendering the basic Inputs', () => {
  test('Input with money mask', () => {
    const input = newTextInput({
      name: 'money',
      label: 'Dinheiro',
      type: 'text',
      mask: 'money',
    });

    expect(input.getAttribute('type')).toBe('text');
    expect(input.getAttribute('name')).toBe('money');
    expect(input.getAttribute('id')).toBe('money');
    expect(input.getAttribute('data-mask')).toBe('money');
    input.setAttribute('data-testid', 'money');
    expect(input).not.toBeRequired();
    expect(input).not.toBeDisabled();
    fireEvent.input(input, { target: { value: 'TESTE1234,56' } });
    expect(input.value).toBe('1.234,56');
  });

  test('Input with phone mask', () => {
    const input = newTextInput({
      name: 'phone',
      label: 'Telefone',
      type: 'text',
      mask: 'phone',
    });

    expect(input.getAttribute('type')).toBe('text');
    expect(input.getAttribute('name')).toBe('phone');
    expect(input.getAttribute('id')).toBe('phone');
    expect(input.getAttribute('data-mask')).toBe('phone');
    input.setAttribute('data-testid', 'phone');
    expect(input).not.toBeRequired();
    expect(input).not.toBeDisabled();
    fireEvent.input(input, { target: { value: '3535218521' } });
    expect(input.value).toBe('(35) 3521-8521');
    fireEvent.input(input, { target: { value: '16988273352' } });
    expect(input.value).toBe('(16) 98827-3352');
    fireEvent.input(input, { target: { value: '' } });
  });

  test('Input with postal-code mask', () => {
    const input = newTextInput({
      name: 'postal-code',
      label: 'CEP',
      type: 'text',
      mask: 'postal-code',
    });

    expect(input.getAttribute('type')).toBe('text');
    expect(input.getAttribute('name')).toBe('postal-code');
    expect(input.getAttribute('id')).toBe('postal-code');
    expect(input.getAttribute('data-mask')).toBe('postal-code');
    input.setAttribute('data-testid', 'postal-code');
    expect(input).not.toBeRequired();
    expect(input).not.toBeDisabled();
    fireEvent.input(input, { target: { value: '14015110!@#qwe' } });
    expect(input.value).toBe('14015-110');
  });

  test('Input with personal-document mask', () => {
    const input = newTextInput({
      name: 'personal-document',
      label: 'CPF',
      type: 'text',
      mask: 'personal-document',
    });

    expect(input.getAttribute('type')).toBe('text');
    expect(input.getAttribute('name')).toBe('personal-document');
    expect(input.getAttribute('id')).toBe('personal-document');
    expect(input.getAttribute('data-mask')).toBe('personal-document');
    input.setAttribute('data-testid', 'personal-document');
    expect(input).not.toBeRequired();
    expect(input).not.toBeDisabled();
    fireEvent.input(input, { target: { value: '49133123080' } });
    expect(input.value).toBe('491.331.230-80');
    fireEvent.input(input, { target: { value: '' } });
    fireEvent.input(input, {
      target: { value: 'teste de mascara 22.775.107/0001-44' },
    });
    expect(input.value).toBe('227.751.070-00');
  });

  test('Input with company-document mask', () => {
    const input = newTextInput({
      name: 'company-document',
      label: 'CPF',
      type: 'text',
      mask: 'company-document',
    });

    expect(input.getAttribute('type')).toBe('text');
    expect(input.getAttribute('name')).toBe('company-document');
    expect(input.getAttribute('id')).toBe('company-document');
    expect(input.getAttribute('data-mask')).toBe('company-document');
    input.setAttribute('data-testid', 'company-document');
    expect(input).not.toBeRequired();
    expect(input).not.toBeDisabled();
    fireEvent.input(input, { target: { value: '22775107000144' } });
    expect(input.value).toBe('22.775.107/0001-44');
    fireEvent.input(input, { target: { value: '' } });
    fireEvent.input(input, {
      target: { value: 'teste de mascara 83.653.646/0001-03' },
    });
    expect(input.value).toBe('83.653.646/0001-03');
  });

  test('Input with document mask', () => {
    const input = newTextInput({
      name: 'document',
      label: 'CPF',
      type: 'text',
      mask: 'document',
    });

    expect(input.getAttribute('type')).toBe('text');
    expect(input.getAttribute('name')).toBe('document');
    expect(input.getAttribute('id')).toBe('document');
    expect(input.getAttribute('data-mask')).toBe('document');
    input.setAttribute('data-testid', 'document');
    expect(input).not.toBeRequired();
    expect(input).not.toBeDisabled();
    fireEvent.input(input, { target: { value: '22775107000144' } });
    expect(input.value).toBe('22.775.107/0001-44');
    fireEvent.input(input, { target: { value: '' } });
    fireEvent.input(input, {
      target: { value: '49133123080' },
    });
    expect(input.value).toBe('491.331.230-80');
  });
});
