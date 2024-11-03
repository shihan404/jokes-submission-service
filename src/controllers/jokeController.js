const jokeService = require("../services/jokeService");

class JokeController {
  async submitJoke(req, res) {
    try {
      const { content, type } = req.body;

      if (!content || !type) {
        return res
          .status(400)
          .json({ message: "Content and type are required" });
      }

      const joke = await jokeService.createJoke({ content, type });
      res.status(201).json(joke);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async getPendingJokes(req, res) {
    try {
      const jokes = await jokeService.getPendingJokes();
      res.json(jokes);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async deleteJoke(req, res) {
    try {
      const { id } = req.params;
      await jokeService.deleteJoke(id);
      res.status(200).json({ message: "Joke deleted successfully" });
    } catch (error) {
      res
        .status(error.message.includes("not found") ? 404 : 500)
        .json({ message: error.message });
    }
  }
}

module.exports = new JokeController();
