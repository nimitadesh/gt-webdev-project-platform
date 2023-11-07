const mongoose = require("mongoose");

const contributionSchema = new mongoose.Schema({
  project_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Project", // Reference to the Project model
    required: true,
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Reference to the User model
    required: true,
  },
});

const Contribution = mongoose.model("Contribution", contributionSchema);

module.exports = Contribution;
