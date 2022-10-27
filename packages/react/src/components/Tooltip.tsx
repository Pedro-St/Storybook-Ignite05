import { ComponentProps, ElementType } from "react";
import { styled } from "../styles";

export const Tooltip = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,

    position: 'absolute',
    width: 210,
    height: 44,
   

    filter: 'drop-shadow(4px 16px 24px rgba(0, 0, 0, 0.25))',

    backgroundColor: '$gray900',
    borderRadius: '$sm',
    color: '$white',
    fontFamily: '$default',
    fontSize: '$sm',

})

export interface TooltipProps extends ComponentProps<typeof Tooltip> {
    as?: ElementType
}

Tooltip.displayName = 'Tooltip';