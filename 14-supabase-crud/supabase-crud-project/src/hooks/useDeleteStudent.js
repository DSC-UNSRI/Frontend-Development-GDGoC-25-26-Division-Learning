import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteStudent } from "../services/studentService";

export function useDeleteStudent() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteStudent,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["students"] });
    },
  });
}