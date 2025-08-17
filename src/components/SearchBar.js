// TopNav.jsx
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function SearchBar() {
  return (
    <div className="w-full bg-marble px-4 py-4 shadow-soft">
      <div className="max-w-xl mx-auto relative">
        <input
          type="text"
          placeholder="Search by product name, brand, category"
          className="w-full pl-10 pr-4 py-3 rounded-full border border-marble 
                     bg-white shadow-soft
                     focus:outline-none focus:ring-2 focus:ring-marble-accent 
                     focus:border-marble-accent 
                     text-marble-dark placeholder-neutral-500"
        />
        <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500 w-5 h-5" />
      </div>
    </div>
  )
}
