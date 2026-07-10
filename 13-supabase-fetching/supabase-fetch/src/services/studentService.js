import { supabase } from "../lib/supabase";

export async function fetchStudents() {
  const result = await supabase.from("students").select("*");

  if (result.error) throw result.error;

  return result.data;
}