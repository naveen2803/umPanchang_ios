var args = arguments[0] || {};

var youtubePlayer = require('titutorial.youtubeplayer');

function loadVideo()
{
	youtubePlayer.playVideo(args.videoId);
	//$.webview.url = args.videoLink;
}

function closeWin()
{
	//$.winWebView.close();
}

function onCloseVideo(e)
{
	//$.win.remove(webview);
}
