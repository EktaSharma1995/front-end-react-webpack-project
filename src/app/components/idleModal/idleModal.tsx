import * as React from 'react';
import * as ReactBootStrap from 'react-bootstrap';

export const IdleTimeOutModal = ({ showModal, handleClose, handleLogout }) => {
  return (
    <ReactBootStrap.Modal show={showModal} onHide={handleClose}>
      <ReactBootStrap.Modal.Header closeButton>
        <ReactBootStrap.Modal.Title>
          You Have Been Idle!
        </ReactBootStrap.Modal.Title>
      </ReactBootStrap.Modal.Header>
      <ReactBootStrap.Modal.Body>
        You Will Get Timed Out. You want to stay?
      </ReactBootStrap.Modal.Body>
      <ReactBootStrap.Modal.Footer>
        <ReactBootStrap.Button variant="danger" onClick={handleLogout}>
          Logout
        </ReactBootStrap.Button>
        <ReactBootStrap.Button variant="primary" onClick={handleClose}>
          Stay
        </ReactBootStrap.Button>
      </ReactBootStrap.Modal.Footer>
    </ReactBootStrap.Modal>
  );
};
