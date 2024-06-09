import { z } from 'zod';
import { Types } from 'mongoose';

const zIsUUID = () =>
  z.string().refine(
    (id) => {
      return Types.ObjectId.isValid(id);
    },
    {
      message: `invalid ObjectId`,
    }
  );

export default zIsUUID;
