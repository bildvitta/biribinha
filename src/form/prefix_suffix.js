export function PrefixSuffix(element, prefix) {
  const elementType = element.type;
  const prefixElement = document.createElement('div');
  prefixElement.setAttribute('class', 'input-group-text');

  switch (elementType) {
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
