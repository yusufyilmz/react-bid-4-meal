import styled from 'styled-components';
import { Card, Button, InputGroup, Col, ListGroup } from 'react-bootstrap'

export const CardWrapper = styled(Card)`
    margin: 20px;
    text-align: center;
    font-size: larger;
    border: 4px solid ${props =>  props.shine=== "true" ? 'yellow' : '#004990'};
`;

CardWrapper.displayName = 'CardWrapper'

export const CardTitleWrapper = styled(Card.Title)`
    padding-top: 20px;
`;

CardTitleWrapper.displayName = 'CardTitleWrapper'

export const CardFooterWrapper = styled(Card.Footer)`
    bottom: 0px
`;

CardFooterWrapper.displayName = 'CardFooterWrapper'

export const CardBodyWrapper = styled(Card.Body)`
    padding: 1em
`;

CardBodyWrapper.displayName = 'CardBodyWrapper'

export const ButtonWrapper = styled(Button)`
    border: none;
    cursor:pointer;
    outline:none;
`;

ButtonWrapper.displayName = 'ButtonWrapper'

export const InputGroupWrapper = styled(InputGroup)`
    text-align: center;
    display: flex;
    justify-content: center;
    padding-bottom: 20px;
`;
InputGroupWrapper.displayName = 'InputGroupWrapper'


export const InputGroupTextWrapper = styled(InputGroup.Text)`
    text-align: center;
    display: block;
    width: 80%
    font-size: x-large;
`;
InputGroupTextWrapper.displayName = 'InputGroupTextWrapper'


export const ListGroupItemWrapper = styled(ListGroup.Item)`
    display:flex
`;

ListGroupItemWrapper.displayName = 'ListGroupItemWrapper'



