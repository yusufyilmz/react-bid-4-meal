import React, { Fragment } from 'react';
import MealBidContainer from '../../containers/mealBidContainer';
import { Header} from '../Header'

export const ResultPage = () => {
    return (
        <MealBidContainer>
            {
                (props) => (
                    <Fragment>
                        {props.selection &&
                            <div>
                                <Header message="Your selection:" />
                                <pre id="json">{JSON.stringify(props.selection, undefined, 2)}</pre>
                            </div>
                        }
                    </Fragment>
                )
            }
        </MealBidContainer>
    );
}





