const articlesData = [
  {
    "userId": 10,
    "title": "Article Title Number 1",
    "description": "Article Description Number 1"
  },
  {
    "userId": 5,
    "title": "Article Title Number 2",
    "description": "Article Description Number 2"
  },
  {
    "userId": 5,
    "title": "Article Title Number 3",
    "description": "Article Description Number 3"
  },
  {
    "userId": 5,
    "title": "Article Title Number 4",
    "description": "Article Description Number 4"
  },
  {
    "userId": 5,
    "title": "Article Title Number 5",
    "description": "Article Description Number 5"
  },
  {
    "userId": 5,
    "title": "Article Title Number 6",
    "description": "Article Description Number 6"
  },
  {
    "userId": 25,
    "title": "Article Title Number 7",
    "description": "Article Description Number 7"
  },
  {
    "userId": 25,
    "title": "Article Title Number 8",
    "description": "Article Description Number 8"
  },
  {
    "userId": 15,
    "title": "Article Title Number 9",
    "description": "Article Description Number 9"
  },
  {
    "userId": 15,
    "title": "Article Title Number 10",
    "description": "Article Description Number 10"
  }
];

const getArticles = (data) => {
  return new Promise((resolve, reject) => {
    if (data.length > 0) {
      resolve(data);
    } else {
      reject(Error("No Data Found"));
    }
  });
};

getArticles(articlesData)
  .then((articles) => {
    articles.length = 5; 
    return articles;
  })
  .then((articles) => {
    for (let i = 0; i < articles.length; i++) {
      let mainDiv = document.createElement("div");
      let title = document.createElement("h3");
      let desc = document.createElement("p");

      title.textContent = articles[i].title;
      desc.textContent = articles[i].description;

      mainDiv.appendChild(title);
      mainDiv.appendChild(desc);
      document.body.appendChild(mainDiv);
    }
  })
  .catch((reason) => console.log(reason));