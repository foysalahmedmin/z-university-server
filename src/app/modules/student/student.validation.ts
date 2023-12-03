import { z } from 'zod';

// Custom Validators
function capitalizeValidator(value: string) {
  const correctValue =
    value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
  return value === correctValue;
}

function isValidBangladeshContactNumber(value: string) {
  const bangladeshContactNumberRegex = /^(?:\+88|01)?(?:\d{11}|\d{13})$/;
  return bangladeshContactNumberRegex.test(value);
}

// Validation Schemas
const nameValidationSchema = z.object({
  first_name: z.string().min(1).max(20).refine(capitalizeValidator, {
    message: 'First name is not in capitalize format',
  }),
  middle_name: z
    .string()
    .max(20)
    .refine(capitalizeValidator, {
      message: 'Middle name is not in capitalize format',
    })
    .optional(),
  last_name: z
    .string()
    .max(20)
    .refine(capitalizeValidator, {
      message: 'Last name is not in capitalize format',
    })
    .optional(),
});

const addressValidationSchema = z.object({
  present: z.string(),
  permanent: z.string(),
});

const guardianValidationSchema = z.object({
  name: z.string(),
  relation: z.string(),
  occupation: z.string(),
  contact_number: z.string().refine(isValidBangladeshContactNumber, {
    message: 'Contact number is not valid',
  }),
  address: addressValidationSchema.optional(),
});

const studentValidationSchema = z.object({
  id: z.string(),
  name: nameValidationSchema,
  profile_image: z.string().url().optional(),
  avatar: z.string().url().optional(),
  gender: z.enum(['male', 'female', 'others']).optional(),
  date_of_birth: z.string().optional(),
  email: z.string().email(),
  contact_number: z.string().refine(isValidBangladeshContactNumber, {
    message: 'Contact number is not valid',
  }),
  emergency_contact_number: z.string().refine(isValidBangladeshContactNumber, {
    message: 'Emergency contact number is not valid',
  }),
  blood_group: z
    .enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'])
    .optional(),
  address: addressValidationSchema,
  guardian: z.array(guardianValidationSchema),
  local_guardian: guardianValidationSchema,
  is_active: z.boolean().default(true),
});

export default studentValidationSchema;