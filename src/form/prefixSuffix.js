export default function (type, text) {
  const prefixOrSuffix = document.createElement('div');
  prefixOrSuffix.setAttribute('class', 'input-group-text');

  switch (type) {
    case 'money':
      prefixOrSuffix.innerHTML = 'R$';
      break;

    case 'percent':
      prefixOrSuffix.innerHTML = '%';
      break;

    case 'color':
      prefixOrSuffix.innerHTML = '#';
      break;

    default:
      prefixOrSuffix.innerHTML = text;
      break;
  }

  return prefixOrSuffix;
}
