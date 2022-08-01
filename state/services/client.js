import { createClient } from '@supabase/supabase-js';

export const SUPABASE_URL = 'https://lrbzhpldjrxqkjskcizc.supabase.co';

const SUPABASE_KEY =
  // eslint-disable-next-line max-len
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxyYnpocGxkanJ4cWtqc2tjaXpjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDc1NTIwMDMsImV4cCI6MTk2MzEyODAwM30.idE1m2ehmckSIic7mOSaXFl1McMzBdIrhU_Vrsr6UyI';

export const client = createClient(SUPABASE_URL, SUPABASE_KEY);
