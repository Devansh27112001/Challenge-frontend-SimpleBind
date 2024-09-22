import React from "react";

const Spinner = () => {
  return (
    <div className="w-full min-h-60 flex justify-center items-center">
      <div className="relative">
        <div className="w-20 h-20 border-emerald-200 border-2 rounded-full" />
        <div className="w-20 h-20 border-emerald-800 border-t-2 rounded-full animate-spin absolute left-0 top-0" />
        <div className="sr-only">Loading</div>
      </div>
    </div>
  );
};

export default Spinner;
