import { z } from "zod"

export const formSchema = z.object({
  amount: z.union([z.string().min(1), z.number().min(1)]),
  address: z.string().refine((val) => (/^(0x){1}[0-9a-fA-F]{40}$/i.test(val)), {
    message: "Address is invalid",
  })
})
