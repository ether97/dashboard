const express = require("express");
const {
  getGoals,
  postGoals,
  putGoals,
  deleteGoals,
} = require("../controllers/goalControllers");

const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.route("/").get(protect, getGoals).post(protect, postGoals);
router.route("/:id").put(protect, putGoals).delete(protect, deleteGoals);

// equivalent to the following:

// router.get("/", getGoals);
// router.post("/", postGoals);
// router.put("/:id", putGoals);
// router.delete(":id", deleteGoals);

module.exports = router;
