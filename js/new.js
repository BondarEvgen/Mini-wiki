;(function () {
	'use strict'

	 const marktdownSourseElement = document.querySelector('#markdown-source')
	 const markedResultElement = document.querySelector('#markdown-result')
	 const saveArticleButton = document.querySelector('#save-article-button')
	 const articleTitle = document.querySelector('#article-title')

	 const id = parseInt(location.search.substr(4))

	 const json = localStorage.getItem('articles')
	 const articles = JSON.parse(json)

console.log(articles.length)
	 if (id) {
		 

		 let article = null

		 for (let i = 0; i < articles.length; i++) {
			if (articles[i].id === id) {
				article = articles[i]
			}
		}
		
		marktdownSourseElement.value = article.content
		articleTitle.value = article.title
		const result = marked(marktdownSourseElement.value)
	 	markedResultElement.innerHTML = result

	} 

	 // markedResultElement.innerHTML =`
	 // 			<h1>Заголовок статьи</h1>
		// 		<p>Далеко-далеко за <a href="#">словесными горами в стране</a>, гласных и согласных живут рыбные тексты. Использовало однажды гор семь, снова раз. Города большой безорфографичный меня.</p>
		// 		<p>Lorem имени, продолжил своего реторический своих послушавшись грустный даль страну парадигматическая океана рыбными, рыбного переписывается, страна? Свой заголовок свое, он.</p>
		// 		<h2>Заголовок второго уровня</h2>
		// 		<p>Что, повстречался последний всеми его щеке не, знаках встретил использовало, прямо, раз свой. Города силуэт, заглавных всеми, свою прямо но!</p>
		// 		<p>Текстов которой вскоре журчит рекламных свою, сбить на берегу рот. Великий страну проектах знаках над что путь языком, подпоясал, свой они!</p>
		// 		<h3>Заголовок третьего уровня</h3>
		// 		<p>Скатился переулка первую единственное имени над запятых, грустный заголовок переписывается власти переписали. Букв строчка вскоре продолжил, страна злых раз страну.</p>
		// 		<p>Букв переписали, продолжил. Силуэт, путь текста журчит переписывается назад от всех его выйти однажды, бросил букв, путь несколько вскоре даже рукопись.</p>`
		marktdownSourseElement.addEventListener('keyup', function(){
	 		const result = marked(marktdownSourseElement.value)
	 		markedResultElement.innerHTML = result
	 	})

	 	console.log( marktdownSourseElement, markedResultElement, saveArticleButton, id , articles.length)

	 	saveArticleButton.addEventListener('click', function () {
	 		console.log(id)
	 		console.log(articles.length)
	 		if (id) {

		 		for (let i = 0; i< articles.length; i++) {
		 			if (articles[i].id === id){
		 				articles[i].title = articleTitle.value
		 				articles[i].content = marktdownSourseElement.value

		 			}

		 		}
		 	}
		 	else {
		 		// const newId= articles.length + 1

		 		console.log('fired')
		 		console.log(articles.length)
		 		// console.log(newId)
		 		const newArticle = {
		 		id: 0,
		 		title: articleTitle.value,
		 		content: marktdownSourseElement.value
		 		}
		 		
		 		newArticle.id = articles.length + 1

		 		console.log(newArticle)
		 		console.log(newArticle.id)
		 		console.log(articles.length + 1)
		 		
	 			articles.push(newArticle)
		 	}	
	 		
	 		
	 		localStorage.setItem('articles', JSON.stringify(articles))

	 		 if (id){
	 		 	location.replace('article.html?id=' + id)
	 		 }
	 		 else {
	 		 	location.replace('article.html?id=' + articles[articles.length - 1].id)
	 		 }
	 	})
})();