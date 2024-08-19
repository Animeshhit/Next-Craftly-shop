"use client";

import React, {
  useState,
  useEffect,
  useMemo,
  useCallback,
  useRef,
} from "react";
import { Search } from "lucide-react";
import { MiniProduct } from "@/types/MinimalProductType";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const SearchBarForNav = () => {
  const [searchText, setSearchText] = useState("");
  const [searchRes, setSearchRes] = useState<null | MiniProduct[]>(null);
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const searchRef = useRef<HTMLFormElement | null>(null);

  const getSearchResults = useCallback(
    async (controller: AbortController) => {
      try {
        setIsLoading(true);
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_SERVERHOST}/api/v1/search?page=1&limit=12&q=${searchText}`,
          { signal: controller.signal }
        );
        if (response.ok) {
          const data = await response.json();
          setSearchRes(data.products || []);
        } else {
          setSearchRes([]);
        }
      } catch (err: any) {
        if (err.name !== "AbortError") {
          console.error(err);
          setSearchRes([]);
        }
      } finally {
        setIsLoading(false);
      }
    },
    [searchText]
  );

  useEffect(() => {
    if (searchText.length > 0) {
      const controller = new AbortController();
      const debounceTimeout = setTimeout(() => {
        getSearchResults(controller);
      }, 500);

      return () => {
        clearTimeout(debounceTimeout);
        controller.abort();
      };
    } else {
      setSearchRes(null);
    }
  }, [searchText, getSearchResults]);

  useEffect(() => {
    setSearchText("");
    setSearchRes(null);
  }, [pathname]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setSearchText(""); // Clear search text
        setSearchRes(null); // Clear search results
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchText.trim().length > 0) {
      router.push(`/search/${searchText}`);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-[350px] relative lg:w-[450px] flex px-4 items-center border border-zinc-400 rounded-full gap-2"
      ref={searchRef}
    >
      <Search className="w-4 text-zinc-500" />
      <input
        type="text"
        id="search"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        className="text-sm py-2 flex-1 outline-none border-none bg-inherit placeholder:text-zinc-500 tracking-tight"
        placeholder="Search products..."
        autoComplete="off"
      />
      {searchText.length > 0 && (
        <div className="absolute bg-white flex flex-col gap-1 top-12 py-3 px-2 rounded-md shadow-lg inset-x-0">
          {isLoading ? (
            <p className="text-sm rounded-md cursor-pointer py-1 px-2">
              Loading...
            </p>
          ) : searchRes && searchRes.length > 0 ? (
            searchRes.map((item: MiniProduct, index: number) => (
              <Link
                href={`/product/Search Results/${item._id}`}
                key={index}
                className="text-sm flex items-center gap-2 hover:bg-zinc-200 rounded-md cursor-pointer py-1 px-2"
              >
                <Search className="w-3 h-3" />
                {item.name}
              </Link>
            ))
          ) : (
            <p className="text-sm rounded-md cursor-pointer py-1 px-2">
              No search results
            </p>
          )}
        </div>
      )}
    </form>
  );
};

export default SearchBarForNav;
