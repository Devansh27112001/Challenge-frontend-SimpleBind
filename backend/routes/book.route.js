import express from "express";
import {
  createBook,
  getAllBooks,
  filterBooks,
} from "../controllers/book.controller.js";

const router = express.Router();

router.get("/", getAllBooks);
router.post("/", createBook);
router.post("/filter", filterBooks);

export default router;
