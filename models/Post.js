const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const PostSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  post_title: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  name: {
    type: String
  },
  comments: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: "users"
      },
      text: {
        type: String,
        required: true
      },
      name: {
        type: String
      },
      date: {
        type: Date,
        default: Date.now
      }
    }
  ],
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Post = mongoose.model("post", PostSchema);
