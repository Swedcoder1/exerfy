import { supabase } from "../utils/supabase/supabaseClient";
import { LuDumbbell } from "react-icons/lu";
import Link from "next/link";

export default async function Page() {
  try {
    const { data: workouts, error } = await supabase
      .from("workouts")
      .select("*");

    if (error) {
      console.error("Error fetching notes:", error);
      throw error;
    }

    return (
      <>
        <div className=" text-center mt-10">
          <h1 className="text-2xl flex-grow">Your workouts</h1>
          <Link
            href="/workouts/createworkout"
            className="btn btn-sm btn-primary mt-2"
          >
            Create workout
          </Link>
        </div>

        <div>
          {workouts.length == 0 ? (
            <div className="flex flex-col justify-center items-center h-screen">
              <LuDumbbell className="text-5xl mb-4" />
              <p className="text-center">
                Oops! Looks like you don't have any workouts yet.
              </p>
            </div>
          ) : (
            <div>
              {workouts.map((workout) => (
                <div>
                  <p>{workout.title}</p>
                </div>
              ))}
            </div>
          )}
        </div>
        {/* <pre>{JSON.stringify(workouts, null, 2)}</pre> */}
      </>
    );
  } catch (error) {
    console.error("Page error:", error);
    return <div>Error fetching data.</div>;
  }
}
