const validate = ({ query, number, intolerences }) => {
  if (query && number && intolerences) {
    if (!/[^a-zA-Z]/.test(query)) {
      if (/[^a-zA-Z]/.test(number)) {
        return true;
      } else {
        alert(
          "Number Field Should Not Contain Alphabets Or Any Other Special Characters"
        );
      }
    } else {
      alert("Query Fiels Should Not Contain Numerical Values");
    }
  } else {
    alert("Fields Must Not Be Empty");
  }
};
export default validate;
