$(function() {
	$('#search-term').submit(function(e) {
		e.preventDefault();
		var searchTerm = $('#query').val();
		getRequest(searchTerm);
		
	});	
});

function getRequest(searchTerm) {
	var params = {
		q : searchTerm,
		r : 'json',
		part: 'snippet, id',
		key: 'AIzaSyD34Bt602PUsjXxAvajMytwWUkqJnd_xto',
		maxResults: 15
	};
	url = 'https://www.googleapis.com/youtube/v3/search';
	$.getJSON(url, params, function(data) {
			console.log(data.items);
			showResults(data.items);
		});
};

function showResults(results) {

	var html = "";
	$.each(results, function(index, value) {
		console.log(value.id);
		html += '<div class="moviePair"><h1 id="title">' + 
				value.snippet.title + 
				'</h1><a href="https://www.youtube.com/watch?v=' + 
				value.id.videoId + 
				 '"><img class="poster" src="' + 
				value.snippet.thumbnails.high.url + 
				'"></a></div>';
		$('#search-results').html(html);
	});

};