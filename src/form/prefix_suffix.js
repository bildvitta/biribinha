export default function (type, prefix) {
  const prefixElement = document.createElement('div');
  prefixElement.setAttribute('class', 'input-group-text');

  switch (type) {
    case 'money':
      prefixElement.innerHTML = 'R$';
      break;

    case 'percent':
      prefixElement.innerHTML = '%';
      break;

    default:
      prefixElement.innerHTML = prefix;
      break;
  }

  return prefixElement;
}
