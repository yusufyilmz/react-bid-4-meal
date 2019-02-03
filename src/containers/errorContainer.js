import { Component } from 'react';
import { connect } from 'react-redux';
import { resetError } from '../actions';

class ErrorContainer extends Component {

    resetError = () => {
        this.props.resetError()
    }

    getStateAndHelpers() {
        return {
            error: this.props.error,
            errorMessage: this.props.errorMessage,
            modalClose: this.resetError,
        }
    }

    render() {
        return this.props.children(this.getStateAndHelpers())
    }
}


const mapStateToProps = (state) => {
    return {
        error: state.meal.error,
        errorMessage: state.meal.errorMessage,
    }
}

export default connect(mapStateToProps, { resetError })(ErrorContainer);