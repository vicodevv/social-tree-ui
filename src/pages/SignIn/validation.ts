import * as Yup from 'yup';

export const authSchema = Yup.object().shape({
  email: Yup.string()
  .email('Invalid email address.')
  .max(255)
  .required('The email field is required.'),

  password: Yup.string()
  .required('The password field is required.')
  .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#&()–{}:;',?\\*~\\$\\^+=<>])(?=.{8,})/, ({ path }) => `${path} must contain at least 8 characters, one uppercase, one lowercase, one number and one special case character.`),
});
