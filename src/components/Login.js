import React, { useState, useEffect } from "react";

// Styles
import styles from "../styles/signup-login.module.scss";

//? Validation
import validation from "./validation";

//? Toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import notify from "./toast";
import { Link } from "react-router-dom";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [focus, setFocus] = useState({});

  const focusHandler = (event) => {
    setFocus({ ...focus, [event.target.name]: true });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    if (!Object.keys(errors).length) {
      notify("success", "You Logined Successfuly.");
    } else {
      setFocus({
        email: true,
        password: true,
      });
      notify("error", "Complete Both Fields Please.");
    }
  };
  useEffect(() => {
    setErrors(validation(data));
  }, [data]);
  const changeHandler = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  return (
    <div className={styles.container}>
      <form onSubmit={submitHandler} className={styles.formContainer}>
        <h2 className={styles.header}>Login</h2>

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

        <div className={styles.formButtons}>
          <Link to="/signup">SignUp</Link>
          <button type="submit">Login</button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;
