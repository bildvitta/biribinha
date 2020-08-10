import fetchMock from 'jest-fetch-mock';
fetchMock.enableMocks();

import Biribinha from '../../src/app.js';
import mockResponse from '../mocks/assembleia.json';

test('Call the api and mount the code', async () => {
  document.body.innerHTML = `<div id="app"></div>`;
  fetch.mockReturnValue(
    Promise.resolve(new Response(JSON.stringify(mockResponse)))
  );

  const app = new Biribinha();
  await app.start({
    mode: 'normal',
    url: 'http://website.com/assembleia',
  });

  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const group = document.getElementById('group');
  const money = document.getElementById('money');

  expect(name.value).toBe('Pedro Silva de Imbondo');
  expect(email.value).toBe('ana.silvadeimbondo@bild.com.br');
  expect(group.value).toBe('geral');
  expect(money.value).toBe('12,33');

  expect(fetch).toHaveBeenCalledTimes(1);
  expect(fetch).toHaveBeenCalledWith('http://website.com/assembleia');
});
