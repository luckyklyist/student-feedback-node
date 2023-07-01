import { z } from 'zod';

const signUpSchema = z.object({
  username: z.string().min(4, { message: "User should have a minimum of 4 characters" }),
  email: z.string().email({ message: "Not a valid email" }),
  userType: z.string(),
  password: z.string().min(8, { message: "Password should have a minimum of 8 characters" }),
});

export default signUpSchema;
