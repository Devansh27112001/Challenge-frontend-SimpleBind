import React, { useState } from "react";
import FilterValueInput from "./FilterValueInput";
import { useBookStore } from "../stores/useBookStore";

const FilterBy = () => {
  const [filter, setFilter] = useState({
    option: "",
    value: "",
    fromDate: "",
    toDate: "",
  });
  const { getFilteredBooks } = useBookStore();
  const handleFilterSearch = async () => {
    await getFilteredBooks(filter);
    console.log(filter);
    setFilter({ option: "", value: "", fromDate: "", toDate: "" });
    // console.log(filter);
  };
  return (
    <div className="max-w-full flex justify-between items-center mb-2">
      <div className="flex gap-3 items-center">
        <span className="text-emerald-300 uppercase tracking-tighter sm:text-lg text-sm">
          Filter By:
        </span>
        <select
          className="bg-gray-700 border border-gray-600 rounded-md shadow-sm sm:py-1 sm:px-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300 p-1 sm:text-sm text-xs"
          onChange={(e) => {
            setFilter({
              ...filter,
              option: e.target.value,
              value: "",
              fromDate: "",
              toDate: "",
            });
          }}
          value={filter.option}
        >
          <option value="">Select option</option>
          <option value="genre">Genre</option>
          <option value="title">Title</option>
          <option value="publicationDate">Publication Date</option>
          <option value="author">Author</option>
        </select>
        <FilterValueInput filter={filter} handleFilterValue={setFilter} />
      </div>
      <div>
        <button
          className="bg-emerald-600 sm:px-4 sm:py-1 px-2 py-1 hover:bg-emerald-500 text-white rounded-md"
          onClick={handleFilterSearch}
        >
          Filter
        </button>
      </div>
    </div>
  );
};

export default FilterBy;
