/* Reversible obfuscation of video ids so generated links do not reveal them. */
(function (global) {
  'use strict';

  var KEY = 'media-gateway';
  var ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_';

  function xor(text) {
    var out = '';
    for (var i = 0; i < text.length; i++) {
      out += String.fromCharCode(text.charCodeAt(i) ^ KEY.charCodeAt(i % KEY.length));
    }
    return out;
  }

  function toBase64Url(text) {
    return btoa(text).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
  }

  function fromBase64Url(text) {
    var padded = text.replace(/-/g, '+').replace(/_/g, '/');
    while (padded.length % 4) padded += '=';
    return atob(padded);
  }

  function isVideoId(value) {
    return /^[A-Za-z0-9_-]{11}$/.test(value);
  }

  /* Accepts a full YouTube URL (watch, youtu.be, shorts, embed, live) or a bare id. */
  function parseVideoId(input) {
    var value = String(input || '').trim();
    if (!value) return null;
    if (isVideoId(value)) return value;

    var url;
    try {
      url = new URL(/^https?:\/\//i.test(value) ? value : 'https://' + value);
    } catch (e) {
      return null;
    }

    var host = url.hostname.replace(/^www\./, '').toLowerCase();
    var parts = url.pathname.split('/').filter(Boolean);

    if (host === 'youtu.be') {
      return isVideoId(parts[0]) ? parts[0] : null;
    }
    if (host !== 'youtube.com' && host !== 'm.youtube.com' && host !== 'youtube-nocookie.com') {
      return null;
    }
    var param = url.searchParams.get('v');
    if (isVideoId(param)) return param;
    if (parts.length >= 2 && ['embed', 'shorts', 'live', 'v'].indexOf(parts[0]) !== -1) {
      return isVideoId(parts[1]) ? parts[1] : null;
    }
    return null;
  }

  function encodeSlug(videoId, startSeconds) {
    var payload = videoId + (startSeconds ? ':' + startSeconds : '');
    var salt = ALPHABET[Math.floor(Math.random() * ALPHABET.length)];
    return salt + toBase64Url(xor(payload));
  }

  function decodeSlug(slug) {
    var value = String(slug || '').replace(/^#/, '').trim();
    if (value.length < 2) return null;
    try {
      var payload = xor(fromBase64Url(value.slice(1)));
      var pieces = payload.split(':');
      if (!isVideoId(pieces[0])) return null;
      var start = parseInt(pieces[1], 10);
      return { videoId: pieces[0], start: isNaN(start) ? 0 : start };
    } catch (e) {
      return null;
    }
  }

  function parseStartSeconds(input) {
    var value = String(input || '').trim();
    var url;
    try {
      url = new URL(/^https?:\/\//i.test(value) ? value : 'https://' + value);
    } catch (e) {
      return 0;
    }
    var raw = url.searchParams.get('t') || url.searchParams.get('start') || '';
    var match = /^(?:(\d+)h)?(?:(\d+)m)?(?:(\d+)s?)?$/.exec(raw);
    if (!match || !raw) return 0;
    return (parseInt(match[1] || 0, 10) * 3600) + (parseInt(match[2] || 0, 10) * 60) + parseInt(match[3] || 0, 10);
  }

  global.Codec = {
    parseVideoId: parseVideoId,
    parseStartSeconds: parseStartSeconds,
    encodeSlug: encodeSlug,
    decodeSlug: decodeSlug
  };
})(window);
