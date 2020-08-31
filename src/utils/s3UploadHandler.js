export default async function (file, url) {
  console.log('file', file);

  const resEndpoint = await fetch(url, {
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
    body: JSON.stringify({
      filename: file.name,
      key: 'post/image',
      client_id: '123',
    }),
  });

  const { endpoint, path } = await resEndpoint.json();

  if (endpoint) {
    const formSubmitButton = document.getElementById('submitButton');
    formSubmitButton.setAttribute('disabled', true);

    const progressBar = document.getElementById('progress-bar').firstChild;

    const request = new XMLHttpRequest();
    request.open('PUT', endpoint);
    request.upload.addEventListener('progress', function (e) {
      var percent_completed = (e.loaded / e.total) * 100;
      progressBar.style.width = `${percent_completed}%`;
      progressBar.innerHTML = `${Math.floor(percent_completed)}%`;
      progressBar.setAttribute('aria-valuenow', percent_completed);
      if (percent_completed === 100) {
        formSubmitButton.removeAttribute('disabled');
      }
    });

    request.addEventListener('load', function (e) {
      if (e.target.status !== 200) {
        console.error('error on upload');
        formSubmitButton.removeAttribute('disabled');
      }
    });

    request.send(file);
  } else {
    console.log('error');
  }
}
