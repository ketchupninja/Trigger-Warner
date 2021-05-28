//based on https://blog.usejournal.com/how-i-made-my-own-youtube-downloader-using-javascript-and-node-js-160b172f6e10
const express = require('express');
const cors = require('cors');
const ytdl = require('ytdl-core');
const app = express();

app.use(cors());

app.listen(4000, () => {
    console.log('Server Works !!! At port 4000');
});

app.get('/download', (req,res) => {
	var URL = req.query.URL;
	
	//create unique filename based on video url and current timestamp
	const currentDate = new Date();
	const timestamp = currentDate.getTime();
	const name = URL + '_' + timestamp + '.mp3';
	
	res.header('Content-Disposition', 'attachment; filename=' + name);

	//download audio of youtube video, pipe to user
	ytdl(URL, { filter: 'audioonly'}).pipe(res);
});
