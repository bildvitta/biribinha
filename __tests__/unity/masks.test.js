import { fireEvent, getByLabelText } from '@testing-library/dom';
import '@testing-library/jest-dom';

import { normalInput } from '../../src/form/input';

describe('rendering the basic Inputs', () => {
  test.only('Input with money mask', () => {
    const div = normalInput({
      name: 'money',
      label: 'Dinheiro',
      type: 'text',
      mask: 'money',
    });

    const inputNode = getByLabelText(div, 'Dinheiro', { selector: 'input' });

    expect(inputNode.getAttribute('type')).toBe('text');
    expect(inputNode.getAttribute('name')).toBe('money');
    expect(inputNode.getAttribute('id')).toBe('money');
    expect(inputNode).not.toBeRequired();
    expect(inputNode).not.toBeDisabled();
    fireEvent.input(inputNode, { target: { value: 'TESTE1234,56' } });
    expect(inputNode.value).toBe('1.234,56');
  });

  test('Input with phone mask', () => {
    const div = normalInput({
      name: 'phone',
      label: 'Telefone',
      type: 'text',
      mask: 'phone',
    });

    const inputNode = getByLabelText(div, 'Telefone', { selector: 'input' });

    expect(inputNode.getAttribute('type')).toBe('text');
    expect(inputNode.getAttribute('name')).toBe('phone');
    expect(inputNode.getAttribute('id')).toBe('phone');
    expect(inputNode).not.toBeRequired();
    expect(inputNode).not.toBeDisabled();
    fireEvent.input(inputNode, { target: { value: '3535218521' } });
    expect(inputNode.value).toBe('(35) 3521-8521');
    fireEvent.input(inputNode, { target: { value: '16988273352' } });
    expect(inputNode.value).toBe('(16) 98827-3352');
    fireEvent.input(inputNode, { target: { value: '169882%%&73352' } });
    expect(inputNode.value).toBe('(16) 98827-3352');
  });

  test('Input with postal-code mask', () => {
    const div = normalInput({
      name: 'postal-code',
      label: 'CEP',
      type: 'text',
      mask: 'postal-code',
    });

    const inputNode = getByLabelText(div, 'CEP', { selector: 'input' });

    expect(inputNode.getAttribute('type')).toBe('text');
    expect(inputNode.getAttribute('name')).toBe('postal-code');
    expect(inputNode.getAttribute('id')).toBe('postal-code');
    expect(inputNode).not.toBeRequired();
    expect(inputNode).not.toBeDisabled();
    fireEvent.input(inputNode, { target: { value: '14015110!@#qwe' } });
    expect(inputNode.value).toBe('14015-110');
  });

  test('Input with personal-document mask', () => {
    const div = normalInput({
      name: 'personal-document',
      label: 'CPF',
      type: 'text',
      mask: 'personal-document',
    });

    const inputNode = getByLabelText(div, 'CPF', { selector: 'input' });

    expect(inputNode.getAttribute('type')).toBe('text');
    expect(inputNode.getAttribute('name')).toBe('personal-document');
    expect(inputNode.getAttribute('id')).toBe('personal-document');
    expect(inputNode).not.toBeRequired();
    expect(inputNode).not.toBeDisabled();
    fireEvent.input(inputNode, { target: { value: '49133123080' } });
    expect(inputNode.value).toBe('491.331.230-80');
    fireEvent.input(inputNode, { target: { value: '' } });
    fireEvent.input(inputNode, {
      target: { value: 'teste de mascara 22.775.107/0001-44' },
    });
    expect(inputNode.value).toBe('227.751.070-00');
  });

  test('Input with company-document mask', () => {
    const div = normalInput({
      name: 'company-document',
      label: 'CPF',
      type: 'text',
      mask: 'company-document',
    });

    const inputNode = getByLabelText(div, 'CPF', { selector: 'input' });

    expect(inputNode.getAttribute('type')).toBe('text');
    expect(inputNode.getAttribute('name')).toBe('company-document');
    expect(inputNode.getAttribute('id')).toBe('company-document');
    expect(inputNode).not.toBeRequired();
    expect(inputNode).not.toBeDisabled();
    fireEvent.input(inputNode, { target: { value: '22775107000144' } });
    expect(inputNode.value).toBe('22.775.107/0001-44');
    fireEvent.input(inputNode, { target: { value: '' } });
    fireEvent.input(inputNode, {
      target: { value: 'teste de mascara 83.653.646/0001-03' },
    });
    expect(inputNode.value).toBe('83.653.646/0001-03');
  });

  test('Input with document mask', () => {
    const div = normalInput({
      name: 'document',
      label: 'CPF',
      type: 'text',
      mask: 'document',
    });

    const inputNode = getByLabelText(div, 'CPF', { selector: 'input' });

    expect(inputNode.getAttribute('type')).toBe('text');
    expect(inputNode.getAttribute('name')).toBe('document');
    expect(inputNode.getAttribute('id')).toBe('document');
    expect(inputNode).not.toBeRequired();
    expect(inputNode).not.toBeDisabled();
    fireEvent.input(inputNode, { target: { value: '22775107000144' } });
    expect(inputNode.value).toBe('22.775.107/0001-44');
    fireEvent.input(inputNode, { target: { value: '' } });
    fireEvent.input(inputNode, {
      target: { value: '49133123080' },
    });
    expect(inputNode.value).toBe('491.331.230-80');
  });

  test('Date Input', () => {
    const div = normalInput({
      name: 'date_name',
      label: 'Date Label',
      type: 'date',
      mask: 'date',
    });

    const inputNode = getByLabelText(div, 'Date Label', { selector: 'input' });

    expect(inputNode.getAttribute('type')).toBe('text');
    expect(inputNode.getAttribute('name')).toBe('date_name');
    expect(inputNode.getAttribute('id')).toBe('date_name');
    expect(inputNode).not.toBeRequired();
    expect(inputNode).not.toBeDisabled();
    fireEvent.input(inputNode, { target: { value: '20012020' } });
    expect(inputNode.value).toBe('20/01/2020');
  });
});
