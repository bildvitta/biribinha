import Biribinha from './app';

const app = new Biribinha();
app.start({
  url: 'http://localhost:3000/colaborador',
  mode: 'replace',
});
