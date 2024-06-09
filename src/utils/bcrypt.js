import bcrypt from 'bcrypt';

const SALT_ROUNDS = 10;

export const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(SALT_ROUNDS);
  const hash = await bcrypt.hash(password, salt);

  return hash;
};

export const comparePassword = async (password, hash) => {
  const result = await bcrypt.compare(password, hash);

  return result;
};
