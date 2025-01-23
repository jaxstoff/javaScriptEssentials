// really should be merged into health_article.js - if this was real life

var xhrN = new XMLHttpRequest();
var urlN = './health_news.json'; // a modified copy of health_article.json since we had no example data

xhrN.open('GET', urlN, true);
xhrN.responseType = 'json';

xhrN.onload = function() { 
    var newss = xhrN.response.news;
    var newssDiv = document.getElementById('news');
    newss.forEach(function(news) {
        var newsDiv = document.createElement('div');
        newsDiv.classList.add('article');
  
        var title = document.createElement('h2');
        title.textContent = news.title;
  
        var description = document.createElement('p');
        description.textContent = news.description;
  
        newsDiv.appendChild(title);
        newsDiv.appendChild(description);

        newssDiv.appendChild(newsDiv);
      });
 }

 xhrN.send();


