function newArticlePost(){
    let news_title = docuent.querySelector("#news_title")
    let synopsis = document.querySelector("#synopsis")
    let url = document.querySelector("#url")

    let article ={
      news_title: "",
      synopsis: "",
      url: ""
    }

    article.news_title = (news_title.value)
    article.synopsis = (synopsis.value)
    article.url = (url.value)
    articleAPIfunctions.postArticles(article)
    .then((response) => response.json()
    .then((article) => sessionStorageSetup(article))
    )
}