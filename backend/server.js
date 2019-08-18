const express = require('express');
const cors = require('cors');
const ytdl = require('ytdl-core');
const fs = require('fs')

const path = require("path");

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "client / build")))

// app.use("/download", youtubeurl);

app.post('/download', (req, res) => {
	var URL = req.body.URL;
	res.header('Content-Disposition', 'attachment; filename="video.mp4"');
	ytdl(URL)
		.pipe(fs.createWriteStream('video.mp4'));
});

app.listen(port, () => {
	console.log(`Server is running on port: ${port}`)
})