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
  let newData = {};
  for( var entry of data.entries() ) {
    newData[entry[0]] = entry[1];
  }
  
  fetch(ENDPOINT, {
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
