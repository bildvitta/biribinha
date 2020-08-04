import App from './app';

const app = new App();
app.start({
  url: 'http://localhost:3000/colaborador',
  mode: 'replace',
});
