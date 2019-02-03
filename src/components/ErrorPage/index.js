import React, { Fragment } from 'react';
import ErrorContainer from '../../containers/errorContainer';
import ModalBox from '../ModalBox';

export const ErrorPage = () => {
    return (
        <ErrorContainer>
            {
                (props) => (
                    <Fragment>
                            <Fragment>
                                <ModalBox
                                    show={props.error}
                                    message={props.errorMessage}
                                    onHide={props.modalClose}
                                />
                            </Fragment>
                    </Fragment>
                )
            }
        </ErrorContainer>
    );
}

