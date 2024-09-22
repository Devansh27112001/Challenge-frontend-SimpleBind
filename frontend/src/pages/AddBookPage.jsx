import { motion } from "framer-motion";
import {
  Signature,
  Loader,
  DiamondPlus,
  KeySquare,
  Captions,
} from "lucide-react";
import { genres } from "../lib/data";
import { useState } from "react";
import { useBookStore } from "../stores/useBookStore";

const AddBookPage = () => {
  const [formData, setFormData] = useState({
    entryId: "",
    title: "",
    author: "",
    genre: "",
    publicationDate: "",
    isbnNumber: "",
  });

  const { addBook, loading: isLoading } = useBookStore();
  const handleSubmit = async (e) => {
    e.preventDefault();
    await addBook(formData);
  };
  return (
    <div className="relative z-50 flex flex-col justify-center mt-2 py-2 sm:px-6 lg:px-8">
      <motion.div
        className="sm:mx-auto sm:w-full sm:max-w-md"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-center mt-6 text-3xl font-extrabold text-emerald-400">
          Add Your Book
        </h2>
      </motion.div>
      <motion.div
        className="mt-4 sm:mx-auto sm:w-full sm:max-w-md max-w-md mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="bg-gray-800 py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="entryId"
                className="block text-sm font-medium shadow-sm"
              >
                Entry ID
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <KeySquare
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </div>
                <input
                  id="entryId"
                  type="number"
                  required
                  value={formData.entryId}
                  onChange={(e) =>
                    setFormData({ ...formData, entryId: e.target.value })
                  }
                  className="block w-full px-3 py-2 pl-10 bg-gray-700 border border-gray-600 rounded-md shadow-sm placeholder-gray-400 outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="title"
                className="block text-sm font-medium shadow-sm"
              >
                Title
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Captions
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </div>
                <input
                  id="title"
                  type="text"
                  required
                  value={formData.title}
                  onChange={(e) =>
                    setFormData({ ...formData, title: e.target.value })
                  }
                  className="block w-full px-3 py-2 pl-10 bg-gray-700 border border-gray-600 rounded-md shadow-sm placeholder-gray-400 outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="author"
                className="block text-sm font-medium shadow-sm"
              >
                Author
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Signature
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </div>
                <input
                  id="author"
                  type="text"
                  required
                  value={formData.author}
                  onChange={(e) =>
                    setFormData({ ...formData, author: e.target.value })
                  }
                  className="block w-full px-3 py-2 pl-10 bg-gray-700 border border-gray-600 rounded-md shadow-sm placeholder-gray-400 outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="genre"
                className="block text-sm font-medium shadow-sm"
              >
                Genre
              </label>
              <select
                name="genre"
                id="genre"
                className="mt-1 w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300"
                required
                value={formData.genre}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    genre: e.target.value.toLowerCase(),
                  })
                }
              >
                <option value={""}>Select Genre</option>
                {genres.map((genre) => (
                  <option key={genre.id} value={genre.name}>
                    {genre.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="publication-date"
                className="block text-sm font-medium shadow-sm"
              >
                Publication Date
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Signature
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </div>
                <input
                  id="publication-date"
                  type="text"
                  required
                  value={formData.publicationDate}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      publicationDate: e.target.value,
                    })
                  }
                  className="block w-full px-3 py-2 pl-10 bg-gray-700 border border-gray-600 rounded-md shadow-sm placeholder-gray-400 outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
                  placeholder="YYYY-MM-DD"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="isbn"
                className="block text-sm font-medium shadow-sm"
              >
                ISBN
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Signature
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </div>
                <input
                  id="isbn"
                  type="number"
                  minLength={10}
                  maxLength={13}
                  required
                  value={formData.isbnNumber}
                  onChange={(e) =>
                    setFormData({ ...formData, isbnNumber: e.target.value })
                  }
                  className="block w-full px-3 py-2 pl-10 bg-gray-700 border border-gray-600 rounded-md shadow-sm placeholder-gray-400 outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
                  placeholder="ISBN-10/13"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition duration-150 ease-in-out disabled:opacity-50"
              disabled={isLoading}
            >
              {isLoading ? (
                <Loader
                  className="mr-2 w-5 h-5 animate-spin"
                  aria-hidden="true"
                >
                  Loading...
                </Loader>
              ) : (
                <>
                  <DiamondPlus className="mr-2 w-5 h-5" aria-hidden="true" />
                  Add the book
                </>
              )}
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default AddBookPage;
