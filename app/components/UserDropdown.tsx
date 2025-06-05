"use client";
import React from "react";

export type Alignment = "left" | "center" | "right";

interface UserDropdownProps {
  name: string;
  wishlist: string[];
  isOpen: boolean;
  alignment: Alignment;
  onClick: () => void;
  buttonRef: (el: HTMLButtonElement | null) => void;
  dropdownRef: (el: HTMLDivElement | null) => void;
}

export default function UserDropdown({
  name,
  wishlist,
  isOpen,
  alignment,
  onClick,
  buttonRef,
  dropdownRef,
}: UserDropdownProps) {
  let alignmentClasses = "";
  if (alignment === "left") {
    alignmentClasses = "left-0";
  } else if (alignment === "center") {
    alignmentClasses = "left-1/2 -translate-x-1/2";
  } else if (alignment === "right") {
    alignmentClasses = "right-0";
  }

  return (
    <div
      className="relative w-[150px] bg-white box-border rounded shadow"
      ref={dropdownRef}
    >
      <button
        ref={buttonRef}
        onClick={onClick}
        className="w-full h-10 pt-3 bg-[#9dc852] hover:bg-[#8db842] text-white font-bold uppercase relative rounded-t"
      >
        {name}
      </button>

      <div
        className={`absolute z-50 w-[300px] bg-[#ebebeb] rounded-b shadow transition-all duration-300 ease-in-out origin-top transform ${
          isOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0 pointer-events-none"
        } ${alignmentClasses}`}
      >
        {(wishlist.length > 0 ? wishlist : ["Item 1", "Item 2", "Item 3"]).map(
          (item, i) => (
            <div
              key={i}
              className="h-[30px] px-[10px] py-[5px] whitespace-nowrap hover:bg-black/10 transition-colors"
            >
              {item}
            </div>
          )
        )}
      </div>
    </div>
  );
}