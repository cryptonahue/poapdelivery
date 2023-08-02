module.exports = {
  async redirects() {
    return [
      {
        source: "/comunidad-poap",
        destination: "/poap",
        permanent: true,
      },
      {
        source: "/discord",
        destination: "https://discord.gg/teCwWP8Vug",
        permanent: true,
      },

      {
        source: "/comunidad",
        destination: "https://discord.gg/teCwWP8Vug",
        permanent: true,
      },


      {
        source: "/gobernanza",
        destination: "https://discord.gg/mgPbXdtQpG",
        permanent: true,
      },
      
     /*  {
        source: "/podcast",
        destination: "https://open.spotify.com/show/3BQuz3YdP8B7y49HgUMhpe",
        permanent: true,
      }, */
      {
        source: "/cordoba",
        destination: "https://busy-bone-b9b.notion.site/DeFi-LATAM-C-rdoba-2ffb2a710abe4f6f97fd37a27cfb9c84",
        permanent: true,
      },
      {
        source: "/notion",
        destination: "https://busy-bone-b9b.notion.site/DeFi-LATAM-9e0a20099e6e4d6fbb97c6e160aa88d5",
        permanent: true,
      },
      {
        source: "/youtube",
        destination: "https://www.youtube.com/c/DeFiLATAM_OG",
        permanent: true,
      },
      {
        source: "/telegram",
        destination: "https://t.me/DeFi_LATAM",
        permanent: true,
      },
    ];
  },
  images: {
    domains: ["localhost", "backend-defilatam-production.up.railway.app"],
  },
  env: {
    apiKey: "AIzaSyAKjhlNSK5kbN8xiuW0qWbZCcT_UOH1XKA",
    authDomain: "defilatam-5a6f2.firebaseapp.com",
    databaseURL: "https://defilatam-5a6f2-default-rtdb.firebaseio.com",
    projectId: "defilatam-5a6f2",
    storageBucket: "defilatam-5a6f2.appspot.com",
    messagingSenderId: "976319787310",
    appId: "1:976319787310:web:b1ffeea09dc3f6e2fe0abf",
    measurementId: "G-90285EN63T",
  },
  // webpack5: true,
};
