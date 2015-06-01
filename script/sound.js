SC.initialize({
  client_id: '19af471b669808ca18a25ff81387457e'
});

$(document).ready(function() {
  SC.get('/tracks/293', function(track) {
    SC.oEmbed(track.permalink_url, document.getElementById('player'));
  });
});
$(document).ready(function() {
  SC.get('/tracks/293/comments', function(comments) {
    $.each(comments, function(i, comment) {
      $('#comments').append(
        $('<li></li>').html(comment.body)
      );
    });
  });
});
