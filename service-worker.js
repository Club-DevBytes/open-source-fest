/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["README.md","3f465121f341dcdcefd09525f138daf6"],["android-chrome-192x192.png","b839fac98838a561927db39d355b306f"],["android-chrome-512x512.png","6a8b0b0a2beead9ea9735467e82009cc"],["apple-touch-icon.png","1d0cdcb0de0eb292fdf1e0d1bfca5e94"],["browserconfig.xml","7f2b2f8a4c6863cc7be0a1e4b7963bd9"],["css/bootstrap.css","0416b90f87e52d27d5272ad92c1e7bf8"],["css/bootstrap.min.css","e18015865dbed9e198a3ca67d213006c"],["css/fontawesome-all.min.css","a78bb72e3a0ad51053770d27e985f21f"],["css/fontawesome.css","2caa80143d3dd7dc7ff78bd77cbfd46c"],["css/fontawesome.min.css","f4397daab283efb3c737ea4d61148d13"],["css/swiper.css","bf99ceb5f0c4748dd5a480be050ab48d"],["css/swiper.min.css","319f20c8f06461463f24bfc703551a18"],["favicon-16x16.png","2019b8796861d78d561524063c4abd60"],["favicon-32x32.png","c9db639f3ced4d96e7541af02068397f"],["favicon.ico","b2eb2d5bb9477cb8509a743879ea0bab"],["fonts/beyond_the_mountains.otf","9b1ca82b8968ec5a92ac49cb58e86d2c"],["fonts/beyond_the_mountains.ttf","41f5e8ff1d98d490a19c6d48ea7b74b1"],["images/BITS-Edu-Campus-Logo-big.png","b01a8f5dac9e952d48e8d6875f80e3d5"],["images/Friends.png","e637724155411a128ba4c2720bcbdc6d"],["images/GDG.png","a0d748b812886a3378c9baa91571617e"],["images/MOZILLA.jpg","60de6c2602b9ff20d8b6347b5738c530"],["images/Pranshu.jpeg","b5daaeef9610d3395b708e955e649a55"],["images/about-us-background.jpg","95e8e6c2bb5ecd625985f4130d650367"],["images/blog-page-background.jpg","a6ea954d6bb4fbfaa48f45456712be56"],["images/build.png","6a32fff9656fedde60d22727f769e32b"],["images/button.png","042e0cd7bc15ac99de6920f513b47b24"],["images/code-icon.png","0c815f1e92acb41975bb904aeda7ef0d"],["images/contact-background-image.jpg","14f95f3f12e4e3b72059554a211287cc"],["images/cover.jpg","f6c9944837da0056795f437c3f98c12b"],["images/cover1.png","41b77be1b88df167bda45fa133474c26"],["images/daniel.jpg","df076b4b438ee40f5fa5dcf8bc0a941a"],["images/devbytes1.png","539ee277dd9807ebeedb7461eed68756"],["images/developer.png","6aa0b7c4616ade471672faa179ed9dac"],["images/devimage.png","4ce6e905e50f42b19fdb714fcde44ebc"],["images/elements-total-background.jpg","6d55c6b4fab0f1ec9e230c73d02c06eb"],["images/favicon.png","e2e10113f64506546ba258bf587fae23"],["images/flutter.png","8a50b602aa79b19775c22d02a290f51f"],["images/footer-cover.jpg","d63d9b489311a38eba7a75735f5e96eb"],["images/g1062.png","cbb7f680faeca27a83a9cdf179f7f910"],["images/g821.png","ede82371dbda513daace62f930ef03a1"],["images/github.png","c936f71fcc6ddc9f708cf8e00532c6e9"],["images/harshil.jpg","3228f3e95b027b03508c5daf621855b3"],["images/jansari.jpg","0cd9f10062f96095a3b19616fd95fd62"],["images/leader.jpg","6aa0b7c4616ade471672faa179ed9dac"],["images/main-content-background.jpg","ec72fb2e4344fee7051f282a431ecf91"],["images/middle-cover.jpg","adb4eb5b7473964acd2bc60911ce5437"],["images/mozilla.jpg","d3088f3ae053dde7acb91cfc0f99bc17"],["images/pull.png","8f662e662ab091caf8516c61840a3b46"],["images/shina.jpeg","3e58ada34210cb599c2a00e74dbe7ff9"],["index.html","fd1c748c49e83672a3edae38f31c5e54"],["js/circle-progress.min.js","c96bb8beaa6eb6a1a13771fadf8169e9"],["js/custom.js","2fc59570400aa20118b7669f5dfa0222"],["js/jquery.collapsible.min.js","00c85060343d0cdc82d31415dce783f5"],["js/jquery.countTo.min.js","8b5e91ae0fd18960b41ab88432394cd1"],["js/jquery.countdown.js","6d3cd439de5bb33549d3e88e4287b36d"],["js/jquery.countdown.min.js","c03cfe5504dc873285a5c0a91a9237a0"],["js/jquery.js","8610f03fe77640dee8c4cc924e060f12"],["js/masonry.pkgd.min.js","d94313c3ca257213d724ac82584b97e5"],["js/swiper.js","bc26173d63680296766613394fcc99c0"],["js/swiper.min.js","536e7e8546e721c00136ee65fcf9ec53"],["mainifest.json","593040311d19bf7f19a2614e07cd6a64"],["mstile-150x150.png","4f904f3dd745b3fd28b2a76b6cbd6961"],["safari-pinned-tab.svg","43d9b34e83002f026a112053702c81a7"],["scroll.js","dc81c95a87698995ac6d7c0d9004d69a"],["site.webmanifest","138160a0bd25aa6f0b49fca77f2cf55c"],["style.css","57c9c507b958e8ec9dc1805589ecd21c"],["webfonts/fa-brands-400.eot","9c500ffe5dc5b39629b9b71c7c5dc9d6"],["webfonts/fa-brands-400.svg","ea5813ec2914a7adf7c97a932267f9ea"],["webfonts/fa-brands-400.ttf","a5b88231dac1cda8a4fc0695dae61d73"],["webfonts/fa-brands-400.woff","25a10153d29270b7b047c9b8c8266c42"],["webfonts/fa-brands-400.woff2","877700a37b705486d19bdce3f7586754"],["webfonts/fa-regular-400.eot","21e5fcc513f73160350188271e209dff"],["webfonts/fa-regular-400.svg","4af5c592b6ae36bab3c4c22826e355a3"],["webfonts/fa-regular-400.ttf","1d244b608b6d96473fa7b46a621bd079"],["webfonts/fa-regular-400.woff","a6a973facdfbfe6aa7e903d778fe4402"],["webfonts/fa-regular-400.woff2","559f1b6e24fa052808a4f4e0e8243b83"],["webfonts/fa-solid-900.eot","4533d2cb6e29e96fc26e8044f6d5be00"],["webfonts/fa-solid-900.svg","2621e1e8d43fc0ec0fbb7245539e802e"],["webfonts/fa-solid-900.ttf","c691fb6dffedbb292dc21b1cdbd3a27c"],["webfonts/fa-solid-900.woff","32b1e75e26fc6396745e030a9d834197"],["webfonts/fa-solid-900.woff2","64f88ebe25c54a12320f42f0b229961b"]];
var cacheName = 'sw-precache-v3-sw-precache-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







