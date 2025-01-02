import type { CertificateTemplate } from '../types/database';

export function replacePlaceholders(
  template: CertificateTemplate,
  data: {
    recipient_name: string;
    course_title: string;
    completion_date: string;
  }
) {
  return template.html_template
    .replace('{{recipient_name}}', data.recipient_name)
    .replace('{{course_title}}', data.course_title)
    .replace('{{completion_date}}', new Date(data.completion_date).toLocaleDateString());
}