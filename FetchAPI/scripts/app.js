const ENDPOINT = 'https://reqres.in/api/users';

document.addEventListener('DOMContentLoaded', function() {
  const FORM = document.querySelector('form');
  FORM.addEventListener('submit', function(event) {
    event.preventDefault();
    const FORM_DATA = new FormData(FORM);
    sendRequest(FORM_DATA);
  })
})

function sendRequest(data) {
  data = {
    "name": "morpheus",
    "job": "leader"
  }
  console.log(JSON.stringify(data));
  
  fetch(ENDPOINT, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        "Accept": "application/json"
      }  
  })
  .then(response => {
    console.log(response);
  })
  .catch(err => {
    throw err.message;
  });
}
