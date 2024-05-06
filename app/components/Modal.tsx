import React from "react";
import { MdClose } from "react-icons/md";

interface ModalProps {
  isOpen: boolean;
  title: string;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, title, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed w-full h-full top-0 left-0 flex items-center justify-center z-50">
      {/* Modal overlay */}
      <div
        onClick={onClose}
        className="absolute w-full h-full bg-gray-900 opacity-80"
      ></div>

      {/* Modal content */}
      <div className="modal-container text-black bg-white w-11/12 lg:max-w-lg mx-auto rounded shadow-lg z-50 overflow-y-auto">
        {/* Modal content */}
        <div className="modal-content text-left">
          {/* Title */}
          <div className="flex justify-between items-center bg-gray-800 px-4 py-2">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full cursor-pointer" onClick={onClose}></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full cursor-pointer" onClick={onClose}></div>
              <div className="w-3 h-3 bg-green-500 rounded-full cursor-pointer" onClick={onClose}></div>
            </div>
            <div className="text-white">fmarin.dev - bash: {title}</div>
            <div className="flex items-center space-x-2">
              <div></div>
            </div>
          </div>

          {/* Modal body */}
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
