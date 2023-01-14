import {styled} from '@stitches/react'

export const Container = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    // padding: '0 rem',
})

export const Text = styled('h1', {
    fontSize: '3rem',
    fontFamily: 'Cinzel',
})

export const ImageContent = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    height: 'auto',
    backgroundColor: '$card',
    marginBottom: '1rem',

    'h1': {
        padding: '1.5rem 0',
        maxWidth: 500,
        textAlign: 'center',
        fontSize: '1rem',
    },
})

export const AboutUsContent = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

    padding: '0 5rem',
})

export const AboutUsTitle = styled('h1', {
    fontFamily: 'Handlee, cursive',
    fontSize: '4rem',
})

export const DefaultTitle = styled('span', {
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    textTransform: 'uppercase',
})

export const BrideAndGroomContent = styled('div', {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gridTemplateRows: '1fr ',
    gap: '1rem',

    'img': {
        borderRadius: '50%',
    },
})

export const Bride = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-end',

    'span': {
        fontFamily: 'Roboto',
        fontSize: '1.5rem',
        fontWeight: 'bold',
    },

    'p': {
        backgroundColor: '$green100',
        fontWeight: '700',
    },
})

export const Groom = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',

    'span': {
        fontSize: '1.5rem',
    },

    'p': {
        backgroundColor: '$green100',
        fontWeight: '700',
    },
})

export const KnowingEachOtherUntilMarriage = styled('div', {
    marginTop: '2rem',
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gridTemplateRows: '1fr ',
    gap: '1rem',

})
export const OurStory = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
})

export const OurStoryTitle = styled(DefaultTitle, {
    marginBottom: '1.3rem',
    fontSize: '1.6rem',
    textAlign: 'center',
})
export const OurStoryText = styled('p', {
    textAlign: 'center',
    fontFamily: 'sans-serif',
})
export const MarriageProposal = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
})
export const MarriageProposalTitle = styled(DefaultTitle, {
    marginBottom: '1.3rem',
    fontSize: '1.6rem',
    textAlign: 'center',
})
export const MarriageProposalText = styled('p', {
    textAlign: 'center',
    fontFamily: 'sans-serif',
})

export const ConfirmAttendanceContent = styled('div', {
    marginTop: '2rem',
    backgroundColor: '$card',
    width: '100%',
    height: '100%',
    maxHeight: 600,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',

    'h1': {
        marginBottom: '2rem',
    },
})

export const ConfirmAttendanceTitle = styled(AboutUsTitle, {})

export const LabelConfirmAttendance = styled('label', {
    marginTop: '1rem',
})

export const ConfirmAttendanceInput = styled('input', {

    width: '80%',
    maxWidth: 600,
    height: '2.3rem',
    border: 'none',
    fontFamily: 'Handlee',
    textAlign: 'center',
    fontSize: '1.2rem',
    textTransform: 'uppercase',
    '&:focus': {
        padding: '0 0.5rem',
    },
})

export const CheckBoxesConfirm = styled('div', {
    maxWidth: '55%',
    display: 'flex',
    padding: '1rem',

    'p': {
        marginLeft: '0.5rem',
        fontSize: '1rem',
        fontFamily: 'Roboto',
    },
})

export const ConfirmAttendanceButton = styled('button', {
    margin: '2rem 0',
    width: '30%',
    height: '2.3rem',
    fontWeight: 'bold',
    fontFamily: 'Roboto',
})

export const NextEventContent = styled('div', {})
export const InformationEvent = styled('div', {})
export const MapOfEvent = styled('div', {})

export const WeddingGiftContent = styled('div', {})

export const GroomsmenContent = styled('div', {})

export const TipsContent = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '2rem',
    maxWidth: 900,
})