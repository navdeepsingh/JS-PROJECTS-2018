this.addEventListener('DOMContentLoaded', () => {
  const APIKEY = '9734b9ee1ec54639ab9bd6c2823b0629';
  const SEARCH_TERM = 'nature';
  const ENDPOINT = `http://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${APIKEY}&q=${SEARCH_TERM}`;
  const responseContainer = document.querySelector('#response-container');

  fetch(ENDPOINT)
    .then(response => response.json())
    .then(addArticles)
    .catch(err => requestError(err, 'articles'));

  function addArticles(data) {
    let htmlContent = '';

    if (data.response && data.response.docs && data.response.docs.length > 1) {
      const articles = data.response.docs;
      console.log(articles);
      htmlContent = '<ul>' + articles.map(article => {
        return `<li>
                  <h2><a href="${article.web_url}" target="_blank">${article.snippet}</a></h2>
                  <small>${article.document_type}</small>
                </li>`;
      }).join('');
    } else {
      htmlContent = '<div class="error-no-articles">No Articles Fetched</div>';
    }
    //console.log(responseContainer);

    responseContainer.insertAdjacentHTML('beforeend', htmlContent);
  }

  function requestError(e, part) {
    console.log(e);
    //responseContainer.insertAdjacentHTML('beforeend', `<p class="network-warning">Oh no! There was an error making a request for the ${part}.</p>`);
  }
});
