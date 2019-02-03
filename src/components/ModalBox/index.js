import React from 'react';
import { Modal, Button } from 'react-bootstrap'


export default class ModalBox extends React.Component {
  render() {
    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton={this.props.onHide}>
          <Modal.Title id="contained-modal-title-vcenter">
            Warning !
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{this.props.message}
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}





