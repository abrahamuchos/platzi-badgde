import React from "react";

import Modal from "./Modal";

function DeleteBadgeModal(props) {
  return (
    <Modal isOpen={props.isOpen} isColose={props.isClose}>
      <div className="DeleteBadgeModal">
        <h1>Are You Should</h1>
        <p>You are shure delet this badge</p>

        <div>
          <button onClick={props.onDeleteBadge} className="btn btn-danger mr-3">
            Delete
          </button>
          <button onClick={props.onClose} className="btn btn-primary">
            Cancel
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default DeleteBadgeModal;
