const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
    },
    content: {
      type: String,
      required: [true, "Content is required"],
    },
    userId: {
      type: String,
      ref: "User", // Reference to the User model
      required: [true, "User ID is required"],
    },
    tags: {
      type: [String],
      default: ["general"],
    },
    isPinned: {
      type: Boolean,
      default: false, // Allows pinning important notes
    },
    isArchived: {
      type: Boolean,
      default: false, // Helps in note archiving
    },
    color: {
      type: String,
      default: "#FFFFFF",
       validate: {
        validator: function (v) {
          return /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(v);
        },
        message: (props) => `${props.value} is not a valid color code!`,
       } // Optional background color for notes
    },
    isDeleted: {
        type: Boolean,
        default: false, // Soft delete feature
    },
    attachments: {
      type: [String], // Stores URLs of attached files
      default: [],
    },
  },
  {
    timestamps: true, // Adds createdAt & updatedAt automatically
  }
);

noteSchema.index({ userId:1, isDeleted:1});
const Note = mongoose.model("Note", noteSchema);
module.exports = Note;
