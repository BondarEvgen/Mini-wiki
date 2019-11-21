;(function () {
	'use strict'

	const marcdownResultElement = document.querySelector('#markdown-result')
	const lastArticleListElement = document.querySelector('#last-articles')
	const allArticleListElement = document.querySelector('#all-articles')
	const readArticleButton =document.querySelector('#read-article')

	const json = localStorage.getItem('articles')
	const articles = JSON.parse(json)
	
	

	const article = articles[articles.length - 1]

	
	  marcdownResultElement.innerHTML = marked(article.content.substr(0, 200) +'...')

	  let str = ''

	  for ( let i=0; i < articles.length; i++) {
	  	const currentArticle = articles[i]
	 	str = str + `
	 		<li class="other-list__item">
	 			<a class="other-list__link" href="article.html?id=` + currentArticle.id + `">` + currentArticle.title + `</a>
	 		</li>`
	  }

	  allArticleListElement.innerHTML = str

	  str = ''

	  for (let i = articles.length - 3; i < articles.length; i++) {

	 	const currentArticle = articles[i]

	  	str = str + `
	  		<li class="articles-list-item">
	  			<a href="article.html?id=` + currentArticle.id +`" class="articles-list-link">` + currentArticle.title + `</a>
	  		</li>`

	  	
	  }

	  	lastArticleListElement.innerHTML = str


	  	readArticleButton.addEventListener('click', function () {
	  		console.log('fired')

	  		location.replace('./article.html?id='+article.id)
	  	})


})();


// const str = `<h1>Заголовок статьи</h1>
// 				<p>Далеко-далеко за <a href="#">словесными горами в стране</a>, гласных и согласных живут рыбные тексты. Использовало однажды гор семь, снова раз. Города большой безорфографичный меня.</p>
// 				<p>Lorem имени, продолжил своего реторический своих послушавшись грустный даль страну парадигматическая океана рыбными, рыбного переписывается, страна? Свой заголовок свое, он.</p>
// 				<h2>Заголовок второго уровня</h2>
// 				<p>Что, повстречался последний всеми его щеке не, знаках встретил использовало, прямо, раз свой. Города силуэт, заглавных всеми, свою прямо но!</p>
// 				<p>Текстов которой вскоре журчит рекламных свою, сбить на берегу рот. Великий страну проектах знаках над что путь языком, подпоясал, свой они!</p>
// 				<h3>Заголовок третьего уровня</h3>
// 				<p>Скатился переулка первую единственное имени над запятых, грустный заголовок переписывается власти переписали. Букв строчка вскоре продолжил, страна злых раз страну.</p>
// 				<p>Букв переписали, продолжил. Силуэт, путь текста журчит переписывается назад от всех его выйти однажды, бросил букв, путь несколько вскоре даже рукопись.</p>`

// 	marcdownResultElement.innerHTML = marked(str)