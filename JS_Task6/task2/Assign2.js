fetch("articles.json")
  .then((result) => {
    return result.json();
  })
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
  .catch((error) => {
    console.log("Error: Data not found or something went wrong");
  });