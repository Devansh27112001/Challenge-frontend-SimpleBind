import { useState } from "react";
import DownloadData from "./DownloadData";

const SelectDownloadType = ({ data }) => {
  const [type, setType] = useState("");
  return (
    <div className="w-full mt-2 p-2 bg-gray-700 bg-opacity-25 rounded-md flex items-center justify-between">
      <div className=" flex items-center gap-2">
        <span className="text-white text-sm uppercase tracking-tight font-bold">
          Download Data :
        </span>
        <select
          className="bg-gray-700 border border-gray-600 rounded-md shadow-sm py-1 px-2 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300 text-sm"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value={""}>Select Type</option>
          <option value={"csv"}>CSV format</option>
          <option value={"json"}>JSON format</option>
        </select>
      </div>
      {type !== "" && <DownloadData data={data} type={type} />}
    </div>
  );
};

export default SelectDownloadType;
