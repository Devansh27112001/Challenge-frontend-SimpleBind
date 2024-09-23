import { Op } from "sequelize";
import bookSchema from "../models/book.model.js";

export const getAllBooks = async (req, res) => {
  try {
    const books = await bookSchema.findAll();
    res.status(200).json({ status: "success", books });
  } catch (error) {
    res.status(200).json({ status: "failed", message: error });
  }
};

export const createBook = async (req, res) => {
  try {
    const newBook = await bookSchema.create({ ...req.body });
    res.status(200).json({ status: "success", data: newBook });
  } catch (error) {
    console.log(error.errors[0].message);
    res.status(400).json({
      status: "fail",
      message:
        error?.errors[0]?.message || "There was an error creating the book",
    });
  }
};

export const filterBooks = async (req, res) => {
  try {
    const { option, value, fromDate = "", toDate = "" } = req.body;
    let query = {
      where: {
        [option]: value,
      },
    };

    if (fromDate && toDate) {
      query = {
        where: {
          [option]: {
            [Op.gt]: new Date(fromDate),
            [Op.lte]: new Date(toDate),
          },
        },
      };
    }
    const books = await bookSchema.findAll(query);

    res.status(200).json({ status: "success", books });
  } catch (error) {
    console.log(error);
    res.status(400).json({ status: "failed", message: error });
  }
};
