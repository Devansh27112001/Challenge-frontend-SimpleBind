import React, { useState } from "react";

const FilterBy = () => {
  const [filter, setFilter] = useState({ option: "", value: "" });
  const handleFilterSearch = () => {
    console.log(filter);
  };
  return (
    <div className="max-w-full flex justify-between items-center mb-2">
      <div className="flex gap-3 items-center">
        <span className="text-emerald-300 uppercase tracking-tighter">
          Filter By:
        </span>
        <select
          className="bg-gray-700 border border-gray-600 rounded-md shadow-sm py-1 px-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300"
          onChange={(e) => {
            setFilter({
              ...filter,
              option: e.target.value,
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

        <input
          className="bg-gray-700 border border-gray-600 rounded-md shadow-sm py-1 px-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300"
          placeholder="Enter the value"
          value={filter.value}
          onChange={(e) => {
            setFilter({
              ...filter,
              value: e.target.value,
            });
          }}
        />
      </div>
      <div>
        <button
          className="bg-emerald-600 px-4 py-1 hover:bg-emerald-500 text-white rounded-md"
          onClick={handleFilterSearch}
        >
          Filter
        </button>
      </div>
    </div>
  );
};

export default FilterBy;
