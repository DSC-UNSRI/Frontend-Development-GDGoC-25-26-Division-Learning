import { z } from "zod";

export const studentSchema = z.object({
  name: z
    .string()
    .min(1, "Name is required"),
  major: z
    .string()
    .min(1, "Major is required"),
  year: z
    .coerce
    .number({ invalid_type_error: "Year must be a number" })
    .min(2000, "Year must be 2000 or later")
    .max(2100, "Year is not valid"),
});