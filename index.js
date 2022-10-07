let usersDetailsDatabase = {};
function getUserDetails() {
  //userName
  let userName = prompt("Enter your username");
  if (userName == null) {
    return
  }

  function validateUserName(userName) {
    if (userName.length < 20 && userName.length > 0) {
      return true;
    } else {
      return false;
    }
  }
  while (validateUserName(userName) == false) {
    userName = prompt("Username must be less than 20 but greater than 0");
  }
  usersDetailsDatabase["Username"] = userName

  //Email
  let email = prompt("Enter your email address");
  if (email == null) {
    return
  }
  function validateEmail(email) {
    const emailCheck =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gi;
    emailCheckResult = emailCheck.test(email);
    if (emailCheckResult == true) {
      return true;
    } else {
      return false;
    }
  }
  //   console.log(validateEmail(email));
  while (validateEmail(email) == false) {
    email = prompt("Please enter a valid email address");
  }
  usersDetailsDatabase["Email"] = email;

  //Phone Number
  let phoneNumber = prompt("Enter your Phone Number");
  if (phoneNumber == null) {
    return
  }
  function validatePhoneNumber(phoneNumber) {
    if ((phoneNumber.length == 11)) {
      return true;
    } else {
      return false;
    }
  }
  //   console.log(validatePhoneNumber(phoneNumber));
  while (validatePhoneNumber(phoneNumber) == false) {
    phoneNumber = prompt("Phone number must be equal to 11 digits");
  }
  usersDetailsDatabase["Phone_Number"] = phoneNumber;

  //Password
  let password = prompt("Enter your password");
  if (password == null) {
    return
  }
  function validatePassword(password) {
    if (password.length > 5) {
      return true;
    } else {
      return false;
    }
  }
  //   console.log(validatePassword(password));
  while (validatePassword(password) == false) {
    password = prompt("Password must not be less than 6 digits");
  }
  usersDetailsDatabase["Password"] = password

  //Confirm password
  let confirmPassword = prompt("Confirm your password");
  if (confirmPassword == null) {
    return
  }
  function validateConfirmPassword(confirmPassword) {
    if ((confirmPassword == password)) {
      return true;
    } else {
      return false;
    }
  }
  //   console.log(validateConfirmPassword(confirmPassword));
  while (validateConfirmPassword(confirmPassword) == false) {
    confirmPassword = prompt("Confirm password does not match your password");
  }
  usersDetailsDatabase["ConfirmPassword"] = confirmPassword
}

function seeUsersDetails() {
alert(`Users Details\nUsername: ${usersDetailsDatabase.Username}\nEmail: ${usersDetailsDatabase.Email}\nPhone Number: ${usersDetailsDatabase.Phone_Number}`)
}

