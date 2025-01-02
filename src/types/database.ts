export interface Certificate {
  id: string;
  recipient_name: string;
  recipient_email: string;
  course_title: string;
  completion_date: string;
  template_id: string;
  created_by: string;
  created_at: string;
  pdf_url: string | null;
  status: 'pending' | 'generated' | 'sent' | 'error';
}

export interface CertificateTemplate {
  id: string;
  name: string;
  html_template: string;
  created_by: string;
  created_at: string;
  is_active: boolean;
}