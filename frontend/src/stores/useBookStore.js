import { create } from "zustand";
import { toast } from "react-hot-toast";
import axiosInstance from "../lib/axios";
import { isIsbnNumber } from "../lib/helper";

export const useBookStore = create((set, get) => ({
  books: [],
  allBooks: [],
  loading: false,

  addBook: async (newBook) => {
    set({ loading: true });
    try {
      if (!isIsbnNumber(newBook.isbnNumber)) {
        set({ loading: false });
        toast.error("Invalid ISBN number");
        return;
      }
      const res = await axiosInstance.post("/book", { ...newBook });
      toast.success("Book added successfully");
      set({ loading: false });
    } catch (error) {
      set({ loading: false });
      toast.error(error?.response?.data?.message);
    }
  },

  getAllBooks: async () => {
    set({ loading: true });
    try {
      const res = await axiosInstance.get("/book");
      set({ books: res.data.books, loading: false, allBooks: res.data.books });
    } catch (error) {
      set({ loading: false });
      toast.error("There was an error in fetching the books");
    }
  },

  getFilteredBooks: async (filter) => {
    set({ loading: true });
    try {
      if (filter.value === "" && filter.option === "") {
        toast.error("Please select appropriate value.");
        set({ books: get().allBooks, loading: false });
        return;
      }
      const res = await axiosInstance.post("/book/filter", filter);
      set({ books: res.data.books, loading: false });
    } catch (error) {
      set({ loading: false });
      toast.error("There was a problem in fetching the books");
    }
  },
}));
