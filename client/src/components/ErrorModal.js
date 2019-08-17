import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { connect } from 'react-redux';
import { removeError } from '../actions/error'

class ErrorModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toggle: true
        }
    }
    onToggle = () => {
        //set toggle back false
        this.setState((prevState) => ({ toggle: !prevState }))
        //dispatch request to reset state to no error.
        this.props.removeError();
    }
    render() {
        return (
            <Modal
                isOpen={this.state.toggle}
                centered={true}
            >
                <ModalHeader
                    toggle={this.onToggle}
                >
                    Something went wrong.
                </ModalHeader>
                <ModalBody>
                    {this.props.errorMessage}
                </ModalBody>
                <ModalFooter>
                    <Button
                        onClick={this.onToggle}
                    >
                        Ok
                    </Button>
                </ModalFooter>
            </Modal>
        );
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        removeError: () => dispatch(removeError())
    }
}

export default connect(null, mapDispatchToProps)(ErrorModal);
// export default ErrorModal;