import {styled} from '../index'

export const ProductContainer = styled('main', {
    backgroundColor: '$green300',
    width: '100%',
    maxWidth: 400,
    borderRadius: 8,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
})

export const ProductImage = styled('div', {
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