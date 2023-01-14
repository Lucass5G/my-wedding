import { globalCss } from ".";

export const globalStyles = globalCss({
    '*': {
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
    },

    body: {
        backgroundColor: '$background',
        color: '#000000',
        '-webkit-font-smoothing': 'antialiased',
    },

    'body, input, button, textarea': {
        fontFamily: 'Cinzel',
        fontWeight: 400,
    }
})