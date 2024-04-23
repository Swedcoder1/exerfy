import mongoose from "mongoose";

// Define the schema
const workoutSchema = new mongoose.Schema({
  _id: Number,
  name: {
    type: String,
    required: true,
  },
});

// Define the model
const Workout =
  mongoose.models.Workout || mongoose.model("Workout", workoutSchema);

export default Workout;
