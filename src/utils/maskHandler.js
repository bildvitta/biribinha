import IMask from 'imask';
import moment from 'moment';

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

    field.places && (numberAttributes.scale = field.places);
    field.max && (numberAttributes.max = field.max);
    field.min && (numberAttributes.min = field.min);

    switch (field.type) {
      case 'color':
        element.setAttribute('placeholder', '#______');
        IMask(element, maskColor());
        break;

      case 'date':
        element.setAttribute('placeholder', '__/__/____');
        var dateMask = IMask(element, maskDate());
        element.addEventListener('input', function () {
          dateMask.updateValue();
        });
        break;

      case 'time':
        element.setAttribute('placeholder', '__:__');
        var timeMask = IMask(element, maskTime());
        element.addEventListener('input', function () {
          timeMask.updateValue();
        });
        break;

      case 'number':
        IMask(element, numberAttributes);
        break;

      case 'money':
        numberAttributes.scale = 2;
        numberAttributes.signed = false;
        numberAttributes.thousandsSeparator = '.';
        numberAttributes.padFractionalZeros = false;
        numberAttributes.normalizeZeros = true;
        numberAttributes.radix = ',';
        numberAttributes.mapToRadix = ['.'];
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
      element.setAttribute('placeholder', '(__) _____-____');
      IMask(element, maskPhone());
      break;

    case 'postal-code':
      element.setAttribute('placeholder', '_____-___');
      IMask(element, maskPostalCode());
      break;

    case 'personal-document':
      element.setAttribute('placeholder', '___.___.___-__');
      IMask(element, maskPersonalDocument());
      break;

    case 'company-document':
      element.setAttribute('placeholder', '__.___.___/____-__');
      IMask(element, maskCompanyDocument());
      break;

    case 'document':
      element.setAttribute('placeholder', '___.___.___-__');
      IMask(element, maskDocument());
      break;
  }
}

const maskPhone = () => ({
  mask: [
    {
      mask: '(00) 0000-0000',
    },
    {
      mask: '(00) 00000-0000',
    },
  ],
});

const maskPostalCode = () => ({
  mask: '00000-000',
});

const maskPersonalDocument = () => ({
  mask: '000.000.000-00',
});

const maskCompanyDocument = () => ({
  mask: '00.000.000/0000-00',
});

const maskDocument = () => ({
  mask: [
    {
      mask: '000.000.000-00',
    },
    {
      mask: '00.000.000/0000-00',
    },
  ],
});

const maskDate = () => {
  const momentDateFormat = 'DD/MM/YYYY';
  return {
    mask: Date,
    pattern: momentDateFormat,
    format: function (date) {
      return moment(date).format(momentDateFormat);
    },
    parse: function (str) {
      return moment(str, momentDateFormat);
    },
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
    // FIX
    {
      mask: /^#[0-9a-f]{0,6}$/i,
    },
  ],
});
