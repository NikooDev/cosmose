import type { Config } from 'tailwindcss';

export default {
  experimental: {
    optimizeUniversalDefaults: true
  },
  content: [
    './src/**/*.{ts,tsx}'
  ],
  safelist: [],
  theme: {
    extend: {
      fontFamily: {
        NexaExtraLight: ['var(--nexa-extra-light)'],
        NexaHeavy: ['var(--nexa-heavy)']
      },
      colors: {
        background: 'var(--background)',
        'theme-50': 'rgb(var(--theme-50) / <alpha-value>)',
        'theme-100': 'rgb(var(--theme-100) / <alpha-value>)',
        'theme-200': 'rgb(var(--theme-200) / <alpha-value>)',
        'theme-300': 'rgb(var(--theme-300) / <alpha-value>)',
        'theme-400': 'rgb(var(--theme-400) / <alpha-value>)',
        'theme-500': 'rgb(var(--theme-500) / <alpha-value>)',
        'theme-600': 'rgb(var(--theme-600) / <alpha-value>)',
        'theme-700': 'rgb(var(--theme-700) / <alpha-value>)',
        'theme-800': 'rgb(var(--theme-800) / <alpha-value>)',
        'theme-900': 'rgb(var(--theme-900) / <alpha-value>)',
        'theme-950': 'rgb(var(--theme-950) / <alpha-value>)',
      },
      fill: ({ theme }) => ({
        ...theme('colors')
      })
    }
  },
  plugins: [],
} satisfies Config;
