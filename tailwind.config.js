/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        'BG_LIGHT': '#F3F5FA',
        'BG_DARK': '#ECEDF1',
        'BG_DARKER': '#E7E7E7',
        'RED_LIGHT': '#BA0C2F',
        'RED_DARK': '#A41F35',
        'RED_DARKER': '#8B2332',
        'TEXT_MUTED': '#AEAEAE',
        'TEXT_LIGHT': '#353E4A',
        'TEXT_DARK': '#232429',
        'WHITE': '#FFFFFF',
        'BLACK': '#000000',
        'BG_INPUT': '#FFFFFF',
        'BG_DISABLE': '#ADB5BD',
        'TEXT_DISABLE': '#F8F9FA',
        'NAV_TITLE': '#ADB5BD',
        'NAV_TITLE_ACTIVE': '#A41F35',
        'NAV_BACKGROUND_ACTIVE': '#FFFFFF',
      },
    },
  },
  plugins: [],
};
