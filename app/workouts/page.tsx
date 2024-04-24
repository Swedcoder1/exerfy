// import connectDB from "../lib/connect-db";
// import Workout from "../schemas/mongoose/workout";
import { supabase } from "../utils/supabase/supabaseClient";

export default async function Page() {
  try {
    const { data: notes, error } = await supabase.from("notes").select("*");

    if (error) {
      console.error("Error fetching notes:", error);
      throw error;
    }

    return (
      <>
        <div className="flex justify-center mt-10 items-center">
          <h1 className="text-center text-2xl">Your workouts</h1>
          <button className="btn btn-sm btn-primary">Create workout</button>
        </div>
        <pre>{JSON.stringify(notes, null, 2)}</pre>
      </>
    );
  } catch (error) {
    console.error("Page error:", error);
    return <div>Error fetching data.</div>;
  }
}
