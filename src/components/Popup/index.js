import React from 'react';
import {PopupWrapper, PopupTextWrapper} from './style.js'

export const Popup = ({show, message}) => {
    return (
        <PopupWrapper>
              <PopupTextWrapper show={show}>{message}</PopupTextWrapper>
        </PopupWrapper>
    );
}

