//based on https://blog.usejournal.com/how-i-made-my-own-youtube-downloader-using-javascript-and-node-js-160b172f6e10
var convertBtn = document.querySelector('.convert-button');
var URLinput = document.querySelector('.URL-input');


convertBtn.addEventListener('click', () => { //when button pressed
	//get current URL
	chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
		let theURL = tabs[0].url;
		//send popup window to download URL from server
		sendURL(theURL);
	})
});

function sendURL(URL) {
	//navigate popup window to server's download
    window.location.href = `http://localhost:4000/download?URL=${URL}`;
}