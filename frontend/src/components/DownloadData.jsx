import { exportInJSON, getHeader } from "../lib/helper";
import { CSVLink } from "react-csv";

const DownloadData = ({ data, type }) => {
  const headers = getHeader(data);
  return (
    <>
      {type === "csv" && (
        <CSVLink
          data={data}
          headers={headers}
          className="text-white bg-emerald-600 py-1 px-2 font-medium rounded-md hover:bg-emerald-500 transition-all duration-100"
        >
          Download CSV
        </CSVLink>
      )}
      {type === "json" && (
        <button
          onClick={() => exportInJSON(data)}
          className="text-white bg-emerald-600 py-1 px-2 font-medium rounded-md hover:bg-emerald-500 transition-all duration-100"
        >
          Download JSON
        </button>
      )}
    </>
  );
};

export default DownloadData;
