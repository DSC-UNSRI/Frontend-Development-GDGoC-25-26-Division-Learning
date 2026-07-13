import { supabase } from "../lib/supabase";

export async function fetchStudents() {
  const result = await supabase.from("students").select("*");
  if (result.error) throw result.error;
  return result.data;
}

export async function createStudent(newStudent) {
  const result = await supabase.from("students").insert([newStudent]);
  if (result.error) throw result.error;
  return result.data;
}

export async function updateStudent({ id, ...fields }) {
  const result = await supabase
    .from("students")
    .update(fields)
    .eq("id", id);
  if (result.error) throw result.error;
  return result.data;
}

export async function deleteStudent(id) {
  const result = await supabase
    .from("students")
    .delete()
    .eq("id", id);
  if (result.error) throw result.error;
  return result.data;
}