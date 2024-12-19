import bcrypt from "bcryptjs";

const saltRounds = 10;

export const hashPassword = <T extends string>(password: T) => {
  const salt = bcrypt.genSaltSync(saltRounds);
  console.log(salt);
  return bcrypt.hashSync(password, salt);
};

export const comparePassword = <T extends string>(plain: T, hashed: T) => {
  return bcrypt.compareSync(plain, hashed);
};
