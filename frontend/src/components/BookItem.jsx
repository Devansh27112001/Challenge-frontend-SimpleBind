import { motion } from "framer-motion";

const BookItem = ({ book }) => {
  return (
    <motion.div
      className="sm:text-base text-xs font-medium text-white min-w-full flex items-center justify-between divide-x divide-emerald-100 divide-opacity-15 sm:py-1 bg-emerald-400 bg-opacity-5 rounded-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="w-full px-2 py-2 flex">
        <span>{book.title}</span>
      </div>
      <div className="w-full px-2 py-2 flex">
        <span>{book.author}</span>
      </div>
      <div className="w-full px-2 py-2 flex">
        <span>{book.genre}</span>
      </div>
      <div className="w-full px-2 py-2 flex">
        <span>{book.publicationDate}</span>
      </div>
      <div className="w-full px-2 py-2 flex">
        <span>{book.isbnNumber}</span>
      </div>
    </motion.div>
  );
};

export default BookItem;
