//import React from "react";

import { useState } from "react";

interface item {
  id: number;
  text: string;
  completed: boolean;
}

// create props to recieve information from DaysBar component
interface Prop {
  day: string; //day of workout log
  array: item[][]; //stores all workouts
  updateArray: (newArray: item[][]) => void; //callback function
}

export const WorkOutLog = ({ day, array, updateArray }: Prop) => {
  const [workouts, setWorkout] = useState<item[]>([]); //initialize workouts state variable

  // check if array.length is 0 because trying to push to an empty array into an
  // empty array gave an error
  if (day === "Monday" && array.length > 0) {
    //prevents issue where the same workout would be added multiple times per click

    //grab id values in workouts array
    const grabIds = new Set(workouts.map((workout) => workout.id));
    //grab all elements whose id is not in grabIds (or workouts array)
    const nonRepeatingElements = array[0].filter(
      (element) => !grabIds.has(element.id)
    );

    //populate workouts array with workouts for the day selected
    workouts.push(...nonRepeatingElements);
  } else if (day === "Tuesday" && array.length > 0) {
    //grab id values in workouts array
    const grabIds = new Set(workouts.map((workout) => workout.id));
    //grab all elements whose id is not in grabIds (or workouts array)
    const nonRepeatingElements = array[1].filter(
      (element) => !grabIds.has(element.id)
    );

    workouts.push(...nonRepeatingElements);
  } else if (day === "Wednesday" && array.length > 0) {
    //grab id values in workouts array
    const grabIds = new Set(workouts.map((workout) => workout.id));
    //grab all elements whose id is not in grabIds (or workouts array)
    const nonRepeatingElements = array[2].filter(
      (element) => !grabIds.has(element.id)
    );

    workouts.push(...nonRepeatingElements);
  } else if (day === "Thursday" && array.length > 0) {
    //grab id values in workouts array
    const grabIds = new Set(workouts.map((workout) => workout.id));
    //grab all elements whose id is not in grabIds (or workouts array)
    const nonRepeatingElements = array[3].filter(
      (element) => !grabIds.has(element.id)
    );

    workouts.push(...nonRepeatingElements);
  } else if (day === "Friday" && array.length > 0) {
    //grab id values in workouts array
    const grabIds = new Set(workouts.map((workout) => workout.id));
    //grab all elements whose id is not in grabIds (or workouts array)
    const nonRepeatingElements = array[4].filter(
      (element) => !grabIds.has(element.id)
    );

    workouts.push(...nonRepeatingElements);
  } else if (day === "Saturday" && array.length > 0) {
    //grab id values in workouts array
    const grabIds = new Set(workouts.map((workout) => workout.id));
    //grab all elements whose id is not in grabIds (or workouts array)
    const nonRepeatingElements = array[5].filter(
      (element) => !grabIds.has(element.id)
    );

    workouts.push(...nonRepeatingElements);
  } else if (day === "Sunday" && array.length > 0) {
    //grab id values in workouts array
    const grabIds = new Set(workouts.map((workout) => workout.id));
    //grab all elements whose id is not in grabIds (or workouts array)
    const nonRepeatingElements = array[6].filter(
      (element) => !grabIds.has(element.id)
    );

    workouts.push(...nonRepeatingElements);
  }

  //input state variable
  const [input, setInput] = useState<string>("");

  //add button creates new workout item
  const handleClick = () => {
    const newWorkout: item = {
      id: Date.now(),
      text: input,
      completed: false,
    };

    if (day === "Monday") {
      //create copy of array from DaysBar.tsx
      const newArray = [...array];
      //push to inner array for that day
      newArray[0].push(newWorkout);
      //call back function to update items[][] array in DaysBar
      updateArray(newArray);
    } else if (day === "Tuesday") {
      const newArray = [...array];
      newArray[1].push(newWorkout);
      updateArray(newArray);
    } else if (day === "Wednesday") {
      const newArray = [...array];
      newArray[2].push(newWorkout);
      updateArray(newArray);
    } else if (day === "Thursday") {
      const newArray = [...array];
      newArray[3].push(newWorkout);
      updateArray(newArray);
    } else if (day === "Friday") {
      const newArray = [...array];
      newArray[4].push(newWorkout);
      updateArray(newArray);
    } else if (day === "Saturday") {
      const newArray = [...array];
      newArray[5].push(newWorkout);
      updateArray(newArray);
    } else if (day === "Sunday") {
      const newArray = [...array];
      newArray[6].push(newWorkout);
      updateArray(newArray);
    }

    //update workouts state variable
    setWorkout([...workouts, newWorkout]);
  };

  //used for strike through on workout that is completed
  const handleToggle = (id: number) => {
    setWorkout(
      workouts.map((workout) => {
        //if workout id passed in is === to curr workout we are processing
        if (workout.id === id) {
          return { ...workout, completed: !workout.completed };
        }
        return workout;
      })
    );
  };
  return (
    <div className="main-container">
      <h1 style={{color: "#7ac4db", fontWeight: "bold"}}>Workout log for {day}</h1>
      <ul>
        {/* List all current workouts for the day selected */}
        {workouts.map((workout) => (
          <div
            key={workout.id}
            className="li"
            onClick={() => handleToggle(workout.id)}
            style={{
              textDecoration: workout.completed ? "line-through" : "none",
            }}
          >
            {workout.text}
          </div>
        ))}
      </ul>
      {/*Receive input from user, pass event value to setInput function*/}
      <input
        className="input"
        type="text"
        placeholder="Add workouts w/ sets, reps, miles, etc."
        onChange={(e) => setInput(e.currentTarget.value)}
      />
      {/* Add button */}
      <button onClick={handleClick} className="button">
        Add
      </button>
    </div>
  );
};
