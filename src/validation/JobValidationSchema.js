import * as Yup from 'yup';

export const jobValidationSchema = Yup.object({
  type: Yup.string().required('Job type is required'), // Beispiel für ein Pflichtfeld
  title: Yup.string().required('Job title is required'),
  description: Yup.string().required('Job description is required'),
  salary: Yup.string().required('Salary is required'),
  location: Yup.string().required('Location is required'),
  company: Yup.object({
    name: Yup.string().required('Company name is required'),
    description: Yup.string().required('Company description is required'),
    contactEmail: Yup.string().email('Invalid email address').required('Contact email is required'),
    contactPhone: Yup.string()
      .matches(
        /^(\+\d{1,3}[- ]?)?\d{10}$/,
        'Invalid phone number format (e.g. +1234567890 or 1234567890)'
      )
      .required('Contact phone is required'),
  }),
});
