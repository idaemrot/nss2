import { z } from 'zod';

export const certificateSchema = z.object({
  recipient_name: z.string().min(2, 'Name must be at least 2 characters'),
  recipient_email: z.string().email('Please enter a valid email'),
  course_title: z.string().min(2, 'Course title must be at least 2 characters'),
  completion_date: z.string(),
  template_id: z.string().uuid('Please select a template'),
});

export type CertificateFormData = z.infer<typeof certificateSchema>;