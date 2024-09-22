import React from "react";
import { getHeader } from "../lib/helper";
import { CSVLink } from "react-csv";

const DownloadData = ({ data }) => {
  console.log(data);
  const headers = getHeader(data);
  console.log(headers);
  return (
    <CSVLink
      data={data}
      headers={headers}
      filename="books.csv"
      className="text-white bg-emerald-600 py-1 px-2 font-medium rounded-md hover:bg-emerald-500 transition-all duration-100"
    >
      Download
    </CSVLink>
  );
  // return <button>Download Data</button>;
};

export default DownloadData;
