import { useEffect, useState, useCallback } from 'react';
import { supabase } from '../lib/supabase';
import type { Template } from '../components/templates/types';

export function useTemplates() {
  const [templates, setTemplates] = useState<Template[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchTemplates = useCallback(async () => {
    try {
      setLoading(true);
      const { data, error: queryError } = await supabase
        .from('certificate_templates')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (queryError) throw queryError;
      setTemplates(data || []);
    } catch (err) {
      setError(err as Error);
      console.error('Failed to fetch templates:', err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchTemplates();
  }, [fetchTemplates]);

  return { 
    templates, 
    loading, 
    error,
    refetch: fetchTemplates
  };
}