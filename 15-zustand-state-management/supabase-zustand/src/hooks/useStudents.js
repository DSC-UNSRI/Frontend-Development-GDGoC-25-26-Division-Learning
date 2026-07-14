import { useQuery } from "@tanstack/react-query";
import { fetchStudents } from "../services/studentService";
import { useFilterStore } from "../stores/useFilterStore";

export function useStudents() {
  const search = useFilterStore((state) => state.search);

  return useQuery({
    queryKey: ["students", search],
    queryFn: () => fetchStudents(search),
  });
}