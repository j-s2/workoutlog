import "./Days.css";
import { useState } from "react";
import { WorkOutLog } from "./WorkoutLog";
import "./index.css";

interface item {
  id: number;
  text: string;
  completed: boolean;
}

export const DaysBar = () => {
  // initialize item[][] array by creating a separate empty array for each element
  const initializeItems: item[][] = Array(7)
    .fill([])
    .map(() => []);
  // create item state variable
  const [itemsArray, setItemsArray] = useState<item[][]>(initializeItems);

  const updateItemsArray = (newArray: item[][]) => {
    setItemsArray(newArray);
  };

  /* State variable for the workout log day */
  const [workoutLogDay, setWorkoutLogDay] = useState<string>("");

  /* Set workoutLogDay variable for conditionals */
  const handleButtonClick = (day: string) => {
    setWorkoutLogDay(day);
  };

  return (
    <div>
      <div className="bar">
        <button
          className="day button2"
          onClick={() => handleButtonClick("Monday")}
        >
          Monday
        </button>
        <button
          className="day button2"
          onClick={() => handleButtonClick("Tuesday")}
        >
          Tuesday
        </button>
        <button
          className="day button2"
          onClick={() => handleButtonClick("Wednesday")}
        >
          Wednesday
        </button>
        <button
          className="day button2"
          onClick={() => handleButtonClick("Thursday")}
        >
          Thursday
        </button>
        <button
          className="day button2"
          onClick={() => handleButtonClick("Friday")}
        >
          Friday
        </button>
        <button
          className="day button2"
          onClick={() => handleButtonClick("Saturday")}
        >
          Saturday
        </button>
        <button
          className="day button2"
          onClick={() => handleButtonClick("Sunday")}
        >
          Sunday
        </button>
      </div>
      {/*If workoutLogDay is set to <day>, render WorkOutLog component for that day, pass in item[][] array and call back function as props*/}
      {workoutLogDay === "Monday" && (
        <WorkOutLog
          day="Monday"
          array={itemsArray}
          updateArray={updateItemsArray}
        />
      )}
      {workoutLogDay === "Tuesday" && (
        <WorkOutLog
          day="Tuesday"
          array={itemsArray}
          updateArray={updateItemsArray}
        />
      )}
      {workoutLogDay === "Wednesday" && (
        <WorkOutLog
          day="Wednesday"
          array={itemsArray}
          updateArray={updateItemsArray}
        />
      )}
      {workoutLogDay === "Thursday" && (
        <WorkOutLog
          day="Thursday"
          array={itemsArray}
          updateArray={updateItemsArray}
        />
      )}
      {workoutLogDay === "Friday" && (
        <WorkOutLog
          day="Friday"
          array={itemsArray}
          updateArray={updateItemsArray}
        />
      )}
      {workoutLogDay === "Saturday" && (
        <WorkOutLog
          day="Saturday"
          array={itemsArray}
          updateArray={updateItemsArray}
        />
      )}
      {workoutLogDay === "Sunday" && (
        <WorkOutLog
          day="Sunday"
          array={itemsArray}
          updateArray={updateItemsArray}
        />
      )}
    </div>
  );
};
