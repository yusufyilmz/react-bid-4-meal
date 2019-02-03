import styled from 'styled-components';
import { Card, Button } from 'react-bootstrap'

export const CardWrapper = styled(Card)`
    margin: 20px;
    border: 4px solid #004990;
    font-size: larger;
    border: 4px solid ${props =>  props.shine==="false" ? 'yellow' : '#004990'};
`;

CardWrapper.displayName = 'CardWrapper';

export const CardTextWrapper = styled(Card.Text)`
    text-align: center;
    margin-top: 40px
`;
CardTextWrapper.displayName = 'CardTextWrapper';


export const CardBodyWrapper = styled(Card.Body)`
    padding: 1.25em 0;
`;

CardBodyWrapper.displayName = 'CardBodyWrapper';

export const ButtonWrapper = styled(Button)`
    width: 100%;
    margin-top: 20px
`;
ButtonWrapper.displayName = 'ButtonWrapper';


export const LeftSpanWrapper = styled.span`
    float: left;
    text-align: left
`;

LeftSpanWrapper.displayName = 'LeftSpanWrapper';


export const RightSpanWrapper = styled.span`
    float: right;
    text-align: right
`;
RightSpanWrapper.displayName = 'RightSpanWrapper';



