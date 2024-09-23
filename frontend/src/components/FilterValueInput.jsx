import { motion } from "framer-motion";
import { genres } from "../lib/data";

// Option can be genre, author, title, publicationDate

const FilterValueInput = ({ filter, handleFilterValue }) => {
  const textInput = filter.option === "author" || filter.option === "title";
  const selectInput = filter.option === "genre";
  const dateInput = filter.option === "publicationDate";

  return (
    <>
      {textInput && (
        <motion.input
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-gray-700 border border-gray-600 rounded-md shadow-sm py-1 px-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300"
          placeholder="Enter the value"
          value={filter.value}
          onChange={(e) => {
            handleFilterValue({
              ...filter,
              value: e.target.value,
            });
          }}
        />
      )}
      {selectInput && (
        <motion.select
          className="bg-gray-700 border border-gray-600 rounded-md shadow-sm py-1 px-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          onChange={(e) =>
            handleFilterValue({ ...filter, value: e.target.value })
          }
        >
          <option value={""}>Select genre</option>
          {genres.map((genre) => (
            <option value={genre.name.toLowerCase()} key={genre.id}>
              {genre.name}
            </option>
          ))}
        </motion.select>
      )}
      {dateInput && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <label
            htmlFor="fromDate"
            className="text-white text-sm font-bold mr-1"
          >
            From:
          </label>
          <input
            id="fromDate"
            name="fromDate"
            type="date"
            pattern="\d{4}-\d{2}-\d{2}"
            className="bg-gray-700 border border-gray-600 rounded-md shadow-sm py-1 px-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300"
            value={filter.fromDate}
            onChange={(e) =>
              handleFilterValue({ ...filter, fromDate: e.target.value })
            }
          />
          <label
            htmlFor="toDate"
            className="text-white text-sm font-bold ml-2 mr-1"
          >
            To:
          </label>
          <input
            id="toDate"
            name="toDate"
            type="date"
            pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"
            className="bg-gray-700 border border-gray-600 rounded-md shadow-sm py-1 px-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300"
            value={filter.toDate}
            onChange={(e) =>
              handleFilterValue({ ...filter, toDate: e.target.value })
            }
          />
        </motion.div>
      )}
    </>
  );
};

export default FilterValueInput;
