import IMask from 'imask';
import moment from 'moment';

// color
// date
// datetime
// decimal
// money
// number
// percent
// time

export default function (fields) {
  fields.map((field) => {
    const element = document.getElementById(field.name);
    if (field.mask) {
      addMask(element, field.mask);
      return;
    }

    const numberAttributes = {
      mask: Number,
      scale: 2,
    };

    field.places && (numberAttributes['scale'] = field.places);
    field.max && (numberAttributes['max'] = field.max);
    field.min && (numberAttributes['max'] = field.min);

    switch (field.type) {
      case 'color':
        IMask(element, maskColor());
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

      case 'number':
        IMask(element, numberAttributes);
        break;

      case 'money':
        numberAttributes['signed'] = false;
        numberAttributes['thousandsSeparator'] = '.';
        numberAttributes['padFractionalZeros'] = false;
        numberAttributes['normalizeZeros'] = true;
        numberAttributes['radix'] = ',';
        numberAttributes['mapToRadix'] = ['.'];
        IMask(element, numberAttributes);
        break;

      default:
        break;
    }
  });
}

function addMask(element, maskType) {
  switch (maskType) {
    case 'phone':
      IMask(element, maskPhone());
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

const maskColor = () => ({
  mask: [
    {
      mask: 'RGB,RGB,RGB',
      blocks: {
        RGB: {
          mask: IMask.MaskedRange,
          from: 0,
          to: 255,
        },
      },
    },
    {
      mask: /^#[0-9a-f]{0,6}$/i,
    },
  ],
});
const maskNumber = () => ({
  mask: Number,
});
