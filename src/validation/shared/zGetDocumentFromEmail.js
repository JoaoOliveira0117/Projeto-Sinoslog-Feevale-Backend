import { z } from 'zod';
import { Types } from 'mongoose';
Types.ObjectId;

const zGetDocumentFromEmail = (Service) =>
  z
    .string()
    .email('Invalid email address')
    .transform(async (email, ctx) => {
      const document = await new Service().getByProperty({ email });
      if (!document) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: `${new Service().model.modelName} not found`,
        });

        return z.NEVER;
      }

      return email;
    });

export default zGetDocumentFromEmail;
