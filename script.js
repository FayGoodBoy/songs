// Mengubah navbar menjadi transparan dan blur saat scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});
// Array Playlist
const playlist = [
    { file: 'music/White Tee.mp3', title: 'White Tee', artist: 'FayGoodBoy' },
    { file: 'music/Dessert.mp3', title: 'Dessert', artist: 'FayGoodBoy' },
    { file: 'music/Work.mp3', title: 'Work', artist: 'FayGoodBoy' }
];

let currentSongIndex = 0;
const audioPlayer = document.getElementById('audio-player');
const songTitle = document.getElementById('song-title');
const songArtist = document.getElementById('song-artist');
const musicDisc = document.getElementById('music-disc');

// Function to play selected song and update song info
function playSong(file, title, artist) {
    audioPlayer.src = file;
    audioPlayer.play();
    songTitle.textContent = title;
    songArtist.textContent = 'by ' + artist;
    currentSongIndex = playlist.findIndex(song => song.file === file);
    toggleDisc(true);
}

// Shuffle playlist
function shufflePlaylist() {
    const randomIndex = Math.floor(Math.random() * playlist.length);
    const randomSong = playlist[randomIndex];
    playSong(randomSong.file, randomSong.title, randomSong.artist);
}

// Repeat current song
function repeatSong() {
    audioPlayer.currentTime = 0;
    audioPlayer.play();
}

// Set volume
function setVolume(value) {
    audioPlayer.volume = value;
}

// Play next song when current song ends
audioPlayer.addEventListener('ended', () => {
    currentSongIndex = (currentSongIndex + 1) % playlist.length;
    const nextSong = playlist[currentSongIndex];
    playSong(nextSong.file, nextSong.title, nextSong.artist);
});

// Toggle Disc Animation
function toggleDisc(isPlaying) {
    if (isPlaying) {
        musicDisc.classList.add('playing');
    } else {
        musicDisc.classList.remove('playing');
    }
}

// Play & Pause Event Listeners
audioPlayer.addEventListener('play', () => toggleDisc(true));
audioPlayer.addEventListener('pause', () => toggleDisc(false));
