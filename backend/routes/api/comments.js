/**
 * Express router for handling comment-related API endpoints.
 * 
 * @module routes/api/comments
 * @requires express
 * @requires mongoose
 */

/**
 * GET / - Retrieves all comments from the database.
 * 
 * @async
 * @function
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @returns {Object} JSON array of all comments
 * @throws {Error} Returns 500 status with error message if database query fails
 */

/**
 * DELETE /:id - Deletes a specific comment by ID.
 * 
 * @async
 * @function
 * @param {Object} req - Express request object
 * @param {string} req.params.id - The MongoDB ObjectId of the comment to delete
 * @param {Object} res - Express response object
 * @returns {Object} JSON object with success message on deletion
 * @throws {Error} Returns 404 status if comment is not found
 * @throws {Error} Returns 500 status with error message if database operation fails
 */
const router = require("express").Router();
const mongoose = require("mongoose");
const Comment = mongoose.model("Comment");

module.exports = router;

// Hey GitHub Copilot, 

router.get("/", async (req, res) => {
  try {
    const comments = await Comment.find();
    res.json(comments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// add another endpoint for deleting a comment
router.delete("/:id", async (req, res) => {
  try {
    const comment = await Comment.findByIdAndDelete(req.params.id);
    if (!comment) {
      return res.status(404).json({ error: "Comment not found" });
    }
    res.json({ message: "Comment deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});