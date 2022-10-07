import React, { useState, useEffect } from "react";
import { Links } from "./Links";
import { useDebounce } from "use-debounce";
import { useResultContext } from "../contexts/ResultContextProvider";

const Search = () => {
  const [text, setText] = useState("");
  const { setSearchTerm } = useResultContext();
  const [debouncedValue] = useDebounce(text, 300);

  useEffect(() => {
    if (debouncedValue) setSearchTerm(debouncedValue);
  }, [debouncedValue]);

  return (
    <div className="relative mt-3 sm:ml-48 md:ml-72 sm:-mt-10">
      <input
        placeholder="wetin you de find werey?"
        value={text}
        input="text"
        className="h-10 p-6 text-black border rounded-full outline-none sm:w-96 w-80 dark:bg-gray-200 hover:shadow-lg"
        onChange={(e) => setText(e.target.value)}
      />
      {text && (
        <button
          type="button"
          className="absolute top-1.5 right-4 text-2xl text-gray-500"
          onClick={() => setText("")}
        >
          X
        </button>
      )}
      <Links />
    </div>
  );
};

export default Search;
