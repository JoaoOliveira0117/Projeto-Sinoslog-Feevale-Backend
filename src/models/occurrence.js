import mongoose from 'mongoose';
import definition from './schemas/occurrence.js';

const Occurrence = mongoose.model(definition.name, definition.schema);

export default Occurrence;
