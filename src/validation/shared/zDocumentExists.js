import { z } from 'zod';
import { Types } from 'mongoose';
Types.ObjectId;

const zDocumentExists = (Service) =>
  z.string().transform(async (id, ctx) => {
    if (!Types.ObjectId.isValid(id)) {
      ctx.addIssue({
        code: z.ZodIssueCode.invalid_string,
        message: 'Invalid ObjectId',
      });

      return z.NEVER;
    }

    const document = await new Service().getById(id);
    if (!document) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: `${new Service().model.modelName} not found`,
      });

      return z.NEVER;
    }

    return id;
  });

export default zDocumentExists;
