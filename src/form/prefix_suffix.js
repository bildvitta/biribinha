export function PrefixSuffix(element, prefix) {
  const elementType = element.type;
  const prefixElement = document.createElement('div');
  prefixElement.setAttribute('class', 'input-group-text');

  console.log(prefix);
  switch (elementType) {
    case 'money':
      prefixElement.innerHTML = 'R$';
      break;
    case 'percent':
      prefixElement.innerHTML = '%';
      break;

    default:
      console.log('aqui', prefix);
      prefixElement.innerHTML = prefix;
      break;
  }

  return prefixElement;
}
