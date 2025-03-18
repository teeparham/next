"use client";

import { useState } from "react";
import Form from "next/form";
import { cx } from "../utils";
import { ClearButton } from "../components/ClearButton";

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
        {searchValue && <ClearButton onClick={() => setSearchValue("")} />}
      </div>
      <button
        type="submit"
        disabled={!searchValue}
        className={cx(
          searchValue && "cursor-pointer hover:bg-blue-600",
          "px-3 py-2 bg-blue-500 text-white rounded-lg",
          "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        )}
      >
        Search
      </button>
    </Form>
  );
}
