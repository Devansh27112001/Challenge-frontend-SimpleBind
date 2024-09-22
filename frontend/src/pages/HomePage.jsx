import { Link } from "react-router-dom";
import { ArrowRightFromLineIcon } from "lucide-react";
import { motion } from "framer-motion";
const HomePage = () => {
  return (
    <motion.div
      className="w-full h-full max-w-7xl mx-auto pt-20 z-50 relative mt-20"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container flex flex-col">
        <h1 className="text-xl font-bold text-center sm:text-4xl md:text-5xl text-emerald-400 uppercase tracking-tighter mb-4">
          Confused where to add all your books?
        </h1>
        <p className="text-md text-xl text-gray-300 mb-12 sm:text-xl text-center">
          Start adding them in a single click.
        </p>
        <Link
          className="bg-emerald-700 hover:bg-emerald-600 text-white px-3 py-1 rounded-lg font-medium transition duration-300 ease-in-out self-center flex group hover:scale-105"
          to="/add-book"
        >
          <span>Start Adding</span>
          <ArrowRightFromLineIcon className="w-5 h-5 ml-1 mt-1 group-hover:ml-2" />
        </Link>
      </div>
    </motion.div>
  );
};

export default HomePage;
