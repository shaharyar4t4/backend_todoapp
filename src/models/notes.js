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
      type: mongoose.Schema.Types.ObjectId,
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
      default: "#FFFFFF", // Optional background color for notes
    },
    attachments: {
      type: [String], // Stores URLs of attached files
      default: [],
    },
    collaborators: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User", // Allow multiple users to access/edit the note
      },
    ],
    status: {
      type: String,
      enum: ["active", "completed", "deleted"],
      default: "active",
    },
  },
  {
    timestamps: true, // Adds createdAt & updatedAt automatically
  }
);

module.exports = mongoose.model("Note", noteSchema);
