import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  // SELECTORS FOR STATE
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  // HANDLERS
  const addUserHandler = (e) => {
    //prevents reload
    e.preventDefault();

    // makes sure of valid input
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      return;
    }
    // checks if entered age is valid
    if (+enteredAge < 1) {
      return;
    }

    console.log(enteredUsername, enteredAge);
    // sets input field back to empty
    setEnteredUsername("");
    setEnteredAge("");
  };

  // sets username value to inputed
  const usernameChangeHandler = (e) => {
    setEnteredUsername(e.target.value);
  };

  // sets age value to inputed
  const ageChangeHandler = (e) => {
    setEnteredAge(e.target.value);
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          onChange={usernameChangeHandler}
          value={enteredUsername}
        />
        <label htmlFor="age">Age (Years)</label>
        <input
          id="age"
          type="number"
          onChange={ageChangeHandler}
          value={enteredAge}
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
