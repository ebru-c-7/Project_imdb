function searchMovie(text){
	var query = text.selectionText;
	var clearQuery = query.split(" ").join("+");

	var movieUrl = encodeURI("https://www.imdb.com/find?q="+ clearQuery);
	
	chrome.tabs.create({
		url: movieUrl
	});
}

chrome.contextMenus.create({
	title: 'Search "%s" on IMDb',
	contexts: ["selection"],
	onclick: searchMovie
});