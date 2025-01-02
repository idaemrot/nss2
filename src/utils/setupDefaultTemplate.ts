import { supabase } from '../lib/supabase';
import { baseTemplate } from './certificateTemplates/baseTemplate';
import { nssTemplate } from './certificateTemplates/nssTemplate';

export async function setupDefaultTemplate() {
  try {
    // Check if templates exist
    const { data: existingTemplates, error: queryError } = await supabase
      .from('certificate_templates')
      .select('name');

    if (queryError) throw queryError;

    // Create a map of existing template names
    const existingNames = new Set(existingTemplates?.map(t => t.name) || []);

    // Prepare templates to insert
    const templatesToInsert = [];
    
    if (!existingNames.has(baseTemplate.name)) {
      templatesToInsert.push(baseTemplate);
    }
    
    if (!existingNames.has(nssTemplate.name)) {
      templatesToInsert.push(nssTemplate);
    }

    // Insert new templates if needed
    if (templatesToInsert.length > 0) {
      const { error: insertError } = await supabase
        .from('certificate_templates')
        .insert(templatesToInsert);

      if (insertError) throw insertError;
    }
  } catch (error) {
    console.error('Failed to setup default templates:', error);
  }
}