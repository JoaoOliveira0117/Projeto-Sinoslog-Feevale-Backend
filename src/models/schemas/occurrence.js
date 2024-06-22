import { Schema } from 'mongoose';

const occurrenceSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  latitude: {
    type: Number,
    required: true,
  },
  longitude: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  description: {
    type: String,
  },
  /**
   * image: {
   *  type: String,
   *  required: true,
   * }
   */
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const definition = {
  name: 'Occurrence',
  schema: occurrenceSchema,
};

export default definition;
