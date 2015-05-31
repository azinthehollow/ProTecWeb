SC.initialize({
  client_id: '19af471b669808ca18a25ff81387457e'
});

SC.get("/playlists/624667", {}, function(playlist) {
  player_tracks = playlist.tracks;
});

var player_tracks, player_sound, player_current_track;
var player_current_track_index = 0;

var playSong = function(track) {
  SC.stream("/tracks/" + track.id, function(sound) {
    player_sound = sound;
    player_sound.play();
    player_sound.setVolume(50);
    player_sound.on
  });
};

$(document).ready(function() {
  $('#player_play').click(function() {
    if (typeof(player_current_track) == 'undefined') {
      player_current_track = player_tracks[player_current_track_index];
    }

    if (typeof(player_sound) == 'undefined') {
      playSong(player_current_track);

      $('#player_track_title a').html(player_current_track.title);
      $('#player_track_artist').html(player_current_track.user.username);
      $('#player_artwork a img').attr('src', player_current_track.artwork_url);
    }
  });
});
