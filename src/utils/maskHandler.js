import IMask from 'imask';
import moment from 'moment';

// boolean
// checkbox
// color
// date
// datetime
// decimal
// editor
// money
// number
// percent
// radio
// select
// text
// textarea
// time
// upload

export default function (fields) {
  fields.map(({ name, type, mask }) => {
    addMask(mask && document.getElementById(name), mask);

    if (type === 'number') {
      const element = document.getElementById(name);

      console.log(element, name);
    }
  });
}

function addMask(element, maskType, places) {
  switch (maskType) {
    case 'money':
      IMask(element, maskMoney());
      break;

    case 'phone':
      IMask(element, maskPhone());
      break;

    case 'date':
      const dateMask = IMask(element, maskDate());
      element.addEventListener('input', function () {
        dateMask.updateValue();
      });
      break;

    case 'time':
      const timeMask = IMask(element, maskTime());
      element.addEventListener('input', function () {
        timeMask.updateValue();
      });
      break;

    case 'postal-code':
      IMask(element, maskPostalCode());
      break;

    case 'personal-document':
      IMask(element, maskPersonalDocument());
      break;

    case 'company-document':
      IMask(element, maskCompanyDocument());
      break;

    case 'document':
      IMask(element, maskDocument());
      break;

    case 'places':
      IMask(element, maskPlaces(places));
      break;

    case 'number':
      IMask(element, maskNumber());
      break;
  }
}

const maskMoney = () => ({
  mask: Number, // enable number mask
  // other options are optional with defaults below
  scale: 2, // digits after point, 0 for integers
  signed: false, // disallow negative
  thousandsSeparator: '.', // any single char
  padFractionalZeros: false, // if true, then pads zeros at end to the length of scale
  normalizeZeros: true, // appends or removes zeros at ends
  radix: ',', // fractional delimiter
  mapToRadix: ['.'], // symbols to process as radix
});

const maskPhone = () => ({
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
});

const maskPostalCode = () => ({
  mask: '00000-000',
  lazy: false, // make placeholder always visible
  placeholderChar: ' ', // defaults to '_'
});

const maskPersonalDocument = () => ({
  mask: '000.000.000-00',
  lazy: false,
  placeholderChar: ' ',
});

const maskCompanyDocument = () => ({
  mask: '00.000.000/0000-00',
  lazy: false,
  placeholderChar: ' ',
});

const maskDocument = () => ({
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
});

const maskDate = () => {
  const momentDateFormat = 'DD/MM/YYYY';
  return {
    mask: Date,
    pattern: momentDateFormat,
    lazy: false,

    format: function (date) {
      return moment(date).format(momentDateFormat);
    },
    parse: function (str) {
      return moment(str, momentDateFormat);
    },
    placeholderChar: ' ',
    blocks: {
      DD: {
        mask: IMask.MaskedRange,
        from: 1,
        to: 31,
      },
      MM: {
        mask: IMask.MaskedRange,
        from: 1,
        to: 12,
      },
      YYYY: {
        mask: IMask.MaskedRange,
        from: 1900,
        to: 2199,
      },
    },
  };
};

const maskTime = () => {
  const momentTimeFormat = 'HH:mm';

  return {
    mask: Date,
    pattern: momentTimeFormat,
    lazy: false,

    format: function (date) {
      return moment(date).format(momentTimeFormat);
    },
    parse: function (str) {
      return moment(str, momentTimeFormat);
    },
    placeholderChar: ' ',
    blocks: {
      HH: {
        mask: IMask.MaskedRange,
        from: 0,
        to: 23,
      },
      mm: {
        mask: IMask.MaskedRange,
        from: 0,
        to: 59,
      },
    },
  };
};

const maskNumber = () => ({
  mask: Number,
});
