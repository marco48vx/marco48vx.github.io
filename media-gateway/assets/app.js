(function () {
  'use strict';

  var form = document.getElementById('form');
  var source = document.getElementById('source');
  var error = document.getElementById('error');
  var result = document.getElementById('result');
  var output = document.getElementById('output');
  var copy = document.getElementById('copy');
  var open = document.getElementById('open');

  function showError(message) {
    error.textContent = message;
    error.hidden = false;
    result.hidden = true;
  }

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    var videoId = Codec.parseVideoId(source.value);
    if (!videoId) {
      showError('That does not look like a valid video link.');
      return;
    }

    var slug = Codec.encodeSlug(videoId, Codec.parseStartSeconds(source.value));
    var href = new URL('watch.html', location.href);
    href.hash = slug;

    error.hidden = true;
    result.hidden = false;
    output.value = href.toString();
    open.href = href.toString();
  });

  copy.addEventListener('click', function () {
    output.select();
    navigator.clipboard.writeText(output.value).then(function () {
      copy.textContent = 'Copied';
      setTimeout(function () { copy.textContent = 'Copy'; }, 1500);
    }).catch(function () {
      document.execCommand('copy');
    });
  });
})();
