import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ isOpen, onClose, children }) => {
  const modalRoot = document.getElementById('modal-root');

  if (!isOpen) return null;

  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return ReactDOM.createPortal(
    <div className="fixed inset-0 flex items-center justify-center">
      <div
        className="modal-overlay absolute inset-0 bg-black opacity-50"
        onClick={handleOverlayClick}
      ></div>
      <div className="modal-content bg-white rounded-lg p-6">
        {children}
        <button
          className="close-button bg-gray-300 hover:bg-gray-400 py-2 px-4 rounded"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>,
    modalRoot
  );
};

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">React Portal Example</h1>
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
        onClick={handleOpenModal}
      >
        Open Modal
      </button>
      <Modal isOpen={isOpen} onClose={handleCloseModal}>
        <h2 className="text-xl font-bold mb-2">Modal Title</h2>
        <p>This is the content of the modal.</p>
      </Modal>
      <div id="modal-root"></div>
    </div>
  );
};

export default App;
