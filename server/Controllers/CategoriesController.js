import Categories from "../Models/CategoriesModel.js";
import asyncHandler from "express-async-handler";

//Get all categories Get /api/categories
const getCategories = asyncHandler(async (req, res) => {
  try {
    //find all categories
    const categories = await Categories.find({});
    //send message
    res.json(categories);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//Create new category Post /api/categories
const createCategory = asyncHandler(async (req, res) => {
  try {
    //get title from request body
    const { title } = req.body;
    //create new Category
    const category = new Categories({
      title,
    });
    //save new cate
    const createdCategory = await category.save();
    //send message
    res.status(201).json(createdCategory);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//Update category Put /api/categories/:id
const updateCategory = asyncHandler(async (req, res) => {
  try {
    //get category by id
    const category = await Categories.findById(req.params.id);
    if (category) {
      //update title
      category.title = req.body.title || category.title;
      //save the updated title
      const updatedCategory = await category.save();
      //send message
      res.json(updatedCategory);
    } else {
      res.status(404).json({ message: "Category not found" });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//Delete category Delete /api/categories/:id
const deleteCategory = asyncHandler(async (req, res) => {
  try {
    //get cate by id
    const category = await Categories.findById(req.params.id);
    if (category) {
      //delete cate
      await Categories.deleteOne({ _id: req.params.id });
      //send message
      res.json({ message: "Category deleted successfully" });
    } else {
      res.status(404).json({ message: "Category not found" });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export { getCategories, createCategory, updateCategory, deleteCategory };
