if (!self.define) {
  let e,
    s = {}
  const i = (i, n) => (
    (i = new URL(i + '.js', n).href),
    s[i] ||
      new Promise((s) => {
        if ('document' in self) {
          const e = document.createElement('script')
          ;(e.src = i), (e.onload = s), document.head.appendChild(e)
        } else (e = i), importScripts(i), s()
      }).then(() => {
        let e = s[i]
        if (!e) throw new Error(`Module ${i} didn’t register its module`)
        return e
      })
  )
  self.define = (n, a) => {
    const t =
      e ||
      ('document' in self ? document.currentScript.src : '') ||
      location.href
    if (s[t]) return
    let c = {}
    const r = (e) => i(e, t),
      o = { module: { uri: t }, exports: c, require: r }
    s[t] = Promise.all(n.map((e) => o[e] || r(e))).then((e) => (a(...e), c))
  }
}
define(['./workbox-75794ccf'], function (e) {
  'use strict'
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: '/_next/static/3B4Lev2N_FT-iOUL1qqjb/_buildManifest.js',
          revision: '3B4Lev2N_FT-iOUL1qqjb'
        },
        {
          url: '/_next/static/3B4Lev2N_FT-iOUL1qqjb/_middlewareManifest.js',
          revision: '3B4Lev2N_FT-iOUL1qqjb'
        },
        {
          url: '/_next/static/3B4Lev2N_FT-iOUL1qqjb/_ssgManifest.js',
          revision: '3B4Lev2N_FT-iOUL1qqjb'
        },
        {
          url: '/_next/static/chunks/209-7389c1d38511d9de.js',
          revision: '3B4Lev2N_FT-iOUL1qqjb'
        },
        {
          url: '/_next/static/chunks/363-98d9509f370f78dc.js',
          revision: '3B4Lev2N_FT-iOUL1qqjb'
        },
        {
          url: '/_next/static/chunks/651.243d23442247d286.js',
          revision: '3B4Lev2N_FT-iOUL1qqjb'
        },
        {
          url: '/_next/static/chunks/725-f46d7b21704d513c.js',
          revision: '3B4Lev2N_FT-iOUL1qqjb'
        },
        {
          url: '/_next/static/chunks/812-846f6f324432d2d9.js',
          revision: '3B4Lev2N_FT-iOUL1qqjb'
        },
        {
          url: '/_next/static/chunks/framework-5f4595e5518b5600.js',
          revision: '3B4Lev2N_FT-iOUL1qqjb'
        },
        {
          url: '/_next/static/chunks/main-b7faa716c971647b.js',
          revision: '3B4Lev2N_FT-iOUL1qqjb'
        },
        {
          url: '/_next/static/chunks/pages/_app-d3f91cb948955586.js',
          revision: '3B4Lev2N_FT-iOUL1qqjb'
        },
        {
          url: '/_next/static/chunks/pages/_error-8022dacb1937fc7a.js',
          revision: '3B4Lev2N_FT-iOUL1qqjb'
        },
        {
          url: '/_next/static/chunks/pages/game/%5Bslug%5D-e46298e6885fe6e0.js',
          revision: '3B4Lev2N_FT-iOUL1qqjb'
        },
        {
          url: '/_next/static/chunks/pages/index-06cd9fdec432239f.js',
          revision: '3B4Lev2N_FT-iOUL1qqjb'
        },
        {
          url: '/_next/static/chunks/pages/sign-in-b12249bc18829820.js',
          revision: '3B4Lev2N_FT-iOUL1qqjb'
        },
        {
          url: '/_next/static/chunks/pages/sign-up-0a6157cb7b638128.js',
          revision: '3B4Lev2N_FT-iOUL1qqjb'
        },
        {
          url: '/_next/static/chunks/polyfills-5cd94c89d3acac5f.js',
          revision: '3B4Lev2N_FT-iOUL1qqjb'
        },
        {
          url: '/_next/static/chunks/webpack-268baaa1143f5251.js',
          revision: '3B4Lev2N_FT-iOUL1qqjb'
        },
        { url: '/favicon.ico', revision: 'c30c7d42707a47a3f4591831641e50dc' },
        {
          url: '/fonts/poppins-v19-latin-300.woff2',
          revision: '8d91ec1ca2d8b56640a47117e313a3e9'
        },
        {
          url: '/fonts/poppins-v19-latin-600.woff2',
          revision: '72993dddf88a63e8f226656f7de88e57'
        },
        {
          url: '/fonts/poppins-v19-latin-regular.woff2',
          revision: '9212f6f9860f9fc6c69b02fedf6db8c3'
        },
        {
          url: '/fonts/poppins-v20-latin-100.woff2',
          revision: '15ef609d3bea2ccc8a36910ba440e1f3'
        },
        {
          url: '/fonts/poppins-v20-latin-200.woff2',
          revision: 'a7f7eebec745ef48ccf7a3d08c66d84a'
        },
        {
          url: '/img/auth-bg.jpg',
          revision: 'ec8b80494e82daf31e8eb45a901cc81a'
        },
        {
          url: '/img/games/cyberpunk-1.jpg',
          revision: 'ebb79d50cc3f3093b8d5f02f208e4b75'
        },
        {
          url: '/img/games/cyberpunk-2.jpg',
          revision: 'db003beca0cbd041f72169e7bbc15738'
        },
        {
          url: '/img/games/cyberpunk-3.jpg',
          revision: '0be8360d5c36625d525bfcb4dfa6c902'
        },
        {
          url: '/img/games/cyberpunk-4.jpg',
          revision: 'cdd639ad5963b917a9a0452832b64d5d'
        },
        {
          url: '/img/games/cyberpunk-5.jpg',
          revision: '0a9b8e6c5073192b46ff66e77e12d280'
        },
        {
          url: '/img/games/cyberpunk-6.jpg',
          revision: '288eba96166f6032e47bb9bca59a2b68'
        },
        {
          url: '/img/nextjs.png',
          revision: 'a2488252f4d424bb4ea89bf574ccf0a4'
        },
        {
          url: '/img/red-dead-float.png',
          revision: '3a214fab27713e63b4858f1599b92b28'
        },
        {
          url: '/img/red-dead-img.jpg',
          revision: '333ff67868c12dfa9c8989df2cd8f383'
        },
        { url: '/manifest.json', revision: 'b9d4d9a8ab6244ba93099c4642ad8b99' },
        { url: '/vercel.svg', revision: '4b4f1876502eb6721764637fe5c41702' }
      ],
      { ignoreURLParametersMatching: [] }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      '/',
      new e.NetworkFirst({
        cacheName: 'start-url',
        plugins: [
          {
            cacheWillUpdate: async ({
              request: e,
              response: s,
              event: i,
              state: n
            }) =>
              s && 'opaqueredirect' === s.type
                ? new Response(s.body, {
                    status: 200,
                    statusText: 'OK',
                    headers: s.headers
                  })
                : s
          }
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: 'google-fonts-webfonts',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: 'google-fonts-stylesheets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-font-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-image-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-image',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: 'static-audio-assets',
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:mp4)$/i,
      new e.CacheFirst({
        cacheName: 'static-video-assets',
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-js-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-style-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-data',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: 'static-data-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1
        const s = e.pathname
        return !s.startsWith('/api/auth/') && !!s.startsWith('/api/')
      },
      new e.NetworkFirst({
        cacheName: 'apis',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1
        return !e.pathname.startsWith('/api/')
      },
      new e.NetworkFirst({
        cacheName: 'others',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      ({ url: e }) => !(self.origin === e.origin),
      new e.NetworkFirst({
        cacheName: 'cross-origin',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 })
        ]
      }),
      'GET'
    )
})
