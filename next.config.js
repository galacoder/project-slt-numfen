// @generated: @expo/next-adapter@2.1.52
// Learn more: https://docs.expo.io/guides/using-nextjs/

const { withExpo } = require("@expo/next-adapter");
const withImages = require("next-images");
const withFonts = require('next-fonts');
const withOffline = require('next-offline');



module.exports = withExpo({
  withImages({
    projectRoot: __dirname,
  })
});

module.exports = withExpo(
  withFonts({
    projectRoot: __dirname,
  })
);

// If you didn't install next-offline, then simply delete this method and the import.
module.exports = withOffline({
  workboxOpts: {
    swDest: 'workbox-service-worker.js',

    /* changing any value means you'll have to copy over all the defaults  */
    /* next-offline */
    globPatterns: ['static/**/*'],
    globDirectory: '.',
    runtimeCaching: [
      {
        urlPattern: /^https?.*/,
        handler: 'NetworkFirst',
        options: {
          cacheName: 'offlineCache',
          expiration: {
            maxEntries: 200,
          },
        },
      },
    ],
  },
  ...withExpo({
    projectRoot: __dirname,
  }),
});