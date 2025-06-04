'use client';
import React, { useState } from 'react';
import UserModal from '../components/UserModal';
import { users } from '../lib/data';

export default function Home() {
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 p-6">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold text-emerald-700">🎄 Christmas Exchange 🎁</h1>
        <p className="text-lg mt-2 text-slate-600">Click a name to view their wishlist!</p>
      </header>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
        {users.map(user => (
          <button
            key={user.name}
            onClick={() => setSelectedUser(user)}
            className="bg-rose-600 text-white rounded-2xl p-4 shadow-md hover:bg-rose-700 transition"
          >
            {user.name}
          </button>
        ))}
      </div>

      {selectedUser && (
        <UserModal user={selectedUser} onClose={() => setSelectedUser(null)} />
      )}
    </div>
      );
}