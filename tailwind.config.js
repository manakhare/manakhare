// module.exports = {
//     content: [
//       "./pages/**/*.{js,ts,jsx,tsx}",
//       "./components/**/*.{js,ts,jsx,tsx}",
//     ],
//     theme: {
//       extend: {
//         fontFamily: {
//           serif: ['"Crimson Pro"', 'serif'],
//         },
//       },
//     },
//     plugins: [],
//   }

module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        visibility: ['group-hover'],
        fontFamily: {
          serif: ['"Crimson Pro"', 'serif'],
        },
        colors: {
          'rustic-brown': '#3d2b1a',
          'aged-paper': '#f5e6d3',
        },
        boxShadow: {
          'book-page': '0 8px 30px -6px rgba(0, 0, 0, 0.3)',
        },
        keyframes: {
            curl: {
              '0%': { transform: 'rotateY(0) translateX(0)', opacity: 1 },
              '50%': { transform: 'rotateY(-60deg) translateX(-50%)', opacity: 0.8 },
              '100%': { transform: 'rotateY(-120deg) translateX(-100%)', opacity: 0 },
            },
          },
        animation: {
            curl: 'curl 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
        },
      },
    },
    plugins: [],
  }