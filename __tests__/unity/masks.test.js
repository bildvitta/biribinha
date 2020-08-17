import { screen, fireEvent, getByLabelText } from '@testing-library/dom';
import '@testing-library/jest-dom';

import { normalInput } from '../../src/form/input.js';
import maskHandler from '../../src/utils/maskHandler';

describe('rendering the basic Inputs', () => {
  beforeEach(() => {
    document.body.innerHTML = `<body>
      <div data-testid="body"></div>
    </body>`;
  });

  test('Input with money mask', () => {
    const fields = [
      {
        name: 'money',
        label: 'Dinheiro',
        type: 'money',
      },
    ];

    const body = screen.getByTestId('body');
    const input = normalInput(fields[0]);
    body.appendChild(input);

    maskHandler(fields);

    const inputNode = getByLabelText(body, 'Dinheiro', { selector: 'input' });

    expect(inputNode.getAttribute('type')).toBe('text');
    expect(inputNode.getAttribute('name')).toBe('money');
    expect(inputNode.getAttribute('id')).toBe('money');
    expect(inputNode).not.toBeRequired();
    expect(inputNode).not.toBeDisabled();
    fireEvent.input(inputNode, { target: { value: 'TESTE1234,56' } });
    expect(inputNode.value).toBe('1.234,56');
  });

  test('Input with max and min', () => {
    const fields = [
      {
        name: 'number',
        label: 'Número',
        type: 'number',
        min: 3,
        max: 10,
      },
    ];

    const body = screen.getByTestId('body');
    const input = normalInput(fields[0]);
    body.appendChild(input);

    maskHandler(fields);

    const inputNode = getByLabelText(body, 'Número', { selector: 'input' });
    console.log(inputNode.outerHTML);

    expect(inputNode.getAttribute('type')).toBe('text');
    expect(inputNode.getAttribute('name')).toBe('number');
    expect(inputNode.getAttribute('id')).toBe('number');
    expect(inputNode).not.toBeRequired();
    expect(inputNode).not.toBeDisabled();
    fireEvent.input(inputNode, { target: { value: 'TESTE5' } });
    expect(inputNode.value).toBe('5');
    fireEvent.input(inputNode, { target: { value: '' } });
    fireEvent.input(inputNode, { target: { value: 'TESTE2' } });
    expect(inputNode.value).toBe('2');
  });

  test('Input with number', () => {
    const fields = [
      {
        name: 'number',
        label: 'Número',
        type: 'number',
      },
    ];

    const body = screen.getByTestId('body');
    const input = normalInput(fields[0]);
    body.appendChild(input);

    maskHandler(fields);

    const inputNode = getByLabelText(body, 'Número', { selector: 'input' });

    expect(inputNode.getAttribute('type')).toBe('text');
    expect(inputNode.getAttribute('name')).toBe('number');
    expect(inputNode.getAttribute('id')).toBe('number');
    expect(inputNode).not.toBeRequired();
    expect(inputNode).not.toBeDisabled();
    fireEvent.input(inputNode, { target: { value: 'TESTE1234,56' } });
    expect(inputNode.value).toBe('1234,56');
  });

  test('Input with phone mask', () => {
    const fields = [
      {
        name: 'phone',
        label: 'Telefone',
        type: 'text',
        mask: 'phone',
      },
    ];

    const body = screen.getByTestId('body');
    const input = normalInput(fields[0]);
    body.appendChild(input);

    maskHandler(fields);

    const inputNode = getByLabelText(body, 'Telefone', { selector: 'input' });
    expect(inputNode.getAttribute('type')).toBe('text');
    expect(inputNode.getAttribute('name')).toBe('phone');
    expect(inputNode.getAttribute('id')).toBe('phone');
    expect(inputNode).not.toBeRequired();
    expect(inputNode).not.toBeDisabled();
    fireEvent.input(inputNode, { target: { value: '3535218521' } });
    expect(inputNode.value).toBe('(35) 3521-8521');
    fireEvent.input(inputNode, { target: { value: '' } });
    fireEvent.input(inputNode, { target: { value: '16988273352' } });
    expect(inputNode.value).toBe('(16) 98827-3352');
    fireEvent.input(inputNode, { target: { value: '' } });
    fireEvent.input(inputNode, { target: { value: 'ABC16DEF988273352' } });
    expect(inputNode.value).toBe('(16) 98827-3352');
  });

  test('Input with postal-code mask', () => {
    const fields = [
      {
        name: 'postal-code',
        label: 'CEP',
        type: 'text',
        mask: 'postal-code',
      },
    ];

    const body = screen.getByTestId('body');
    const input = normalInput(fields[0]);
    body.appendChild(input);

    maskHandler(fields);

    const inputNode = getByLabelText(body, 'CEP', { selector: 'input' });

    expect(inputNode.getAttribute('type')).toBe('text');
    expect(inputNode.getAttribute('name')).toBe('postal-code');
    expect(inputNode.getAttribute('id')).toBe('postal-code');
    expect(inputNode).not.toBeRequired();
    expect(inputNode).not.toBeDisabled();
    fireEvent.input(inputNode, { target: { value: '14015110!@#qwe' } });
    expect(inputNode.value).toBe('14015-110');
  });

  test('Input with personal-document mask', () => {
    const fields = [
      {
        name: 'personal-document',
        label: 'CPF',
        type: 'text',
        mask: 'personal-document',
      },
    ];

    const body = screen.getByTestId('body');
    const input = normalInput(fields[0]);
    body.appendChild(input);

    maskHandler(fields);

    const inputNode = getByLabelText(body, 'CPF', { selector: 'input' });

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
    const fields = [
      {
        name: 'company-document',
        label: 'CPF',
        type: 'text',
        mask: 'company-document',
      },
    ];

    const body = screen.getByTestId('body');
    const input = normalInput(fields[0]);
    body.appendChild(input);

    maskHandler(fields);

    const inputNode = getByLabelText(body, 'CPF', { selector: 'input' });

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
    const fields = [
      {
        name: 'document',
        label: 'CPF',
        type: 'text',
        mask: 'document',
      },
    ];

    const body = screen.getByTestId('body');
    const input = normalInput(fields[0]);
    body.appendChild(input);

    maskHandler(fields);

    const inputNode = getByLabelText(body, 'CPF', { selector: 'input' });

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
    const fields = [
      {
        name: 'date_name',
        label: 'Date Label',
        type: 'date',
      },
    ];

    const body = screen.getByTestId('body');
    const input = normalInput(fields[0]);
    body.appendChild(input);

    maskHandler(fields);

    const inputNode = getByLabelText(body, 'Date Label', { selector: 'input' });

    expect(inputNode.getAttribute('type')).toBe('text');
    expect(inputNode.getAttribute('name')).toBe('date_name');
    expect(inputNode.getAttribute('id')).toBe('date_name');
    expect(inputNode).not.toBeRequired();
    expect(inputNode).not.toBeDisabled();
    fireEvent.input(inputNode, { target: { value: '20012020' } });
    expect(inputNode.value).toBe('20/01/2020');
  });

  test('Time Input', () => {
    const fields = [
      {
        name: 'time',
        label: 'Horário',
        type: 'time',
      },
    ];

    const body = screen.getByTestId('body');
    const input = normalInput(fields[0]);
    body.appendChild(input);

    maskHandler(fields);

    const inputNode = getByLabelText(body, 'Horário', { selector: 'input' });

    expect(inputNode.getAttribute('type')).toBe('text');
    expect(inputNode.getAttribute('name')).toBe('time');
    expect(inputNode.getAttribute('id')).toBe('time');
    expect(inputNode).not.toBeRequired();
    expect(inputNode).not.toBeDisabled();
    fireEvent.input(inputNode, { target: { value: '2300' } });
    expect(inputNode.value).toBe('23:00');
  });

  test('Input with color mask', () => {
    const fields = [
      {
        name: 'color',
        label: 'Color',
        type: 'color',
      },
    ];

    const body = screen.getByTestId('body');
    const input = normalInput(fields[0]);
    body.appendChild(input);

    maskHandler(fields);

    const inputNode = getByLabelText(body, 'Color', { selector: 'input' });
    expect(inputNode.getAttribute('type')).toBe('text');
    expect(inputNode.getAttribute('name')).toBe('color');
    expect(inputNode.getAttribute('id')).toBe('color');
    expect(inputNode).not.toBeRequired();
    expect(inputNode).not.toBeDisabled();
    fireEvent.input(inputNode, { target: { value: '255255255' } });
    expect(inputNode.value).toBe('255,255,255');
  });
});
