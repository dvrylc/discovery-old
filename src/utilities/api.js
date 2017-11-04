const api = {
  fetchArticles: () => {
    return fetch('https://api.hackerwebapp.com/news');
  }
}

export default api;
