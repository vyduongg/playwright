function sendRequest(url){
	return fetch(url).then(function (response) {
		return response.json();
	});
}

module.exports = { sendRequest, };