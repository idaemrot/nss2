import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

export function useQuery<T>(tableName: string) {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: result, error: queryError } = await supabase
          .from(tableName)
          .select('*');
        
        if (queryError) throw queryError;
        
        setData(result as T[]);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [tableName]);

  return { data, loading, error };
}