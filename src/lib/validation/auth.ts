import * as v from 'valibot'; // 1.37 kB

export const loginSchema = v.object({
  email: v.pipe(
    v.string(),
    v.nonEmpty('Please enter your email.'),
    v.email('The email address is badly formatted.')
  ),
  password: v.pipe(
    v.string(),
    v.nonEmpty('Please enter your password.'),
  ),
});

export const signupSchema = v.object({
    name: v.pipe(
        v.string(),
        v.nonEmpty('Please enter your name.')
    ),
    email: v.pipe(
        v.string(),
        v.nonEmpty('Please enter your email.'),
        v.email('The email address is badly formatted.')
    ),
    password: v.pipe(
        v.string(),
        v.nonEmpty('Please enter your password.'),
        v.minLength(8, 'Your password must have 8 characters or more.')
    )
});