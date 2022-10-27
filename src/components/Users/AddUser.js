import { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import styles from "./AddUser.module.css";

const AddUser = (props) => {
  const [username, setUserName] = useState("");
  const [userage, setUserAge] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();
    if (username.trim().length === 0 || userage.trim().length === 0) {
      return;
    }
    if (+userage < 1) {
      return;
    }
    props.onAddUser(username, userage);
    setUserName("");
    setUserAge("");
  };

  const userNameChangeHandler = (event) => {
    setUserName(event.target.value);
  };

  const userAgeChangeHandler = (event) => {
    setUserAge(event.target.value);
  };

  return (
    <Card className={styles.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          value={username}
          type="text"
          id="username"
          onChange={userNameChangeHandler}
        />
        <label htmlFor="age">Age (Years)</label>
        <input
          value={userage}
          type="number"
          id="age"
          onChange={userAgeChangeHandler}
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
