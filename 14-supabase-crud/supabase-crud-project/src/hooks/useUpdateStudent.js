import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateStudent } from "../services/studentService";

export function useUpdateStudent() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateStudent,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["students"] });
    },
  });
}