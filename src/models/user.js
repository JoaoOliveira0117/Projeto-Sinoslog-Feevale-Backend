import mongoose from 'mongoose';
import definition from './schemas/user.js';

const User = mongoose.model(definition.name, definition.schema);

export default User;
