import IMask from 'imask';

function checkMasks() {
  const elementsWithMask = document.querySelectorAll('[data-mask]');
  elementsWithMask.forEach((element) => {
    console.log(element);
    const maskType = element.getAttribute('data-mask');

    switch (maskType) {
      case 'money':
        IMask(element, maskMoney);
        break;

      case 'phone':
        console.log(element.lenght);
        IMask(element, maskPhone);
        break;

      case 'postal-code':
        IMask(element, maskPostalCode);
        break;

      case 'personal-document':
        IMask(element, maskPersonalDocument);
        break;

      case 'company-document':
        IMask(element, maskCompanyDocument);
        break;

      case 'document':
        IMask(element, maskDocument);
        break;

      default:
        break;
    }
  });
}

const maskMoney = {
  mask: Number, // enable number mask
  // other options are optional with defaults below
  scale: 2, // digits after point, 0 for integers
  signed: false, // disallow negative
  thousandsSeparator: '.', // any single char
  padFractionalZeros: false, // if true, then pads zeros at end to the length of scale
  normalizeZeros: true, // appends or removes zeros at ends
  radix: ',', // fractional delimiter
  mapToRadix: ['.'], // symbols to process as radix
};

const maskPhone = {
  mask: [
    {
      mask: '(00) 0000-0000',
      lazy: false, // make placeholder always visible
      placeholderChar: ' ', // defaults to '_'}
    },
    {
      mask: '(00) 00000-0000',
      lazy: false, // make placeholder always visible
      placeholderChar: ' ', // defaults to '_'}
    },
  ],
};

const maskPostalCode = {
  mask: '00000-000',
  lazy: false, // make placeholder always visible
  placeholderChar: ' ', // defaults to '_'
};

const maskPersonalDocument = {
  mask: '000.000.000-00',
  lazy: false,
  placeholderChar: ' ',
};

const maskCompanyDocument = {
  mask: '00.000.000/0000-00',
  lazy: false,
  placeholderChar: ' ',
};

const maskDocument = {
  mask: [
    {
      mask: '000.000.000-00',
      lazy: false, // make placeholder always visible
      placeholderChar: ' ', // defaults to '_'}
    },
    {
      mask: '00.000.000/0000-00',
      lazy: false, // make placeholder always visible
      placeholderChar: ' ', // defaults to '_'}
    },
  ],
};

export default checkMasks;
