const { Schema, model } = require("mongoose");

const ProjectSchema = new Schema({
  title: { type: String, unique: false, required: true },
  user: { type: Schema.Types.ObjectId, ref: "User" },
  image: { type: String, default: "" },
  state: { type: String, default: "" },
});

module.exports = model("Project", ProjectSchema);
