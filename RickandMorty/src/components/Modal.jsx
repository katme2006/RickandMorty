import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function MyModal() {
  const [show, setShow] = useState(true); // State to control the visibility of the modal

  const handleClose = () => setShow(false); // Handler to close the modal

  return (
    <div>
    <div
      className={`modal ${show ? "show" : ""}`} 
      style={{
        display: show ? "block" : "none",
        zIndex: 20,
        clear: "both",
        position: "fixed",
        width: "80%",
        margin: "10%",
       
      }} 
      onClick={handleClose} 
    >
      <Modal.Dialog>
        <Modal.Header closeButton closeVariant="primary" onHide={handleClose}>
          <Modal.Title>
            <div>
              <h1 className=" text-sm m-4 text-center text-black">
                Get Shwifty!
              </h1>
            </div>
          </Modal.Title>
        </Modal.Header>
        <div className="flex w-3/4 m-auto mt-4 mb-4">
          <Button
            style={{ width: "18rem", color: "black", backgroundColor: "#2fd629" }}
            variant="secondary"
          >
            Watch Rick and Morty
          </Button>
        </div>
        <div className="flex w-3/4 m-auto mt-4 mb-4">
          <Button
            style={{ width: "18rem", backgroundColor: "black", color: "white" }}
            variant="dark"
          >
            Close
          </Button>
        </div>

      </Modal.Dialog>
    </div>
    </div>
  );
}

export default MyModal;
