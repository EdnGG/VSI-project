console.log("hello from routes.js");

import { Router } from "express";
const router = Router();
router.get("/test", (req, res) => {
  res.send("test route");
});

export default router;

// import express from "express";
// var app = express();

// // respond with "hello world" when a GET request is made to the homepage
// app.get("/", function(req, res) {
//   res.send("hello world");
// });
