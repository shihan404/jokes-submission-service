const Joke = require("../models/joke");

class JokeService {
  async createJoke(jokeData) {
    try {
      const joke = new Joke({
        content: jokeData.content,
        type: jokeData.type,
      });

      return await joke.save();
    } catch (error) {
      throw new Error(`Error creating joke: ${error.message}`);
    }
  }

  async getPendingJokes() {
    try {
      return await Joke.find({ status: "pending" });
    } catch (error) {
      throw new Error(`Error fetching pending jokes: ${error.message}`);
    }
  }

  async deleteJoke(jokeId) {
    try {
      const joke = await Joke.findByIdAndDelete(jokeId);
      if (!joke) {
        throw new Error("Joke not found");
      }
      return joke;
    } catch (error) {
      throw new Error(`Error deleting joke: ${error.message}`);
    }
  }
}

module.exports = new JokeService();
