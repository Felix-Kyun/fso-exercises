import mongoose from "mongoose";
import { SALT_ROUNDS } from "../utils/config.mjs";
import bcrypt from "bcrypt";

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    minLength: 3,
  },
  name: {
    type: String,
    required: true,
    minLength: 3,
  },
  password: {
    type: String,
    required: true,
  },
  blogs: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Blog",
    },
  ],
});

// pre hook to hash password
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  const salt = await bcrypt.genSalt(SALT_ROUNDS);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

userSchema.set("toJSON", {
  transform: (_, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject.password;
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

export const User = mongoose.model("User", userSchema, "Users");
