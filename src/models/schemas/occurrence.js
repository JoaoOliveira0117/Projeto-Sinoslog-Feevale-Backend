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
    default: new Date(),
  },
  description: {
    type: String,
  },
  imagePath: {
    type: String,
  },
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: 'User',
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

occurrenceSchema.virtual('imageUrl').get(function () {
  if (this.imagePath) {
    const imagePath = `occurrences/${this._id}/preview`;
    return imagePath;
  }

  return null;
});

occurrenceSchema.set('toJSON', { getters: true });

const definition = {
  name: 'Occurrence',
  schema: occurrenceSchema,
};

export default definition;
