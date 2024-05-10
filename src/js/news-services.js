export default class NewsApiServices {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  fetchArticles() {
    console.log('this :>> ', this);
    const url = `https://newsapi.org/v2/everything?q=${this.searchQuery}&language=en&pageSize=8&page=${this.page}`;

    const options = {
      headers: {
        Authorization: 'd0205bfe10a640c49097fdd9880f430c',
      },
    };

    return fetch(url, options)
      .then(response => {
        // Response handling
        if (!response.ok) {
          throw new Error(response.status);
        }
        // console.log('response', response)
        return response.json();
      })
      .then(data => {
        // Data handling
        this.incrementPage()
        // console.log('data', data);
        return data.articles
      })
      .catch(error => {
        // Error handling
      });
  }
incrementPage(){
    this.page += 1;
}

resetPage(){
    this.page = 1;
}

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }


}
