const express = require("express");
const router = express.Router();
const jokeController = require("../controllers/jokeController");

router.post("/", jokeController.submitJoke);
router.get("/pending", jokeController.getPendingJokes);
router.delete("/:id", jokeController.deleteJoke);

module.exports = router;
