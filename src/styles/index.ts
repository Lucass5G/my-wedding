import { createStitches } from '@stitches/react'

export const {
    config,
    styled,
    css,
    globalCss,
    keyframes,
    getCssText,
    theme,
    createTheme,
} = createStitches({
    theme: {
        colors: {
            background: '#F9F9F9',
            card: '#E0DCD9',

            green100: '#C3CDBF',
            green400: '#919F88',
            green900: '#6E7F62'
        },
        fontSizes: {
            md: '1.125rem',
            lg: '1.25rem',
            xl: '1.5rem',
            '2xl': '2rem',
        }
    },
})