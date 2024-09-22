import { create } from "zustand";
import { toast } from "react-hot-toast";
import axiosInstance from "../lib/axios";
import { isIsbnNumber } from "../lib/helper";

export const useBookStore = create((set, get) => ({
  books: [],
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
      set({ books: res.data.books, loading: false });
    } catch (error) {
      set({ loading: false });
      toast.error("There was an error in fetching the books");
    }
  },
}));
