import {styled} from '@stitches/react'

export const CountDownContent = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '1rem',
    padding: '3rem 0'
})
export const Timers = styled('div', {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'baseline',
    gap: '1rem',
    marginTop: '1rem',

    'span': {
        fontSize: '3rem',
    },

    'p': {
        fontSize: '1.2rem',
    }
})
