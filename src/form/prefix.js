function createPrefix(prefixType) {
  const prefix = document.createElement('div');
  prefix.setAttribute('class', 'input-group-text');

  switch (prefixType) {
    case 'money':
      prefix.innerHTML = 'R$';
      break;
    case 'percent':
      prefix.innerHTML = '%';
      break;

    default:
      break;
  }

  return prefix;
}

export { createPrefix };
