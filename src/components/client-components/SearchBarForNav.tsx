"use client";

import { useState } from "react";
import { Search } from "lucide-react";

const SearchBarForNav = () => {
  const [searchText, setSearchText] = useState("");
  return (
    <>
      <div className="w-[350px] lg:w-[450px] flex px-4 items-center border-2 border-zinc-400 rounded-md gap-2">
        <Search className="w-4 text-zinc-500" />
        <input
          type="text"
          name="search"
          id="search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="text-sm py-2 flex-1 outline-none border-none bg-inherit placeholder:text-zinc-500 tracking-tight"
          placeholder="Search products..."
          autoComplete="off"
        />
      </div>
    </>
  );
};

export default SearchBarForNav;
