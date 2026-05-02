"use client";

import { SearchField } from "@heroui/react";
import { useRouter, useSearchParams } from "next/navigation";

const SearchBox = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSearch = (e) => {
     const value = e.target.value;

     const params = new URLSearchParams(searchParams);
     if (value) {
       params.set("search", value);
     } else {
       params.delete("search");
     }
     router.push(`/courses?${params.toString()}`);
  };

  return (
    <div>
      <SearchField>
      <SearchField.Group>
        <SearchField.SearchIcon />
        <SearchField.Input
          onChange={handleSearch}
          placeholder="Search courses..."
          className="w-80"
        />
        <SearchField.ClearButton />
      </SearchField.Group>
    </SearchField>
    </div>
  );
};

export default SearchBox;
