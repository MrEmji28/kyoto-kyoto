function Modal({ isOpen, onClose, children }) {
    if (!isOpen) return null;
  
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-white p-6 rounded-lg w-11/12 max-w-lg">
          <button className="text-gray-700 hover:text-gray-900 float-right" onClick={onClose}>
            ✖️
          </button>
          {children}
        </div>
      </div>
    );
  }
  
  export default Modal;
  