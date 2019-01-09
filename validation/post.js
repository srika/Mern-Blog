const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validatePostInput(data) {
  let errors = {};

  data.post_title = !isEmpty(data.post_title) ? data.post_title : "";
  data.text = !isEmpty(data.text) ? data.text : "";

  if (!Validator.isLength(data.post_title, { min: 3, max: 50 })) {
    errors.post_title = "Post title must be between 3 and 50 characters";
  }

  if (Validator.isEmpty(data.post_title)) {
    errors.post_title = "Post title field is required";
  }

  if (!Validator.isLength(data.text, { min: 10, max: 600 })) {
    errors.text = "Post must be between 10 and 600 characters";
  }

  if (Validator.isEmpty(data.text)) {
    errors.text = "Text field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
