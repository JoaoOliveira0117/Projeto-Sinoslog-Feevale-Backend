import { Schema } from 'mongoose';
import { comparePassword, hashPassword } from '../../utils/bcrypt.js';

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

userSchema.pre('save', async function (next) {
  const user = this;

  if (!user.isModified('password')) {
    return next();
  }

  user.password = await hashPassword(user.password);
  next();
});

userSchema.methods.comparePassword = function (password, cb) {
  const isMatch = comparePassword(password, this.password);
  return cb(null, isMatch);
};

const definition = {
  name: 'User',
  schema: userSchema,
};

export default definition;
