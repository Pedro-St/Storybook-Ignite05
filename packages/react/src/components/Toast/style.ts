import { styled } from "../../styles";

export const ToastContainer = styled('div', {
    boxSizing: 'border-box',

    display: 'flex',
    flexDirection: 'column',
    padding: '12px 20px',
    gap: 4,
    isolation: 'isolated',  
    width: 360,
    height: 82,

    background: '$gray800',
    border: '1px solid $gray600',
    borderRadius: '$sm'
    
})

export const Scheduling = styled('h1', {
    display: 'flex',
    justifyContent: 'space-between ',
    alignItems: 'center',
    
    fontFamily: '$default',
    fontWeight: '$bold',
    fontSize:'$xl',
    lineHeight: '$base',

    color: '$white',
    marginTop: '2px',
    marginBottom: '1px',

    '&.close': {
        cursor: 'pointer',
    }

})

export const DateDay = styled('h2', {
    fontFamily: '$default',
    fontWeight: '$regular',
    fontSize:'$sm',
    lineHeight: '$base',
    marginTop: '-3px',
    color: '$gray200',
})