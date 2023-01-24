import {styled} from '../index'

export const ProductContainer = styled('main', {
    backgroundColor: '$green100',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',

})

export const ProductContent = styled('div', {
    width: '100%',
    maxWidth: '400px',
    borderRadius: '8px',
    display: 'flex',
    flexDirection:' column',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '1rem',

    'button': {
        width: '50%',
        marginTop: '1rem',
        padding: '0.7rem',
        textAlign: 'center',
        fontSize: '1rem',
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        border: 'none',

        '&:hover': {
            cursor: 'pointer',
            backgroundColor: '$green900',
            color: '$card',
        }
    }
})

export const ProductImage = styled('div', {
    backgroundColor: '$green300',

    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    img: {
        objectFit: 'cover',
    },
})

export const ProductInfo = styled('div', {
    display: 'flex',
    flexDirection: 'column',
})