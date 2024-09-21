import { create } from "zustand";
import { toast } from "react-hot-toast";
import axiosInstance from "../lib/axios";

export const useBookStore = create((set, get) => ({
  books: [],
  loading: false,

  addBook: async (newBook) => {
    set({ loading: true });
    try {
      const res = await axiosInstance.post("/book", { ...newBook });
      console.log(res.data.data);
      toast.success("Book added successfully");
      // set((previousState) => ({
      //   books: [...previousState.books, res.data.data],
      // }));
    } catch (error) {
      set({ loading: false });
      toast.error(error?.response?.data?.message);
      console.log(error?.response?.data?.message);
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
      console.log(error);
    }
  },
}));
