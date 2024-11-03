const typeService = require("../services/typeService");

class TypeController {
  async getAllTypes(req, res) {
    try {
      const types = await typeService.getAllTypes();
      res.json(types);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async createType(req, res) {
    try {
      const { name } = req.body;

      if (!name) {
        return res.status(400).json({ message: "Type name is required" });
      }

      const type = await typeService.createType({ name });
      res.status(201).json(type);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async deleteType(req, res) {
    try {
      const { id } = req.params;
      await typeService.deleteType(id);
      res.status(200).json({ message: "Type deleted successfully" });
    } catch (error) {
      res
        .status(error.message.includes("not found") ? 404 : 500)
        .json({ message: error.message });
    }
  }
}

module.exports = new TypeController();
