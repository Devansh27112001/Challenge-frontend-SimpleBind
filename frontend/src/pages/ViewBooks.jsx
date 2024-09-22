import { motion } from "framer-motion";
import FilterBy from "../components/FilterBy";
import { useBookStore } from "../stores/useBookStore";
import Spinner from "../components/Spinner";
import BookItem from "../components/BookItem";
import { useEffect } from "react";
import { BookA, Pen, Album, Calendar, Hash } from "lucide-react";

const ViewBooks = () => {
  const { loading: isLoading, books, getAllBooks } = useBookStore();
  useEffect(() => {
    getAllBooks();
  }, []);
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
      <div className="max-w-full bg-gray-700 bg-opacity-25 sm:px-4 px-2 py-2  space-y-3 rounded-sm">
        {isLoading && <Spinner />}
        <div className="sm:text-base bg-gray-700 text-xs font-medium text-white min-w-full flex items-center justify-between divide-x divide-emerald-100 pb-1 divide-opacity-15 bg-opacity-5 rounded-md border-b border-gray-700">
          <div className="uppercase w-full px-2 py-2 flex justify-center">
            <BookA className="w-6 h-6 mr-1 sm:inline-block hidden" />
            <span>Title</span>
          </div>
          <div className="uppercase w-full px-2 py-2 flex justify-center ">
            <Pen className="w-6 h-6 mr-1 sm:inline-block hidden" />
            <span>Author</span>
          </div>
          <div className="uppercase w-full px-2 py-2 flex justify-center">
            <Album className="w-6 h-6 mr-1 sm:inline-block hidden" />
            <span>Genre</span>
          </div>
          <div className="uppercase w-full px-2 py-2 flex justify-center">
            <Calendar className="w-6 h-6 mr-1 sm:inline-block hidden" />
            <span>Publication Date</span>
          </div>
          <div className="uppercase w-full px-2 py-2 flex justify-center">
            <Hash className="w-6 h-6 mr-1 sm:inline-block hidden" />
            <span>ISBN</span>
          </div>
        </div>
        <div className="space-y-3 divide-y-2 divide-emerald-700 overflow-y-auto max-h-72">
          {books?.length > 0 ? (
            books.map((book) => <BookItem key={book.id} book={book} />)
          ) : (
            <>Devansh</>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ViewBooks;
