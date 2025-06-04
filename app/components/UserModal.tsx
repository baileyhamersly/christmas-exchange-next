import React from 'react';

type User = {
  name: string;
  wishlist: string[];
};

type UserModalProps = {
  user: User;
  onClose: () => void;
};

const UserModal: React.FC<UserModalProps> = ({ user, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-lg max-w-md w-full p-6 relative">
        <button
          className="absolute top-3 right-3 text-slate-500 hover:text-slate-700"
          onClick={onClose}
          aria-label="Close modal"
        >
          ✖
        </button>
        <h2 className="text-xl font-semibold text-emerald-700 mb-4">
          {user.name}'s Wishlist
        </h2>
        <ul className="list-disc pl-6 text-slate-700">
          {user.wishlist.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserModal;