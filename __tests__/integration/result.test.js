import '@testing-library/jest-dom';
import { getByLabelText } from '@testing-library/dom';

import fieldHandler from '../../src/utils/fieldHandler';
import resultHandler from '../../src/utils/resultHandler';

test('results on normal input', () => {
  document.body.innerHTML = `<div id="app"><div id="formCreator"></div></div>`;
  const formElements = {
    name: {
      name: 'name',
      label: 'Nome',
      type: 'text',
      read_only: true,
    },
    address: {
      name: 'address',
      label: 'Endereço',
      type: 'text',
      read_only: true,
    },
  };
  const renderElement = { name: 'Pedro Silva de Imbondo', address: 'R. Teste' };
  const fieldElements = Object.values(formElements);

  fieldHandler(fieldElements);
  resultHandler(renderElement);

  const nameInput = getByLabelText(document.body, 'Nome', {
    selector: 'input',
  });
  const moneyInput = getByLabelText(document.body, 'Endereço', {
    selector: 'input',
  });

  expect(nameInput.value).toBe('Pedro Silva de Imbondo');
  expect(moneyInput.value).toBe('R. Teste');
});

test('results on checkbox input', () => {
  document.body.innerHTML = `<div id="app"><div id="formCreator"></div></div>`;
  const formElements = {
    receivers: {
      name: 'receivers',
      label: 'Selecione o tipo de relatório:',
      default: '',
      type: 'checkbox',
      hint: 'This is a test',
      options: [
        {
          label: 'Banner',
          value: 'banners',
        },
        {
          label: 'Segunda Via de Boleto',
          value: 'bank_slips',
        },
        {
          label: 'Períodos de Garantia',
          value: 'assurance_periods',
        },
        {
          label: 'Períodos de Agendamento',
          value: 'scheduling_periods',
        },
        {
          label: 'Clientes',
          value: 'users',
        },
        {
          label: 'Campanhas',
          value: 'campaigns',
        },
        {
          label: 'Ocorrências',
          value: 'tickets',
        },
        {
          label: 'Períodos Bloqueados',
          value: 'block_periods',
        },
        {
          label: 'Solicitações Assist. Técnica',
          value: 'technical_assistances',
        },
        {
          label: 'Notificações',
          value: 'notifications',
        },
      ],
    },
  };
  const renderElement = { receivers: ['banners', 'notifications'] };
  const fieldElements = Object.values(formElements);

  fieldHandler(fieldElements);
  resultHandler(renderElement);

  const checkboxBanners = document.getElementById('receivers-banners');
  const checkboxBankSlips = document.getElementById('receivers-bank_slips');
  const checkboxAssurancePeriods = document.getElementById(
    'receivers-assurance_periods'
  );
  const checkboxSchedulingPeriods = document.getElementById(
    'receivers-scheduling_periods'
  );
  const checkboxUsers = document.getElementById('receivers-users');
  const checkboxCampaigns = document.getElementById('receivers-campaigns');
  const checkboxNotifications = document.getElementById(
    'receivers-notifications'
  );

  expect(checkboxBanners.checked).toBe(true);
  expect(checkboxNotifications.checked).toBe(true);
  expect(checkboxBankSlips.checked).toBe(false);
  expect(checkboxAssurancePeriods.checked).toBe(false);
  expect(checkboxSchedulingPeriods.checked).toBe(false);
  expect(checkboxUsers.checked).toBe(false);
  expect(checkboxCampaigns.checked).toBe(false);
});

test('results on boolean input', () => {
  document.body.innerHTML = `<div id="app"><div id="formCreator"></div></div>`;
  const formElements = {
    locked: {
      name: 'lock',
      label: 'Travar',
      default: '',
      type: 'boolean',
    },
  };
  const renderElement = { lock: true };
  const fieldElements = Object.values(formElements);

  fieldHandler(fieldElements);
  resultHandler(renderElement);

  const lockInput = document.getElementById('lock');

  expect(lockInput.checked).toBe(true);
});

test('results on radio input', () => {
  document.body.innerHTML = `<div id="app"><div id="formCreator"></div></div>`;
  const formElements = {
    gender: {
      name: 'gender',
      label: 'Sexo',
      type: 'radio',
      options: [
        {
          label: 'Masculino',
          value: 'male',
        },
        {
          label: 'Feminino',
          value: 'female',
        },
        {
          label: 'Não definir',
          value: 'not_defined',
        },
      ],
    },
  };
  const renderElement = { gender: 'female' };
  const fieldElements = Object.values(formElements);

  fieldHandler(fieldElements);
  resultHandler(renderElement);

  const radioMale = document.getElementById('gender-male');
  const radioFemale = document.getElementById('gender-female');
  const radioNotDefined = document.getElementById('gender-not_defined');

  expect(radioMale.checked).toBe(false);
  expect(radioFemale.checked).toBe(true);
  expect(radioNotDefined.checked).toBe(false);
});

test('results on select input', () => {
  document.body.innerHTML = `<div id="app"><div id="formCreator"></div></div>`;
  const formElements = {
    car: {
      name: 'car',
      label: 'Carro',
      type: 'select',
      options: [
        {
          label: 'Mustang',
          value: 'ford-mustang',
        },
        {
          label: '911',
          value: 'porsche-911',
        },
        {
          label: 'Huracan',
          value: 'lamborghini-huracan',
        },
      ],
    },
  };
  const renderElement = { car: 'lamborghini-huracan' };
  const fieldElements = Object.values(formElements);

  fieldHandler(fieldElements);
  resultHandler(renderElement);

  const carSelect = document.getElementById('car');

  expect(carSelect.value).toBe('lamborghini-huracan');
  expect(carSelect.value).not.toBe('porsche-911');
  expect(carSelect.value).not.toBe('ford-mustang');
});

test('no render results if does not have and valid input', () => {
  document.body.innerHTML = `<div id="app"><div id="formCreator"></div></div>`;
  const formElements = {
    name: {
      name: 'name',
      label: 'Nome',
      type: 'text',
      read_only: true,
    },
  };
  const renderElement = { address: 'R. Teste' };
  const fieldElements = Object.values(formElements);

  fieldHandler(fieldElements);
  resultHandler(renderElement);

  expect(document.body.innerHTML.includes('R. Teste')).toBe(false);
});
