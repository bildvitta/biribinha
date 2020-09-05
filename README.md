Este repositório contém funcionalidades que auxiliarão na construção de formulários baseados no [bildvitta api](https://github.com/bildvitta/api). Basta receber um JSON com os campos, respostas, erros e endpoint com resposta que o formulário é criado.

## Conteúdo

- **Input**

  - Text
  - Number
  - Email
  - Checkbox
  - Radiobox
  - Select
  - Textarea
  - Hidden
  - Upload (in progress)
  - Upload com AmazonS3 (in progress)

- **Mascaras**

  - Telefone (Fixo ou celular)
  - CPF (Sem verificação)
  - CNPJ (Sem verificação)
  - Documento (CPF ou CNPJ, sem verificação)
  - Dinheiro
  - Porcentagem
  - Data
  - Horário
  - Cor (#HEX)

- **Outros**
  - Dicas
  - Prefixo no input
  - Sufixo no input

## Instalação

Com package manager:
`npm i @bildvitta/biribinha`

`import Biribinha from '@bildvitta/biribinha'`

...

Uso em row:

Copie o arquivo do `dist/bundle.js`

```html
<script type="text/javascript" src="dist/bundle.js"></script>
<script>
  const biribinha = new Biribinha();
  biribinha.start({
    url: 'http://localhost:3000/colaborador',
    elementId: 'biribinha', // whare the biribinha magic will work in your page ('app' is default)
    elementStyle: 'bootstrap3', // witch styleguide you will work ('bootstrap4' is default)
  });
</script>
```

##### Options

`elementId: string`
`elementStyle: ['bootstrap3','bootstrap4']`

## Observações

Atualmente os estilos do formulario estão atrelados ao Bootstrap 4.5, existe a possibilidade de criação desses estilos para outros frameworks visuais
A lib ainda esta em desenvolvimento
