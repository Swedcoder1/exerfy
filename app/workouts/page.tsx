import connectDB from "../lib/connect-db";
import Workout from "../schemas/mongoose/workout";

async function getWorkouts() {
  // Connect to the database
  await connectDB();

  try {
    // Find all workouts
    const workouts = await Workout.find().exec();

    if (!workouts) {
      throw new Error("No workouts found");
    }

    // Convert Mongoose documents to plain JavaScript objects
    const jsonData = workouts.map((workout) => workout.toObject());

    return jsonData;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch workouts");
  }
}

export default async function page() {
  const data = await getWorkouts();
  console.log(data);
  return (
    <>
      <div className="flex justify-center mt-10 items-center">
        <h1 className="text-center text-2xl">Your workouts</h1>

        <button className="btn btn-sm btn-primary">Create workout</button>
      </div>
    </>
  );
}
