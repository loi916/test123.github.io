var player;
 
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '360',
        width: '640',
        videoId: '',
        events: {
            'onReady': onPlayerReady
        }
    });
}
 
function onPlayerReady(event) {
}

var videoIds1 = ['fJ9rUzIMcZQ', '5rlz2iW0Kzs', 'BciS5krYL80', 'gxEPV4kolz0', 'k4V3Mo61fJM'];
var videoIds2 = ['QkF3oxziUI4', 'qgaRVvAKoqQ', 'cVraZLL1QKc', 'tAGnKpE4NCI', 'sUJkCXE4sAA'];
var videoIds3 = ['84Tq-eAJIk4', 'jhdFe3evXpk', 'ckM51xoTC2U', 'x-xTttimcNk', '8SbUC-UaAxE'];
var videoIds4 = ['u9Dg-g7t2l4', 'OorZcOzNcgE', 'XEDs6CaYEuw', 'bm03wqLY3Nc', 'h0ffIJ7ZO4U'];
var videoIds5 = ['FTQbiNvZqaY', 'dvgZkm1xWPE', 'y7BUXRsTbvI', 'lXgkuM2NhYI', 'cWGE9Gi0bB0'];
 
var probabilities = [0.33, 0.27, 0.20, 0.13, 0.07];
 
function pchoose() {
    var x = Math.random();
    if (x < probabilities[0]) {
        return 0;
    } else if (x < probabilities[0] + probabilities[1]) {
        return 1;
    } else if (x < probabilities[0] + probabilities[1] + probabilities[2]) {
        return 2;
    } else if (x < probabilities[0] + probabilities[1] + probabilities[2] + probabilities[3]) {
        return 3;
    } else if (x < probabilities[0] + probabilities[1] + probabilities[2] + probabilities[3] + probabilities[4]) {
        return 4;
    } else {
        return 5;
    }
}
 
function getRandomVideoId() {
    var videoIds = [];
    videoIds.push(
        videoIds1[Math.floor(Math.random() * videoIds1.length)],
        videoIds2[Math.floor(Math.random() * videoIds2.length)],
        videoIds3[Math.floor(Math.random() * videoIds3.length)],
        videoIds4[Math.floor(Math.random() * videoIds4.length)],
        videoIds5[Math.floor(Math.random() * videoIds5.length)]
    );
    return videoIds[pchoose()];
}
 
function loadRandomVideo() {
    var randomVideoId = getRandomVideoId();
    player.loadVideoById(randomVideoId);
    var videoUrl = 'https://www.youtube.com/watch?v=' + randomVideoId;
    window.open(videoUrl, '_blank');
}
 
function loadRandomPlaylist() {
    var playlist = [];
    for (var i = 0; i < 25; i++) {
        var randomVideoId = getRandomVideoId();
        playlist.push(randomVideoId);
    }
    var playlistUrl = 'http://www.youtube.com/watch_videos?video_ids=' + encodeURIComponent(playlist.join(','));
    window.open(playlistUrl, '_blank');
}
 
 for (var j = 0; j < 100; j++) {
    console.log(getRandomVideoId());
}
 