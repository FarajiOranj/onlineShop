import React, { useState, useEffect } from "react";
import { useTitle } from "./helpers/helper";
import { Link } from "react-router-dom";
import validation from "./validation";

// Styles
import styles from "../styles/signup-login.module.scss";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import notify from "./toast";

const Signup = () => {
  useTitle("Signup Section");
  const [data, setData] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
    isChecked: false,
  });
  const [errors, setErrors] = useState({});
  const [focus, setFocus] = useState({});

  const focusHandler = (event) => {
    setFocus({ ...focus, [event.target.name]: true });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    if (!Object.keys(errors).length) {
      notify("success", "You Signedup Successfuly.");
    } else {
      setFocus({
        userName: true,
        email: true,
        password: true,
        confirmPassword: true,
        isChecked: true,
      });
      notify("error", "Complete All Fields Please.");
    }
  };
  useEffect(() => {
    setErrors(validation(data, "SignUp"));
  }, [data]);
  const changeHandler = (event) => {
    if (event.target.name === "isChecked") {
      setData({ ...data, [event.target.name]: event.target.checked });
    } else {
      setData({ ...data, [event.target.name]: event.target.value });
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={submitHandler} className={styles.formContainer}>
        <h2 className={styles.header}>SignUp</h2>
        <div className={styles.formFields}>
          <label>Username:</label>
          <input
            className={
              errors.userName && focus.userName
                ? styles.unCompleted
                : styles.formInput
            }
            name="userName"
            value={data.userName}
            onChange={changeHandler}
            onFocus={focusHandler}
            autoComplete="off"
          />
          {errors.userName && focus.userName && <span>{errors.userName}</span>}
        </div>
        <div className={styles.formFields}>
          <label>Email:</label>
          <input
            className={
              errors.email && focus.email
                ? styles.unCompleted
                : styles.formInput
            }
            name="email"
            value={data.email}
            onChange={changeHandler}
            onFocus={focusHandler}
            type="email"
            autoComplete="off"
          />
          {errors.email && focus.email && <span>{errors.email}</span>}
        </div>
        <div className={styles.formFields}>
          <label>Password:</label>
          <input
            className={
              errors.password && focus.password
                ? styles.unCompleted
                : styles.formInput
            }
            name="password"
            value={data.password}
            onChange={changeHandler}
            onFocus={focusHandler}
            type="password"
            autoComplete="off"
          />
          {errors.password && focus.password && <span>{errors.password}</span>}
        </div>
        <div className={styles.formFields}>
          <label>Confirm Password:</label>
          <input
            className={
              errors.confirmPassword && focus.confirmPassword
                ? styles.unCompleted
                : styles.formInput
            }
            name="confirmPassword"
            value={data.confirmPassword}
            onChange={changeHandler}
            onFocus={focusHandler}
            type="password"
            autoComplete="off"
          />
          {errors.confirmPassword && focus.confirmPassword && (
            <span>{errors.confirmPassword}</span>
          )}
        </div>
        <div className={styles.formFields}>
          <div className={styles.checkedBox}>
            <label>I Confirm your privacy policy:</label>
            <input
              className={
                errors.isChecked && focus.isChecked
                  ? styles.unCompleted
                  : styles.formInput
              }
              name="isChecked"
              value={data.isChecked}
              onChange={changeHandler}
              onFocus={focusHandler}
              type="checkbox"
            />
          </div>
          {errors.isChecked && focus.isChecked && (
            <span>{errors.isChecked}</span>
          )}
        </div>
        <div className={styles.formButtons}>
          <Link to="/login">Login</Link>
          <button type="submit">SignUp</button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Signup;
