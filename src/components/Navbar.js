// src/components/TopNav.jsx
import { useState } from "react";
import {
  ShoppingCartIcon,
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import   SearchBar  from "./SearchBar";
import { categories } from "../utils/mockData";

export function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false); // mobile menu
  const [catOpen, setCatOpen] = useState(false);   // desktop categories

  return (
    <nav className="w-full bg-white shadow-md border-b border-neutral-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 md:py-4">
        {/* Left: Hamburger (mobile) + Logo */}
        <div className="flex items-center gap-2">
          <button
            className="md:hidden text-marble-dark"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
          </button>

          <div className="text-2xl font-bold text-marble-dark tracking-wide">
            Traders<span className="text-marble-accent">Mart</span>
          </div>

          {/* Categories (desktop) */}
          <div className="relative hidden md:block ml-4">
            <button
              onClick={() => setCatOpen((v) => !v)}
              onBlur={() => setCatOpen(false)}
              className="flex items-center gap-1 px-3 py-1.5 rounded-md border border-neutral-200 hover:border-marble-accent hover:text-marble-accent"
            >
              Categories <ChevronDownIcon className="w-4 h-4" />
            </button>

            {catOpen && (
              <div className="absolute left-0 mt-2 w-56 bg-white border border-neutral-200 shadow-lg rounded-md z-50">
                <ul className="py-1">
                  {categories.map((cat) => (
                    <li
                      key={cat}
                      tabIndex={0}
                      className="px-4 py-2 hover:bg-marble-light cursor-pointer"
                    >
                      {cat}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Middle: Search (desktop) */}
        <div className="hidden md:flex flex-1 max-w-xl mx-6">
          <SearchBar />
        </div>

        {/* Right: Links + Cart */}
        <div className="flex items-center gap-4 text-marble-dark">
          <button className="hidden md:inline hover:text-marble-accent">Deals</button>
          <button className="hidden md:inline hover:text-marble-accent">Login / Signup</button>

          <div className="relative">
            <ShoppingCartIcon className="w-6 h-6 hover:text-marble-accent cursor-pointer" />
            <span className="absolute -top-2 -right-2 bg-marble-accent text-white text-[10px] leading-none font-bold rounded-full px-1.5 py-1">
              3
            </span>
          </div>
        </div>
      </div>

      {/* Mobile: Search below header */}
      <div className="px-4 pb-3 md:hidden">
        <SearchBar />
      </div>

      {/* Mobile: Slide-down menu with categories + links */}
      {menuOpen && (
        <div className="bg-white border-t border-neutral-200 shadow-md md:hidden">
          <ul className="divide-y divide-neutral-200">
            {categories.map((cat) => (
              <li key={cat} className="px-4 py-3 hover:bg-marble-light cursor-pointer">
                {cat}
              </li>
            ))}
            <li className="px-4 py-3 hover:bg-marble-light cursor-pointer">Deals</li>
            <li className="px-4 py-3 hover:bg-marble-light cursor-pointer">Login / Signup</li>
          </ul>
        </div>
      )}
    </nav>
  );
}
