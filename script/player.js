SC.initialize({
  client_id: '19af471b669808ca18a25ff81387457e'
});
var track_url = 'http://soundcloud.com/forss/flickermood';
SC.oEmbed(track_url, { auto_play: true }, function(oEmbed) {
  console.log('oEmbed response: ' + oEmbed);
});
