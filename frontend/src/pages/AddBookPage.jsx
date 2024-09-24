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
    setFormData({
      entryId: "",
      title: "",
      author: "",
      genre: "",
      publicationDate: "",
      isbnNumber: "",
    });
  };
  return (
    <div className="relative z-50 flex flex-col justify-center mt-2 py-2 sm:px-6 lg:px-8">
      <motion.div
        className="sm:mx-auto sm:w-full sm:max-w-md"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-center mt-6 sm:text-3xl text-xl font-extrabold text-emerald-400">
          Add Your Book
        </h2>
      </motion.div>
      <motion.div
        className="mt-4 sm:mx-auto sm:w-full sm:max-w-md max-w-md mx-auto "
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="bg-gray-800 sm:py-8 px-4 py-6 shadow sm:rounded-lg sm:px-10">
          <form className="sm:space-y-4 space-y-3" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="entryId"
                className="block sm:text-sm text-xs font-medium shadow-sm"
              >
                Entry ID
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <KeySquare
                    className="sm:h-5 sm:w-5 h-4 w-4 text-gray-400"
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
                  className="block w-full sm:px-3 sm:py-2 py-1 px-1 sm:pl-10 pl-8 bg-gray-700 border border-gray-600 rounded-md shadow-sm placeholder-gray-400 outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="title"
                className="block sm:text-sm text-xs font-medium shadow-sm"
              >
                Title
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Captions
                    className="sm:h-5 sm:w-5 h-4 w-4 text-gray-400"
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
                  className="block w-full sm:px-3 sm:py-2 py-1 px-1 sm:pl-10 pl-8 bg-gray-700 border border-gray-600 rounded-md shadow-sm placeholder-gray-400 outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="author"
                className="block sm:text-sm text-xs font-medium shadow-sm"
              >
                Author
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Signature
                    className="sm:h-5 sm:w-5 h-4 w-4 text-gray-400"
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
                  className="block w-full sm:px-3 sm:py-2 py-1 px-1 sm:pl-10 pl-8 bg-gray-700 border border-gray-600 rounded-md shadow-sm placeholder-gray-400 outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="genre"
                className="block sm:text-sm text-xs font-medium shadow-sm"
              >
                Genre
              </label>
              <select
                name="genre"
                id="genre"
                className="mt-1 w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm sm:px-3 sm:py-2 py-1 px-1 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300 sm:text-md text-sm"
                required
                value={formData.genre}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    genre: e.target.value,
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
                className="block sm:text-sm text-xs font-medium shadow-sm"
              >
                Publication Date
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Signature
                    className="sm:h-5 sm:w-5 h-4 w-4 text-gray-400"
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
                  className="block w-full sm:px-3 sm:py-2 py-1 px-1 sm:pl-10 pl-8 bg-gray-700 border border-gray-600 rounded-md shadow-sm placeholder-gray-400 outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
                  placeholder="YYYY-MM-DD"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="isbn"
                className="block sm:text-sm text-xs font-medium shadow-sm"
              >
                ISBN
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Signature
                    className="sm:h-5 sm:w-5 h-4 w-4 text-gray-400"
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
                  className="block w-full sm:px-3 sm:py-2 py-1 px-1 sm:pl-10 pl-8 bg-gray-700 border border-gray-600 rounded-md shadow-sm placeholder-gray-400 outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
                  placeholder="ISBN-10/13"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full flex justify-center items-center sm:py-2 sm:px-4 px-2 py-1 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition duration-150 ease-in-out disabled:opacity-50"
              disabled={isLoading}
            >
              {isLoading ? (
                <Loader
                  className="sm:mr-2 mr-1 sm:h-5 sm:w-5 h-4 w-4 animate-spin"
                  aria-hidden="true"
                >
                  Loading...
                </Loader>
              ) : (
                <>
                  <DiamondPlus
                    className="sm:mr-2 mr-1 sm:h-5 sm:w-5 h-4 w-4"
                    aria-hidden="true"
                  />
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
