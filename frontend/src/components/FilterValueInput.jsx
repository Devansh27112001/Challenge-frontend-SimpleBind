import { motion } from "framer-motion";
import { genres } from "../lib/data";

// Option can be genre, author, title, publicationDate

const FilterValueInput = ({ filter, handleFilterValue }) => {
  const textInput = filter.option === "author" || filter.option === "title";
  const selectInput = filter.option === "genre";

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
    </>
  );
};

export default FilterValueInput;
