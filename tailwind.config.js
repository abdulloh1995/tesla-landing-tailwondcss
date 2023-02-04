/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html}"],
  theme: {
    extend: {
      boxShadow: {
        border: '0 2px 0 0 #181b21'
      },
      screens: {
        'tablet': '600px',
        'desktop': '1200px',
        'portrait': {'raw': '(orientation: portrait)'}
      },
      backgroundImage: theme => ({
        'model-3' : 'url(/img/model-3.jpeg)',
        'mobile-model-3' : 'url(/img/mobile-model-3.jpeg)',
        'model-s' : 'url(/img/model-s.jpeg)',
        'mobile-model-s' : 'url(/img/mobile-model-s.jpeg)',
        'model-x' : 'url(/img/model-x.jpeg)',
        'mobile-model-x' : 'url(/img/mobile-model-x.jpeg)',
        'model-y' : 'url(/img/model-y.jpeg)',
        'mobile-model-y' : 'url(/img/mobile-model-y.jpeg)',
        'solar-panels' : 'url(/img/solar-panels.jpeg)',
        'mobile-solar-panel' : 'url(/img/mobile-solar-panels.jpeg)',
        'solar-roof' : 'url(/img/solar-roof.jpeg)',
        'mobile-solar-roof' : 'url(/img/mobile-solar-roof.jpeg)',
        'accessories' : 'url(/img/accessories.jpeg)',
        'mobile-accessories' : 'url(/img/mobile-accessories.jpeg)',
      }),
    },
  },
  plugins: [],
}
