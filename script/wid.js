var iframeElement = document.querySelector('iframe');
var iframeElementID = iframeElement.id;
var widget1 = SC.Widget(iframeElement);
var widget2 = SC.Widget(iframeElementID);

(function() {
  var widgetIframe = document.getElementById('sc-widget'),
    widget = SC.Widget(widgetIframe);

  widget.bind(SC.Widget.Events.READY, function() {
    widget.bind(SC.Widget.Events.PLAY, function() {
      // get information about currently playing sound
      widget.getCurrentSound(function(currentSound) {
        console.log('sound ' + currentSound.get('') + 'began to play');
      });
    });
    // get current level of volume
    widget.getVolume(function(volume) {
      console.log('current volume value is ' + volume);
    });
    // set new volume level
    widget.setVolume(50);
    // get the value of the current position
  });

}());
