import { Link } from "react-router-dom";
import { BookmarkPlus, BookMarkedIcon, List } from "lucide-react";

const NavBar = () => {
  return (
    <header className="w-full bg-gray-900 backdrop-blur-md bg-opacity-90 shadow-lg border-b border-emerald-600 ">
      <div className="container mx-auto py-3 px-4">
        <div className="flex items-center">
          <Link
            to="/"
            className="sm:text-2xl text-xl flex items-center space-x-1 font-bold text-emerald-600"
          >
            <BookmarkPlus className="w-6 h-6 sm:inline-block hidden" />
            <span>AddYourBooks</span>
          </Link>

          <Link
            to={"/add-book"}
            className="ml-auto mr-3 bg-emerald-700 hover:bg-emerald-600 text-white px-3 py-1 rounded-lg font-medium transition duration-300 ease-in-out flex items-center"
          >
            <BookMarkedIcon className="w-4 h-4 mr-1 sm:inline-block hidden" />
            Add a book
          </Link>
          <Link
            to={"/view-books"}
            className=" bg-emerald-700 hover:bg-emerald-600 text-white px-3 py-1 rounded-lg font-medium transition duration-300 ease-in-out flex items-center"
          >
            <List className="w-4 h-4 mr-1 sm:inline-block hidden" />
            View books
          </Link>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
