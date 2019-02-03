import styled from 'styled-components';
import {Button, Col } from 'react-bootstrap'


export const ButtonWrapper = styled(Button)`
    width: 150px;
    margin-left: 20px;
    margin-right: ${props => props.right === "true" ? '25px' : ''};
`;


export const ColWrapper = styled(Col)`
    max-width: 50%;
    text-align: ${props => props.right ? 'right' : ''};
`;





