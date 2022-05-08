const validation = (data, type) => {
  const errors = {};
  const regexMail =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!data.email) {
    errors.email = "Please enter your email!";
  } else if (!regexMail.test(data.email)) {
    errors.email = "Please enter a valid email!";
  } else {
    delete errors.email;
  }

  if (!data.password) {
    errors.password = "Enter a password!";
  } else if (data.password.length < 6) {
    errors.password = "6 keys atleast!";
  } else {
    delete errors.password;
  }

  if (type === "SignUp") {
    if (!data.userName.trim()) {
      errors.userName = "Please enter a name!";
    } else if (data.userName.length < 3) {
      errors.userName = "Please enter a Real name!";
    } else {
      delete errors.userName;
    }

    if (!data.confirmPassword) {
      errors.confirmPassword = "Enter confirm password!";
    } else if (data.confirmPassword !== data.password) {
      errors.confirmPassword = "Enter correctly your confirm password";
    } else {
      delete errors.confirmPassword;
    }

    if (data.isChecked) {
      delete errors.isChecked;
    } else {
      errors.isChecked = "please confirm our privacy policy";
    }
  }

  return errors;
};

export default validation;
