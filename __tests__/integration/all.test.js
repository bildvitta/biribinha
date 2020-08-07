// jest.mock('node-fetch');

// import Biribinha from '../../src/app.js'

// import fetch, {Response} from 'node-fetch';

// import {createUser} from './createUser';

// describe('testing an integration', () => {

//   test('start', () => {
//     jest.mock('node-fetch');


//     console.log('aqui', Biribinha)
//   })
// })

jest.mock('node-fetch');
import fetch, {Response} from 'node-fetch';
import mockResponse from '../mocks/assembleia.json'

import Biribinha from '../../src/app.js'

test('createUser chama a busca com os argumentos corretos e retorna o id do usuário', async () => {
  const mock = {
    get: jest.fn(() => Promise.resolve({ data: {} }))
  };

  console.log(mock)

  const app = new Biribinha
  app.start({url: 'http://website.com/assembleia'})

});