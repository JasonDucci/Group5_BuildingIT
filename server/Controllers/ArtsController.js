import { ArtsData } from "../Data/ArtData.js";
import Art from "../Models/ArtsModel.js";
import asyncHandler from "express-async-handler";

//import arts Post /api/arts/import
const importArts = asyncHandler(async (req, res) => {
  // make an empty table
  await Art.deleteMany({});
  // insert arts
  const arts = await Art.insertMany(ArtsData);
  res.status(201).json(arts);
});

//Get all arts Get /api/arts
const getArts = asyncHandler(async (req, res) => {
  try {
    //filter arts by search,category,year,medium,rate
    const { category, year, medium, rate, search } = req.query;
    let query = {
      ...(category && { category }),
      ...(year && { year }),
      ...(medium && { medium }),
      ...(rate && { rate }),
      ...(search && { name: { $regex: search, $options: "i" } }),
    };
    //load more arts
    const page = Number(req.query.pageNumber) || 1; //set it to one if no page
    const limit = 12; //number arts per page
    const skip = (page - 1) * limit; //skip  number arts per page

    // find arts by query,limit and skip
    const arts = await Art.find(query)
      //.sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);
    // get total arts
    const count = await Art.countDocuments(query);

    // send response with arts and its total
    res.json({ arts, page, pages: Math.ceil(count / limit), totalArts: count }); //total number of pages and total numbers of arts
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//Get arts by id Get /api/arts/:id
const getArtById = asyncHandler(async (req, res) => {
  try {
    //find single art by id
    const art = await Art.findById(req.params.id);
    //if art found, send message
    if (art) {
      res.json(art);
    }
    //if not
    else {
      res.status(404);
      throw new Error("Art not found");
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//Get top rated arts Get /api/arts/rated/top
const getTopRatedArts = asyncHandler(async (req, res) => {
  try {
    // find top rated arts
    const arts = await Art.find({}).sort({ rate: -1 });
    //send top rated arts message
    res.json(arts);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//Get random arts Get /api/arts/random/all
const getRandomArts = asyncHandler(async (req, res) => {
  try {
    // find random arts
    const arts = await Art.aggregate([{ $sample: { size: 8 } }]); //random by size per refresh
    // send random arts
    res.json(arts);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//Create art review Post /api/arts/:id/reviews
const createArtReview = asyncHandler(async (req, res) => {
  const { rating, comment } = req.body;
  try {
    //find art by id
    const art = await Art.findById(req.params.id);
    if (art) {
      //check if user already reviewed this art
      const alreadyReviewed = art.reviews.find(
        (r) => r.userId.toString() === req.user._id.toString()
      );
      //send error message
      if (alreadyReviewed) {
        res.status(400);
        throw new Error("You already reviewed this art");
      }
      // else create new review
      const review = {
        userName: req.user.fullName,
        userId: req.user._id,
        userImage: req.user.image,
        rating: Number(rating),
        comment,
      };
      // push review to array
      art.reviews.push(review);
      //increment the number of reviews in numberOfReviews
      art.numberOfReviews = art.reviews.length;

      //calculate new rating for art
      art.rate =
        art.reviews.reduce((acc, item) => item.rating + acc, 0) /
        art.reviews.length;

      //save
      await art.save();
      //send message
      res.status(201).json({ message: "Review added succesfully" });
    } else {
      res.status(404);
      throw new Error("Art not found");
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//Update art Put /api/arts/:id
const updateArt = asyncHandler(async (req, res) => {
  try {
    //get all data from request body
    const {
      name,
      desc,
      image,
      titleImage,
      rate,
      numberOfReviews,
      category,
      artist,
      year,
      medium,
    } = req.body;
    //find art
    const art = await Art.findById(req.params.id);
    if (art) {
      //update art data
      art.name = name || art.name;
      art.desc = desc || art.desc;
      art.image = image || art.image;
      art.titleImage = titleImage || art.titleImage;
      art.numberOfReviews = numberOfReviews || art.numberOfReviews;
      art.category = category || art.category;
      art.rate = rate || art.rate;
      art.artist = artist || art.artist;
      art.year || art.year;
      art.medium || art.medium;
      //save art
      const updatedArt = await art.save();
      //send message
      res.status(201).json(updatedArt);
    } else {
      res.status(404);
      throw new Error("Art not found");
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//Delete art Delete /api/arts/:id
const deleteArt = asyncHandler(async (req, res) => {
  try {
    //find art
    const art = await Art.findById(req.params.id);
    //delete art if found
    if (art) {
      await Art.deleteOne({ _id: req.params.id });
      res.json({ message: "Art deleted successfully" });
    }
    //if art not found
    else {
      res.status(404);
      throw new Error("Art not found");
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//Delete all art Delete /api/arts
const deleteAllArts = asyncHandler(async (req, res) => {
  try {
    // delete all arts
    await Art.deleteMany({});
    res.json({ message: "All arts deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//Create art Post /api/arts
const createArt = asyncHandler(async (req, res) => {
  try {
    //get all data from request body
    const {
      name,
      desc,
      image,
      titleImage,
      rate,
      numberOfReviews,
      category,
      artist,
      year,
      medium,
    } = req.body;
    //create new art
    const art = new Art({
      name,
      desc,
      image,
      titleImage,
      rate,
      numberOfReviews,
      category,
      artist,
      year,
      medium,
      userId: req.user._id,
    });
    //save art
    if (art) {
      const createdArt = await art.save();
      res.status(201).json(createdArt);
    } else {
      res.status(400);
      throw new Error("Invalid art data");
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export {
  importArts,
  getArts,
  getArtById,
  getTopRatedArts,
  getRandomArts,
  createArtReview,
  updateArt,
  deleteArt,
  deleteAllArts,
  createArt,
};
