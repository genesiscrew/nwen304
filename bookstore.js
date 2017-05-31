 function search(){
	 var search = document.getElementById('search').value,
		url = "search.html?name=" + encodeURIComponent(search)
		document.location.href = url;
 }
