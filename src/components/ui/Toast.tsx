// src/components/ui/Toast.tsx

import React from 'react';

interface ToastProps {
  title: string;
  description?: string;
  onClose: () => void;
}

const Toast: React.FC<ToastProps> = ({ title, description, onClose }) => {
  return (
    <div className="fixed top-4 right-4 z-50 bg-white shadow-md rounded p-4 border border-gray-200">
      <h4 className="font-bold text-gray-900">{title}</h4>
      {description && <p className="text-gray-700">{description}</p>}
      <button onClick={onClose} className="mt-2 text-sm text-blue-500 hover:underline">
        Close
      </button>
    </div>
  );
};

export default Toast;
