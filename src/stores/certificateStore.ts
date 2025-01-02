import { create } from 'zustand';
import type { CertificateTemplate } from '../types/database';

interface CertificateFormData {
  recipient_name: string;
  course_title: string;
  completion_date: string;
}

interface CertificateStore {
  template: CertificateTemplate | null;
  formData: CertificateFormData | null;
  setTemplate: (template: CertificateTemplate) => void;
  setFormData: (data: CertificateFormData) => void;
}

export const useCertificateStore = create<CertificateStore>((set) => ({
  template: null,
  formData: null,
  setTemplate: (template) => set({ template }),
  setFormData: (formData) => set({ formData }),
}));