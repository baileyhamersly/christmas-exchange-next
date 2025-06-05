"use client";
import React, { useState, useRef, useEffect } from "react";
import { users } from "./data/users";
import UserDropdown, { Alignment } from "./components/UserDropdown";

export default function Home() {
  const [selectedUser, setSelectedUser] = useState<string | null>(null);
  const [dropdownAlignments, setDropdownAlignments] = useState<Alignment[]>(
    users.map(() => "left")
  );
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const dropdownRefs = useRef<(HTMLDivElement | null)[]>([]);

  const toggleDropdown = (userName: string, index: number) => {
    if (selectedUser === userName) {
      setSelectedUser(null);
    } else {
      setSelectedUser(userName);

      const button = buttonRefs.current[index];
      if (!button) return;

      const rect = button.getBoundingClientRect();
      const vw = window.innerWidth;
      const alignment: Alignment =
        rect.left < vw / 3
          ? "left"
          : rect.right > (2 * vw) / 3
          ? "right"
          : "center";

      setDropdownAlignments((prev) =>
        prev.map((align, i) => (i === index ? alignment : align))
      );
    }
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRefs.current.every(
          (ref) => ref && !ref.contains(e.target as Node)
        )
      ) {
        setSelectedUser(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 p-6">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold text-emerald-700">
          🎄 Christmas Exchange 🎁
        </h1>
        <p className="text-lg mt-2 text-slate-600">
          Click a name to view their wishlist!
        </p>
      </header>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
        {users.map((user, index) => (
          <UserDropdown
            key={user.name}
            name={user.name}
            wishlist={user.wishlist}
            isOpen={selectedUser === user.name}
            alignment={dropdownAlignments[index]}
            onClick={() => toggleDropdown(user.name, index)}
            buttonRef={(el: HTMLButtonElement | null) => (buttonRefs.current[index] = el)}
            dropdownRef={(el: HTMLDivElement | null) => (dropdownRefs.current[index] = el)}
          />
        ))}
      </div>
    </div>
  );
}
