function ValidateEmail(mail) {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail);
}

const validate = ({ name, email, password }) => {
  if (name && email && password) {
    if (!/[^a-zA-Z]/.test(name)) {
      if (ValidateEmail(email)) {
        if (password.length >= 8) {
          return true;
        } else {
          alert("Password must contains atleast 8 characters");
        }
      } else {
        alert("Enter Valid Email Address");
      }
    } else {
      alert("Your name should not contains numerical values");
    }
  } else {
    alert("Form Values Must Not Be Empty");
  }
};

export default validate;
