import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://zwzqcwaawoyovvxkwidl.supabase.co";

//   Constants.expoConfig?.extra?.supabase?.url ??
//   process.env.EXPO_PUBLIC_SUPABASE_URL;

const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp3enFjd2Fhd295b3Z2eGt3aWRsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY3NDQ5NjYsImV4cCI6MjA2MjMyMDk2Nn0.S_Ut1zgWe1wJShoZibN7J6Y1qFZgcyFwAkChTmDFjUY";

//   Constants.expoConfig?.extra?.supabase?.anonKey ??
//   process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
