export default function (fields, results, url) {
  const form = document.getElementById('formCreator');

  function handleClick(e) {
    e.preventDefault();
    const fieldNames = [];
    const XHR = new XMLHttpRequest(),
      FD = new FormData();

    // Getting all fields names
    Object.values(fields).forEach((element) => {
      fieldNames.push(element.name);
    });

    fieldNames.map((fieldName) => {
      let elements = document.getElementsByName(fieldName);

      //Normal Input
      switch (elements[0].type) {
        case 'checkbox':
          elements.forEach((element) => {
            element.checked === true &&
              FD.append(elements[0].name, element.value);
          });
          break;

        default:
          if (elements[0].value) {
            FD.append(elements[0].name, elements[0].value);
          }
          break;
      }
    });

    // Define what happens on successful data submission
    XHR.addEventListener('load', function (event) {
      alert('Yeah! Data sent and response loaded.');
    });

    // Define what happens in case of error
    XHR.addEventListener(' error', function (event) {
      alert('Oops! Something went wrong.');
    });

    // Set up our request
    XHR.open(results.id ? 'PUT' : 'POST', url);

    // Send our FormData object; HTTP headers are set automatically
    XHR.send(FD);
  }

  const button = document.createElement('input');
  button.classList.add('btn', 'btn-success');
  button.setAttribute('type', 'submit');

  fields.id && fields.id.value
    ? button.setAttribute('value', 'Salvar')
    : button.setAttribute('value', 'Criar');

  button.addEventListener('click', handleClick);
  form.appendChild(button);
}
