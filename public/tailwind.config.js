/** @type {import('tailwindcss').Config} */

// const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: ["./**/*.{html,js}"],
    theme: {
        screens: {
            'laptop': '1152px',
        },
        extend: {
            spacing: {
                "288": "72rem",
            },
            colors: {
                "o-blue": "#00a0e8",
                "o-light-blue": "#53c2f0",
                "o-dark-blue": "#0c318f",
                "o-white": "#dddddd",
                "o-white-hover": "#eeeeee",
                "o-black": "#212121",
                "o-gray": '#9ca3af',
                "o-hover": '#e37222',
            },
        },
    },
}
