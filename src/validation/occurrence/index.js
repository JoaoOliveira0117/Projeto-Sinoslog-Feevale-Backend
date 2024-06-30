import { z } from 'zod';

const occurrenceSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  description: z.string().optional(),
  type: z.string().min(1, 'Type is required'),
  address: z.string().min(1, 'Address is required'),
  latitude: z.coerce
    .number()
    .min(-90, 'Latitude must be greater than -90')
    .max(90, 'Latitude must be less than 90'),
  longitude: z.coerce
    .number()
    .min(-180, 'Longitude must be greater than -180')
    .max(180, 'Longitude must be less than 180'),
  date: z.string().optional(),
  occurrenceImage: z.string().optional(),
});

export default occurrenceSchema;
