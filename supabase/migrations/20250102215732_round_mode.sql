/*
  # Add NSS Special Camp Certificate Template
  
  1. Changes
    - Insert NSS Special Camp certificate template into certificate_templates table
*/

DO $$ 
BEGIN
  INSERT INTO certificate_templates (name, html_template, is_active)
  SELECT 
    'NSS Special Camp Certificate',
    '<div style="width: 100%;height: 100%;padding: 3rem;background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);border: double 6px #1a4d2e;display: flex;flex-direction: column;align-items: center;justify-content: center;text-align: center;font-family: ''Crimson Text'', serif;box-sizing: border-box;position: relative;overflow: hidden;"><div style="position: absolute;top: 20px;left: 20px;width: 80px;height: 80px;background-image: url(''https://images.unsplash.com/photo-1585829365295-ab7cd400c167?auto=format&fit=crop&w=100&q=80'');background-size: contain;background-repeat: no-repeat;opacity: 0.2;"></div><div style="max-width: 90%; width: 100%; position: relative;"><h1 style="font-size: min(2.5rem, 5vw);color: #1a4d2e;margin-bottom: 1rem;font-family: ''Cinzel'', serif;text-transform: uppercase;letter-spacing: 0.1em;font-weight: 600;">Certificate of Appreciation</h1><div style="width: 100px;height: 2px;background: #1a4d2e;margin: 1rem auto;"></div><p style="font-size: min(1.25rem, 3vw);color: #2d3748;margin: 1.5rem 0;">This is to certify that</p><h2 style="font-size: min(2.25rem, 4.5vw);color: #1a4d2e;margin: 1rem 0;font-family: ''Dancing Script'', cursive;font-weight: 600;">{{recipient_name}}</h2><p style="font-size: min(1.25rem, 3vw);color: #2d3748;margin: 1.5rem 0;line-height: 1.6;max-width: 80%;margin-left: auto;margin-right: auto;">has actively participated and made valuable contributions during the<br/><strong style="color: #1a4d2e;">{{course_title}}</strong></p><p style="font-size: min(1.125rem, 2.75vw);color: #2d3748;margin: 1.5rem 0;">Issued on {{completion_date}}</p><div style="display: flex;justify-content: space-around;align-items: flex-end;margin-top: 3rem;width: 100%;"><div style="text-align: center; flex: 1; max-width: 200px;"><div style="width: 150px;height: 60px;margin: 0 auto 0.5rem;"></div><div style="border-top: 2px solid #1a4d2e; padding-top: 0.5rem;"><p style="font-size: min(1rem, 2.5vw);color: #1a4d2e;margin: 0;font-family: ''Cinzel'', serif;font-weight: 600;">Program Officer</p></div></div><div style="width: 120px;height: 120px;margin: 0 2rem;opacity: 0.8;"></div><div style="text-align: center; flex: 1; max-width: 200px;"><div style="width: 150px;height: 60px;margin: 0 auto 0.5rem;"></div><div style="border-top: 2px solid #1a4d2e; padding-top: 0.5rem;"><p style="font-size: min(1rem, 2.5vw);color: #1a4d2e;margin: 0;font-family: ''Cinzel'', serif;font-weight: 600;">Principal</p></div></div></div></div></div>',
    true
  WHERE NOT EXISTS (
    SELECT 1 FROM certificate_templates 
    WHERE name = 'NSS Special Camp Certificate'
  );
END $$;