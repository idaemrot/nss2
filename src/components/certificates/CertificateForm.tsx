import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import toast from 'react-hot-toast';
import { supabase } from '../../lib/supabase';
import type { CertificateTemplate } from '../../types/database';
import { CertificateFormFields } from './CertificateFormFields';
import { certificateSchema, type CertificateFormData } from './types';
import { generatePDF } from '../../utils/pdf';

interface CertificateFormProps {
  templates: CertificateTemplate[];
  onTemplateSelect: (template: CertificateTemplate | null) => void;
  onFormChange: (data: Omit<CertificateFormData, 'template_id' | 'recipient_email'> | null) => void;
  onSuccess: () => void;
}

export function CertificateForm({ 
  templates, 
  onTemplateSelect, 
  onFormChange, 
  onSuccess 
}: CertificateFormProps) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<CertificateFormData>({
    resolver: zodResolver(certificateSchema),
  });

  React.useEffect(() => {
    const subscription = watch((value) => {
      const template = templates.find(t => t.id === value.template_id);
      onTemplateSelect(template || null);
      
      if (value.recipient_name && value.course_title && value.completion_date) {
        onFormChange({
          recipient_name: value.recipient_name,
          course_title: value.course_title,
          completion_date: value.completion_date,
        });
      } else {
        onFormChange(null);
      }
    });
    return () => subscription.unsubscribe();
  }, [watch, templates, onTemplateSelect, onFormChange]);

  const onSubmit = async (data: CertificateFormData) => {
    try {
      const pdfUrl = await generatePDF(data);
      
      const { error } = await supabase.from('certificates').insert({
        ...data,
        pdf_url: pdfUrl,
        status: 'generated',
      });

      if (error) throw error;

      toast.success('Certificate created successfully');
      onSuccess();
    } catch (error) {
      toast.error('Failed to create certificate');
      console.error('Certificate creation error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <CertificateFormFields
        templates={templates}
        register={register}
        errors={errors}
      />
      
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
      >
        {isSubmitting ? 'Creating...' : 'Create Certificate'}
      </button>
    </form>
  );
}