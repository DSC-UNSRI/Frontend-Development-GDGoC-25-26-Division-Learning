import { useQuery } from "@tanstack/react-query";
import { fetchStudents } from "../services/studentService";

export function useStudents() {
  return useQuery({
    queryKey: ["students"],
    queryFn: fetchStudents,
  });
}