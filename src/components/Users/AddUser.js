import { useState } from "react";
import Wrapper from "../Helpers/Wrapper";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import styles from "./AddUser.module.css";

const AddUser = (props) => {
  const [username, setUserName] = useState("");
  const [userage, setUserAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    if (username.trim().length === 0 || userage.trim().length === 0) {
      setError({
        title: "Invalid input.",
        message: "Please enter a valid name and age (non empty values).",
      });
      return;
    }
    if (+userage < 1) {
      setError({
        title: "Invalid age.",
        message: "Please enter a valid age (> 0).",
      });
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

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          onConfirm={errorHandler}
          title={error.title}
          message={error.message}
        />
      )}
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
    </Wrapper>
  );
};

export default AddUser;
