const POSTENDPOINT = 'https://reqres.in/api/users';
const GETENDPOINT = 'https://api.unsplash.com/photos/random?client_id=74afffb9a7b7829d0439d12c87e2897797059b651fd39cd33d3c5ebc1293e4f8';

document.addEventListener('DOMContentLoaded', function() {
  const POSTFORM = document.querySelector('#postForm');
  POSTFORM.addEventListener('submit', function(event) {
    event.preventDefault();
    const FORM_DATA = new FormData(POSTFORM);
    sendPostRequest(FORM_DATA);
  });

  const GETFORM = document.querySelector('#getForm');
  GETFORM.addEventListener('submit', function (event) {
    event.preventDefault();
    sendGetRequest();
  });

});

function sendPostRequest(data) {
  let newData = {};
  for( var entry of data.entries() ) {
    newData[entry[0]] = entry[1];
  }

  fetch(POSTENDPOINT, {
      method: 'POST',
      body: JSON.stringify(newData),
      headers: {
        "Accept": "application/json"
      }
  })
  .then(response => {
    console.log(response.json());
  })
  .catch(err => {
    throw err;
  });
}

function sendGetRequest() {
  window.URL = window.URL || window.webkitURL;
  fetch(GETENDPOINT)
  .then(response => {
    return response.json();
  })
  .then(response => {
    const imageSrc = response.urls.small;
    let output = document.querySelector('output');
    output.innerHTML = `<img src="${imageSrc}" />`;
  });
}
