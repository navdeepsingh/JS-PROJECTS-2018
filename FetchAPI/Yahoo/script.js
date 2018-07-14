this.addEventListener('DOMContentLoaded', () => {
  const ENDPOINT = `https://sg.finance.yahoo.com/quote/Q0F.SI/financials?p=Q0F.SI`;
  const responseContainer = document.querySelector('#response-container');

  fetch(ENDPOINT, { mode: 'no-cors' })
    .then(response => { return response; console.log(response);
    })
    .catch(err => requestError(err, 'articles'));

  function addArticles(data) {
    console.log(data);    
  }

  function requestError(e, part) {
    console.log(e);
    //responseContainer.insertAdjacentHTML('beforeend', `<p class="network-warning">Oh no! There was an error making a request for the ${part}.</p>`);
  }
});
