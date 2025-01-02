import React from 'react';
import { UseFormRegister, FieldErrors } from 'react-hook-form';
import { FormField } from '../forms/FormField';
import type { CertificateTemplate } from '../../types/database';
import type { CertificateFormData } from './types';

interface CertificateFormFieldsProps {
  templates: CertificateTemplate[];
  register: UseFormRegister<CertificateFormData>;
  errors: FieldErrors<CertificateFormData>;
}

export function CertificateFormFields({ templates, register, errors }: CertificateFormFieldsProps) {
  return (
    <div className="space-y-4">
      <FormField
        id="template_id"
        label="Template"
        type="select"
        register={register}
        error={errors.template_id}
        options={templates.map(t => ({ value: t.id, label: t.name }))}
      />
      <FormField
        id="recipient_name"
        label="Recipient Name"
        register={register}
        error={errors.recipient_name}
      />
      <FormField
        id="recipient_email"
        label="Recipient Email"
        type="email"
        register={register}
        error={errors.recipient_email}
      />
      <FormField
        id="course_title"
        label="Event Title"
        register={register}
        error={errors.course_title}
      />
      <FormField
        id="completion_date"
        label="Issue Date"
        type="date"
        register={register}
        error={errors.completion_date}
      />
    </div>
  );
}