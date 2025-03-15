import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
  
      },
      colors: {
        green2: '#C0D731',
        green3:"#5E9F13",
        green1: "#0C401C",
        brown2:"#52320A",
        yellow3:"#EAB308"
      },
    },
  },
  plugins: [],
};

export default config;
