import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import type { CertificateTemplate } from '../types/database';

export function useCertificateTemplates() {
  const [templates, setTemplates] = useState<CertificateTemplate[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchTemplates = async () => {
      try {
        const { data, error: queryError } = await supabase
          .from('certificate_templates')
          .select('*')
          .eq('is_active', true);
        
        if (queryError) throw queryError;
        
        setTemplates(data || []);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchTemplates();
  }, []);

  return { templates, loading, error };
}