const router = require('express').Router();
const ytdl = require('ytdl-core');

router.route('/download').post((req, res) => {
  var URL = req.body.URL;
  res.header('Content-Disposition', 'attachment; filename="video.mp4"');
  ytdl(URL, {
    format: 'mp4'
  }).pipe(res);
});

module.exports = router;