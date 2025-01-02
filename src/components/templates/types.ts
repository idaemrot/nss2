import { z } from 'zod';

export const templateSchema = z.object({
  name: z.string().min(3, 'Name must be at least 3 characters'),
  html_template: z.string().min(10, 'Template must be at least 10 characters'),
});

export type TemplateFormData = z.infer<typeof templateSchema>;

export interface Template {
  id: string;
  name: string;
  html_template: string;
  created_at: string;
  is_active: boolean;
}