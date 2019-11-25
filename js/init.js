;(function (){
	'use strict'
	
	

	const articles = [
		{
			id: 1,
			title: 'Another title',
			content: 'Any other content'
		},
		{
			id: 2,
			title: 'Another title',
			content: 'Any other content'
		},
		{
			id: 3,
			title: 'All about bees',
			content: 'Bees make honey'
		},
		{
			id: 4,
			title: 'About the dangers of smoking',
			content: 'Smoking is bad'
		},
		{
			id: 5,
			title: 'Angry dogs',
			content: `<h1> Title of the article </h1>
			<p> Far, far beyond the <a href="#"> verbal mountains in the country </a>, vowels and consonants live fish texts. Used once mountains seven times again. The cities are big ororographic me. </p>
			 <p> Lorem named, continued his rhetorical of his obeying the sad distant country of the paradigmatic ocean of fish, fish corresponded, country? His own headline, he. </p>
			<h2> Second level heading </h2>
			 <p> That, the latter met with all his cheek not, met signs used, directly, once his. The city's silhouette, capitalized by all, its straight but! </p>
			<p> The texts of which soon murmurs its advertising, knock down the mouth of the shore. Great country projects signs over that way in tongue, belted their own! </p>
			<h3> Third level heading </h3>
			<p> A lane rolled down the first single name over commas, the sad title is being overwritten by authorities rewritten. The letter line continued soon, a country of evil country times. </p>
			<p> The letters were rewritten, continued. The silhouette, the path of the text murmurs corresponded back from all of it to go out once, threw letters, the path is somewhat soon even the manuscript. </p>`

		}
	]
	
	
	
	if (!localStorage.getItem('articles')) {
		localStorage.setItem('articles',JSON.stringify(articles))
	}
})();