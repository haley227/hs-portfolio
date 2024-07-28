import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
            //Our fall animation keyframes              
            'text-slide': {
              '0%, 26.66%': {
                transform: 'translateY(0%)',
              },
              '33.33%, 60%': {
                  transform: 'translateY(-25%)',
              },
              '66.66%, 93.33%': {
                  transform: 'translateY(-50%)',
              },
              '100%': {
                  transform: 'translateY(-75%)',
              },
              },
            },
      animation: {
        'text-slide': 'text-slide 12.5s cubic-bezier(0.83, 0, 0.17, 1) infinite',
      }
    },
  },
  plugins: [],
};
export default config;
