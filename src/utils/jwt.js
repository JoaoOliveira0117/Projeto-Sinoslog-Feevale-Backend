import jwt from 'jsonwebtoken';

const EXPIRES_IN = 60 * 60 * 24 * 3; // 72 hours

export const generateToken = (userId) =>
  jwt.sign(
    {
      data: {
        userId,
      },
    },
    process.env.JWT_SECRET,
    { expiresIn: EXPIRES_IN }
  );

export const verifyToken = (token) => jwt.verify(token, process.env.JWT_SECRET);
