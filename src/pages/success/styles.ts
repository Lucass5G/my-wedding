import { styled } from "../../styles";

export const SuccessContainer = styled("main", {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    background: '$green100' ,
    width: '100%',
    height: '100vh',

    'h1, p, strong, a': {
        color: '#000000',
        fontFamily: 'sans-serif'
    },

    h1: {
        fontSize: '$2xl',
    },

    'p, strong': {
        fontSize:'$lg'
    },

    p: {
        fontSize: '$xl',
        color: '$gray300',
        maxWidth: 560,
        textAlign: 'center',
        marginTop: '2rem',
    },

    a: {
        marginTop: '5rem',
        display: 'block',
        fontSize: '$lg',
        textDecoration: 'none',
        border: '2px solid black',
        borderRadius: '3px',
        padding: '1rem',

        '&:hover': {
            backgroundColor: '#000000',
            color: '#ffffff'
        }
    }
})


export const ImageContainer =  styled('div', {
    width: '100%',
    maxWidth: 200,
    height: 200,
    background: 'linear-gradient(180deg, #1ea383 0%, #7465d4 100%)',
    borderRadius: 8,
    padding: '0.25rem',
    marginTop: '4rem',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    img: {
        objectFit: 'cover'
    }
})