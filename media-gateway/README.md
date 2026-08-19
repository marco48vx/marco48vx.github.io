# Media Gateway

A static site (HTML/CSS/JS only) that turns a YouTube link into an opaque playback
link on your own domain. Visitors see `yourdomain.com/watch.html#<slug>` and the video
plays in an embedded privacy-mode player — the original YouTube URL never appears in
the address bar or on the page.

## How it works

1. `index.html` takes a YouTube URL (watch / youtu.be / shorts / embed / live) or a bare
   11-character video id.
2. `assets/codec.js` extracts the id (plus any `t=` timestamp), XORs it with a fixed key
   and base64url-encodes it with a random leading salt character, so the same video
   produces a different-looking slug each time.
3. `watch.html` decodes the slug from the URL fragment and renders a
   `youtube-nocookie.com/embed/...` iframe. The referrer policy is
   `strict-origin-when-cross-origin`: stripping the referrer entirely makes the player
   fail with "Error 153".

Because the slug lives in the fragment (`#...`), it is never sent to the web server —
only the browser sees it.

## Run locally

```bash
cd media-gateway
python3 -m http.server 8080
# open http://localhost:8080
```

## Deploy

Upload the folder to any static host (GitHub Pages, Netlify, Cloudflare Pages, S3,
plain nginx). No build step, no backend.

For prettier links, serve `watch.html` as `/w`:

```nginx
location = /w { try_files /watch.html =404; }
```

## Notes

- The encoding is obfuscation, not encryption — anyone with the code can reverse a
  slug. Change `KEY` in `assets/codec.js` if you want slugs unique to your deployment.
- Playback happens through YouTube's official iframe player, so views, ads and
  restrictions behave exactly as YouTube intends.
