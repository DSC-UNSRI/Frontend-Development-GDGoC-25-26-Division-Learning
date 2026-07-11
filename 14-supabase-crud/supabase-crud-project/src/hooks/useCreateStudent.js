import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createStudent } from "../services/studentService";

export function useCreateStudent() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createStudent,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["students"] });
    },
  });
}