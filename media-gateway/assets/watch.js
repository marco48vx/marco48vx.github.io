(function () {
  'use strict';

  var stage = document.getElementById('stage');
  var error = document.getElementById('error');

  function render() {
    stage.innerHTML = '';
    var data = Codec.decodeSlug(location.hash);
    if (!data) {
      error.textContent = 'This link is invalid or expired.';
      error.hidden = false;
      return;
    }

    error.hidden = true;

    var src = 'https://www.youtube-nocookie.com/embed/' + encodeURIComponent(data.videoId) +
      '?rel=0&modestbranding=1&playsinline=1' +
      (data.start ? '&start=' + data.start : '');

    var frame = document.createElement('iframe');
    frame.src = src;
    frame.title = 'Player';
    frame.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
    frame.referrerPolicy = 'strict-origin-when-cross-origin';
    frame.allowFullscreen = true;
    stage.appendChild(frame);
  }

  window.addEventListener('hashchange', render);
  render();
})();
