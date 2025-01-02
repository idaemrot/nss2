import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import toast from 'react-hot-toast';
import { supabase } from '../../lib/supabase';
import { templateSchema, type TemplateFormData } from './types';
import { FormField } from '../forms/FormField';

interface TemplateFormProps {
  onSuccess: () => void;
}

export function TemplateForm({ onSuccess }: TemplateFormProps) {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<TemplateFormData>({
    resolver: zodResolver(templateSchema),
  });

  const onSubmit = async (data: TemplateFormData) => {
    try {
      const { error } = await supabase
        .from('certificate_templates')
        .insert([{
          name: data.name,
          html_template: data.html_template,
          is_active: true,
        }]);

      if (error) throw error;
      
      toast.success('Template created successfully');
      reset();
      onSuccess();
    } catch (error) {
      console.error('Template creation error:', error);
      toast.error('Failed to create template');
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
      <h2 className="text-lg font-medium text-gray-900 mb-6">Create New Template</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          id="name"
          label="Template Name"
          register={register}
          error={errors.name}
        />

        <div>
          <label className="block text-sm font-medium text-gray-700">HTML Template</label>
          <p className="text-sm text-gray-500 mb-2">
            Available placeholders: {{recipient_name}}, {{course_title}}, {{completion_date}}
          </p>
          <textarea
            {...register('html_template')}
            rows={15}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 font-mono"
          />
          {errors.html_template && (
            <p className="mt-1 text-sm text-red-600">{errors.html_template.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
        >
          {isSubmitting ? 'Creating...' : 'Create Template'}
        </button>
      </form>
    </div>
  );
}