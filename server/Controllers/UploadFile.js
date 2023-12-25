import express from "express";
import multer from "multer";
import path from "path";
import { v4 as uuidv4 } from "uuid";
import { getStorage } from "firebase-admin/storage";
import { initializeApp, cert } from "firebase-admin/app";
import dotenv from "dotenv";

dotenv.config();

// Initialize Firebase App
initializeApp({
  credential: cert({
    type: process.env.FIREBASE_TYPE,
    project_id: process.env.PROJECT_ID,
    private_key_id: process.env.PRIVATE_KEY_ID,
    private_key: process.env.PRIVATE_KEY,
    client_email: process.env.CLIENT_EMAIL,
    client_id: process.env.CLIENT_ID,
    auth_uri: "https://accounts.google.com/o/oauth2/auth",
    token_uri: "https://oauth2.googleapis.com/token",
    auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
    client_x509_cert_url: process.env.CLIENT_X509_CERT_URL,
    universe_domain: "googleapis.com",
  }),
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
});

// Get Firebase Storage Bucket
const storage = getStorage().bucket();

// Express Router
const Uploadrouter = express.Router();

// Multer Configuration
const upload = multer({
  storage: multer.memoryStorage(),
});

// Upload Route
Uploadrouter.post("/", upload.single("file"), async (req, res) => {
  try {
    // Get file from user request
    const file = req.file;

    // Create new filename
    if (file) {
      const fileName = `${uuidv4()}${path.extname(file.originalname)}`;
      const blob = storage.file(fileName);
      const blobStream = blob.createWriteStream({
        resumable: false,
        metadata: {
          contentType: file.mimetype,
        },
      });

      // Handle errors
      blobStream.on("error", (error) => {
        res.status(400).json({ message: error.message });
      });

      // Handle success
      blobStream.on("finish", () => {
        // Get the public URL
        const publicUrl = `https://firebasestorage.googleapis.com/v0/b/${storage.name}/o/${fileName}?alt=media`;
        // Return file name and its public URL
        res.status(200).json(publicUrl);
      });

      blobStream.end(file.buffer);
    } else {
      res.status(400).json({ message: "Please upload a file" });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default Uploadrouter;
