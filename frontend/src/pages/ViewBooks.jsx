import { motion } from "framer-motion";
import { useState } from "react";
import FilterBy from "../components/FilterBy";

const ViewBooks = () => {
  return (
    <motion.div
      className="relative z-50 shadow-md rounded-md max-w-5xl mx-auto bg-opacity-50 mt-20 overflow-hidden"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="md:text-5xl sm:text-4xl text-xl text-center text-emerald-500 mb-4">
        Books List
      </h1>
      <FilterBy />
      <div className="max-w-full bg-gray-700 bg-opacity-25 px-4 py-2  ">
        Devansh
      </div>
    </motion.div>
  );
};

export default ViewBooks;
