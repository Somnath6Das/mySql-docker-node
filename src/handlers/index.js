import { create, deleteRecord, find, findById, update } from "../db/queries.js";

export const getAllProducts = async (req, res) => {
  try {
    const products = await find();
    return res.status(200).json({ products });
  } catch (error) {
    console.log("Error while getting all product:", error);
    res.status(500).json({ message: "Error Occurred" });
  }
};


export const getProduct = async (req, res) => {
  const id = req.params.id;
   try {
     const product = await findById(id);
     return res.status(200).json({ product });
   } catch (error) {
     console.log("Error while getting product by id:", error);
     res.status(500).json({ message: "Error Occurred" });
   }
};



export const createProduct = async (req, res) => {
  const { title, description, price } = req.body;
  if (!title || !description || !price) {
    return res.status(403).json({ message: "Input field is required" });
  }
  try {
    const product = await create(title, description, price);
    return res.status(201).json({ product });
  } catch (error) {
     console.log("Error while creating product:", error);
     res.status(500).json({ message: "Error Occurred" });
  }
};
export const updateProduct = async (req, res) => {
   const { title, description, price } = req.body;
   const id = req.params.id;
   if (!title || !description || !price) {
     return res.status(403).json({ message: "Input field is required" });
   }
   try {
     const product = await update(title, description, price, id);
     return res.status(200).json({ product });
   } catch (error) {
     console.log("Error while updating product:", error);
     res.status(500).json({ message: "Error Occurred" });
   }
};
export const deleteProduct = async (req, res) => {
  const id = req.params.id;
  
  try {
    const product = await deleteRecord(id);
    return res.status(200).json({ product });
  } catch (error) {
    console.log("Error while getting product:", error);
    res.status(500).json({ message: "Error Occurred" });
  }
};
