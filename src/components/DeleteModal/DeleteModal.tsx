import React from "react";

interface IDeleteModalProps {
  itemId: string;
  onClose: () => void;
  onDelete: () => void;
}

const DeleteModal: React.FC<IDeleteModalProps> = ({
  itemId,
  onClose,
  onDelete,
}) => {
  return (
    <div
      className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-500 bg-opacity-50"
      role="dialog"
    >
      <div className="max-w-md p-4 bg-white rounded shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">Delete URL</h2>
          <button
            className="text-gray-600 hover:text-gray-900 transition duration-300 ease-in-out"
            onClick={onClose}
          >
            ×
          </button>
        </div>
        <p className="text-gray-600">
          Are you sure you want to delete this URL?
        </p>
        <div className="flex justify-end mt-4 ">
          <button
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded mr-1"
            onClick={onClose}
          >
            Close
          </button>
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-1"
            onClick={onDelete}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
