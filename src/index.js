import articlesTpl from './templates/articles.handlebars';
import './css/common.css';
import NewsApiServices from './js/news-services';

const serchForm = document.querySelector('.js-search-form');
const loadMoreBtn = document.querySelector('[data-action="load-more"]');
const articlesContainer = document.querySelector('.js-articles-container')

serchForm.addEventListener('submit', onSearch);
loadMoreBtn.addEventListener('click', onLoadMore);

const newsApiServices = new NewsApiServices()


function onSearch(evt) {
  evt.preventDefault();
  clearContainer()
newsApiServices.query = evt.currentTarget.elements.query.value;
newsApiServices.resetPage();
// newsApiServices.fetchArticles().then(articles=>console.log('art :>> ', articles));
newsApiServices.fetchArticles().then(appendArticlesMarkup);



}

function onLoadMore() {
  newsApiServices.fetchArticles().then(appendArticlesMarkup)
  
}

function appendArticlesMarkup(articles) {
  articlesContainer.insertAdjacentHTML('beforeend', articlesTpl(articles))
}


function clearContainer() {
  
  articlesContainer.innerHTML = '';
}