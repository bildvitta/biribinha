import IMask from "imask";

function checkMasks() {
  // 'phone': () => this.maskLenght(10, '(##) ####-#####', '(##) #####-####'),
  // 'personal-document': () => '###.###.###-##',
  // 'company-document': () => '##.###.###/###-##',
  // 'document': () => this.maskLenght(11, '###.###.###-###', '##.###.###/###-##'),
  // 'postal-code': () => '#####-###'

  const elementsWithMask = document.querySelectorAll("[data-mask]");
  elementsWithMask.forEach((element) => {
    console.log(element);
    const maskType = element.getAttribute("data-mask");

    switch (maskType) {
      case "money":
        IMask(element, maskMoney);
        break;

      case "phone":
        console.log(element.lenght);
        IMask(element, maskPhone);
        break;

      case "postal-code":
        IMask(element, maskPostalCode);
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
  thousandsSeparator: ".", // any single char
  padFractionalZeros: false, // if true, then pads zeros at end to the length of scale
  normalizeZeros: true, // appends or removes zeros at ends
  radix: ",", // fractional delimiter
  mapToRadix: ["."], // symbols to process as radix
};

const maskPhone = {
  mask: [
    {
      mask: "(00) 0000-0000",
      lazy: false, // make placeholder always visible
      placeholderChar: " ", // defaults to '_'}
    },
    {
      mask: "(00) 00000-0000",
      lazy: false, // make placeholder always visible
      placeholderChar: " ", // defaults to '_'}
    },
  ],
};

const maskPostalCode = {
  mask: "00000-0000",
  lazy: false, // make placeholder always visible
  placeholderChar: "_", // defaults to '_'
};

export default checkMasks;
