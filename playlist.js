var Song = require('./song');

var Playlist = function(songs){
  this.songs = songs  || [];
  this.playing = null;
};

Playlist.prototype.isEmpty = function () {
  if (this.songs.length) {
    return false;
  } else {
    return true;
  }
};

Playlist.prototype.addSong = function (song) {
  this.songs.push(song);
};

Playlist.prototype.songNames = function() {
  var results = [];
  for (var i = 0; i < this.songs.length; i++) {
    results.push(this.songs[i].name);
  }
  return results;
};


Playlist.prototype.removeSong = function(song) {
  this.songs.splice(this.songs.indexOf(song), 1);
  // this.songs = this.songs.filter(function(track) {
  //   return song.name !== track.name;
  // });
};

Playlist.prototype.totalLength = function() {
  var total = 0;
  for (var i = 0; i < this.songs.length; i++) {
    total += this.songs[i].length;
  }
  return total;
};

Playlist.prototype.swap = function(firstSong, secondSong) {
  var firstIndex = this.songs.indexOf(firstSong);
  this.songs[this.songs.indexOf(secondSong)] = firstSong;
  this.songs[firstIndex] = secondSong;
};

Playlist.prototype.nowPlaying = function () {
  if (this.playing) {
    return this.playing;
  } else {
    return null;
  }
};

Playlist.prototype.play = function() {
  this.playing = this.songs[0];
};

Playlist.prototype.next = function() {
  this.playing = this.songs[this.songs.indexOf(this.playing) + 1];
};

Playlist.prototype.forNumber = function () {

};

module.exports = Playlist;
