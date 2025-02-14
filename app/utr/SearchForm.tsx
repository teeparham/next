"use client";

import { useState } from "react";
import Form from "next/form";

export function SearchForm() {
  const [searchValue, setSearchValue] = useState("");

  return (
    <Form action="/utr" className="flex gap-4 mb-8">
      <div className="flex-1 relative">
        <input
          type="text"
          name="q"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Search players..."
          className="w-full px-3 py-2 border-2 border-neutral-400 rounded-lg 
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        {searchValue && (
          <button
            type="button"
            onClick={() => setSearchValue("")}
            className="absolute cursor-pointer rounded-full bg-neutral-300
              right-3 top-1/2 -translate-y-1/2 w-5 h-5  
              flex items-center justify-center"
            aria-label="Clear"
          >
            <span className="text-neutral-800 font-medium text-sm leading-none relative top-[-1px]">
              ×
            </span>
          </button>
        )}
      </div>
      <button
        type="submit"
        className="cursor-pointer px-3 py-2 
          bg-blue-500 text-white rounded-lg hover:bg-blue-600 
          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Search
      </button>
    </Form>
  );
}
